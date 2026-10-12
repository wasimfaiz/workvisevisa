const fs = require('fs');
const readline = require('readline');

const file = 'C:/Users/win/.gemini/antigravity-ide/brain/269f0da1-0a1d-4845-8b06-ce7e017c8c67/.system_generated/logs/transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(file) });

rl.on('line', line => {
  const obj = JSON.parse(line);
  if (obj.step_index === 1314 && obj.tool_calls) {
    obj.tool_calls.forEach(tc => {
      const target = tc.args?.TargetFile || tc.parameters?.TargetFile;
      const code = tc.args?.CodeContent || tc.parameters?.CodeContent;
      console.log('Step 1314 wrote:', target, 'Length:', code ? code.length : 0);
      if (target && target.includes('siwan') && code) {
        fs.writeFileSync('app/locations/siwan/page.tsx.bak', code, 'utf8');
        console.log('Saved siwan backup!');
      }
      if (target && target.includes('gopalganj') && code) {
        fs.writeFileSync('app/locations/gopalganj/page.tsx.bak', code, 'utf8');
        console.log('Saved gopalganj backup!');
      }
    });
  }
});
