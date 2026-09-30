const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /} else {\s*badgeElement\.className = "vip-badge-k24[^}]+}/;
html = html.replace(regex, '');

fs.writeFileSync('index.html', html);
console.log('Fixed syntax error');
