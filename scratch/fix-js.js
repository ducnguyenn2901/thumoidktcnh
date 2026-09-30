const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /const badgeElement = document\.getElementById\('cardBadge'\);[\s\S]*?\}/;
const replaceWith = `const badgeElement = document.getElementById('cardBadge');
                    if (matchedGuest.batch === "K23") {
                        badgeElement.className = "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-sky-900 bg-sky-200 shadow-md border-2 border-sky-300";
                        badgeElement.innerHTML = \`<span>🌟</span><span>Bậc Tôn Đáng Yêu K23</span>\`;
                    } else {
                        badgeElement.className = "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-400 shadow-md border-2 border-sky-300";
                        badgeElement.innerHTML = \`<span>🍓</span><span>Tiền Bối Dễ Thương K24</span>\`;
                    }`;

html = html.replace(regex, replaceWith);

// Also let's fix the RSVP button code since we don't have the old emerald classes anymore!
html = html.replace(/rsvpBtn\.classList\.replace\('from-emerald-800', 'from-emerald-600'\);/, '');
html = html.replace(/rsvpBtn\.classList\.replace\('to-teal-900', 'to-teal-700'\);/, '');
// the textContent is fine.

fs.writeFileSync('index.html', html);
console.log('JS Replaced');
