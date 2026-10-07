"use client";

/* ================================================================
   components/MarkdownContent.tsx — Professional Markdown & Table Renderer
   Transforms Markdown strings into fully styled, accessible React HTML elements:
   - Headings (H1, H2, H3, H4) with hierarchy & typography
   - Data Tables with responsive overflow, alternating fills & headers
   - Bullet lists, ordered lists & checklists
   - Blockquotes & note callouts
   - Links, images & inline bold/italic
   ================================================================ */

import React, { ReactNode } from "react";
import Link from "next/link";
import { Check, CheckSquare, Square } from "lucide-react";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

// Helper to render inline markdown (bold, italic, links, code, images, underline)
function renderInline(text: string): ReactNode[] {
  // Regex to split by links, bold, italic, code, underline
  const parts: ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    // 1. Image: ![alt](url)
    const imgMatch = remaining.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
    if (imgMatch) {
      parts.push(
        <span key={`img-${keyIdx++}`} className="block my-4">
          <img
            src={imgMatch[2]}
            alt={imgMatch[1]}
            className="rounded-2xl max-w-full h-auto object-cover border border-slate-200 shadow-sm"
          />
          {imgMatch[1] && (
            <span className="block text-center text-xs text-slate-500 mt-1 italic">
              {imgMatch[1]}
            </span>
          )}
        </span>
      );
      remaining = remaining.substring(imgMatch[0].length);
      continue;
    }

    // 2. Link: [text](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const href = linkMatch[2];
      const isExternal = href.startsWith("http") || href.startsWith("//");
      parts.push(
        isExternal ? (
          <a
            key={`a-${keyIdx++}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-semibold underline hover:text-emerald-800 transition"
          >
            {renderInline(linkMatch[1])}
          </a>
        ) : (
          <Link
            key={`link-${keyIdx++}`}
            href={href}
            className="text-emerald-700 font-semibold underline hover:text-emerald-800 transition"
          >
            {renderInline(linkMatch[1])}
          </Link>
        )
      );
      remaining = remaining.substring(linkMatch[0].length);
      continue;
    }

    // 3. Bold: **text**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      parts.push(
        <strong key={`b-${keyIdx++}`} className="font-bold text-slate-900">
          {renderInline(boldMatch[1])}
        </strong>
      );
      remaining = remaining.substring(boldMatch[0].length);
      continue;
    }

    // 4. Italic: *text* or _text_
    const italicMatch = remaining.match(/^\*([^*]+)\*/) || remaining.match(/^_([^_]+)_/);
    if (italicMatch) {
      parts.push(
        <em key={`em-${keyIdx++}`} className="italic text-slate-800">
          {renderInline(italicMatch[1])}
        </em>
      );
      remaining = remaining.substring(italicMatch[0].length);
      continue;
    }

    // 5. Underline: <u>text</u>
    const uMatch = remaining.match(/^<u>(.*?)<\/u>/i);
    if (uMatch) {
      parts.push(
        <span key={`u-${keyIdx++}`} className="underline underline-offset-2">
          {renderInline(uMatch[1])}
        </span>
      );
      remaining = remaining.substring(uMatch[0].length);
      continue;
    }

    // 6. Strikethrough: ~~text~~
    const sMatch = remaining.match(/^~~(.*?)~~/);
    if (sMatch) {
      parts.push(
        <del key={`del-${keyIdx++}`} className="line-through text-slate-400">
          {renderInline(sMatch[1])}
        </del>
      );
      remaining = remaining.substring(sMatch[0].length);
      continue;
    }

    // 7. Inline Code: `code`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      parts.push(
        <code
          key={`code-${keyIdx++}`}
          className="px-1.5 py-0.5 rounded bg-slate-100 font-mono text-xs text-indigo-700 border border-slate-200"
        >
          {codeMatch[1]}
        </code>
      );
      remaining = remaining.substring(codeMatch[0].length);
      continue;
    }

    // Regular plain text character up to next special syntax
    const nextSpecial = remaining.search(/(\!\[|\[|\*\*|\*|_|`|<u>|~~)/);
    if (nextSpecial === -1) {
      parts.push(remaining);
      break;
    } else if (nextSpecial === 0) {
      // In case regex failed to match full tag, consume one char
      parts.push(remaining[0]);
      remaining = remaining.substring(1);
    } else {
      parts.push(remaining.substring(0, nextSpecial));
      remaining = remaining.substring(nextSpecial);
    }
  }

  return parts;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  if (!content) return null;

  // Split lines
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const elements: ReactNode[] = [];

  let i = 0;
  let elementKey = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // 1. Empty lines
    if (!line) {
      i++;
      continue;
    }

    // 2. Headings
    if (line.startsWith("# ")) {
      elements.push(
        <h1
          key={`h1-${elementKey++}`}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-8 mb-4 border-b border-slate-200 pb-3"
        >
          {renderInline(line.substring(2))}
        </h1>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${elementKey++}`}
          className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug mt-8 mb-3"
        >
          {renderInline(line.substring(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${elementKey++}`}
          className="text-lg sm:text-xl font-bold text-slate-800 leading-snug mt-6 mb-2.5"
        >
          {renderInline(line.substring(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={`h4-${elementKey++}`}
          className="text-base sm:text-lg font-bold text-slate-800 mt-5 mb-2"
        >
          {renderInline(line.substring(5))}
        </h4>
      );
      i++;
      continue;
    }

    // 3. Horizontal Rule
    if (line === "---" || line === "***" || line === "___") {
      elements.push(
        <hr key={`hr-${elementKey++}`} className="my-8 border-slate-200" />
      );
      i++;
      continue;
    }

    // 4. Tables (lines containing '|')
    if (line.startsWith("|") && line.endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        // Parse header and rows
        const parseRow = (r: string) =>
          r
            .slice(1, -1)
            .split("|")
            .map((c) => c.trim());

        const headerCells = parseRow(tableLines[0]);
        const isDivider = (r: string) => /^\|(\s*:?-+:?\s*\|)+$/.test(r);
        const dataRows = tableLines.slice(isDivider(tableLines[1]) ? 2 : 1);

        elements.push(
          <div
            key={`table-wrap-${elementKey++}`}
            className="my-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs"
          >
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200">
                <tr>
                  {headerCells.map((cell, idx) => (
                    <th key={`th-${idx}`} className="py-3 px-4 font-bold whitespace-nowrap">
                      {renderInline(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {dataRows.map((rowStr, rIdx) => {
                  const cells = parseRow(rowStr);
                  return (
                    <tr
                      key={`tr-${rIdx}`}
                      className={rIdx % 2 === 1 ? "bg-slate-50/60 hover:bg-slate-100/50" : "hover:bg-slate-50/50"}
                    >
                      {cells.map((cell, cIdx) => (
                        <td key={`td-${cIdx}`} className="py-3 px-4 text-slate-700 leading-relaxed">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // 5. Blockquote / Note Callout
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      elements.push(
        <div
          key={`quote-${elementKey++}`}
          className="my-5 p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border-l-4 border-emerald-500 text-slate-800 text-sm leading-relaxed"
        >
          {quoteLines.map((q, qIdx) => (
            <p key={`qp-${qIdx}`} className={qIdx > 0 ? "mt-2" : ""}>
              {renderInline(q)}
            </p>
          ))}
        </div>
      );
      continue;
    }

    // 6. Checklists
    if (line.startsWith("- [ ] ") || line.startsWith("- [x] ") || line.startsWith("* [ ] ") || line.startsWith("* [x] ")) {
      const checkItems: { checked: boolean; text: string }[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- [ ] ") ||
          lines[i].trim().startsWith("- [x] ") ||
          lines[i].trim().startsWith("* [ ] ") ||
          lines[i].trim().startsWith("* [x] "))
      ) {
        const itemLine = lines[i].trim();
        const checked = itemLine.includes("[x]");
        const text = itemLine.replace(/^[-*]\s*\[[ x]\]\s*/, "");
        checkItems.push({ checked, text });
        i++;
      }

      elements.push(
        <ul key={`checklist-${elementKey++}`} className="my-4 space-y-2.5 list-none pl-0">
          {checkItems.map((ci, cIdx) => (
            <li key={`ci-${cIdx}`} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                  ci.checked
                    ? "bg-emerald-600 border-emerald-600 text-white"
                    : "bg-white border-slate-300 text-emerald-600"
                }`}
              >
                <Check className="w-3 h-3" />
              </span>
              <span>{renderInline(ci.text)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 7. Unordered Bullet Lists
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* ")) &&
        !lines[i].trim().startsWith("- [")
      ) {
        listItems.push(lines[i].trim().substring(2));
        i++;
      }

      elements.push(
        <ul key={`ul-${elementKey++}`} className="my-4 space-y-2 list-disc pl-5 text-xs sm:text-sm text-slate-700">
          {listItems.map((li, lIdx) => (
            <li key={`li-${lIdx}`} className="leading-relaxed">
              {renderInline(li)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // 8. Ordered Lists (1. 2. 3.)
    if (/^\d+\.\s/.test(line)) {
      const numItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        numItems.push(lines[i].trim().replace(/^\d+\.\s*/, ""));
        i++;
      }

      elements.push(
        <ol key={`ol-${elementKey++}`} className="my-4 space-y-2 list-decimal pl-5 text-xs sm:text-sm text-slate-700">
          {numItems.map((ni, nIdx) => (
            <li key={`ni-${nIdx}`} className="leading-relaxed">
              {renderInline(ni)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // 9. Standard Paragraph
    elements.push(
      <p key={`p-${elementKey++}`} className="my-3 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <div className={`space-y-1 ${className}`}>{elements}</div>;
}
