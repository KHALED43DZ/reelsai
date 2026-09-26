/* ===== REELSAI STUDIO — APP.JS ===== */

// ══════════════════════════════════════════════
// 1. API CONFIGURATION — قم بتعديل هذا القسم
// ══════════════════════════════════════════════
const API_CONFIG = {
  // --- OpenAI ---
  // openaiKey: '',              // يتم تعيينه من واجهة الإعدادات
  // openaiModel: 'gpt-4o',

  // --- Webhook (n8n / Make.com / Zapier) ---
  // webhookUrl: '',             // يتم تعيينه من واجهة الإعدادات

  // --- Replicate (لتوليد الصور) ---
  // replicateKey: '',

  // وضع المحاكاة: true = يعمل بدون API حقيقي
  mockMode: true,
  mockDelay: 3500    // وقت المحاكاة بالمللي ثانية
};

// ══════════════════════════════════════════════
// 2. MOCK DATA — بيانات تجريبية واقعية
// ══════════════════════════════════════════════
const MOCK_LIBRARY = {
  'السيارات': {
    ar: {
      title: '🚗 سر اختيار السيارة المثالية — لا يخبرك به التجار!',
      description: 'قبل ما تشتري سيارتك القادمة، شوف هالمعلومات الصادمة اللي ما تعرفها! من اختيار المحرك الصح، لين التفاوض على السعر — خبرة 10 سنوات في دقيقتين. 🔥',
      hashtags: ['#سيارات', '#نصائح_السيارات', '#شراء_سيارة', '#ريلز', '#محتوى_عربي', '#الجزائر', '#tips'],
      subtitle: 'سر التجار الذي لا يريدونك أن تعرفه!',
      posterGradient: 'linear-gradient(160deg, #1a0533 0%, #0d1a2e 100%)',
      posterEmoji: '🏎️'
    },
    en: {
      title: '🚗 The Car Dealer Secret No One Talks About!',
      description: 'Before buying your next car, watch this! From engine selection to price negotiation — 10 years of automotive expertise condensed into 2 minutes. You\'ll never negotiate the same way again! 🔥',
      hashtags: ['#Cars', '#CarTips', '#BuyingACar', '#Reels', '#Automotive', '#CarSecret', '#Tips'],
      subtitle: 'The truth dealers don\'t want you to know!',
      posterGradient: 'linear-gradient(160deg, #0a1628 0%, #1a0533 100%)',
      posterEmoji: '🏎️'
    }
  },
  'التكنولوجيا': {
    ar: {
      title: '📱 5 إعدادات خفية في هاتفك تُضاعف عمره ببطاريته!',
      description: '99% من مستخدمي الهواتف لا يعرفون هذه الإعدادات! تعلّم كيف تجعل بطاريتك تدوم ضعف الوقت وهاتفك يعمل بسرعة البرق. معلومة غيّرت حياتي! ⚡',
      hashtags: ['#تكنولوجيا', '#هواتف_ذكية', '#بطارية', '#تقنية', '#نصائح_تقنية', '#ريلز_عربي'],
      subtitle: '99% من الناس لا يعرفون هذا!',
      posterGradient: 'linear-gradient(160deg, #001a33 0%, #0a1a0a 100%)',
      posterEmoji: '📱'
    },
    en: {
      title: '📱 5 Hidden Phone Settings That Will Double Your Battery Life!',
      description: '99% of smartphone users don\'t know these settings! Learn how to make your battery last twice as long and your phone run at lightning speed. This changed everything for me! ⚡',
      hashtags: ['#Technology', '#SmartPhone', '#BatteryLife', '#TechTips', '#PhoneHacks', '#Reels'],
      subtitle: '99% of people don\'t know this!',
      posterGradient: 'linear-gradient(160deg, #001a33 0%, #0a0a1a 100%)',
      posterEmoji: '📱'
    }
  },
  'الحقائق الغريبة': {
    ar: {
      title: '🤯 5 حقائق مجنونة عن الكون ستجعلك تُعيد التفكير في كل شيء!',
      description: 'الكون أكبر مما تتخيل، والوقت أغرب مما تظن! حقائق علمية مثبتة ستصدمك وتغيّر نظرتك للحياة. اضغط متابعة لأن القادم أجنن! 🌌',
      hashtags: ['#حقائق_مجنونة', '#علوم', '#الكون', '#معلومة', '#ريلز', '#محتوى_عربي', '#مثير'],
      subtitle: 'الكون يخفي عنك أسراراً لن تصدقها!',
      posterGradient: 'linear-gradient(160deg, #0a0020 0%, #001a1a 100%)',
      posterEmoji: '🌌'
    },
    en: {
      title: '🤯 5 Mind-Blowing Universe Facts That Will Shatter Your Reality!',
      description: 'The universe is stranger than you can possibly imagine! These scientifically proven facts will completely change how you see life. Follow for more mind-bending content! 🌌',
      hashtags: ['#MindBlown', '#Science', '#Universe', '#Facts', '#Reels', '#SpaceFacts', '#WTF'],
      subtitle: 'The universe is hiding secrets you won\'t believe!',
      posterGradient: 'linear-gradient(160deg, #0a0020 0%, #001a0a 100%)',
      posterEmoji: '🌌'
    }
  },
  'تطوير الذات': {
    ar: {
      title: '🧠 عادة واحدة فقط غيّرت حياتي في 30 يوماً — جرّبها!',
      description: 'لست بحاجة إلى 10 كتب أو 100 ساعة تدريب. عادة واحدة بسيطة تمارسها 5 دقائق يومياً ستغيّر مسار حياتك كلياً. جربتها والنتائج أذهلتني! 💪',
      hashtags: ['#تطوير_الذات', '#نجاح', '#عادات', '#تحفيز', '#ريلز_عربي', '#انجاز', '#motivation'],
      subtitle: 'عادة واحدة = حياة مختلفة تماماً!',
      posterGradient: 'linear-gradient(160deg, #1a0a00 0%, #0a1a00 100%)',
      posterEmoji: '🧠'
    },
    en: {
      title: '🧠 One Habit That Changed My Life in 30 Days — Try It!',
      description: 'You don\'t need 10 books or 100 hours of training. One simple habit, practiced just 5 minutes daily, will completely transform your life trajectory. I tried it — the results amazed me! 💪',
      hashtags: ['#SelfDevelopment', '#Success', '#Habits', '#Motivation', '#Reels', '#GrowthMindset', '#Productivity'],
      subtitle: 'One habit = a completely different life!',
      posterGradient: 'linear-gradient(160deg, #1a0a00 0%, #001a0a 100%)',
      posterEmoji: '🧠'
    }
  },
  'الطبخ': {
    ar: {
      title: '🍕 وصفة سرية من مطاعم إيطاليا — بمكونات من بيتك!',
      description: 'الشيف الإيطالي شارك معي هذا السر بعد سنوات من الصداقة! وصفة البيتزا الإيطالية الأصيلة بأبسط مكونات. قلها لأصدقائك قبل ما يزيلوا الريلز! 🤫',
      hashtags: ['#طبخ', '#وصفات', '#بيتزا', '#مطبخ_عربي', '#ريلز_طبخ', '#اكل', '#شهيوات'],
      subtitle: 'الوصفة السرية التي يخفيها الطهاة!',
      posterGradient: 'linear-gradient(160deg, #1a0800 0%, #1a1000 100%)',
      posterEmoji: '🍕'
    },
    en: {
      title: '🍕 Secret Pizza Recipe from an Italian Chef — With Pantry Staples!',
      description: 'An Italian chef shared this secret with me after years of friendship! The authentic Italian pizza recipe with the simplest ingredients. Share with friends before this gets taken down! 🤫',
      hashtags: ['#Cooking', '#Recipe', '#Pizza', '#ItalianFood', '#FoodReels', '#ChefSecrets', '#Foodie'],
      subtitle: 'The secret recipe chefs keep to themselves!',
      posterGradient: 'linear-gradient(160deg, #1a0800 0%, #1a0a00 100%)',
      posterEmoji: '🍕'
    }
  },
  'مخصص': {
    ar: {
      title: '🔥 المحتوى الأكثر حصولاً على مشاهدات — إليك السر!',
      description: 'بعد تحليل أكثر من 10,000 فيديو ناجح، اكتشفت الصيغة السحرية للمحتوى الذي ينتشر بسرعة البرق. طبّقها الآن وشاهد النتائج! ⚡',
      hashtags: ['#ريلز', '#محتوى', '#انتشار', '#نصائح', '#ريلز_عربي', '#مشاهدات'],
      subtitle: 'الصيغة السحرية للمحتوى الرائج!',
      posterGradient: 'linear-gradient(160deg, #1a0020 0%, #000d1a 100%)',
      posterEmoji: '🔥'
    },
    en: {
      title: '🔥 The Most Viral Content Formula — Revealed!',
      description: 'After analyzing 10,000+ successful videos, I found the magic formula for content that spreads like wildfire. Apply it now and watch the results! ⚡',
      hashtags: ['#Viral', '#ContentCreator', '#Reels', '#Tips', '#GrowthHack', '#Algorithm'],
      subtitle: 'The magic formula for viral content!',
      posterGradient: 'linear-gradient(160deg, #1a0020 0%, #000d1a 100%)',
      posterEmoji: '🔥'
    }
  }
};

