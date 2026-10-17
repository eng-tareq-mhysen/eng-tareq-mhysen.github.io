/* ═══════════════════════════════════════════════════
   TAREQ MHYSEN — PORTFOLIO v2
   Bilingual (EN/AR + RTL) · Dark/Light themes · Modals
   ═══════════════════════════════════════════════════ */
(() => {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ═══════════════ I18N DICTIONARY ═══════════════ */
  const I18N = {
    en: {
      "nav.home": "Home", "nav.about": "About", "nav.projects": "Projects",
      "nav.skills": "Skills", "nav.experience": "Experience", "nav.contact": "Contact",
      "nav.resume": "Résumé",
      "dot.home": "Home", "dot.about": "About", "dot.services": "Services",
      "dot.projects": "Projects", "dot.skills": "Skills", "dot.experience": "Experience",
      "dot.gallery": "Creative", "dot.certifications": "Certifications",
      "dot.references": "References", "dot.contact": "Contact",

      "hero.badge": "AI & Data Science Engineer · Syrian Presidency",
      "hero.desc": "AI & Data Science Engineer at the <strong>General Secretariat of the Presidency of Syria</strong>, building and fine-tuning <strong>LLMs</strong>, secure <strong>RAG systems</strong> and <strong>Computer Vision</strong> solutions for sensitive institutional missions.",
      "hero.cta1": "View My Work", "hero.cta2": "Download CV",
      "stats.projects": "AI Projects", "stats.detection": "Malware Detection",
      "stats.resolution": "RAG Response Quality", "stats.years": "Years in Tech",

      "about.kicker": "01. about",
      "about.title": 'Engineering intelligence,<br /><span class="grad">creatively.</span>',
      "about.bio1": "I'm <strong>Tareq Mhysen</strong>, an Artificial Intelligence & Data Science engineer from Damascus, Syria. I build intelligent applications powered by <strong>Large Language Models</strong>, <strong>Retrieval-Augmented Generation</strong>, vector databases and knowledge graphs — systems that understand context and deliver precise, meaningful answers.",
      "about.bio2": "Beyond models and code, I'm a <strong>photographer</strong> and <strong>designer</strong> — which is why my AI projects don't just work well, they <em>look</em> and <em>feel</em> right. I live at the intersection of rigorous engineering and visual storytelling.",
      "about.point1": "B.Eng. in AI Engineering & Data Science — SPU, Damascus (2021–2026)",
      "about.point2": "Top capstone: Agentic AI Academic Advisor (RAG + LLMs)",
      "about.point3": "8+ years blending IT, AI, media & creative production",
      "about.name": "Tareq Mhysen", "about.role": "AI & Data Science Engineer", "about.open": "Open to work",
      "about.fLoc": "Location", "about.vLoc": "Rif Dimashq, Ain Mneen — Syria",
      "about.fDeg": "Degree", "about.vDeg": "B.Eng. AI Engineering & Data Science",
      "about.fUni": "University", "about.vUni": "Syrian Private University",
      "about.fYears": "Years", "about.fDob": "Date of Birth",
      "about.fLang": "Languages", "about.vLang": "Arabic · English",
      "about.fMail": "Email", "about.fPhone": "Phone",

      "ach1.title": "Malware Detection Success",
      "ach1.desc": "DenseNet201 visual classifier reaching 98.8% accuracy and 0.999 AUC on 29,575 balanced executable samples.",
      "ach2.title": "RAG Response Quality",
      "ach2.desc": "IntelliPath agent scored 90.5% (LLM-as-a-Judge) with P95 latency of 3.6s and an 8.2× semantic-cache speed-up.",
      "ach3.title": "Super-Resolution Benchmark",
      "ach3.desc": "SwinIR reached 35.20 dB PSNR / 0.940 SSIM at ×2 — best of five architectures benchmarked on DIV2K.",

      "services.kicker": "02. services",
      "services.title": 'What I <span class="grad">offer</span>.',
      "services.sub": "From intelligent RAG systems to creative production — a skill set that pairs rigorous engineering with artistic sense.",
      "srv1.title": "AI & LLM Solutions",
      "srv1.desc": "Agentic assistants, RAG pipelines and LLM applications connected to your knowledge base and vector stores.",
      "srv2.title": "Computer Vision",
      "srv2.desc": "Detection, classification and image enhancement — from MRI tumor analysis to GAN-powered super-resolution.",
      "srv3.title": "Data Science & ML",
      "srv3.desc": "Model building, evaluation and optimization with reliable data preprocessing pipelines and honest metrics.",
      "srv4.title": "APIs & Backend",
      "srv4.desc": "Fast REST APIs with FastAPI, SQL & NoSQL data layers, and containerized deployments with Docker.",
      "srv5.title": "IT Solutions & Support",
      "srv5.desc": "Infrastructure management, technical support and workflow automation — field-proven since 2018.",
      "srv6.title": "Creative Media",
      "srv6.desc": "Professional photography, visual identities and marketing content — elevated with AI-enhanced workflows.",

      "projects.kicker": "03. projects",
      "projects.title": 'Things I\'ve <span class="grad">built</span>.',
      "projects.sub": "From RAG-powered agents to GANs that sharpen reality — every project shipped, benchmarked and presented. Click any card for full details.",
      "projects.none": "Nothing in this category yet — coming soon.",
      "flt.all": "All", "flt.ai": "AI & LLMs", "flt.vision": "Computer Vision", "flt.nlp": "NLP", "flt.iot": "IoT & Systems",
      "pr.more": "Details →",

      "pr1.title": "IntelliPath — Agentic AI Academic Advisor",
      "pr1.year": "Sept 2025 — 2026",
      "pr1.type": "Senior Project II · Agentic RAG + LLMs",
      "pr1.desc": 'Agentic platform with <b>27 specialized tools</b> and Hybrid RAG (semantic + full-text, fused with RRF). Response quality <b>90.5%</b> (LLM-as-a-Judge) at <b>P95 3.6s</b>.',
      "pr1.badge": "🎯 90.5% Quality",
      "pr2.title": "AI Image Super-Resolution — ISR",
      "pr2.type": "Senior Project I · Image Super-Resolution",
      "pr2.desc": 'PyTorch benchmark of 5 SR models on DIV2K — SwinIR leads at ×2 with <b>35.20 dB PSNR / 0.940 SSIM</b>, plus a loss-function study (L1+VGG best).',
      "pr3.title": "Intelligent Malware Analytics — Deep Learning Classifier",
      "pr3.type": "Junior Project · Deep Learning Security",
      "pr3.desc": 'Executables → grayscale images → fine-tuned CNNs. <b>DenseNet201: 98.8% accuracy, 0.999 AUC</b> on 29,575 balanced samples — validated on real unseen files.',
      "pr3.badge": "⚡ 98.8% Accuracy",
      "pr9.title": "Malware Detection — AI Techniques (Tabular ML)",
      "pr9.type": "Academic Project · Classical ML",
      "pr9.desc": 'Hybrid <b>Random Forest + KNN</b> over 216 app features — <b>98.84% accuracy / 98.83% F1</b>, tuned with GridSearchCV on 15,036 samples.',
      "pr9.badge": "⚡ 98.84% F1",
      "pr4.title": "Brain Tumor Classification",
      "pr4.type": "Deep Learning · Healthcare",
      "pr4.year": "Medical AI",
      "pr4.desc": 'ResNet50 pipeline classifying brain MRI scans into tumor categories, achieving an <b>AUC of 0.8796</b> validated with ROC analysis.',
      "pr5.title": "AI Air Drawing",
      "pr5.type": "Computer Vision · Interaction",
      "pr5.year": "Real-time CV",
      "pr5.desc": "Draw in thin air: real-time hand-tracking turns gestures into strokes on a virtual canvas — no mouse, no keyboard.",
      "pr6.title": "Abstractive Text Summarization",
      "pr6.type": "NLP · Streamlit App",
      "pr6.year": "Transformers",
      "pr6.desc": "BART-based summarizer condensing long documents into concise, meaningful summaries — wrapped in a clean Streamlit interface.",
      "pr7.title": "IoT Smart Home",
      "pr7.type": "Raspberry Pi · Automation",
      "pr7.year": "Embedded",
      "pr7.desc": "Full smart-home stack: appliance control and live sensor monitoring over MQTT, with a Flask dashboard and SQLite persistence.",
      "pr8.title": "PSO Optimization Engine",
      "pr8.type": "Swarm Intelligence",
      "pr8.year": "Optimization",
      "pr8.desc": "Particle Swarm Optimization solving real-world continuous optimization problems efficiently, with rich visual analytics.",

      "skills.kicker": "04. skills",
      "skills.title": 'The <span class="grad">toolkit</span>.',
      "skills.sub": "A full AI-engineering stack — from languages and frameworks to data infrastructure and core computer-science concepts.",
      "skills.total": "6 specializations · 74 skills",
      "skills.unit": "skills",
      "skills.cats": "specializations",
      "sk1.title": "Programming Languages", "sk2.title": "Generative AI & LLMs",
      "sk3.title": "Machine & Deep Learning", "sk4.title": "Frameworks & Libraries",
      "sk5.title": "Data & Infrastructure", "sk6.title": "Tools, CS & Concepts",

      "exp.kicker": "05. experience",
      "exp.title": 'Where I\'ve <span class="grad">worked</span>.',
      "job0.p": "Mid 2026 — Present",
      "job0.badge": "Current Role",
      "job0.title": "AI & Data Science Engineer",
      "job0.org": "General Secretariat of the Presidency of the Syrian Arab Republic",
      "job0.b1": "Developing and fine-tuning Large Language Models (LLMs) for sensitive institutional missions.",
      "job0.b2": "Building advanced RAG systems over official knowledge bases with secure vector indexes.",
      "job0.b3": "Feature engineering and data-science pipelines that turn institutional data into decisions.",
      "job0.b4": "Deploying solutions with Docker in high-reliability, high-confidentiality environments.",
      "job1.p": "2023 — Mid 2026",
      "job1.title": "IT, Media & AI Solutions Specialist",
      "job1.org": "Artizan Interior Design · Syria & Dubai",
      "job1.b1": "Managed IT infrastructure, system maintenance and technical support across the Damascus & Dubai branches.",
      "job1.b2": "Coordinated and implemented technology, digital-media and AI-driven initiatives to improve operational efficiency.",
      "job1.b3": "Led multimedia production and content development, including visual assets and marketing presentations for luxury interior-design projects.",
      "job1.b4": "Leveraged AI tools and automation to optimize creative workflows and strengthen digital presence in local and international markets.",
      "job1.b5": "Facilitated collaboration between technical and creative teams for consistent brand representation.",
      "job2.p": "2022 — Mid 2026",
      "job2.title": "IT Systems Coordinator & Team Manager",
      "job2.org": "Wael Coating & Decoration · Sheraton, Damascus",
      "job2.b1": "Managed and maintained IT infrastructure to ensure reliable daily operations.",
      "job2.b2": "Led and coordinated teams to achieve project objectives efficiently.",
      "job2.b3": "Improved workflows through digital-media solutions and AI-powered tools.",
      "job2.b4": "Facilitated communication between technical and administrative departments.",
      "job2.b5": "Oversaw technical maintenance and provided staff training and support.",
      "job3.p": "2020 — 2024",
      "job3.title": "Freelance Graphic Designer", "job3.org": "Independent",
      "job3.b1": "Designed visual identities and marketing materials for digital & print media.",
      "job3.b2": "Applied visual-communication and UX principles to deliver clear, effective designs.",
      "job4.p": "2018 — Present",
      "job4.title": "Mobile & Laptop Specialist (Part-Time)", "job4.org": "Retail & Service",
      "job4.b1": "Diagnose and troubleshoot hardware and software issues in mobile devices and laptops.",
      "job4.b2": "Provide system optimization, technical maintenance and customer support.",
      "job5.p": "2015 — 2025",
      "job5.title": "Freelance Photographer", "job5.org": "Instagram — tareq_mhysen_photography",
      "job5.b1": "Managed photography projects, digital imaging, photo editing and enhancement.",
      "job5.b2": "Maintained client communication and delivered high-quality visual content.",
      "edu.title": "Bachelor's — AI Engineering & Data Science",
      "edu.org": "Syrian Private University (SPU) · Damascus, Syria",
      "edu.desc": "Graduated with strong academic performance in technical projects, demonstrating the ability to apply AI, Machine Learning and Deep Learning to real-world challenges.",

      "vol.title": "Beyond work", "vol.title2": "— volunteering",
      "vol1.title": "Annual Robotic Competition",
      "vol1.desc": "Organizing & on-ground support, fostering innovation and collaboration.",
      "vol2.title": "SPU Student Support Committee",
      "vol2.desc": "2025–2026 · Supporting faculty operations & student experience.",
      "vol3.title": "Designer / Supervisor — Volunteer Team",
      "vol3.desc": "Led design initiatives and provided IT support for students.",
      "vol4.title": "Editor / Developer — @SPU_ITbot",
      "vol4.desc": "Built content for the official SPU student Telegram bot.",
      "vol5.title": "University Photography Team",
      "vol5.desc": "Documented key institutional events and narratives.",

      "gal.kicker": "06. creative side",
      "gal.title": 'A photographer\'s <span class="grad">eye</span>.',
      "gal.sub": "Since 2015 I've been crafting with light and pixels — photography, visual identity and media production, elevated by AI.",
      "gal.ph.t": "Behind the lens", "gal.ph.tag": "Since 2015",
      "g1.title": "Portrait Photography", "g1.tag": "Photography",
      "g2.title": "Events & University Life", "g2.tag": "Photography",
      "g3.title": "Visual Identity", "g3.tag": "Design",
      "g4.title": "Marketing Materials", "g4.tag": "Design",
      "g5.title": "Multimedia Production", "g5.tag": "Media",
      "g6.title": "AI-Enhanced Editing", "g6.tag": "AI + Art",

      "cert.kicker": "07. certifications",
      "cert.title": 'Always <span class="grad">learning</span>.',
      "cert.sub": "15 certificates across LLM engineering, generative AI, prompt engineering and databases.",
      "cert.count": "15 certificates · 6 providers",
      "cert.view": "View certificate",
      "cert.open": "Open original",
      "c0.title": "Agentic AI",
      "c1.title": "Generative AI with Large Language Models",
      "c2.title": "Neural Networks and Deep Learning",
      "c3.title": "LangChain for LLM Application Development",
      "c4.title": "LangChain: Chat with Your Data",
      "c5.title": "Generative AI for Enhanced Content Creation",
      "c6.title": "Generative AI Content Creation",
      "c7.title": "Editing and Enhancing AI-Generated Content",
      "c8.title": "Prompt Engineering for ChatGPT",
      "c9.title": "Generative AI Primer",
      "c10.title": "Generative AI in Marketing",
      "c11.title": "Database Creation and Design",
      "c12.title": "Gemini Certified Student (K12)",
      "c13.title": "Gemini Certified Student (University)",
      "c14.title": "Gemini Certified Educator",

      "ref.kicker": "08. references",
      "ref.title": 'Trusted by <span class="grad">academia</span>.',
      "ref.sub": "Academic references from the faculty where I studied and volunteered.",
      "ref1.name": "Dr. Mouhib Al-Noukari",
      "ref1.role": "Dean of the Faculty of Artificial Intelligence Engineering",
      "ref1.org": "Syrian Private University (SPU)",
      "ref1.phone": "+963 965 110 065",
      "ref2.name": "Eng. Aya Alaswad",
      "ref2.role": "Teaching Assistant & Lab Instructor, Faculty of Informatics Engineering (ITE)",
      "ref2.org": "Syrian Private University (SPU)",
      "ref2.phone": "+963 959 411 465",
      "ref.note": "More contact details available upon request.",

      "ct.kicker": "09. contact",
      "ct.title": 'Let\'s build something <span class="grad">intelligent</span> together.',
      "ct.sub": "Open to AI/ML roles, freelance projects and collaborations. My inbox is always open.",
      "ct.email": "Email", "ct.phone": "Phone", "ct.loc": "Location",
      "ct.locv": "Rif Dimashq, Ain Mneen — Syria",
      "ct.copy": "Copy", "ct.save": "Save Contact",

      "m.highlights": "Highlights", "m.stack": "Tech Stack",
      "ft.line": "Tareq Mhysen",
      "ft.note": "References available upon request.",
      "toast.copied": "Email copied ✓",
      "copy.done": "Copied ✓",
      "toast.saved": "Contact card downloaded ✓",
    },

    ar: {
      "nav.home": "الرئيسية", "nav.about": "نبذة عني", "nav.projects": "المشاريع",
      "nav.skills": "المهارات", "nav.experience": "الخبرات", "nav.contact": "تواصل معي",
      "nav.resume": "سيرتي الذاتية",
      "dot.home": "الرئيسية", "dot.about": "نبذة عني", "dot.services": "الخدمات",
      "dot.projects": "المشاريع", "dot.skills": "المهارات", "dot.experience": "الخبرات",
      "dot.gallery": "الإبداع", "dot.certifications": "الشهادات",
      "dot.references": "التوصيات", "dot.contact": "تواصل",

      "hero.badge": "مهندس ذكاء اصطناعي وعلوم بيانات · رئاسة الجمهورية",
      "hero.desc": "مهندس ذكاء اصطناعي وعلوم بيانات في <strong>الأمانة العامة لرئاسة الجمهورية العربية السورية</strong>، أطوّر وأضبط <strong>النماذج اللغوية الكبيرة</strong> و<strong>أنظمة RAG الآمنة</strong> وحلول <strong>الرؤية الحاسوبية</strong> لمهام مؤسسية حساسة.",
      "hero.cta1": "شاهد أعمالي", "hero.cta2": "تحميل السيرة",
      "stats.projects": "مشاريع ذكاء اصطناعي", "stats.detection": "دقة كشف المالوير",
      "stats.resolution": "جودة استجابة RAG", "stats.years": "سنوات في المجال التقني",

      "about.kicker": "01. نبذة عني",
      "about.title": 'هندسة الذكاء،<br /><span class="grad">بإبداع.</span>',
      "about.bio1": "أنا <strong>طارق محيسن</strong>، مهندس ذكاء اصطناعي وعلوم بيانات من دمشق، سوريا. أبني تطبيقات ذكية مدعومة <strong>بالنماذج اللغوية الكبيرة</strong> و<strong>التوليد المعزز بالاسترجاع</strong> وقواعد البيانات المتجهية ورسومات المعرفة — أنظمة تفهم السياق وتقدّم إجابات دقيقة وذات معنى.",
      "about.bio2": "إلى جانب النماذج والشيفرات، أنا <strong>مصوّر</strong> و<strong>مصمم</strong> — ولهذا مشاريعي لا تعمل جيداً فحسب، بل <em>تبدو</em> و<em>تُحَسّ</em> بشكل صحيح. أعيش عند تقاطع الهندسة الدقيقة والسرد البصري.",
      "about.point1": "بكالوريوس هندسة الذكاء الاصطناعي وعلوم البيانات — الجامعة السورية الخاصة (2021–2026)",
      "about.point2": "مشروع التخرج الأبرز: مستشار أكاديمي Agentic AI‏ (RAG + LLMs)",
      "about.point3": "أكثر من 8 سنوات في دمج التقنية والذكاء الاصطناعي والإعلام والإنتاج الإبداعي",
      "about.name": "طارق محيسن", "about.role": "مهندس ذكاء اصطناعي وعلوم بيانات", "about.open": "متاح للعمل",
      "about.fLoc": "الموقع", "about.vLoc": "ريف دمشق، عين منين — سوريا",
      "about.fDeg": "الدرجة", "about.vDeg": "بكالوريوس هندسة الذكاء الاصطناعي وعلوم البيانات",
      "about.fUni": "الجامعة", "about.vUni": "الجامعة السورية الخاصة",
      "about.fYears": "السنوات", "about.fDob": "تاريخ الميلاد",
      "about.fLang": "اللغات", "about.vLang": "العربية · الإنجليزية",
      "about.fMail": "البريد", "about.fPhone": "الهاتف",

      "ach1.title": "نجاح في كشف المالوير",
      "ach1.desc": "مصنّف DenseNet201 بصري بدقة 98.8% وAUC بقيمة 0.999 على 29,575 عينة تنفيذية متوازنة.",
      "ach2.title": "جودة استجابة RAG",
      "ach2.desc": "وكيل IntelliPath حقق 90.5% ‏(LLM-as-a-Judge) بزمن P95 يساوي 3.6 ثانية وكاش دلالي بتسريع 8.2×.",
      "ach3.title": "معيار فائق الدقة",
      "ach3.desc": "بلغ SwinIR قيمة PSNR 35.20 dB وSSIM 0.940 عند ×2 — الأفضل بين خمس بنياً قيست على DIV2K.",

      "services.kicker": "02. الخدمات",
      "services.title": 'ماذا <span class="grad">أقدّم</span>؟',
      "services.sub": "من أنظمة RAG الذكية إلى الإنتاج الإبداعي — منظومة مهارات تجمع بين هندسة رصينة وحسّ فني.",
      "srv1.title": "حلول الذكاء الاصطناعي وLLMs",
      "srv1.desc": "وكلاء أذكياء، وخطوط RAG، وتطبيقات نماذج لغوية موصولة بقاعدة معرفتك ومخازن المتجهات.",
      "srv2.title": "الرؤية الحاسوبية",
      "srv2.desc": "كشف وتصنيف وتحسين صور — من تحليل أورام الرنين المغناطيسي إلى فائق الدقة بشبكات GAN.",
      "srv3.title": "علوم البيانات وتعلّم الآلة",
      "srv3.desc": "بناء النماذج وتقييمها وتحسينها مع خطوط معالجة بيانات موثوقة ومقاييس صادقة.",
      "srv4.title": "واجهات برمجية وأنظمة خلفية",
      "srv4.desc": "واجهات REST سريعة بـFastAPI، وطبقات بيانات SQL وNoSQL، ونشر بحاويات Docker.",
      "srv5.title": "حلول تقنية ودعم",
      "srv5.desc": "إدارة بنية تحتية، ودعم فني، وأتمتة سير العمل — بخبرة ميدانية منذ 2018.",
      "srv6.title": "إعلام وإنتاج إبداعي",
      "srv6.desc": "تصوير احترافي، وهوية بصرية، ومحتوى تسويقي — بلمسات معالجة مدعومة بالذكاء الاصطناعي.",

      "projects.kicker": "03. المشاريع",
      "projects.title": 'أشياء <span class="grad">بنيتها</span>.',
      "projects.sub": "من وكلاء RAG الأذكياء إلى شبكات GAN التي تصحّح الواقع — كل مشروع أُنجز وقيس وعُرض. اضغط أي بطاقة للتفاصيل الكاملة.",
      "projects.none": "لا شيء في هذه الفئة بعد — قريباً.",
      "flt.all": "الكل", "flt.ai": "ذكاء اصطناعي وLLMs", "flt.vision": "الرؤية الحاسوبية", "flt.nlp": "معالجة اللغات", "flt.iot": "إنترنت الأشياء والأنظمة",
      "pr.more": "التفاصيل ←",

      "pr1.title": "IntelliPath — مستشار أكاديمي بوكيل ذكي",
      "pr1.year": "أيلول 2025 — 2026",
      "pr1.type": "مشروع تخرج II · Agentic RAG + LLMs",
      "pr1.desc": 'منصة وكيلة بـ<b>27 أداة متخصصة</b> ونظام Hybrid RAG ‏(دلالي + نصي كامل بدمج RRF). جودة استجابة <b>90.5%</b> ‏(LLM-as-a-Judge) بزمن <b>P95 = 3.6 ثانية</b>.',
      "pr1.badge": "🎯 جودة 90.5%",
      "pr2.title": "فائق دقة الصور بالذكاء الاصطناعي — ISR",
      "pr2.type": "مشروع تخرج I · فائق دقة الصور",
      "pr2.desc": 'مقارنة PyTorch لخمسة نماذج على DIV2K — يتصدر SwinIR عند ×2 بـ<b>PSNR 35.20 dB / SSIM 0.940</b>، مع دراسة دوال خسارة (الأفضل L1+VGG).',
      "pr3.title": "تحليلات ذكية للبرمجيات الخبيثة — مصنّف تعلّم عميق",
      "pr3.type": "مشروع مبكّر · أمن بتعلّم عميق",
      "pr3.desc": 'ملفات تنفيذية → صور رمادية → شبكات CNN مضبوطة. <b>DenseNet201: دقة 98.8% وAUC 0.999</b> على 29,575 عينة متوازنة — مُختبَر على ملفات حقيقية.',
      "pr3.badge": "⚡ دقة 98.8%",
      "pr9.title": "كشف المالوير — تقنيات الذكاء الاصطناعي (بيانات جدولية)",
      "pr9.type": "مشروع أكاديمي · تعلم آلي كلاسيكي",
      "pr9.desc": 'نموذج هجين <b>Random Forest + KNN</b> فوق 216 خاصية تطبيق — <b>دقة 98.84% وF1 98.83%</b> بضبط GridSearchCV على 15,036 عينة.',
      "pr9.badge": "⚡ F1 98.84%",
      "pr4.title": "تصنيف أورام الدماغ",
      "pr4.type": "تعلّم عميق · صحة",
      "pr4.year": "ذكاء طبي",
      "pr4.desc": 'خط معالجة ResNet50 يصنّف صور الرنين المغناطيسي إلى فئات الأورام بـ<b>AUC نسبته 0.8796</b> مع تحقق ROC.',
      "pr5.title": "الرسم في الهواء بالذكاء الاصطناعي",
      "pr5.type": "رؤية حاسوبية · تفاعل",
      "pr5.year": "رؤية لحظية",
      "pr5.desc": "ارسم في الهواء: تتبع اليد اللحظي يحوّل الإيماءات إلى خطوط على لوحة افتراضية — بلا ماوس ولا كيبورد.",
      "pr6.title": "التلخيص التوليدي للنصوص",
      "pr6.type": "معالجة لغات · تطبيق Streamlit",
      "pr6.year": "ترانسفورمر",
      "pr6.desc": "ملخّص مبني على BART يختصر المستندات الطويلة إلى ملخصات موجزة وذات معنى — بواجهة Streamlit أنيقة.",
      "pr7.title": "منزل ذكي بإنترنت الأشياء",
      "pr7.type": "Raspberry Pi · أتمتة",
      "pr7.year": "أنظمة مدمجة",
      "pr7.desc": "منظومة منزل ذكي كاملة: تحكم بالأجهزة ومراقبة حية للحساسات عبر MQTT، مع لوحة Flask وسجل SQLite.",
      "pr8.title": "محرك تحسين PSO",
      "pr8.type": "ذكاء السرب",
      "pr8.year": "تحسين",
      "pr8.desc": "خوارزمية سرب الجزيئات تحل مسائل تحسين حقيقية بكفاءة — مع تحليلات بصرية غنية.",

      "skills.kicker": "04. المهارات",
      "skills.title": 'صندوق <span class="grad">أدواتي</span>.',
      "skills.sub": "منظومة هندسة ذكاء اصطناعي متكاملة — من لغات البرمجة والأطر إلى بنية البيانات وأساسيات علوم الحاسب.",
      "skills.total": "6 تخصصات · 74 مهارة",
      "skills.unit": "مهارة",
      "skills.cats": "تخصصات",
      "sk1.title": "لغات البرمجة", "sk2.title": "الذكاء التوليدي وLLMs",
      "sk3.title": "تعلّم الآلة والتعلّم العميق", "sk4.title": "الأطر والمكتبات",
      "sk5.title": "البيانات والبنية التحتية", "sk6.title": "الأدوات والمفاهيم",

      "exp.kicker": "05. الخبرات",
      "exp.title": 'أين <span class="grad">عملت</span>.',
      "job0.p": "منتصف 2026 — الآن",
      "job0.badge": "المنصب الحالي",
      "job0.title": "مهندس ذكاء اصطناعي وعلوم بيانات",
      "job0.org": "الأمانة العامة لرئاسة الجمهورية العربية السورية",
      "job0.b1": "تطوير وضبط دقيق (Fine-Tuning) لنماذج لغوية كبيرة لخدمة مهام مؤسسية حساسة.",
      "job0.b2": "بناء أنظمة RAG متقدمة فوق قواعد معرفة رسمية مع فهارس متجهية آمنة.",
      "job0.b3": "هندسة الخصائص وخطوط علوم البيانات لتحويل بيانات المؤسسة إلى رؤى وقرارات.",
      "job0.b4": "نشر الحلول بحاويات Docker ضمن بيئات عالية الموثوقية والسرية.",
      "job1.p": "2023 — منتصف 2026",
      "job1.title": "أخصائي تقنية معلومات وإعلام وحلول ذكاء اصطناعي",
      "job1.org": "أرتيزان للتصميم الداخلي · سوريا ودبي",
      "job1.b1": "إدارة بنية التقنية المعلوماتية والصيانة والدعم الفني في فرعي دمشق ودبي.",
      "job1.b2": "تنسيق وتنفيذ المبادرات التقنية والإعلام الرقمي والذكاء الاصطناعي لرفع كفاءة العمل.",
      "job1.b3": "قيادة الإنتاج الإعلامي وتطوير المحتوى، بما في ذلك الأصول البصرية والعروض التسويقية لمشاريع التصميم الداخلي الفاخر.",
      "job1.b4": "توظيف أدوات الذكاء الاصطناعي والأتمتة لتحسين سير العمل الإبداعي وتعزيز الحضور الرقمي محلياً ودولياً.",
      "job1.b5": "تسهيل التعاون بين الفرق التقنية والإبداعية لضمان تواصل فعّال وتمثيل متسق للعلامة.",
      "job2.p": "2022 — منتصف 2026",
      "job2.title": "منسق أنظمة تقنية ومدير فريق",
      "job2.org": "وائل للدهانات والديكور · الشيراتون، دمشق",
      "job2.b1": "إدارة وصيانة بنية التقنية المعلوماتية لضمان عمليات يومية موثوقة.",
      "job2.b2": "قيادة الفرق وتنسيقها لتحقيق أهداف المشاريع بكفاءة.",
      "job2.b3": "تحسين سير العمل عبر حلول الإعلام الرقمي وأدوات الذكاء الاصطناعي.",
      "job2.b4": "تسهيل التواصل بين الأقسام التقنية والإدارية.",
      "job2.b5": "الإشراف على الصيانة التقنية وتقديم التدريب والدعم للموظفين.",
      "job3.p": "2020 — 2024",
      "job3.title": "مصمم جرافيك مستقل", "job3.org": "عمل حر",
      "job3.b1": "تصميم هويات بصرية ومواد تسويقية للوسائط الرقمية والمطبوعة.",
      "job3.b2": "تطبيق مبادئ التواصل البصري وتجربة المستخدم لتقديم تصاميم واضحة وفعّالة.",
      "job4.p": "2018 — الآن",
      "job4.title": "أخصائي هواتف وحواسيب (بدوام جزئي)", "job4.org": "تجزئة وخدمات",
      "job4.b1": "تشخيص وإصلاح مشكلات العتاد والبرمجيات في الهواتف والحواسيب.",
      "job4.b2": "تحسين الأنظمة والصيانة التقنية ودعم العملاء.",
      "job5.p": "2015 — 2025",
      "job5.title": "مصوّر فوتوغرافي مستقل", "job5.org": "إنستغرام — tareq_mhysen_photography",
      "job5.b1": "إدارة مشاريع التصوير والمعالجة الرقمية وتحسين الصور.",
      "job5.b2": "التواصل مع العملاء وتسليم محتوى بصري عالي الجودة.",
      "edu.title": "بكالوريوس — هندسة الذكاء الاصطناعي وعلوم البيانات",
      "edu.org": "الجامعة السورية الخاصة (SPU) · دمشق، سوريا",
      "edu.desc": "تخرّجت بأداء أكاديمي قوي في المشاريع التقنية، مع قدرة على تطبيق الذكاء الاصطناعي وتعلّم الآلة والتعلّم العميق لحل تحديات واقعية.",

      "vol.title": "خارج العمل", "vol.title2": "— التطوع",
      "vol1.title": "مسابقة الروبوت السنوية",
      "vol1.desc": "تنظيم ودعم ميداني، تعزيزًا للابتكار والتعاون التقني.",
      "vol2.title": "لجنة دعم الطلبة — SPU",
      "vol2.desc": "2025–2026 · دعم العمليات الأكاديمية وتجربة الطلبة.",
      "vol3.title": "مصمم ومشرف — فريق التطوع",
      "vol3.desc": "قدت مبادرات التصميم وقدمت دعمًا تقنيًا للطلبة.",
      "vol4.title": "محرر ومطوّر — @SPU_ITbot",
      "vol4.desc": "بناء المحتوى لبوت تيليجرام الرسمي لطلبة الجامعة.",
      "vol5.title": "فريق التصوير الجامعي",
      "vol5.desc": "توثيق الفعاليات المؤسسية والسرد البصري للجامعة.",

      "gal.kicker": "06. الجانب الإبداعي",
      "gal.title": 'عين <span class="grad">مصوّر</span>.',
      "gal.sub": "منذ 2015 وأنا أصنع بالضوء والبكسل — تصوير، هوية بصرية، وإنتاج وسائط، بلمسة ذكاء اصطناعي.",
      "gal.ph.t": "من خلف العدسة", "gal.ph.tag": "منذ 2015",
      "g1.title": "تصوير بورتريه", "g1.tag": "تصوير",
      "g2.title": "فعاليات وحياة جامعية", "g2.tag": "تصوير",
      "g3.title": "هوية بصرية", "g3.tag": "تصميم",
      "g4.title": "مواد تسويقية", "g4.tag": "تصميم",
      "g5.title": "إنتاج وسائط", "g5.tag": "إعلام",
      "g6.title": "معالجة بالذكاء الاصطناعي", "g6.tag": "AI + فن",

      "cert.kicker": "07. الشهادات",
      "cert.title": 'تعلّم <span class="grad">دائمًا</span>.',
      "cert.sub": "‏15 شهادة في هندسة النماذج اللغوية والذكاء التوليدي وهندسة الأوامر وقواعد البيانات.",
      "cert.count": "‏15 شهادة · 6 جهات مانحة",
      "cert.view": "عرض الشهادة",
      "cert.open": "فتح الأصل",
      "c0.title": "الذكاء الوكيل (Agentic AI)",
      "c1.title": "الذكاء التوليدي مع النماذج اللغوية الكبيرة",
      "c2.title": "الشبكات العصبية والتعلّم العميق",
      "c3.title": "LangChain لتطوير تطبيقات LLM",
      "c4.title": "LangChain: الدردشة مع بياناتك",
      "c5.title": "الذكاء التوليدي لإثراء صناعة المحتوى",
      "c6.title": "إنشاء محتوى الذكاء التوليدي",
      "c7.title": "تحرير وتعزيز المحتوى المولّد بالذكاء الاصطناعي",
      "c8.title": "هندسة الأوامر لـChatGPT",
      "c9.title": "أساسيات الذكاء التوليدي",
      "c10.title": "الذكاء التوليدي في التسويق",
      "c11.title": "إنشاء قواعد البيانات وتصميمها",
      "c12.title": "شهادة Gemini للطلبة (K12)",
      "c13.title": "شهادة Gemini للطلبة الجامعيين",
      "c14.title": "مربّي Gemini المعتمد",

      "ref.kicker": "08. التوصيات",
      "ref.title": 'ثقة <span class="grad">أكاديمية</span>.',
      "ref.sub": "مراجع أكاديميون من الكلية التي درست وتطوعت فيها.",
      "ref1.name": "د. مهيب النقري",
      "ref1.role": "عميد كلية هندسة الذكاء الاصطناعي",
      "ref1.org": "الجامعة السورية الخاصة (SPU)",
      "ref1.phone": "+963 965 110 065",
      "ref2.name": "م. آية الأسود",
      "ref2.role": "معيدة ومشرفة مختبرات — كلية الهندسة المعلوماتية (ITE)",
      "ref2.org": "الجامعة السورية الخاصة (SPU)",
      "ref2.phone": "+963 959 411 465",
      "ref.note": "مزيد من بيانات التواصل متاحة عند الطلب.",

      "ct.kicker": "09. تواصل",
      "ct.title": 'لنبنِ شيئًا <span class="grad">ذكيًا</span> معًا.',
      "ct.sub": "متاح لوظائف AI/ML ومشاريع حرة وتعاونات. بريدي مفتوح دائمًا.",
      "ct.email": "البريد الإلكتروني", "ct.phone": "الهاتف", "ct.loc": "الموقع",
      "ct.locv": "ريف دمشق، عين منين — سوريا",
      "ct.copy": "نسخ", "ct.save": "حفظ جهة الاتصال",

      "m.highlights": "أبرز النقاط", "m.stack": "التقنيات المستخدمة",
      "ft.line": "طارق محيسن",
      "ft.note": "التوصيات متاحة عند الطلب.",
      "toast.copied": "تم نسخ البريد الإلكتروني ✓",
      "copy.done": "تم النسخ ✓",
      "toast.saved": "تم تنزيل بطاقة التواصل ✓",
    },
  };

  const TITLES = {
    en: "Tareq Mhysen — AI & Data Science Engineer",
    ar: "طارق محيسن — مهندس ذكاء اصطناعي وعلوم بيانات",
  };

  const ROLES = {
    en: ["AI & Data Science Engineer", "LLM & Agentic RAG Developer", "Computer Vision Engineer", "Data Scientist", "Creative Technologist"],
    ar: ["مهندس ذكاء اصطناعي وعلوم بيانات", "مطوّر أنظمة LLM وRAG الوكيلة", "مهندس رؤية حاسوبية", "عالم بيانات", "تقني مبدع ومصوّر"],
  };

  /* ═══════════════ PROJECT MODAL DATA ═══════════════ */
  const PROJECTS = {
    intellipath: {
      year: "Sept 2025 — 2026",
      tags: ["Agentic AI", "Hybrid RAG", "Qdrant", "pgvector", "Supabase", "Neo4j", "React 18 + TypeScript", "Deno Edge Functions", "Docker"],
      en: {
        title: "IntelliPath — Agentic AI Academic Advisor",
        type: "Senior Project II · Agentic RAG + LLMs",
        desc: [
          "An agentic academic-advising platform I built individually as my Senior Project II (2025–2026) at the SPU Faculty of AI Engineering. Supervised by Dr. Mouhib Al-Noukari and Eng. Aya Alaswad. An agent with 27 specialized tools answers students' natural-language questions with cited sources.",
          "Hybrid RAG combines semantic search (Qdrant / pgvector) with full-text search in PostgreSQL, fused via Reciprocal Rank Fusion — retrieval accuracy reached 85%, +9% over pure semantic search. The backend runs on Supabase (66+ tables, Auth, Row Level Security) with 35+ Deno Edge Functions and a Neo4j knowledge graph for career paths.",
        ],
        highlights: [
          "Response quality 90.5% (1.81/2.0) measured by LLM-as-a-Judge",
          "Tool selection 94% accuracy · 96.6% error-free recovery",
          "P95 latency 3.6s · Semantic cache 8.2× speed-up (33.3% hit rate)",
          "Retrieval accuracy 85% (+9% from Hybrid RAG) · 99.2% uptime",
          "Evaluated on 130 courses, 5,422 chunks (1,536-dim vectors), 52 test cases",
        ],
      },
      ar: {
        title: "IntelliPath — مستشار أكاديمي بوكيل ذكي",
        type: "مشروع تخرج II · Agentic RAG + LLMs",
        desc: [
          "منصة إرشاد أكاديمي وكيلة بنيتها فردياً كمشروع التخرج الثاني (2025–2026) في كلية هندسة الذكاء الاصطناعي بالجامعة السورية الخاصة، بإشراف د. مهيب النقري وم. آية الأسود. وكيل ذكي بـ27 أداة متخصصة يجيب أسئلة الطلبة بلغة طبيعية مع ذكر المصادر.",
          "يجمع نظام Hybrid RAG بين البحث الدلالي (Qdrant / pgvector) والبحث النصي الكامل في PostgreSQL مع دمج النتائج بـ Reciprocal Rank Fusion — فبلغت دقة الاسترجاع 85%، بتحسن 9% عن البحث الدلالي وحده. تعمل الخلفية على Supabase (أكثر من 66 جدولاً مع Auth وRow Level Security) و35+ دالة Deno Edge Function، مع رسم معرفي Neo4j للمسارات المهنية.",
        ],
        highlights: [
          "جودة الاستجابة 90.5% ‏(1.81/2.0) بقياس LLM-as-a-Judge",
          "دقة اختيار الأدوات 94% · استرداد أخطاء 96.6% بدون خطأ ظاهر",
          "زمن استجابة P95 = 3.6 ثانية · كاش دلالي بتسريع 8.2× (إصابة 33.3%)",
          "دقة استرجاع 85% (+9% بفضل Hybrid RAG) · جهوزية 99.2%",
          "تقييم على 130 مقرراً و5,422 قطعة نصية (متجهات بُعد 1,536) و52 حالة اختبار",
        ],
      },
    },
    isr: {
      year: "2025",
      tags: ["PyTorch", "SwinIR", "EDSR", "RCAN", "TECOGAN", "DIV2K", "PSNR / SSIM", "TensorBoard"],
      en: {
        title: "AI Image Super-Resolution — ISR",
        type: "Senior Project I · Image Super-Resolution",
        desc: [
          "A practical PyTorch comparison of five super-resolution models — EDSR, RCAN, SwinIR, TECOGAN and a custom ComplexEDSR — trained on DIV2K and tested on Set5, Set14, BSD100 and Urban100 with full augmentation. Supervised by Dr. Assef Jaafar and Eng. Aya Alaswad.",
          "SwinIR delivered the best results: 35.20 dB PSNR / 0.940 SSIM at ×2 upscaling. A loss-function study on EDSR showed L1+VGG mixing performs best (32.9 dB) and L1 beats L2 (32.5 vs 31.8 dB). Training used Adam + CosineAnnealingLR with early stopping and best-checkpoint selection.",
        ],
        highlights: [
          "SwinIR best at ×2: 35.20 dB PSNR · 0.940 SSIM",
          "5 architectures benchmarked across ×2 / ×4 / ×8 upscaling",
          "Loss study: L1+VGG hybrid > L1 > L2",
          "Rigorous PSNR / SSIM / LPIPS evaluation methodology",
        ],
      },
      ar: {
        title: "فائق دقة الصور بالذكاء الاصطناعي — ISR",
        type: "مشروع تخرج I · فائق دقة الصور",
        desc: [
          "مقارنة عملية بـPyTorch بين خمسة نماذج لفائق دقة الصور — EDSR وRCAN وSwinIR وTECOGAN ونسخة ComplexEDSR مطورة — بتدريب على DIV2K واختبار على Set5 وSet14 وBSD100 وUrban100 مع تكبير بيانات كامل، بإشراف د. آصف جعفر وم. آية الأسود.",
          "حقق SwinIR أفضل النتائج: 35.20 dB ‏PSNR و0.940 SSIM عند التكبير ×2. ودراسة دوال الخسارة على EDSR أظهرت تفوق مزج L1+VGG ‏(32.9 dB) وتفوق L1 على L2 ‏(32.5 مقابل 31.8 dB). استخدم التدريب Adam مع CosineAnnealingLR وEarly Stopping وحفظ أفضل Checkpoint.",
        ],
        highlights: [
          "SwinIR الأفضل عند ×2: ‏PSNR يساوي 35.20 dB · SSIM يساوي 0.940",
          "خمس بنى معمارية مقارنة عبر تكبيرات ×2 / ×4 / ×8",
          "دراسة خسائر: مزج L1+VGG > L1 > L2",
          "منهجية تقييم صارمة بمؤشرات PSNR / SSIM / LPIPS",
        ],
      },
    },
    malware: {
      year: "2024 — 2025",
      tags: ["TensorFlow / Keras", "DenseNet201", "Transfer Learning", "Pillow", "Jupyter"],
      en: {
        title: "Intelligent Malware Analytics — Deep Learning Classifier",
        type: "Junior Project · Deep Learning Security",
        desc: [
          "A deep-learning classifier (joint project with Ghena Omar-Hussain, supervised by Dr. Maisaa Abu-Qassem) that distinguishes malicious from clean executables by converting them into grayscale images with Pillow, resizing to 224×224 RGB, then fine-tuning ImageNet-pretrained models with TensorFlow/Keras.",
          "Trained on a balanced dataset of 29,575 samples (14,713 malicious / 14,862 clean, 70/15/15 split). DenseNet201 led five benchmarked architectures with 98.8% accuracy and 0.999 AUC, validated on real unseen executables.",
        ],
        highlights: [
          "DenseNet201: 98.8% accuracy · 0.999 AUC",
          "ResNet50 96.9% · VGG16 92.4% — five architectures compared",
          "Balanced dataset of 29,575 executable samples",
          "Validated on real, previously-unseen files",
        ],
      },
      ar: {
        title: "تحليلات ذكية للبرمجيات الخبيثة — مصنّف تعلّم عميق",
        type: "مشروع مبكّر · أمن بتعلّم عميق",
        desc: [
          "مصنّف تعلم عميق (مشروع مشترك مع غنى عمر حسين، بإشراف د. ميساء أبو قاسم) يميّز الملفات التنفيذية الخبيثة من النظيفة عبر تحويلها إلى صور Grayscale بـPillow وتوحيد حجمها 224×224 RGB، ثم الضبط الدقيق لنماذج مدرّبة مسبقاً على ImageNet بـTensorFlow/Keras.",
          "درّب على بيانات متوازنة من 29,575 عينة (14,713 خبيثة / 14,862 نظيفة بتقسيم 70/15/15). تفوق DenseNet201 على خمس بنى مقارنة بدقة 98.8% وAUC بقيمة 0.999، مع اختبار على ملفات حقيقية غير مرئية مسبقاً.",
        ],
        highlights: [
          "DenseNet201: دقة 98.8% · AUC بقيمة 0.999",
          "ResNet50 بدقة 96.9% وVGG16 بدقة 92.4% — مقارنة خمس بنى",
          "بيانات متوازنة من 29,575 عينة تنفيذية",
          "مُختبَر على ملفات حقيقية غير مرئية مسبقاً",
        ],
      },
    },
    malwareml: {
      year: "2023 — 2024",
      tags: ["Scikit-learn", "Random Forest", "KNN", "GridSearchCV", "Pandas", "Joblib"],
      en: {
        title: "Malware Detection with AI Techniques (Tabular ML)",
        type: "Academic Project · Classical Machine Learning",
        desc: [
          "An individual ML project (supervised by Dr. Maisaa Abu-Qassem) detecting malicious applications from tabular data: 15,036 samples with 216 mostly-binary features (API + CALLS) from FigShare, with full EDA, encoding, correlation analysis and 80/20 split.",
          "A hybrid Random Forest + KNN model — tuned with GridSearchCV — reached 98.84% accuracy / 98.83% F1, edging out pure KNN (98.77%) and Random Forest (98.70%). Models persisted with Joblib for reuse.",
        ],
        highlights: [
          "Hybrid RF+KNN: 98.84% accuracy · 98.83% F1",
          "15,036 samples · 216 engineered features",
          "GridSearchCV tuning · benchmark against 7 research papers",
        ],
      },
      ar: {
        title: "كشف البرمجيات الخبيثة بتقنيات الذكاء الاصطناعي (بيانات جدولية)",
        type: "مشروع أكاديمي · تعلم آلي كلاسيكي",
        desc: [
          "مشروع فردي بتعلّم الآلي (بإشراف د. ميساء أبو قاسم) لكشف التطبيقات الخبيثة من بيانات جدولية: 15,036 عينة بـ216 خاصية ثنائية غالباً (API + CALLS) من FigShare، مع استكشاف بيانات كامل وترميز وتحليل ارتباط وتقسيم 80/20.",
          "نموذج هجين Random Forest + KNN — بعد ضبط المعاملات بـGridSearchCV — بلغ دقة 98.84% وF1 بقيمة 98.83%، متفوقاً على KNN وحده (98.77%) وRandom Forest وحده (98.70%). حُفظت النماذج بـJoblib لإعادة الاستخدام.",
        ],
        highlights: [
          "هجين RF+KNN: دقة 98.84% · F1 بقيمة 98.83%",
          "15,036 عينة · 216 خاصية هندسية",
          "ضبط GridSearchCV · مقارنة مع 7 أبحاث مرجعية",
        ],
      },
    },
    brain: {
      year: "Medical AI",
      tags: ["TensorFlow", "ResNet50", "MRI Dataset", "ROC-AUC"],
      en: {
        title: "Brain Tumor Classification",
        type: "Deep Learning · Healthcare",
        desc: [
          "A deep-learning pipeline that classifies brain MRI scans into tumor categories using transfer learning with ResNet50.",
          "Validation with ROC analysis achieved an AUC of 0.8796 — a solid result on a challenging, class-imbalanced medical dataset.",
        ],
        highlights: [
          "AUC of 0.8796 on MRI classification",
          "ResNet50 transfer learning",
          "ROC-based clinical-style validation",
        ],
      },
      ar: {
        title: "تصنيف أورام الدماغ",
        type: "تعلّم عميق · صحة",
        desc: [
          "خط معالجة بتعلّم عميق يصنّف صور الرنين المغناطيسي للدماغ إلى فئات أورام باستخدام التعلم بالنقل مع شبكة ResNet50.",
          "التحقق بتحليل ROC حقق AUC بقيمة 0.8796 — نتيجة قوية لبيانات طبية صعبة وغير متوازنة.",
        ],
        highlights: [
          "AUC بقيمة 0.8796 في تصنيف صور MRI",
          "تعلم بالنقل مع شبكة ResNet50",
          "تحقق بأسلوب طبي عبر منحنيات ROC",
        ],
      },
    },
    airdraw: {
      year: "Real-time CV",
      tags: ["OpenCV", "MediaPipe", "NumPy", "PyAutoGUI"],
      en: {
        title: "AI Air Drawing",
        type: "Computer Vision · Interaction",
        desc: [
          "A computer-vision application that turns your hand into a brush. MediaPipe tracks 21 hand landmarks in real time while OpenCV renders strokes on a virtual canvas — pinch to draw, gestures to switch colors and clear.",
          "A fun exploration of real-time human-computer interaction with no hardware beyond a webcam.",
        ],
        highlights: [
          "Real-time tracking of 21 hand landmarks",
          "Gesture-driven drawing, color switching & erase",
          "Runs on a plain webcam",
        ],
      },
      ar: {
        title: "الرسم في الهواء بالذكاء الاصطناعي",
        type: "رؤية حاسوبية · تفاعل",
        desc: [
          "تطبيق رؤية حاسوبية يحوّل يدك إلى فرشاة. يتتبع MediaPipe ‏21 نقطة في اليد لحظيًا بينما يرسم OpenCV الخطوط على لوحة افتراضية — اقرص للرسم، واستخدم إيماءات لتبديل الألوان والمسح.",
          "استكشاف ممتع للتفاعل الإنساني-الحاسوبي اللحظي بدون أي عتاد إضافي غير كاميرا الويب.",
        ],
        highlights: [
          "تتبع لحظي لـ21 نقطة في اليد",
          "رسم وتبديل ألوان ومسح عبر الإيماءات",
          "يعمل بكاميرا ويب عادية",
        ],
      },
    },
    summarizer: {
      year: "Transformers",
      tags: ["Hugging Face", "BART", "NLTK", "Streamlit"],
      en: {
        title: "Abstractive Text Summarization",
        type: "NLP · Streamlit App",
        desc: [
          "An abstractive summarization tool built on the BART transformer. It condenses long articles and documents into concise, meaningful summaries while preserving the core message.",
          "Wrapped in a Streamlit interface with NLTK-powered text preprocessing.",
        ],
        highlights: [
          "Abstractive (not extractive) summarization with BART",
          "Clean, usable Streamlit UI",
          "NLTK preprocessing pipeline",
        ],
      },
      ar: {
        title: "التلخيص التوليدي للنصوص",
        type: "معالجة لغات · تطبيق Streamlit",
        desc: [
          "أداة تلخيص توليدي مبنية على نموذج BART الترانسفورمري. تختصر المقالات والمستندات الطويلة إلى ملخصات موجزة ذات معنى مع الحفاظ على الرسالة الأساسية.",
          "مغلّفة بواجهة Streamlit مع معالجة نصوص مسبقة عبر NLTK.",
        ],
        highlights: [
          "تلخيص توليدي وليس استخلاصيًا بنموذج BART",
          "واجهة Streamlit نظيفة وسهلة",
          "خط معالجة مسبقة عبر NLTK",
        ],
      },
    },
    iot: {
      year: "Embedded",
      tags: ["Raspberry Pi", "MQTT", "Flask", "SQLite", "Sensors"],
      en: {
        title: "IoT Smart Home",
        type: "Raspberry Pi · Automation",
        desc: [
          "A complete smart-home system on Raspberry Pi: appliances switch on and off through an MQTT broker, sensors stream live readings, and a Flask dashboard visualizes everything with SQLite history.",
          "Built end-to-end — wiring, firmware, broker configuration, backend and UI.",
        ],
        highlights: [
          "MQTT device mesh with live sensor telemetry",
          "Flask dashboard with SQLite history",
          "Full-stack: hardware to UI",
        ],
      },
      ar: {
        title: "منزل ذكي بإنترنت الأشياء",
        type: "Raspberry Pi · أتمتة",
        desc: [
          "نظام منزل ذكي متكامل على Raspberry Pi: تشغيل وإطفاء الأجهزة عبر وسيط MQTT، وبث قراءات الحساسات مباشرة، ولوحة Flask تعرض كل شيء مع سجل SQLite.",
          "بني بالكامل — من التوصيلات والبرمجيات الثابتة إلى إعداد الوسيط والخلفية والواجهة.",
        ],
        highlights: [
          "شبكة أجهزة MQTT مع قراءة لحظية للحساسات",
          "لوحة Flask مع سجل SQLite",
          "من العتاد إلى الواجهة",
        ],
      },
    },
    pso: {
      year: "Optimization",
      tags: ["Python", "NumPy", "Matplotlib", "Optimization Algorithms"],
      en: {
        title: "PSO Optimization Engine",
        type: "Swarm Intelligence",
        desc: [
          "A from-scratch implementation of Particle Swarm Optimization in NumPy, applied to real-world continuous optimization problems — with Matplotlib visualizations of swarm convergence.",
          "A deep dive into metaheuristics: inertia weights, cognitive and social coefficients, and how each shapes the search.",
        ],
        highlights: [
          "From-scratch vectorized PSO in NumPy",
          "Convergence analytics & parameter tuning",
          "Applied to real-world optimization problems",
        ],
      },
      ar: {
        title: "محرك تحسين PSO",
        type: "ذكاء السرب",
        desc: [
          "تنفيذ كامل لخوارزمية سرب الجزيئات من الصفر بلغة NumPy، مطبقًا على مسائل تحسين حقيقية مستمرة — مع تصورات Matplotlib لتقارب السرب.",
          "غوص عميق في الخوارزميات الاستدلالية: أوزان القصور الذاتي ومعاملات المعرفة والاجتماعية وأثر كل منها في البحث.",
        ],
        highlights: [
          "تنفيذ PSO متجهي من الصفر بـNumPy",
          "تحليل التقارب وضبط المعاملات",
          "تطبيق على مسائل تحسين حقيقية",
        ],
      },
    },
  };

  /* ═══════════════ LANGUAGE ═══════════════ */
  const storedLang = localStorage.getItem("tm-lang");
  let lang = storedLang || ((navigator.language || "en").toLowerCase().startsWith("ar") ? "ar" : "en");

  const t = (k) => (I18N[lang] && I18N[lang][k]) ?? I18N.en[k] ?? k;

  /* Toast */
  const toast = $("#toast");
  let toastTimer;
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  };

  /* Typewriter (restartable for language switch) */
  const tw = $("#typewriter");
  let twTimer = null;
  const startTypewriter = () => {
    if (!tw) return;
    clearTimeout(twTimer);
    if (prefersReduced) { tw.textContent = ROLES[lang][0]; return; }
    let ri = 0, ci = 0, deleting = false;
    const type = () => {
      const word = ROLES[lang][ri];
      tw.textContent = word.slice(0, ci);
      let delay = deleting ? 38 : 85;
      if (!deleting && ci === word.length) { delay = 1900; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % ROLES[lang].length; delay = 420; }
      else ci += deleting ? -1 : 1;
      twTimer = setTimeout(type, delay);
    };
    type();
  };

  /* Project modal */
  const modal = $("#project-modal");
  let currentProject = null;
  let lastFocus = null;

  const fillModal = () => {
    if (!currentProject || !modal || modal.hidden) return;
    const data = PROJECTS[currentProject];
    const d = data[lang] || data.en;
    $("#modal-year").textContent = data.year;
    $("#modal-title").textContent = d.title;
    $("#modal-type").textContent = d.type;
    $("#modal-desc").innerHTML = d.desc.map((p) => `<p>${p}</p>`).join("");
    $("#modal-highlights").innerHTML = d.highlights.map((h) => `<li>${h}</li>`).join("");
    $("#modal-tags").innerHTML = data.tags.map((tg) => `<span>${tg}</span>`).join("");
  };

  const openModal = (id) => {
    if (!modal || !PROJECTS[id]) return;
    currentProject = id;
    lastFocus = document.activeElement;
    modal.hidden = false;
    fillModal();
    requestAnimationFrame(() => modal.classList.add("show"));
    document.body.style.overflow = "hidden";
    $("#modal-close").focus();
  };

  const closeModal = () => {
    if (!modal || modal.hidden) return;
    modal.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => { modal.hidden = true; }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };

  /* Apply language to the whole page */
  const applyLang = (l) => {
    lang = l;
    localStorage.setItem("tm-lang", l);
    const html = document.documentElement;
    html.lang = l;
    html.dir = l === "ar" ? "rtl" : "ltr";
    document.title = TITLES[l];
    const lt = $("#lang-toggle");
    if (lt) lt.textContent = l === "ar" ? "EN" : "عربي";

    $$("[data-i18n]").forEach((el) => {
      const val = I18N[l][el.dataset.i18n];
      if (val == null) return;
      if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    });
    startTypewriter();
    refreshDotLabels();
    renderSkillMeta();
    fillModal(); // if modal is open, re-render in new language
  };

  const langBtn = $("#lang-toggle");
  if (langBtn) langBtn.addEventListener("click", () => applyLang(lang === "ar" ? "en" : "ar"));

  /* ═══════════════ THEME ═══════════════ */
  const metaTheme = $('meta[name="theme-color"]');
  const storedTheme = localStorage.getItem("tm-theme");
  let theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";

  const applyTheme = (th) => {
    theme = th;
    document.documentElement.dataset.theme = th;
    localStorage.setItem("tm-theme", th);
    if (metaTheme) metaTheme.setAttribute("content", th === "light" ? "#f2f4fc" : "#05060f");
  };
  applyTheme(theme);

  const themeBtn = $("#theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));

  /* ═══════════════ PRELOADER + INTRO ═══════════════ */
  const preloader = $("#preloader");
  const plPct = $("#pl-pct");
  const bodyEl = document.body;
  const INTRO_DUR = 1700;

  const SCRAMBLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%$*_/<>[]{}=+";
  const scrambleLine = (el, text, delay) => {
    if (!el) return;
    if (prefersReduced) { el.textContent = text; return; }
    const start = performance.now() + delay;
    const step = (now) => {
      const t = (now - start) / 720;
      if (t < 0) { requestAnimationFrame(step); return; }
      const p = Math.min(t, 1);
      const reveal = Math.floor(p * text.length);
      let out = text.slice(0, reveal);
      for (let i = reveal; i < text.length; i++) out += SCRAMBLE[(Math.random() * SCRAMBLE.length) | 0];
      el.textContent = out;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = text;
    };
    requestAnimationFrame(step);
  };
  $$(".ll-txt").forEach((el, i) => scrambleLine(el, el.dataset.text || "", 180 + i * 400));

  const runCounter = () => {
    if (!plPct) return;
    if (prefersReduced) { plPct.textContent = "100%"; return; }
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / INTRO_DUR, 1);
      plPct.textContent = Math.round(p * 100) + "%";
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const finishIntro = () => {
    if (!preloader || preloader.classList.contains("done")) return;
    preloader.classList.add("done");
    bodyEl.classList.remove("is-loading");
    bodyEl.classList.add("is-ready");
    runHeroCounters();
  };

  runCounter();
  let introScheduled = false;
  const scheduleIntro = () => {
    if (introScheduled) return;
    introScheduled = true;
    setTimeout(finishIntro, prefersReduced ? 60 : 1780);
  };
  if (document.readyState === "complete") scheduleIntro();
  else window.addEventListener("load", scheduleIntro);
  setTimeout(finishIntro, 4200);

  /* ═══════════════ CUSTOM CURSOR ═══════════════ */
  if (finePointer && !prefersReduced) {
    document.body.classList.add("has-cursor");
    const dot = $(".cursor-dot");
    const ring = $(".cursor-ring");
    let mx = -100, my = -100, rx = -100, ry = -100;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    }, { passive: true });

    (function ringLoop() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      requestAnimationFrame(ringLoop);
    })();

    document.addEventListener("mouseover", (e) => {
      const t2 = e.target.closest("a, button, .project-card, .filter-btn, .g-tile");
      ring.classList.toggle("hovering", !!t2);
    });

    const spot = $("#spotlight");
    if (spot) {
      document.body.classList.add("spotlight-on");
      let sx = window.innerWidth / 2, sy = window.innerHeight * 0.4;
      const spotLoop = () => {
        sx += (mx - sx) * 0.08;
        sy += (my - sy) * 0.08;
        spot.style.setProperty("--sx", sx + "px");
        spot.style.setProperty("--sy", sy + "px");
        requestAnimationFrame(spotLoop);
      };
      spotLoop();
    }
  }

  /* ═══════════════ NEURAL CANVAS ═══════════════ */
  const canvas = $("#neural-canvas");
  if (canvas && !prefersReduced) {
    const ctx = canvas.getContext("2d");
    const PAL = {
      dark: ["0, 229, 255", "150, 130, 255"],
      light: ["0, 130, 190", "91, 69, 245"],
    };
    let particles = [];
    let W = 0, H = 0;
    const mouse = { x: null, y: null };

    const resize = () => {
      const hero = canvas.parentElement;
      W = canvas.width = hero.offsetWidth;
      H = canvas.height = hero.offsetHeight;
      const count = Math.min(110, Math.floor((W * H) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.8 + 0.6,
        ci: Math.random() > 0.5 ? 0 : 1,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const hero = canvas.parentElement;
    hero.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }, { passive: true });
    hero.addEventListener("mouseleave", () => { mouse.x = mouse.y = null; });

    const LINK_DIST = 130;
    const tick = () => {
      const pal = PAL[theme] || PAL.dark;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        if (mouse.x !== null) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 170 && dist > 0.001) {
            p.vx += (dx / dist) * 0.012;
            p.vy += (dy / dist) * 0.012;
          }
        }
        p.vx *= 0.995; p.vy *= 0.995;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pal[p.ci]}, 0.75)`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = theme === "light"
              ? `rgba(80, 80, 200, ${alpha})`
              : `rgba(120, 130, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(tick);
    };
    tick();
  }

  /* ═══════════════ SCROLL: progress, navbar, top, spy ═══════════════ */
  const progress = $("#scroll-progress");
  const navbar = $("#navbar");
  const toTop = $("#toTop");
  const navLinks = $$(".nav-link");
  const sections = $$("main section[id]");

  /* ═══════════════ SKILLS META ═══════════════ */
  function renderSkillMeta() {
    const cards = $$(".skill-card");
    if (!cards.length) return;
    let total = 0;
    cards.forEach((c) => {
      const n = c.querySelectorAll(".pills span").length;
      total += n;
      const sc = c.querySelector(".skill-count");
      if (sc) sc.textContent = n + " " + t("skills.unit");
    });
    const tot = $(".skills-total");
    if (tot) tot.textContent = cards.length + " " + t("skills.cats") + " · " + total + " " + t("skills.unit");
  }

  /* ═══════════════ SECTION DOT-NAV ═══════════════ */
  const dotNav = $("#dot-nav");
  function refreshDotLabels() {
    if (!dotNav) return;
    $$(".dot-link", dotNav).forEach((d) => {
      const label = t("dot." + d.dataset.target);
      d.setAttribute("aria-label", label);
      const em = d.querySelector("em");
      if (em) em.textContent = label;
    });
  }
  if (dotNav) {
    sections.forEach((s) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "dot-link";
      b.dataset.target = s.id;
      b.innerHTML = "<span></span><em></em>";
      b.addEventListener("click", () =>
        s.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" })
      );
      dotNav.appendChild(b);
    });
  }

  const timelineEl = $(".timeline");
  const tlFill = $("#tl-fill");
  const ttProg = $("#tt-prog");
  const TT_C = 119.38;
  let lastY = window.scrollY;

  const onScroll = () => {
    const st = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docH > 0 ? st / docH : 0;
    progress.style.width = ratio * 100 + "%";
    navbar.classList.toggle("scrolled", st > 40);
    toTop.classList.toggle("show", st > 600);

    if (!bodyEl.classList.contains("menu-open")) {
      if (st > lastY + 6 && st > 520) navbar.classList.add("nav-hidden");
      else if (st < lastY - 6 || st < 240) navbar.classList.remove("nav-hidden");
    }
    lastY = st;

    if (tlFill && timelineEl) {
      const r = timelineEl.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (window.innerHeight * 0.82 - r.top) / (r.height || 1)));
      tlFill.style.height = p * 100 + "%";
    }
    if (ttProg) ttProg.style.strokeDashoffset = (TT_C * (1 - ratio)).toFixed(2);

    let current = sections[0] && sections[0].id;
    for (const s of sections) {
      if (st >= s.offsetTop - 140) current = s.id;
    }
    navLinks.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === "#" + current)
    );
    if (dotNav) {
      $$(".dot-link", dotNav).forEach((d) =>
        d.classList.toggle("active", d.dataset.target === current)
      );
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ═══════════════ MOBILE MENU ═══════════════ */
  const hamburger = $("#hamburger");
  const navPanel = $("#nav-links");
  const navBackdrop = $("#nav-backdrop");
  const setMenu = (open) => {
    navPanel.classList.toggle("open", open);
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    if (navBackdrop) navBackdrop.classList.toggle("show", open);
    if (open) navbar.classList.remove("nav-hidden");
  };
  const closeMenu = () => setMenu(false);
  hamburger.addEventListener("click", () => setMenu(!navPanel.classList.contains("open")));
  if (navBackdrop) navBackdrop.addEventListener("click", closeMenu);
  navPanel.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => { if (window.innerWidth > 860) closeMenu(); });

  /* ═══════════════ COUNT-UP ═══════════════ */
  function countUp(el) {
    if (!el || el.dataset.counted) return;
    el.dataset.counted = "1";
    const target = parseFloat(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || "";
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const fmt = (v) => v.toFixed(dec) + suffix;
    if (prefersReduced) { el.textContent = fmt(target); return; }
    const dur = 1500;
    const start = performance.now();
    const step = (now) => {
      const t3 = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t3, 3);
      el.textContent = fmt(target * eased);
      if (t3 < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function runHeroCounters() { $$(".hero-stats [data-target]").forEach(countUp); }

  /* ═══════════════ REVEAL + COUNTERS ═══════════════ */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        entry.target.querySelectorAll("[data-target]").forEach(countUp);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ═══════════════ PROJECT FILTERS ═══════════════ */
  const filterBtns = $$(".filter-btn");
  const cards = $$(".project-card");
  const emptyMsg = $("#no-projects");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      let visible = 0;
      cards.forEach((c) => {
        const show = f === "all" || c.dataset.category === f;
        c.classList.toggle("hide", !show);
        if (show) visible++;
      });
      emptyMsg.hidden = visible > 0;
    });
  });

  /* ═══════════════ PROJECT CARDS → MODAL ═══════════════ */
  cards.forEach((c) => {
    c.tabIndex = 0;
    c.setAttribute("role", "button");
    c.setAttribute("aria-label", c.querySelector("h3") ? c.querySelector("h3").textContent : "Project");
    c.addEventListener("click", () => openModal(c.dataset.project));
    c.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(c.dataset.project);
      }
    });
  });
  if (modal) {
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    $("#modal-close").addEventListener("click", closeModal);
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeModal(); closeCertModal(); closeMenu(); }
  });

  /* ═══════════════ CERTIFICATE LIGHTBOX ═══════════════ */
  const certModal = $("#cert-modal");
  let lastCertFocus = null;
  const openCert = (card) => {
    if (!certModal || !card.dataset.img) return;
    lastCertFocus = document.activeElement;
    const issuer = card.querySelector(".cert-issuer");
    const titleEl = card.querySelector("h4");
    const imgEl = $("#cert-modal-img");
    imgEl.src = card.dataset.img;
    imgEl.alt = titleEl ? titleEl.textContent : "Certificate";
    $("#cert-modal-issuer").textContent = issuer ? issuer.textContent : "";
    $("#cert-modal-title").textContent = titleEl ? titleEl.textContent : "";
    const fileLink = $("#cert-modal-file");
    if (card.dataset.file) { fileLink.href = card.dataset.file; fileLink.hidden = false; }
    else { fileLink.removeAttribute("href"); fileLink.hidden = true; }
    certModal.hidden = false;
    requestAnimationFrame(() => certModal.classList.add("show"));
    document.body.style.overflow = "hidden";
    $("#cert-modal-close").focus();
  };
  const closeCertModal = () => {
    if (!certModal || certModal.hidden) return;
    certModal.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => { certModal.hidden = true; }, 300);
    if (lastCertFocus && lastCertFocus.focus) lastCertFocus.focus();
  };
  $$(".cert-card").forEach((card) => {
    card.addEventListener("click", () => openCert(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCert(card); }
    });
  });
  if (certModal) {
    certModal.addEventListener("click", (e) => { if (e.target === certModal) closeCertModal(); });
    $("#cert-modal-close").addEventListener("click", closeCertModal);
  }

  /* ═══════════════ 3D TILT + GLOW ═══════════════ */
  if (finePointer && !prefersReduced) {
    $$(".tilt").forEach((card) => {
      if (!card.querySelector(":scope > .card-glow") && getComputedStyle(card).position !== "static") {
        const g = document.createElement("div");
        g.className = "card-glow";
        card.appendChild(g);
      }
      card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.18s ease-out, box-shadow 0.3s, border-color 0.3s";
      });
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `rotateX(${(0.5 - py) * 9}deg) rotateY(${(px - 0.5) * 9}deg) translateY(-5px)`;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
        setTimeout(() => { card.style.transition = ""; }, 240);
      });
    });
  }

  /* ═══════════════ MAGNETIC BUTTONS ═══════════════ */
  if (finePointer && !prefersReduced) {
    $$(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = `translate(${x * 9}px, ${y * 9}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ═══════════════ BUTTON RIPPLE ═══════════════ */
  if (!prefersReduced) {
    document.addEventListener("pointerdown", (e) => {
      const btn = e.target.closest(".btn, .filter-btn, .social-btn, .copy-btn, .icon-btn");
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const s = document.createElement("span");
      s.className = "ripple";
      s.style.width = s.style.height = size + "px";
      s.style.left = e.clientX - r.left - size / 2 + "px";
      s.style.top = e.clientY - r.top - size / 2 + "px";
      btn.appendChild(s);
      setTimeout(() => s.remove(), 700);
    });
  }

  /* ═══════════════ HERO PARALLAX ═══════════════ */
  const parallaxEl = $("#orbit-wrap") || $("[data-parallax]");
  const heroSection = $("#home");
  if (parallaxEl && heroSection && finePointer && !prefersReduced) {
    heroSection.addEventListener("mousemove", (e) => {
      const r = heroSection.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      parallaxEl.style.transform =
        `translate3d(${-x * 24}px, ${-y * 24}px, 0) rotateX(${y * 7}deg) rotateY(${x * 7}deg)`;
    }, { passive: true });
    heroSection.addEventListener("mouseleave", () => { parallaxEl.style.transform = ""; });
  }

  /* ═══════════════ COPY EMAIL ═══════════════ */
  const copyBtn = $("#copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const email = "Tareq.syria2002@gmail.com";
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      copyBtn.textContent = t("copy.done");
      copyBtn.classList.add("copied");
      showToast(t("toast.copied"));
      setTimeout(() => {
        copyBtn.textContent = t("ct.copy");
        copyBtn.classList.remove("copied");
      }, 1800);
    });
  }

  /* ═══════════════ SAVE CONTACT (vCard) ═══════════════ */
  const saveBtn = $("#save-contact");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const vcf = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Mhysen;Tareq;;;",
        "FN:Tareq Mhysen",
        "TITLE:AI & Data Science Engineer",
        "TEL;TYPE=CELL:+963940843133",
        "EMAIL;TYPE=INTERNET:Tareq.syria2002@gmail.com",
        "URL:https://github.com/TareqMhysen",
        "URL:https://linkedin.com/in/tareq-mhysen",
        "ADR;TYPE=HOME:;;Ain Mneen;Rif Dimashq;;;Syria",
        "END:VCARD",
      ].join("\r\n");
      const blob = new Blob([vcf], { type: "text/vcard;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Tareq-Mhysen.vcf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      showToast(t("toast.saved"));
    });
  }

  /* ═══════════════ INIT ═══════════════ */
  applyLang(lang);
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
