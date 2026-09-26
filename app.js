/* ===== REELSAI STUDIO — APP.JS — v2.1 ===== */

const APP_VERSION = 'v2.1';

// ══════════════════════════════════════════════
// MOCK DATA
// ══════════════════════════════════════════════
const MOCK_LIBRARY = {
  'السيارات': {
    ar: { title: '🚗 سر اختيار السيارة المثالية!', description: 'قبل ما تشتري سيارتك القادمة، شوف هالمعلومات الصادمة! خبرة 10 سنوات في دقيقتين. 🔥', hashtags: ['#سيارات', '#نصائح_السيارات', '#شراء_سيارة', '#ريلز', '#محتوى_عربي'], subtitle: 'سر التجار الذي لا يريدونك أن تعرفه!' },
    en: { title: '🚗 The Car Dealer Secret No One Talks About!', description: 'Before buying your next car, watch this! 10 years of automotive expertise in 2 minutes. 🔥', hashtags: ['#Cars', '#CarTips', '#BuyingACar', '#Reels', '#Automotive'], subtitle: 'The truth dealers hide from you!' }
  },
  'التكنولوجيا': {
    ar: { title: '📱 5 إعدادات خفية تُضاعف عمر البطارية!', description: '99% من مستخدمي الهواتف لا يعرفون هذه الإعدادات! تعلّم كيف تجعل بطاريتك تدوم ضعف الوقت. ⚡', hashtags: ['#تكنولوجيا', '#هواتف_ذكية', '#بطارية', '#تقنية', '#نصائح_تقنية'], subtitle: '99% من الناس لا يعرفون هذا!' },
    en: { title: '📱 5 Hidden Settings That Double Battery Life!', description: '99% of users don\'t know these settings! Make your battery last twice as long. ⚡', hashtags: ['#Technology', '#SmartPhone', '#BatteryLife', '#TechTips', '#PhoneHacks'], subtitle: '99% of people don\'t know this!' }
  },
  'الحقائق الغريبة': {
    ar: { title: '🤯 5 حقائق مجنونة عن الكون!', description: 'الكون أكبر مما تتخيل! حقائق علمية مثبتة ستصدمك وتغيّر نظرتك للحياة. 🌌', hashtags: ['#حقائق_مجنونة', '#علوم', '#الكون', '#معلومة', '#ريلز'], subtitle: 'الكون يخفي عنك أسراراً!' },
    en: { title: '🤯 5 Mind-Blowing Universe Facts!', description: 'The universe is stranger than you imagine! Scientifically proven facts that change everything. 🌌', hashtags: ['#MindBlown', '#Science', '#Universe', '#Facts', '#SpaceFacts'], subtitle: 'The universe hides secrets you won\'t believe!' }
  },
  'تطوير الذات': {
    ar: { title: '🧠 عادة واحدة غيّرت حياتي في 30 يوماً!', description: 'عادة واحدة بسيطة تمارسها 5 دقائق يومياً ستغيّر مسار حياتك كلياً. 💪', hashtags: ['#تطوير_الذات', '#نجاح', '#عادات', '#تحفيز', '#ريلز_عربي'], subtitle: 'عادة واحدة = حياة مختلفة!' },
    en: { title: '🧠 One Habit That Changed My Life in 30 Days!', description: 'One simple habit, just 5 minutes daily, will completely transform your life. 💪', hashtags: ['#SelfDevelopment', '#Success', '#Habits', '#Motivation', '#GrowthMindset'], subtitle: 'One habit = a completely different life!' }
  },
  'الطبخ': {
    ar: { title: '🍕 وصفة سرية من مطاعم إيطاليا!', description: 'الشيف الإيطالي شارك معي هذا السر! وصفة البيتزا الأصيلة بأبسط مكونات. 🤫', hashtags: ['#طبخ', '#وصفات', '#بيتزا', '#مطبخ_عربي', '#شهيوات'], subtitle: 'الوصفة السرية التي يخفيها الطهاة!' },
    en: { title: '🍕 Secret Pizza Recipe from an Italian Chef!', description: 'An Italian chef shared this secret! Authentic pizza with pantry staples. 🤫', hashtags: ['#Cooking', '#Recipe', '#Pizza', '#ItalianFood', '#ChefSecrets'], subtitle: 'The recipe chefs keep to themselves!' }
  },
  'مخصص': {
    ar: { title: '🔥 المحتوى الأكثر مشاهدات — إليك السر!', description: 'بعد تحليل 10,000 فيديو، اكتشفت الصيغة السحرية للمحتوى الذي ينتشر. ⚡', hashtags: ['#ريلز', '#محتوى', '#انتشار', '#نصائح', '#ريلز_عربي'], subtitle: 'الصيغة السحرية للمحتوى الرائج!' },
    en: { title: '🔥 The Viral Content Formula — Revealed!', description: 'After analyzing 10,000+ videos, I found the magic formula for viral content. ⚡', hashtags: ['#Viral', '#ContentCreator', '#Reels', '#GrowthHack', '#Algorithm'], subtitle: 'The magic formula for viral content!' }
  }
};