// ══════════════════════════════════════════════
// 3. STATE
// ══════════════════════════════════════════════
let selectedNiche = 'التكنولوجيا';
let deferredInstallPrompt = null;
let isGenerating = false;
let settingsOpen = false;
let currentResult = null;

// ══════════════════════════════════════════════
// 4. DOM REFS
// ══════════════════════════════════════════════
const dom = {};

function cacheDom() {
  dom.installBtn      = document.getElementById('installBtn');
  dom.settingsToggle  = document.getElementById('settingsToggle');
  dom.settingsPanel   = document.getElementById('settingsPanel');
  dom.openaiKeyInput  = document.getElementById('openaiKey');
  dom.webhookInput    = document.getElementById('webhookUrl');
  dom.nicheButtons    = document.querySelectorAll('.niche-btn');
  dom.customNicheInput = document.getElementById('customNiche');
  dom.generateBtn     = document.getElementById('generateBtn');
  dom.progressSection = document.getElementById('progressSection');
  dom.progressFill    = document.getElementById('progressFill');
  dom.step1           = document.getElementById('step1');
  dom.step2           = document.getElementById('step2');
  dom.step3           = document.getElementById('step3');
  dom.resultsSection  = document.getElementById('resultsSection');
  dom.tabAr           = document.getElementById('tabAr');
  dom.tabEn           = document.getElementById('tabEn');
  dom.paneAr          = document.getElementById('paneAr');
  dom.paneEn          = document.getElementById('paneEn');
  dom.toast           = document.getElementById('toast');
}

