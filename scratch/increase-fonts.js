const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Lock Section
html = html.replace('text-sm sm:text-base font-extrabold text-sky-900', 'text-base sm:text-lg font-extrabold text-sky-900');
html = html.replace('text-xs font-bold text-sky-700/80', 'text-sm sm:text-base font-bold text-sky-700/80');
html = html.replace('text-xs font-bold tracking-wide mb-6 shadow-sm', 'text-sm font-bold tracking-wide mb-6 shadow-sm px-5 py-2'); // hashtag
html = html.replace('text-2xl sm:text-3xl font-extrabold font-vietnam text-sky-950', 'text-3xl sm:text-4xl font-extrabold font-vietnam text-sky-950');
html = html.replace('text-[11px] text-sky-800 tracking-wide', 'text-sm text-sky-800 tracking-wide');
html = html.replace('<span class="tracking-wide text-sm z-10">Mở Thư Mời Nè</span>', '<span class="tracking-wide text-base sm:text-lg z-10">Mở Thư Mời Nè</span>');
html = html.replace('text-xs font-bold flex items-center', 'text-sm font-bold flex items-center');

// Card Section Header
html = html.replace('text-[10px] sm:text-xs font-extrabold text-sky-400 tracking-wide font-vietnam', 'text-xs sm:text-sm font-extrabold text-sky-400 tracking-wide font-vietnam');
html = html.replace('text-xs sm:text-sm font-bold text-sky-900 mt-1 font-vietnam', 'text-sm sm:text-base font-bold text-sky-900 mt-1 font-vietnam');
html = html.replace('text-xs font-extrabold tracking-wide mb-4 shadow-inner', 'text-sm font-extrabold tracking-wide mb-4 shadow-inner');
html = html.replace('text-2xl sm:text-4xl font-extrabold font-vietnam text-sky-950', 'text-3xl sm:text-5xl font-extrabold font-vietnam text-sky-950');

// Guest Plaque
html = html.replace('text-xs tracking-wide text-sky-500 font-extrabold mb-4 font-vietnam', 'text-sm tracking-wide text-sky-500 font-extrabold mb-4 font-vietnam');
html = html.replace('text-3xl sm:text-4xl font-extrabold', 'text-4xl sm:text-5xl font-extrabold');

// Content Letter
html = html.replace('text-sm text-slate-600', 'text-base text-slate-600');

// Event Details Cards
html = html.replace(/text-\[10px\] font-extrabold tracking-wide/g, 'text-xs font-extrabold tracking-wide');
html = html.replace(/text-\[11px\] text-sky-600 block mt-1/g, 'text-xs text-sky-600 block mt-1');
html = html.replace(/text-\[11px\] text-pink-600 block mt-1/g, 'text-xs text-pink-600 block mt-1');

// Closing
html = html.replace('text-[11px] font-bold text-sky-500 tracking-wide mt-2 font-vietnam', 'text-sm font-bold text-sky-500 tracking-wide mt-2 font-vietnam');

// Utilities Box
html = html.replace('<span id="rsvpButtonLabel" class="tracking-wide text-xs sm:text-sm">Xác Nhận Có Mặt Nè!</span>', '<span id="rsvpButtonLabel" class="tracking-wide text-sm sm:text-base">Xác Nhận Có Mặt Nè!</span>');
html = html.replace('<span class="tracking-wide text-xs sm:text-sm">Lưu Lịch: 19h00 Ngày 03/10/2026</span>', '<span class="tracking-wide text-sm sm:text-base">Lưu Lịch: 19h00 Ngày 03/10/2026</span>');
html = html.replace('text-[11px] sm:text-xs font-bold tracking-wide mt-6 pb-2', 'text-sm font-bold tracking-wide mt-6 pb-2');

fs.writeFileSync('index.html', html);
console.log('Font sizes increased');
