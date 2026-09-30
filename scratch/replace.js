const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const startTag = '<main id="lockSection"';
const endTag = '<div id="toastNotification"';
const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Error: Could not find tags. Start: ' + startIndex + ', End: ' + endIndex);
  process.exit(1);
}

const newHTML = fs.readFileSync('scratch/new-html.txt', 'utf8');
html = html.slice(0, startIndex) + newHTML + html.slice(endIndex);
fs.writeFileSync('index.html', html);
console.log('HTML Replaced Successfully!');