// ══════════════════════════════════════════════
// 5. PWA INSTALL
// ══════════════════════════════════════════════
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (dom.installBtn) dom.installBtn.classList.remove('hidden');
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  if (dom.installBtn) dom.installBtn.classList.add('hidden');
  showToast('✅ تم تثبيت التطبيق بنجاح!');
});

function triggerInstall() {
  if (!deferredInstallPrompt) {
    showToast('ℹ️ التطبيق مثبت بالفعل أو يحتاج HTTPS');
    return;
  }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(choice => {
    if (choice.outcome === 'accepted') showToast('🎉 جاري تثبيت التطبيق...');
    deferredInstallPrompt = null;
  });
}

// ══════════════════════════════════════════════
// 6. SETTINGS PANEL
// ══════════════════════════════════════════════
function toggleSettings() {
  settingsOpen = !settingsOpen;
  dom.settingsPanel.classList.toggle('open', settingsOpen);
  dom.settingsToggle.textContent = settingsOpen ? '✕ إغلاق' : '⚙️ الإعدادات';
}

function loadSavedSettings() {
  const saved = JSON.parse(localStorage.getItem('reelsai_settings') || '{}');
  if (dom.openaiKeyInput && saved.openaiKey) dom.openaiKeyInput.value = saved.openaiKey;
  if (dom.webhookInput && saved.webhookUrl) dom.webhookInput.value = saved.webhookUrl;
}

