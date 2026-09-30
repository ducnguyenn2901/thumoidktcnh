const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Lock section background
html = html.replace('bg-white/20 backdrop-blur-2xl', 'bg-white/90 backdrop-blur-3xl');

// Input field in lock section
html = html.replace('bg-white/50 border-2 border-white/60', 'bg-white border-2 border-sky-200');
html = html.replace('placeholder-sky-400/70', 'placeholder-sky-400');

// Toolbar buttons
html = html.replace(/bg-white\/30 hover:bg-white\/50 text-sky-900/g, 'bg-white/90 hover:bg-white text-sky-950');

// Sound button
html = html.replace('bg-royal-950/80 hover:bg-royal-900 text-sky-200', 'bg-white/90 hover:bg-white text-sky-900 shadow-md border-sky-200');

// Utilities box
html = html.replace('bg-white/20 hover:bg-white/30 text-sky-100', 'bg-white/90 hover:bg-white text-sky-950');
html = html.replace('border-2 border-white/30', 'border-2 border-sky-200');

// Bottom text
html = html.replace('text-sky-200 text-[11px] sm:text-xs font-bold tracking-wide mt-6 opacity-90 pb-10', 'text-sky-900 text-[11px] sm:text-xs font-bold tracking-wide mt-6 pb-10 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full inline-block border border-white');
html = html.replace('ml-2 text-white hover:text-sky-100', 'ml-2 text-sky-600 hover:text-sky-800');

// Toast notification
html = html.replace('bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-white', 'bg-white/95 backdrop-blur-xl border-2 border-sky-200 px-6 py-4 rounded-2xl shadow-xl text-sky-950');

fs.writeFileSync('index.html', html);
console.log('Readability improvements applied!');