const POSTER_STYLES = {
  'السيارات':      { gradient: 'linear-gradient(160deg,#1a0533,#0d1a2e)', emoji: '🏎️' },
  'التكنولوجيا':   { gradient: 'linear-gradient(160deg,#001a33,#0a1a0a)', emoji: '📱' },
  'الحقائق الغريبة':{ gradient: 'linear-gradient(160deg,#0a0020,#001a1a)', emoji: '🌌' },
  'تطوير الذات':   { gradient: 'linear-gradient(160deg,#1a0a00,#0a1a00)', emoji: '🧠' },
  'الطبخ':         { gradient: 'linear-gradient(160deg,#1a0800,#1a1000)', emoji: '🍕' },
  'مخصص':          { gradient: 'linear-gradient(160deg,#1a0020,#000d1a)', emoji: '🔥' }
};

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let selectedNiche = 'التكنولوجيا';
let deferredInstallPrompt = null;
let isGenerating = false;
let settingsOpen = false;

const dom = {};

function cacheDom() {
  dom.installBtn      = document.getElementById('installBtn');
  dom.settingsToggle  = document.getElementById('settingsToggle');
  dom.settingsPanel   = document.getElementById('settingsPanel');
  dom.openaiKeyInput  = document.getElementById('openaiKey');
  dom.webhookInput    = document.getElementById('webhookUrl');
  dom.nicheButtons    = document.querySelectorAll('.niche-btn');
  dom.customNicheInput= document.getElementById('customNiche');
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
// PWA INSTALL
// ══════════════════════════════════════════════
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (dom.installBtn) dom.installBtn.classList.remove('hidden');
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  if (dom.installBtn) dom.installBtn.classList.add('hidden');
  showToast('✅ تم تثبيت التطبيق!');
});
function triggerInstall() {
  if (!deferredInstallPrompt) { showToast('ℹ️ التطبيق مثبت أو يحتاج HTTPS'); return; }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then(c => {
    if (c.outcome === 'accepted') showToast('🎉 جاري التثبيت...');
    deferredInstallPrompt = null;
  });
}

// ══════════════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════════════
function toggleSettings() {
  settingsOpen = !settingsOpen;
  dom.settingsPanel.classList.toggle('open', settingsOpen);
  dom.settingsToggle.textContent = settingsOpen ? '✕ إغلاق' : '⚙️ الإعدادات';
}
function loadSavedSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('reelsai_settings') || '{}');
    if (dom.openaiKeyInput && s.openaiKey) dom.openaiKeyInput.value = s.openaiKey;
    if (dom.webhookInput && s.webhookUrl) dom.webhookInput.value = s.webhookUrl;
  } catch(e) {}
}
function saveSettings() {
  const s = { openaiKey: dom.openaiKeyInput?.value||'', webhookUrl: dom.webhookInput?.value||'' };
  localStorage.setItem('reelsai_settings', JSON.stringify(s));
  toggleSettings();
  showToast('✅ تم حفظ الإعدادات!');
}