function saveSettings() {
  const settings = {
    openaiKey: dom.openaiKeyInput?.value || '',
    webhookUrl: dom.webhookInput?.value || ''
  };
  localStorage.setItem('reelsai_settings', JSON.stringify(settings));
  toggleSettings();
  showToast('✅ تم حفظ الإعدادات!');
}

// ══════════════════════════════════════════════
// 7. NICHE SELECTION
// ══════════════════════════════════════════════
function selectNiche(niche, btn) {
  selectedNiche = niche;
  dom.nicheButtons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (niche !== 'مخصص') dom.customNicheInput.value = '';
}

// ══════════════════════════════════════════════
// 8. PROGRESS ANIMATION
// ══════════════════════════════════════════════
function setStep(stepNum, status) {
  const steps = [dom.step1, dom.step2, dom.step3];
  steps.forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 < stepNum) s.classList.add('done');
    if (i + 1 === stepNum) s.classList.add('active');
  });
  const progMap = { 1: 15, 2: 55, 3: 90, 4: 100 };
  dom.progressFill.style.width = (progMap[stepNum] || 0) + '%';
}

// ══════════════════════════════════════════════
// 9. API CALLS
// ══════════════════════════════════════════════

/**
 * الدالة الرئيسية لتوليد المحتوى
 * يمكنك استبدال جسم هذه الدالة بربط API حقيقي
 */
async function generateContent(niche) {
  const settings = JSON.parse(localStorage.getItem('reelsai_settings') || '{}');
  const apiKey   = settings.openaiKey;
  const webhook  = settings.webhookUrl;

  // ── خيار 1: Webhook (n8n / Make / Zapier) ──────────────
  if (webhook) {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ niche, lang: 'ar', timestamp: Date.now() })
    });
    if (!res.ok) throw new Error(`Webhook error: ${res.status}`);
    return await res.json();
    // المتوقع من الـ Webhook: { ar: { title, description, hashtags, subtitle }, en: {...} }
  }

  // ── خيار 2: Anthropic API مباشرة ──────────────────────
  if (apiKey) {
    const prompt = `أنت خبير محتوى سوشيال ميديا. اصنع فيديو ريلز لمجال "${niche}".
أعطني JSON فقط بهذا الشكل بدون أي نص إضافي ولا backticks:
{"ar":{"title":"عنوان عربي جذاب مع إيموجي","description":"وصف عربي حماسي 3-4 جمل","hashtags":["#هاشتاق1","#هاشتاق2","#هاشتاق3","#هاشتاق4","#هاشتاق5"],"subtitle":"جملة قصيرة تظهر في الفيديو"},"en":{"title":"Catchy English title with emoji","description":"Engaging English description 3-4 sentences","hashtags":["#hashtag1","#hashtag2","#hashtag3","#hashtag4","#hashtag5"],"subtitle":"Short subtitle for the video"}}`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData?.error?.message || `API Error: ${res.status}`);
    }

    const data = await res.json();
    let text = data.content?.[0]?.text || '';

    // تنظيف الرد من أي backticks أو نص إضافي
    text = text.replace(/```json/gi, '').replace(/```/g, '').trim();

    // استخراج أول JSON صالح من الرد
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('لم يُرجع الـ API بيانات صحيحة');

    const parsed = JSON.parse(jsonMatch[0]);

    // التحقق من وجود البيانات الأساسية
    if (!parsed.ar || !parsed.en) throw new Error('البيانات المُرجعة غير مكتملة');
    if (!Array.isArray(parsed.ar.hashtags)) parsed.ar.hashtags = [];
    if (!Array.isArray(parsed.en.hashtags)) parsed.en.hashtags = [];

    return parsed;
  }

  // ── خيار 3: Mock Data ──────────────────────────────────
  await sleep(API_CONFIG.mockDelay);
  const mock = MOCK_LIBRARY[niche] || MOCK_LIBRARY['مخصص'];
  return { ...mock, _isMock: true };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ══════════════════════════════════════════════
