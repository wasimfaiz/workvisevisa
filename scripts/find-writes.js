const fs = require('fs');
const readline = require('readline');

const file = 'C:/Users/win/.gemini/antigravity-ide/brain/269f0da1-0a1d-4845-8b06-ce7e017c8c67/.system_generated/logs/transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(file) });

rl.on('line', line => {
  if (line.includes('siwan') || line.includes('gopalganj')) {
    const obj = JSON.parse(line);
    if (obj.tool_calls) {
      obj.tool_calls.forEach(tc => {
        const target = tc.args?.TargetFile || tc.parameters?.TargetFile;
        if (target && (target.includes('siwan') || target.includes('gopalganj'))) {
          const code = tc.args?.CodeContent || tc.parameters?.CodeContent;
          console.log(`Step ${obj.step_index}: ${tc.name} -> ${target} (len: ${code ? code.length : 'no code'})`);
        }
      });
    }
  }
});
