const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Widen lockSection on PC but keep it centered
html = html.replace(
  'max-w-sm mx-auto my-auto relative z-20',
  'max-w-sm sm:max-w-md lg:max-w-lg mx-auto my-auto relative z-20'
);

// 2. Increase padding on PC for lockSection
html = html.replace(
  'rounded-[40px] p-8 sm:p-10 text-center',
  'rounded-[40px] p-8 sm:p-12 lg:p-16 text-center'
);

// 3. Keep form constrained on PC so inputs aren't too long
html = html.replace(
  '<form onsubmit="handleAuthenticate(event)" class="text-left space-y-5">',
  '<form onsubmit="handleAuthenticate(event)" class="text-left space-y-5 sm:space-y-6 max-w-sm mx-auto">'
);

// 4. Adjust the title for PC
html = html.replace(
  'text-4xl sm:text-5xl font-extrabold font-vietnam text-sky-950',
  'text-4xl sm:text-5xl lg:text-6xl font-extrabold font-vietnam text-sky-950'
);

// 5. In cardSection, make the printContainer more majestic on PC
html = html.replace(
  'shadow-[0_20px_60px_rgba(30,58,138,0.2)] relative overflow-hidden border-4 border-white',
  'shadow-[0_20px_60px_rgba(30,58,138,0.2)] lg:shadow-[0_40px_100px_rgba(30,58,138,0.25)] relative overflow-hidden border-4 border-white lg:hover:scale-[1.01] transition-transform duration-500'
);

// 6. Add some extra padding to cardSection on PC
html = html.replace(
  'rounded-[36px] p-6 sm:p-10 lg:p-12 bg-white',
  'rounded-[36px] p-6 sm:p-10 lg:p-16 bg-white'
);

// 7. Increase GuestName size on PC
html = html.replace(
  'text-4xl sm:text-5xl font-extrabold text-sky-900',
  'text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-900'
);

// 8. Increase the Event Details Cards on PC
html = html.replace(
  'bg-sky-50/50 p-5 rounded-[28px]',
  'bg-sky-50/50 p-5 sm:p-6 lg:p-8 rounded-[28px]'
);
html = html.replace(
  'bg-pink-50/50 p-5 rounded-[28px]',
  'bg-pink-50/50 p-5 sm:p-6 lg:p-8 rounded-[28px]'
);
html = html.replace(
  'bg-sky-50/50 p-5 rounded-[28px]',
  'bg-sky-50/50 p-5 sm:p-6 lg:p-8 rounded-[28px]'
);

fs.writeFileSync('index.html', html);
console.log('PC layout enhanced');
