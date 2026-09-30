const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<main id="lockSection"';
const endTag = '<div id="toastNotification"';
const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex === -1 || endIndex === -1) {
  console.log('Error: Could not find tags.');
  process.exit(1);
}

const newHTML = `
<!-- ========================================================
   CONSTELLATION LOCKSCREEN
======================================================== -->
<main id="lockSection" class="w-full max-w-sm mx-auto my-auto relative z-20 transition-all duration-1000 ease-out">
    <div class="relative bg-slate-950/60 backdrop-blur-3xl rounded-[32px] p-8 sm:p-10 text-center border border-sky-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
        <!-- Glowing orbit -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex justify-center mb-6 relative">
            <div class="hover:scale-110 transition-transform duration-500 cursor-pointer" onclick="focusPasswordInput()">
                <div class="bg-gradient-to-br from-slate-800 to-slate-950 w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.3)] border border-sky-400/30 rotate-3 hover:rotate-0 transition-transform">
                    <span class="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">🌌</span>
                </div>
            </div>
        </div>

        <div class="space-y-1 mb-6">
            <h2 class="text-xs sm:text-sm font-bold text-sky-200 font-vietnam uppercase tracking-[0.2em]">
                Đoàn Khoa Tài Chính - Ngân Hàng
            </h2>
            <h3 class="text-[10px] font-semibold text-sky-400/80 font-vietnam uppercase tracking-[0.3em]">
                Ban Phong Trào - Tình Nguyện
            </h3>
        </div>

        <div class="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 text-sky-300 text-[10px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
            <span>✦</span> #PhongTinhwithlove <span>✦</span>
        </div>

        <h1 class="text-2xl sm:text-3xl font-bold font-vietnam text-white tracking-wide mb-8 leading-tight">
            Gặp Mặt <br/><span class="text-sky-400 font-light italic">Tân CTV 2026</span> 🚀
        </h1>

        <form onsubmit="handleAuthenticate(event)" class="text-left space-y-5">
            <div>
                <label for="inputPassword" class="block text-[10px] text-sky-400 uppercase tracking-[0.2em] font-semibold mb-3 pl-2 text-center">
                    Nhập Ngày Sinh Để Khởi Động 💫
                </label>
                <input type="text" id="inputPassword" placeholder="DD / MM / YYYY" autocomplete="off"
                    class="w-full bg-slate-900/50 border border-sky-500/30 rounded-2xl px-5 py-4 text-white placeholder-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 transition-all font-bold text-center text-lg tracking-[0.2em] shadow-inner backdrop-blur-md" />
            </div>

            <div id="errorNotification" class="hidden p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-semibold flex items-center gap-3 backdrop-blur-sm">
                <span class="text-lg">⚠️</span>
                <span>Không tìm thấy thông tin trong hệ thống không gian!</span>
            </div>

            <button type="submit" id="btnSubmitUnlock" class="w-full group relative inline-flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] border border-sky-500/40 overflow-hidden cursor-pointer hover:-translate-y-1">
                <span class="tracking-[0.2em] uppercase text-xs z-10">Mở Mã Không Gian</span>
                <span class="z-10 group-hover:translate-x-1 transition-transform text-lg">✨</span>
            </button>
        </form>
    </div>
</main>

<main id="cardSection" class="w-full max-w-3xl mx-auto my-4 sm:my-8 hidden opacity-0 translate-y-10 transition-all duration-1000 ease-out z-20">
    <!-- Action Toolbar -->
    <div class="flex flex-wrap items-center justify-between gap-3 mb-6 no-print px-2">
        <button onclick="relockEnvelope()" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-sky-200 text-xs font-bold backdrop-blur-md border border-sky-500/30 transition-all cursor-pointer shadow-sm tracking-wide">
            <span>👈</span> Đổi người khác
        </button>
        <div class="flex items-center gap-3">
            <button onclick="exportHighResInvitation()" class="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-sky-600/80 hover:bg-sky-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] border border-sky-400/50 backdrop-blur-md transition-all cursor-pointer tracking-wide">
                <span>📸</span> Tải ảnh HD
            </button>
            <button onclick="window.print()" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-sky-200 text-xs font-bold backdrop-blur-md border border-sky-500/30 transition-all cursor-pointer shadow-sm tracking-wide">
                <span>🖨️</span> In
            </button>
        </div>
    </div>

    <!-- Card Container -->
    <div id="printContainer" class="bg-slate-950/80 backdrop-blur-3xl rounded-[40px] p-2 sm:p-4 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden border border-sky-500/20">
        
        <div class="border border-sky-500/30 rounded-[32px] p-6 sm:p-10 lg:p-12 bg-slate-900/40 relative z-10 shadow-inner">
            <!-- Header -->
            <header class="text-center mb-10">
                <h2 class="text-[10px] sm:text-xs font-bold text-sky-400 uppercase tracking-[0.2em] font-vietnam">
                    Đoàn Khoa Tài Chính - Ngân Hàng
                </h2>
                <h3 class="text-xs sm:text-sm font-semibold text-sky-200 uppercase tracking-[0.1em] mt-2 font-vietnam">
                    Ban Phong Trào - Tình Nguyện
                </h3>
                
                <div class="flex items-center justify-center gap-4 my-6">
                    <div class="h-[1px] w-12 bg-gradient-to-r from-transparent to-sky-400/50"></div>
                    <span class="text-xl text-sky-300 filter drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">✦</span>
                    <div class="h-[1px] w-12 bg-gradient-to-l from-transparent to-sky-400/50"></div>
                </div>
                
                <div class="inline-flex items-center justify-center px-6 py-1.5 rounded-full bg-slate-950 border border-sky-500/30 text-sky-300 text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    Thư Mời Tham Dự
                </div>
                
                <h1 class="text-2xl sm:text-4xl font-bold font-vietnam text-white leading-tight tracking-wide">
                    Buổi Gặp Mặt<br/><span class="text-sky-400 text-3xl sm:text-5xl font-light italic">Tân Cộng Tác Viên 2026</span>
                </h1>
                
                <div class="mt-6">
                    <span class="inline-block font-vietnam font-semibold text-[10px] sm:text-xs text-sky-300 tracking-[0.2em] px-5 py-2 rounded-full bg-slate-900/80 border border-sky-500/30 shadow-[0_0_10px_rgba(56,189,248,0.1)] uppercase">
                        ✨ #PhongTinhwithlove ✨
                    </span>
                </div>
            </header>

            <!-- Guest Plaque -->
            <div class="bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-sky-400/20 rounded-[24px] p-8 mb-10 text-center shadow-lg relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-sky-400 to-slate-800"></div>
                <p class="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-bold mb-4 font-vietnam">
                    Trân trọng kính mời Anh/Chị
                </p>
                <div id="cardGuestName" class="text-3xl sm:text-4xl font-bold text-white mb-6 capitalize tracking-wide filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                    [HỌ VÀ TÊN]
                </div>
                <div class="flex justify-center">
                    <span id="cardBadge" class="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-sky-950 bg-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                        <!-- Badge injected by JS -->
                    </span>
                </div>
            </div>

            <!-- Content Letter -->
            <div class="max-w-3xl mx-auto text-sm text-sky-100/80 leading-relaxed text-justify mb-10 space-y-4 font-normal px-2 tracking-wide">
                <p><strong>Kính chào Anh/Chị,</strong> 👋</p>
                <p>
                    Lại một mùa tuyển chọn Cộng tác viên nữa qua đi, đại gia đình Ban Phong trào - Tình nguyện hân hoan chào đón những gương mặt mới đầy nhiệt huyết và tài năng, những "ngôi sao" sẽ cùng tỏa sáng trên bầu trời Phong Tình.
                </p>
                <p>
                    Nhân khoảnh khắc đặc biệt này, chúng em trân trọng kính mời Anh/Chị – những tiền bối đã đặt nền móng vững chắc – cùng về chung vui trong <strong>Buổi Gặp Mặt Tân CTV 2026</strong>. Sự hiện diện của Anh/Chị là niềm vinh hạnh và là nguồn cảm hứng to lớn cho các thế hệ tiếp nối. 🌌
                </p>
            </div>

            <!-- Event Details Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div class="bg-slate-900/60 p-5 rounded-[20px] border border-sky-500/20 shadow-inner flex flex-col items-center text-center gap-2 hover:bg-slate-800/80 transition-colors">
                    <div class="text-2xl mb-1 filter drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]">⏱️</div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400/80 block mb-1">Thời gian</span>
                        <span class="font-bold text-lg text-white block tracking-widest">19:00</span>
                        <span class="text-[10px] text-sky-300 block mt-1 tracking-wide">Thứ Bảy, 03/10/2026</span>
                    </div>
                </div>
                <div class="bg-slate-900/60 p-5 rounded-[20px] border border-sky-500/20 shadow-inner flex flex-col items-center text-center gap-2 hover:bg-slate-800/80 transition-colors">
                    <div class="text-2xl mb-1 filter drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]">📍</div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400/80 block mb-1">Địa điểm</span>
                        <span class="font-bold text-lg text-white block leading-tight tracking-wide">Nhà hàng<br/>Hương Biển</span>
                        <span class="text-[10px] text-sky-300 block mt-1 tracking-wide">Số 10 Đ. Số 7, Thủ Đức</span>
                    </div>
                </div>
                <div class="bg-slate-900/60 p-5 rounded-[20px] border border-sky-500/20 shadow-inner flex flex-col items-center text-center gap-2 hover:bg-slate-800/80 transition-colors">
                    <div class="text-2xl mb-1 filter drop-shadow-[0_0_5px_rgba(56,189,248,0.5)]">👕</div>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400/80 block mb-1">Trang phục</span>
                        <span class="font-bold text-lg text-white block tracking-wide">Áo Đoàn Khoa</span>
                        <span class="text-[10px] text-sky-300 block mt-1 tracking-wide">Lịch sự, trang nhã</span>
                    </div>
                </div>
            </div>

            <!-- Closing -->
            <div class="text-center pt-8 border-t border-sky-500/20">
                <p class="font-bold text-sm sm:text-base text-sky-200 mb-2 tracking-wide">
                    Hân hạnh được đón tiếp Anh/Chị! 💫
                </p>
                <p class="text-[9px] font-bold text-sky-500/80 tracking-[0.3em] font-vietnam uppercase">
                    Ban Phong trào - Tình nguyện
                </p>
            </div>
        </div>
    </div>

    <!-- Utilities Box -->
    <div class="mt-6 space-y-4 no-print px-1">
        <button id="rsvpButton" onclick="confirmRsvpParticipation()"
            class="w-full bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(56,189,248,0.2)] border border-sky-500/40 transform active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer">
            <span class="text-xl">🚀</span>
            <span id="rsvpButtonLabel" class="tracking-[0.2em] uppercase text-xs sm:text-sm">Xác Nhận Tham Dự Chuyến Bay!</span>
        </button>

        <button onclick="syncWithGoogleCalendar()"
            class="w-full bg-slate-900/60 hover:bg-slate-800 text-sky-200/80 font-semibold py-3.5 px-6 rounded-2xl backdrop-blur-md border border-sky-500/30 shadow-lg transform active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer tracking-wide text-xs sm:text-sm">
            <span class="text-lg">🗓️</span>
            <span>Lưu Lịch Đồng Bộ: 19:00 - 03/10/2026</span>
        </button>

        <div class="text-center text-sky-400/60 text-[10px] font-bold tracking-[0.2em] uppercase mt-8 pb-10">
            ✦ Trạm Vũ Trụ Phong Tình ✦
            <button onclick="launchRoyalCelebration()"
                class="ml-2 text-sky-300 hover:text-white underline cursor-pointer">Bắn pháo hoa 🎉</button>
        </div>
    </div>
</main>
`;

html = html.slice(0, startIndex) + newHTML + html.slice(endIndex);

// Also need to fix the JS Badge strings!
html = html.replace(/\`<span>🌟<\/span><span>Bậc Tôn Đáng Yêu K23<\/span>\`/g, "\`<span>✦</span><span>Hành Tinh Tiền Bối K23</span>\`");
html = html.replace(/\`<span>🍓<\/span><span>Tiền Bối Dễ Thương K24<\/span>\`/g, "\`<span>💫</span><span>Hành Tinh Tiền Bối K24</span>\`");

// Also fix the toast string
html = html.replace(/🥰/g, "🚀");

fs.writeFileSync('index.html', html);
console.log('Synchronized to Space Constellation Theme!');