// ══════════════════════════════════════════════
// NICHE
// ══════════════════════════════════════════════
function selectNiche(niche, btn) {
  selectedNiche = niche;
  dom.nicheButtons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  if (niche !== 'مخصص') dom.customNicheInput.value = '';
}

// ══════════════════════════════════════════════
// PROGRESS
// ══════════════════════════════════════════════
function setStep(n) {
  [dom.step1, dom.step2, dom.step3].forEach((s, i) => {
    s.classList.remove('active','done');
    if (i+1 < n) s.classList.add('done');
    if (i+1 === n) s.classList.add('active');
  });
  dom.progressFill.style.width = ({1:15,2:55,3:90,4:100}[n]||0)+'%';
}
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ══════════════════════════════════════════════
// SAFE JSON EXTRACT — يستخرج JSON من أي نص
// ══════════════════════════════════════════════
function extractJSON(text) {
  // 1. تجربة مباشرة
  try { return JSON.parse(text.trim()); } catch(e) {}
  // 2. إزالة backticks
  const clean = text.replace(/```json/gi,'').replace(/```/g,'').trim();
  try { return JSON.parse(clean); } catch(e) {}
  // 3. البحث عن {} في النص
  const m = clean.match(/\{[\s\S]*\}/);
  if (m) { try { return JSON.parse(m[0]); } catch(e) {} }
  return null;
}

// ══════════════════════════════════════════════
// API CALL
// ══════════════════════════════════════════════
async function generateContent(niche) {
  let settings = {};
  try { settings = JSON.parse(localStorage.getItem('reelsai_settings')||'{}'); } catch(e) {}
  const apiKey = (settings.openaiKey||'').trim();
  const webhook = (settings.webhookUrl||'').trim();

  // ── Webhook ──
  if (webhook) {
    const res = await fetch(webhook, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ niche, timestamp: Date.now() })
    });
    if (!res.ok) throw new Error('Webhook: '+res.status);
    const data = await res.json();
    return safeResult(data, niche);
  }

  // ── Anthropic API ──
  if (apiKey) {
    const systemPrompt = 'أنت خبير محتوى سوشيال ميديا. ترد فقط بـ JSON بدون أي نص إضافي.';
    const userPrompt = `اصنع محتوى ريلز لمجال: "${niche}"
أرجع JSON بهذا الشكل تماماً:
{"ar":{"title":"عنوان عربي مع إيموجي","description":"وصف عربي 3 جمل","hashtags":["#هاشتاق1","#هاشتاق2","#هاشتاق3","#هاشتاق4","#هاشتاق5"],"subtitle":"جملة قصيرة"},"en":{"title":"English title with emoji","description":"English description 3 sentences","hashtags":["#hashtag1","#hashtag2","#hashtag3","#hashtag4","#hashtag5"],"subtitle":"Short subtitle"}}`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-api-key': apiKey,
        'anthropic-version':'2023-06-01'
      },
      body: JSON.stringify({
        model:'claude-sonnet-4-6',
        max_tokens:1000,
        system: systemPrompt,
        messages:[{ role:'user', content: userPrompt }]
      })
    });

    if (!res.ok) {
      const err = await res.json().catch(()=>({}));
      throw new Error(err?.error?.message || 'API خطأ: '+res.status);
    }

    const data = await res.json();
    const rawText = data?.content?.[0]?.text || '';
    console.log('[ReelsAI] API raw response:', rawText);

    const parsed = extractJSON(rawText);
    console.log('[ReelsAI] Parsed JSON:', parsed);

    return safeResult(parsed, niche);
  }

  // ── Mock ──
  await sleep(2800);
  return safeResult(MOCK_LIBRARY[niche] || MOCK_LIBRARY['مخصص'], niche, true);
}

