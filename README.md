# Tareq Mhysen — Portfolio · بورتفوليو طارق محيسن

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
| 🖼️ Animated SVG cover art for all 9 projects | **أغلفة SVG متحركة** لكل المشاريع التسعة |
| 🎓 15 certifications grouped by 6 providers | **15 شهادة** موزّعة على 6 جهات مانحة |
| 💼 Services, Gallery, Certifications, References | **أقسام: الخدمات، المعرض، الشهادات، التوصيات** |
| 📄 Downloadable CV + Save Contact (vCard) | **تحميل السيرة الذاتية + حفظ بيانات التواصل (vCard)** |
| ✨ Aurora background, film grain, shimmer & glowing 3D orbit | **خلفية شفقية + حبيبات فيلم + لمعان + مدار ثلاثي الأبعاد متوهج** |
| 🖱️ Cursor spotlight, floating accents, section dot-nav | **بقعة ضوء تتبع المؤشر + نقاط زخرفية + شريط تنقل جانبي** |
| 🧲 Magnetic buttons, parallax hero, staggered reveals | **أزرار مغناطيسية + بارالاكس + ظهور متدرّج للعناصر** |
| 📧 Contact cards with one-tap email copy | **بطاقات تواصل** مع نسخ البريد بضغطة |
| 📱 Fully responsive — mobile, tablet, iPad, desktop, 4K (+print) | **متجاوب بالكامل** مع كل المقاسات (+نمط الطباعة) |
| ♿ Accessible (aria labels, keyboard, reduced-motion) | **دعم إمكانية الوصول** ولوحة المفاتيح |

## 📂 Structure | هيكل الملفات

```
tareq-portfolio/
├── index.html            ← الصفحة الرئيسية (كل الأقسام)
├── style.css             ← التنسيقات (ثيم فاتح/داكن + RTL + responsive)
├── script.js             ← الترجمات + كل التفاعلات (i18n, theme, modals…)
├── assets/               ← أغلفة SVG المتحركة للمشاريع (9 ملفات)
│   └── certs/            ← صور الشهادات (thumbs/ للعرض + files/ للأصل)
├── Tareq-Mhysen-CV.docx  ← السيرة الذاتية (زر التحميل ينزّلها)
├── tareq-photo.jpg       ← الصورة الشخصية
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
- **CV file:** replace `Tareq-Mhysen-CV.docx` keeping the same name

## 🛠 Tech

Pure **HTML + CSS + JavaScript** — no frameworks, no build step, no dependencies.
Fonts: [Sora · Inter · JetBrains Mono · Cairo](https://fonts.google.com) via Google Fonts.

---

© 2026 Tareq Mhysen · Built with code, curiosity & neural networks 🧠
