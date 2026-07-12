const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/components');

fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/<div className="text-sm font-body tracking-\[0\.3em\] text-(?:gold|black\/40) uppercase mb-\d+.*?">Section \d+<\/div>\s*/g, '');
  fs.writeFileSync(p, c);
});
console.log('Done!');
