const fs = require('fs');
const readline = require('readline');

const file = 'C:/Users/win/.gemini/antigravity-ide/brain/269f0da1-0a1d-4845-8b06-ce7e017c8c67/.system_generated/logs/transcript_full.jsonl';
const rl = readline.createInterface({ input: fs.createReadStream(file) });

let siwanRestored = false;
let gopalganjRestored = false;

rl.on('line', line => {
  const obj = JSON.parse(line);
  if (obj.step_index === 1127 && obj.tool_calls) {
    const code = obj.tool_calls[0].args?.CodeContent || obj.tool_calls[0].parameters?.CodeContent;
    if (code) {
      fs.writeFileSync('app/locations/siwan/page.tsx', code, 'utf8');
      siwanRestored = true;
      console.log('Restored Siwan from step 1127! Bytes:', code.length);
    }
  }
  if (obj.step_index === 1195 && obj.tool_calls) {
    const code = obj.tool_calls[0].args?.CodeContent || obj.tool_calls[0].parameters?.CodeContent;
    if (code) {
      fs.writeFileSync('app/locations/gopalganj/page.tsx', code, 'utf8');
      gopalganjRestored = true;
      console.log('Restored Gopalganj from step 1195! Bytes:', code.length);
    }
  }
});

rl.on('close', () => {
  console.log('Done restoring Siwan & Gopalganj! Siwan:', siwanRestored, 'Gopalganj:', gopalganjRestored);
});
