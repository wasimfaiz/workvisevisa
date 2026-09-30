/* ================================================================
   lib/mongodb.ts
   MongoDB connection singleton with auto SRV DNS resolution fallback.
   Fixes "querySrv ECONNREFUSED" on Windows & ISP DNS setups.
   ================================================================ */

import dns from "node:dns";
import { promises as dnsPromises } from "node:dns";
import mongoose from "mongoose";

// Set reliable public DNS servers for Node DNS queries
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1", "1.0.0.1"]);
} catch {
  // Ignore in restricted sandboxes
}

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

// Augment NodeJS global to cache the connection across hot reloads
declare global {
  // eslint-disable-next-line no-var
  var _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
    resolvedUri: string | null;
  };
}

const globalWithMongoose = global as typeof globalThis & {
  _mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
    resolvedUri: string | null;
  };
};

if (!globalWithMongoose._mongooseCache) {
  globalWithMongoose._mongooseCache = { conn: null, promise: null, resolvedUri: null };
}

const cache = globalWithMongoose._mongooseCache;

/**
 * Resolves mongodb+srv:// to direct replica set seed URLs using public DNS (8.8.8.8)
 * to bypass Windows/ISP local DNS SRV limitations.
 */
async function getEffectiveMongoUri(rawUri: string): Promise<string> {
  if (cache.resolvedUri) return cache.resolvedUri;
  if (!rawUri.startsWith("mongodb+srv://")) {
    cache.resolvedUri = rawUri;
    return cache.resolvedUri;
  }

  try {
    try {
      dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
    } catch {}

    const match = rawUri.match(
      /^mongodb\+srv:\/\/([^:]+):([^@]+)@([^/?]+)(?:\/([^?]*))?(?:\?(.*))?$/
    );
    if (!match) {
      cache.resolvedUri = rawUri;
      return rawUri;
    }

    const [, user, pass, host, db = "", query = ""] = match;
    const srvRecords = await dnsPromises.resolveSrv(`_mongodb._tcp.${host}`);
    const txtRecords = await dnsPromises.resolveTxt(host).catch(() => []);

    if (!srvRecords || srvRecords.length === 0) {
      cache.resolvedUri = rawUri;
      return rawUri;
    }

    const hostList = srvRecords.map((r) => `${r.name}:${r.port}`).join(",");
    
    const params = new URLSearchParams(query);
    if (txtRecords.length > 0 && txtRecords[0].length > 0) {
      const txtParams = new URLSearchParams(txtRecords[0].join(""));
      txtParams.forEach((val, key) => {
        if (!params.has(key)) {
          params.set(key, val);
        }
      });
    }
    if (!params.has("ssl")) params.set("ssl", "true");
    if (!params.has("authSource")) params.set("authSource", "admin");

    const database = db || "workwisevisa";
    const directUri = `mongodb://${encodeURIComponent(user)}:${encodeURIComponent(pass)}@${hostList}/${database}?${params.toString()}`;

    cache.resolvedUri = directUri;
    return directUri;
  } catch (err) {
    console.warn("MongoDB SRV DNS auto-resolution fallback skipped:", err);
    cache.resolvedUri = rawUri;
    return rawUri;
  }
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cache.conn && mongoose.connection.readyState === 1) {
    return cache.conn;
  }

  if (!cache.promise) {
    cache.promise = (async () => {
      const uri = await getEffectiveMongoUri(MONGODB_URI);
      return mongoose.connect(uri, {
        bufferCommands: false,
      });
    })()
      .then((m) => m)
      .catch((err) => {
        cache.promise = null;
        cache.conn = null;
        throw err;
      });
  }

  try {
    cache.conn = await cache.promise;
  } catch (err) {
    cache.promise = null;
    cache.conn = null;
    throw err;
  }

  return cache.conn;
}