// يضمن أن النتيجة دائماً لها ar و en مع hashtags كمصفوفة
function safeResult(data, niche, isMock=false) {
  const fallback = MOCK_LIBRARY[niche] || MOCK_LIBRARY['مخصص'];
  if (!data || typeof data !== 'object') data = {};

  function safeVersion(v, fb) {
    if (!v || typeof v !== 'object') v = {};
    return {
      title:       v.title       || fb.title,
      description: v.description || fb.description,
      subtitle:    v.subtitle    || v.title || fb.subtitle,
      hashtags:    Array.isArray(v.hashtags) ? v.hashtags : (fb.hashtags || [])
    };
  }

  return {
    ar: safeVersion(data.ar, fallback.ar),
    en: safeVersion(data.en, fallback.en),
    _isMock: isMock
  };
}

// ══════════════════════════════════════════════
// GENERATE FLOW
// ══════════════════════════════════════════════
async function handleGenerate() {
  if (isGenerating) return;
  const niche = dom.customNicheInput.value.trim() || selectedNiche;
  if (!niche) { showToast('⚠️ اختر مجال الفيديو'); return; }

  isGenerating = true;
  dom.generateBtn.disabled = true;
  dom.generateBtn.innerHTML = '⏳ جارٍ التوليد...';
  dom.resultsSection.classList.remove('visible');
  dom.progressSection.classList.add('visible');
  dom.progressFill.style.width = '0%';

  setStep(1); await sleep(800);
  setStep(2); await sleep(700);
  setStep(3);

  try {
    const result = await generateContent(niche);
    setStep(4);
    await sleep(400);

    renderResults(result, niche);
    dom.progressSection.classList.remove('visible');
    dom.resultsSection.classList.add('visible');
    dom.resultsSection.scrollIntoView({ behavior:'smooth', block:'start' });
    showToast(result._isMock ? '✅ بيانات تجريبية — أضف API Key للنتائج الحقيقية' : '🎉 تم التوليد بنجاح!');

  } catch(err) {
    console.error('[ReelsAI] Error:', err);
    showToast('❌ ' + (err.message||'خطأ').slice(0,70));
    // Fallback تلقائي بالبيانات التجريبية
    const fallback = safeResult(null, niche, true);
    renderResults(fallback, niche);
    dom.progressSection.classList.remove('visible');
    dom.resultsSection.classList.add('visible');
    dom.resultsSection.scrollIntoView({ behavior:'smooth', block:'start' });
    setTimeout(()=>showToast('⚠️ تم عرض بيانات تجريبية بدلاً من API'), 3600);
  }

  isGenerating = false;
  dom.generateBtn.disabled = false;
  dom.generateBtn.innerHTML = '🚀 توليد فيديو جديد';
}

// ══════════════════════════════════════════════
// RENDER
// ══════════════════════════════════════════════
function renderResults(data, niche) {
  renderPane('paneAr', data.ar, niche, 'ar');
  renderPane('paneEn', data.en, niche, 'en');
  switchTab('ar');
}