// 10. GENERATE FLOW
// ══════════════════════════════════════════════
async function handleGenerate() {
  if (isGenerating) return;

  const niche = dom.customNicheInput.value.trim() || selectedNiche;
  if (!niche) { showToast('⚠️ اختر مجال الفيديو أولاً'); return; }

  isGenerating = true;
  dom.generateBtn.disabled = true;
  dom.generateBtn.innerHTML = '⏳ جارٍ التوليد...';
  dom.resultsSection.classList.remove('visible');

  dom.progressSection.classList.add('visible');
  dom.progressFill.style.width = '0%';
  setStep(1);
  await sleep(900);
  setStep(2);
  await sleep(800);
  setStep(3);

  try {
    const result = await generateContent(niche);
    currentResult = result;
    dom.progressFill.style.width = '100%';
    dom.step1.classList.add('done');
    dom.step2.classList.add('done');
    dom.step3.classList.add('done', 'active');
    await sleep(500);

    renderResults(result, niche);
    dom.progressSection.classList.remove('visible');
    dom.resultsSection.classList.add('visible');
    dom.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (result._isMock) showToast('✅ نتائج تجريبية — أضف API Key للبيانات الحقيقية');
    else showToast('🎉 تم التوليد بنجاح!');

  } catch (err) {
    console.error('ReelsAI Error:', err);
    const msg = err.message || 'خطأ غير معروف';
    showToast('❌ خطأ: ' + msg.slice(0, 80));
    dom.progressSection.classList.remove('visible');
    // fallback: استخدم Mock Data عند فشل الـ API
    try {
      const fallback = MOCK_LIBRARY[niche] || MOCK_LIBRARY['مخصص'];
      renderResults(fallback, niche);
      dom.resultsSection.classList.add('visible');
      dom.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => showToast('⚠️ فشل الـ API — تم عرض بيانات تجريبية'), 3500);
    } catch(e2) { console.error(e2); }
  }

  isGenerating = false;
  dom.generateBtn.disabled = false;
  dom.generateBtn.innerHTML = '🚀 توليد فيديو جديد';
}

// ══════════════════════════════════════════════
// 11. RENDER RESULTS
// ══════════════════════════════════════════════
function renderResults(data, niche) {
  renderPane('paneAr', data.ar, niche, 'ar');
  renderPane('paneEn', data.en, niche, 'en');
  switchTab('ar');
}

