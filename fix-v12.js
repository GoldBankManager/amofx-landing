const fs = require('fs');
let h = fs.readFileSync('C:/Users/Hacer/.openclaw/workspace/amofx-landing/build-v12.js', 'utf8');

// Fix the duplicate `sz` variable declaration
h = h.replace('const sz=fs.statSync(o).size', 'const size=fs.statSync(o).size');
h = h.replace("'v12.0: '+sz", "'v12.0: '+size");

fs.writeFileSync('C:/Users/Hacer/.openclaw/workspace/amofx-landing/build-v12.js', h, 'utf8');
console.log('Fixed duplicate sz/size');
