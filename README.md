# 🎬 ReelsAI Studio — مولد الريلز الذكي

PWA عربي متكامل لتوليد أفكار فيديوهات قصيرة (Reels/Shorts) بالذكاء الاصطناعي.

## 🚀 النشر على GitHub Pages

1. أنشئ مستودعاً جديداً على GitHub (مثلاً: `reelsai-studio`)
2. ارفع جميع الملفات كما هي
3. اذهب إلى: **Settings → Pages → Source: Deploy from branch → main / root**
4. التطبيق سيعمل على: `https://username.github.io/reelsai-studio/`

## 📁 هيكل الملفات

```
reelsai/
├── index.html        — الواجهة الرئيسية
├── style.css         — التصميم الكامل
├── app.js            — المنطق البرمجي والـ API
├── sw.js             — Service Worker (PWA)
├── manifest.json     — إعدادات PWA للتثبيت
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## 🔌 ربط الـ API

### الطريقة 1: Webhook (n8n / Make.com / Zapier)
1. اضغط ⚙️ الإعدادات في التطبيق
2. أدخل رابط الـ Webhook
3. يتوقع التطبيق استجابة JSON بهذا الشكل:
```json
{
  "ar": { "title": "...", "description": "...", "hashtags": ["..."], "subtitle": "..." },
  "en": { "title": "...", "description": "...", "hashtags": ["..."], "subtitle": "..." }
}
```

### الطريقة 2: Anthropic API مباشرة
1. احصل على مفتاح من [console.anthropic.com](https://console.anthropic.com)
2. أدخله في ⚙️ الإعدادات
3. يعمل التطبيق تلقائياً مع Claude Sonnet

### الطريقة 3: Mock Data (بدون API)
يعمل التطبيق فوراً ببيانات تجريبية واقعية بدون أي إعداد.

## 🎨 التخصيص

في `style.css`، قم بتعديل المتغيرات في `:root`:
```css
--accent-a: #7C3AED;  /* اللون الرئيسي */
--accent-b: #EC4899;  /* اللون الثانوي */
```

في `app.js`، أضف مجالات جديدة في `MOCK_LIBRARY`.

## 📱 التثبيت على الهاتف

- **Android:** سيظهر زر "تثبيت" تلقائياً في الهيدر
- **iOS:** Safari → مشاركة → إضافة إلى الشاشة الرئيسية
