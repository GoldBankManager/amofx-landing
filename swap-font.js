// Swap font: Playfair Display → Cormorant Garamond (more serious, luxury banking feel)
const fs = require('fs');
const input = 'C:/Users/Hacer/.openclaw/workspace/amofx-landing/index.html';
let h = fs.readFileSync(input, 'utf8');

h = h.replace(
  'Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700',
  'Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700'
);
h = h.replace(/"Playfair Display",serif/g, '"Cormorant Garamond",serif');

fs.writeFileSync(input, h, 'utf8');
const s = fs.statSync(input).size;
console.log('Font swapped to Cormorant Garamond. Size: ' + s + ' bytes');
console.log(h.includes('Cormorant') ? 'Font: OK' : 'Font: XX');
console.log(h.includes('Playfair') ? 'Old font still present' : 'Old font completely removed');
