const fs = require('fs');
const file = 'C:/Users/win/.gemini/antigravity-ide/brain/269f0da1-0a1d-4845-8b06-ce7e017c8c67/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(file, 'utf8').split('\n');
for (const line of lines) {
  if (!line) continue;
  const obj = JSON.parse(line);
  if (obj.step_index === 688) {
    const code = obj.tool_calls[0].args.CodeContent;
    const idx = code.indexOf('BranchConsultationForm');
    const lastIdx = code.lastIndexOf('BranchConsultationForm');
    console.log(code.substring(lastIdx - 400, lastIdx + 400));
  }
}
