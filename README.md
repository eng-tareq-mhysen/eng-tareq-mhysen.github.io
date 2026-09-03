# Tareq Mhysen — Portfolio · بورتفوليو طارق محسن

<div align="center">

**AI & Data Science Engineer — Personal Portfolio Website**

موقع بروتوفوليو شخصي — ثنائي اللغة (عربي/إنجليزي) · وضع ليلي ونهاري · متوافق مع كل الشاشات

</div>

---

## ✨ Features | المميزات

| | |
|---|---|
| 🌗 **Dark / Light mode** — saved in `localStorage` | **وضع ليلي ونهاري** — يُحفظ تلقائياً في المتصفح |
| 🌐 **English / العربية (RTL)** — full translation, Cairo font for Arabic | **ترجمة كاملة للعربية** مع دعم RTL وخط Cairo |
| 🧠 Interactive neural-network canvas in the hero | **خلفية شبكة عصبية تفاعلية** تتفاعل مع الماوس |
| ⌨️ Typewriter roles, animated counters, scroll-reveal | **كتابة متحركة وعدّادات وأنيميشن عند التمرير** |
| 🃏 Project cards with 3D tilt + detail modals | **بطاقات مشاريع 3D** مع نوافذ تفاصيل لكل مشروع |
| 🔎 Project filters (AI · Vision · NLP · IoT) | **فلترة المشاريع** حسب التصنيف |
| 💼 Services, Gallery, Certifications, References | **أقسام: الخدمات، المعرض، الشهادات، التوصيات** |
| 📄 Downloadable CV + Save Contact (vCard) | **تحميل السيرة الذاتية + حفظ بيانات التواصل (vCard)** |
| 📧 Contact form (opens the visitor's email app) | **فورم تواصل** يفتح تطبيق البريد مباشرة |
| 📱 Fully responsive — mobile, tablet, iPad, desktop, 4K | **متجاوب بالكامل** مع كل المقاسات |
| ♿ Accessible (aria labels, keyboard, reduced-motion) | **دعم إمكانية الوصول** ولوحة المفاتيح |

## 📂 Structure | هيكل الملفات

```
tareq-portfolio/
├── index.html            ← الصفحة الرئيسية (كل الأقسام)
├── style.css             ← التنسيقات (ثيم فاتح/داكن + RTL + responsive)
├── script.js             ← الترجمات + كل التفاعلات (i18n, theme, modals…)
├── Tareq-Mhysen-CV.pdf   ← السيرة الذاتية (زر التحميل يفتحها)
└── README.md
```

## 🚀 Run | التشغيل

**Option 1 — just open it | الأسهل:**
Double-click `index.html`. كل شيء يعمل مباشرة (يُفضّل اتصال إنترنت لتحميل الخطوط من Google Fonts).

**Option 2 — local server | خادم محلي:**
```bash
cd tareq-portfolio
python -m http.server 8765
# then open  →  http://localhost:8765
```

## 🌍 Deploy | النشر مجاناً

| Platform | How |
|---|---|
| **GitHub Pages** | Push the folder → Settings → Pages → deploy from `main` |
| **Netlify** | Drag & drop the folder on [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `vercel` CLI in the folder, or import from GitHub |

## ✏️ Edit content | تعديل المحتوى

- **Texts (EN + AR):** all translations live in the `I18N` object at the top of `script.js` — كل النصوص باللغتين في كائن `I18N` أول ملف `script.js`
- **Project modal details:** the `PROJECTS` object in `script.js`
- **Colors / theme:** CSS variables in `:root` (dark) and `[data-theme="light"]` in `style.css`
- **CV file:** replace `Tareq-Mhysen-CV.pdf` keeping the same name

## 🛠 Tech

Pure **HTML + CSS + JavaScript** — no frameworks, no build step, no dependencies.
Fonts: [Sora · Inter · JetBrains Mono · Cairo](https://fonts.google.com) via Google Fonts.

---

© 2026 Tareq Mhysen · Built with code, curiosity & neural networks 🧠