function renderPane(paneId, d, niche, lang) {
  const pane = document.getElementById(paneId);
  if (!pane) return;

  // حماية ضد بيانات ناقصة
  if (!d || typeof d !== 'object') d = {};
  d.title       = d.title       || '(لا عنوان)';
  d.description = d.description || '(لا وصف)';
  d.subtitle    = d.subtitle    || d.title;
  d.hashtags    = Array.isArray(d.hashtags) ? d.hashtags : [];

  const isAr = (lang === 'ar');
  const mockData = MOCK_LIBRARY[niche] || MOCK_LIBRARY['مخصص'];
  const gradient = (mockData[lang] || mockData['ar'])?.posterGradient || 'linear-gradient(160deg, #1a0b2e, #0d0820)';
  const emoji    = (mockData[lang] || mockData['ar'])?.posterEmoji || '🎬';

  const hashHTML = (d.hashtags || []).map(h =>
    `<span class="hashtag">${h}</span>`
  ).join('');

  pane.innerHTML = `
    <div class="video-card">
      <div class="video-layout">
        <div class="video-player-wrap">
          <div class="video-mock-player">
            <div style="font-size:52px;filter:drop-shadow(0 0 16px rgba(168,85,247,0.6))">${emoji}</div>
            <div class="mock-play-icon" title="تشغيل الفيديو">▶</div>
          </div>
          <div class="mock-subtitle">${escHtml(d.subtitle || d.title || '')}</div>
        </div>
        <div class="video-meta">
          <div class="meta-field">
            <div class="meta-field-header">
              <span class="meta-field-label">${isAr ? 'العنوان' : 'Title'}</span>
              <button class="copy-btn" onclick="copyText(this,'${safeCopy(d.title)}')">📋 ${isAr ? 'نسخ' : 'Copy'}</button>
            </div>
            <div class="meta-text meta-title">${escHtml(d.title || '')}</div>
          </div>

          <div class="meta-field">
            <div class="meta-field-header">
              <span class="meta-field-label">${isAr ? 'الوصف' : 'Description'}</span>
              <button class="copy-btn" onclick="copyText(this,'${safeCopy(d.description)}')">📋 ${isAr ? 'نسخ' : 'Copy'}</button>
            </div>
            <div class="meta-text">${escHtml(d.description || '')}</div>
          </div>

          <div class="meta-field">
            <div class="meta-field-header">
              <span class="meta-field-label">${isAr ? 'الهاشتاقات' : 'Hashtags'}</span>
              <button class="copy-btn" onclick="copyText(this,'${safeCopy((d.hashtags||[]).join(' '))}')">📋 ${isAr ? 'نسخ' : 'Copy'}</button>
            </div>
            <div class="meta-text"><div class="hashtags">${hashHTML}</div></div>
          </div>
        </div>
      </div>

      <div style="padding:0 20px 20px;display:flex;flex-direction:column;gap:10px;">
        <div class="divider"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="position:relative;background:${gradient};border-radius:10px;aspect-ratio:9/16;max-height:180px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--border)">
            <div style="font-size:40px;filter:drop-shadow(0 0 12px rgba(168,85,247,0.8))">${emoji}</div>
            <button class="poster-download-btn" onclick="downloadPoster(this,'${safeCopy(d.title)}')">⬇ ${isAr ? 'بوستر' : 'Poster'}</button>
          </div>
          <button class="download-btn" onclick="handleVideoDownload('${safeCopy(d.title)}')">
            ⬇ ${isAr ? 'تحميل الفيديو' : 'Download Video'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// ══════════════════════════════════════════════
// 12. TABS
// ══════════════════════════════════════════════
function switchTab(lang) {
  dom.tabAr.classList.toggle('active', lang === 'ar');
  dom.tabEn.classList.toggle('active', lang === 'en');
  dom.paneAr.classList.toggle('active', lang === 'ar');
  dom.paneEn.classList.toggle('active', lang === 'en');
}

// ══════════════════════════════════════════════
// 13. UTILITY FUNCTIONS
// ══════════════════════════════════════════════
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function safeCopy(str) {
  return String(str || '').replace(/'/g, '&apos;').replace(/\n/g, ' ');
}

function copyText(btn, text) {
  const decoded = text.replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
  navigator.clipboard.writeText(decoded).then(() => {
    btn.classList.add('copied');
    const orig = btn.innerHTML;
    btn.innerHTML = '✅ تم';
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 1800);
  });
}

function downloadPoster(btn, title) {
  showToast('ℹ️ ربط Replicate API لتوليد صورة حقيقية');
}

function handleVideoDownload(title) {
  showToast('ℹ️ ربط صانع الفيديو لتحميل الملف');
}

let toastTimer;
function showToast(msg) {
  if (!dom.toast) return;
  dom.toast.textContent = msg;
  dom.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => dom.toast.classList.remove('show'), 3200);
}

// ══════════════════════════════════════════════
// 14. INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  loadSavedSettings();

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(console.error);
  }

  // Wire up buttons
  dom.installBtn?.addEventListener('click', triggerInstall);
  dom.settingsToggle?.addEventListener('click', toggleSettings);
  dom.generateBtn?.addEventListener('click', handleGenerate);
  dom.tabAr?.addEventListener('click', () => switchTab('ar'));
  dom.tabEn?.addEventListener('click', () => switchTab('en'));

  // Niche buttons
  dom.nicheButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectNiche(btn.dataset.niche, btn);
    });
  });

  // Set default selected
  const defaultBtn = document.querySelector(`.niche-btn[data-niche="${selectedNiche}"]`);
  if (defaultBtn) defaultBtn.classList.add('active');

  // Settings save button
  document.getElementById('saveSettings')?.addEventListener('click', saveSettings);
});
