const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The best way is to completely replace the script content.
// Since the script block might be mangled, let's just find where `function handleAuthenticate(event)` starts
// and replace the entire function.

const startStr = '            function handleAuthenticate(event) {';
const endStr = '            function relockEnvelope() {';
const startIndex = html.indexOf(startStr);
const endIndex = html.indexOf(endStr);

if (startIndex === -1 || endIndex === -1) {
  console.log('Error: Could not find handleAuthenticate function bounds.');
  process.exit(1);
}

const newFunction = `            function handleAuthenticate(event) {
                if (event) event.preventDefault();

                const input = document.getElementById('inputPassword');
                const errorBox = document.getElementById('errorNotification');
                const lockSection = document.getElementById('lockSection');
                const cardSection = document.getElementById('cardSection');
                const cleanedQuery = extractDigits(input.value || '');

                const matchedGuest = GUEST_MEMBERS_DIRECTORY.find(m => extractDigits(m.dob) === cleanedQuery);

                if (matchedGuest) {
                    currentGuest = matchedGuest;
                    errorBox.classList.add('hidden');
                    playCelebrationFanfare(true);
                    launchRoyalCelebration();

                    document.getElementById('cardGuestName').textContent = matchedGuest.name;

                    const badgeElement = document.getElementById('cardBadge');
                    if (matchedGuest.batch === "K23") {
                        badgeElement.className = "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-sky-900 bg-sky-200 shadow-md border-2 border-sky-300";
                        badgeElement.innerHTML = \`<span>🌟</span><span>Bậc Tôn Đáng Yêu K23</span>\`;
                    } else {
                        badgeElement.className = "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-sky-400 shadow-md border-2 border-sky-300";
                        badgeElement.innerHTML = \`<span>🍓</span><span>Tiền Bối Dễ Thương K24</span>\`;
                    }

                    const rsvpLabel = document.getElementById('rsvpButtonLabel');
                    rsvpLabel.textContent = "Xác Nhận Có Mặt Nè!";

                    lockSection.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');
                    setTimeout(() => {
                        lockSection.classList.add('hidden');
                        cardSection.classList.remove('hidden');
                        requestAnimationFrame(() => {
                            cardSection.classList.remove('opacity-0', 'translate-y-10');
                            cardSection.classList.add('opacity-100', 'translate-y-0');
                        });
                    }, 350);

                    showToast(\`Trân trọng kính chào Anh / Chị \${matchedGuest.name}!\`, "🥰");
                } else {
                    playCelebrationFanfare(false);
                    errorBox.classList.remove('hidden');
                    input.classList.remove('shake-error');
                    void input.offsetWidth;
                    input.classList.add('shake-error');
                }
            }

`;

html = html.slice(0, startIndex) + newFunction + html.slice(endIndex);
fs.writeFileSync('index.html', html);
console.log('Fixed handleAuthenticate function');