function renderPane(paneId, d, niche, lang) {
  const pane = document.getElementById(paneId);
  if (!pane) return;

  // ضمان سلامة البيانات
  if (!d || typeof d !== 'object') d = {};
  const title       = String(d.title       || '—');
  const description = String(d.description || '—');
  const subtitle    = String(d.subtitle    || title);
  const hashtags    = Array.isArray(d.hashtags) ? d.hashtags : [];

  const isAr = (lang === 'ar');
  const ps = POSTER_STYLES[niche] || POSTER_STYLES['مخصص'];

  const hashHTML = hashtags.map(h =>
    `<span class="hashtag">${escHtml(String(h))}</span>`
  ).join('');

  pane.innerHTML = `
    <div class="video-card">
      <div class="video-layout">
        <div class="video-player-wrap">
          <div class="video-mock-player">
            <div style="font-size:52px;filter:drop-shadow(0 0 16px rgba(168,85,247,0.6))">${ps.emoji}</div>
            <div class="mock-play-icon">▶</div>
          </div>
          <div class="mock-subtitle">${escHtml(subtitle)}</div>
        </div>
        <div class="video-meta">
          <div class="meta-field">
            <div class="meta-field-header">
              <span class="meta-field-label">${isAr?'العنوان':'Title'}</span>
              <button class="copy-btn" onclick="copyText(this,${JSON.stringify(title)})">📋 ${isAr?'نسخ':'Copy'}</button>
            </div>
            <div class="meta-text meta-title">${escHtml(title)}</div>
          </div>
          <div class="meta-field">
            <div class="meta-field-header">
              <span class="meta-field-label">${isAr?'الوصف':'Description'}</span>
              <button class="copy-btn" onclick="copyText(this,${JSON.stringify(description)})">📋 ${isAr?'نسخ':'Copy'}</button>
            </div>
            <div class="meta-text">${escHtml(description)}</div>
          </div>
          <div class="meta-field">
            <div class="meta-field-header">
              <span class="meta-field-label">${isAr?'الهاشتاقات':'Hashtags'}</span>
              <button class="copy-btn" onclick="copyText(this,${JSON.stringify(hashtags.join(' '))})">📋 ${isAr?'نسخ':'Copy'}</button>
            </div>
            <div class="meta-text"><div class="hashtags">${hashHTML}</div></div>
          </div>
        </div>
      </div>
      <div style="padding:0 20px 20px;display:flex;flex-direction:column;gap:10px;">
        <div class="divider"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div style="position:relative;background:${ps.gradient};border-radius:10px;aspect-ratio:9/16;max-height:180px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:1px solid var(--border)">
            <div style="font-size:40px;filter:drop-shadow(0 0 12px rgba(168,85,247,0.8))">${ps.emoji}</div>
            <button class="poster-download-btn" onclick="showToast('ℹ️ اربط Replicate API لتوليد البوسترات')">⬇ ${isAr?'بوستر':'Poster'}</button>
          </div>
          <button class="download-btn" onclick="showToast('ℹ️ اربط صانع الفيديو للتحميل')">
            ⬇ ${isAr?'تحميل الفيديو':'Download Video'}
          </button>
        </div>
      </div>
    </div>`;
}

// ══════════════════════════════════════════════
// TABS
// ══════════════════════════════════════════════
function switchTab(lang) {
  dom.tabAr.classList.toggle('active', lang==='ar');
  dom.tabEn.classList.toggle('active', lang==='en');
  dom.paneAr.classList.toggle('active', lang==='ar');
  dom.paneEn.classList.toggle('active', lang==='en');
}

// ══════════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════════
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function copyText(btn, text) {
  navigator.clipboard.writeText(String(text)).then(() => {
    const orig = btn.innerHTML;
    btn.innerHTML = '✅ تم';
    btn.classList.add('copied');
    setTimeout(()=>{ btn.innerHTML=orig; btn.classList.remove('copied'); }, 1800);
  }).catch(()=>showToast('❌ فشل النسخ'));
}

let toastTimer;
function showToast(msg) {
  if (!dom.toast) return;
  dom.toast.textContent = msg;
  dom.toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>dom.toast.classList.remove('show'), 3400);
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  loadSavedSettings();

  // عرض رقم الإصدار
  const versionEl = document.getElementById('appVersion');
  if (versionEl) versionEl.textContent = APP_VERSION;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(console.error);
  }

  dom.installBtn?.addEventListener('click', triggerInstall);
  dom.settingsToggle?.addEventListener('click', toggleSettings);
  dom.generateBtn?.addEventListener('click', handleGenerate);
  dom.tabAr?.addEventListener('click', ()=>switchTab('ar'));
  dom.tabEn?.addEventListener('click', ()=>switchTab('en'));

  dom.nicheButtons.forEach(btn => {
    btn.addEventListener('click', ()=>selectNiche(btn.dataset.niche, btn));
  });
  document.getElementById('saveSettings')?.addEventListener('click', saveSettings);

  // تحديد الافتراضي
  const defaultBtn = document.querySelector(`.niche-btn[data-niche="${selectedNiche}"]`);
  if (defaultBtn) defaultBtn.classList.add('active');
});
