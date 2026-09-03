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

      "hero.badge": "AI Models Engineer · Syrian Presidency",
      "hero.desc": 'AI Engineering & Data Science graduate crafting intelligent systems with <strong>LLMs</strong>, <strong>RAG pipelines</strong> and <strong>Computer Vision</strong> — turning cutting-edge research into products that solve real problems.',
      "hero.cta1": "View My Work", "hero.cta2": "Download CV",
      "stats.projects": "AI Projects", "stats.detection": "Malware Detection",
      "stats.resolution": "Resolution Boost", "stats.years": "Years in Tech",

      "about.kicker": "01. about",
      "about.title": 'Engineering intelligence,<br /><span class="grad">creatively.</span>',
      "about.bio1": "I'm <strong>Tareq Mhysen</strong>, an Artificial Intelligence & Data Science engineer from Damascus, Syria. I build intelligent applications powered by <strong>Large Language Models</strong>, <strong>Retrieval-Augmented Generation</strong>, vector databases and knowledge graphs — systems that understand context and deliver precise, meaningful answers.",
      "about.bio2": "Beyond models and code, I'm a <strong>photographer</strong> and <strong>designer</strong> — which is why my AI projects don't just work well, they <em>look</em> and <em>feel</em> right. I live at the intersection of rigorous engineering and visual storytelling.",
      "about.point1": "Graduated with exceptional performance — SPU, Damascus",
      "about.point2": "Top capstone: Agentic AI Academic Advisor (RAG + LLMs)",
      "about.point3": "6+ years blending IT, AI, media & creative production",
      "about.name": "Tareq Mhysen", "about.role": "AI & Data Science Engineer", "about.open": "Open to work",
      "about.fLoc": "Location", "about.vLoc": "Rif Dimashq, Syria",
      "about.fDeg": "Degree", "about.vDeg": "BSc AI Engineering & DS",
      "about.fUni": "University", "about.vUni": "Syrian Private University",
      "about.fYears": "Years", "about.fMail": "Email", "about.fPhone": "Phone",

      "ach1.title": "Malware Detection Success",
      "ach1.desc": "High-precision AI-driven threat analysis of executable files — a novel agent reaching near-perfect detection.",
      "ach2.title": "Model Accuracy Uplift",
      "ach2.desc": "Optimized model performance with advanced neural architectures and refined ML techniques.",
      "ach3.title": "Image Resolution Enhanced",
      "ach3.desc": "GANs & Transformers (SwinIR) super-resolving low-quality images with deep computer-vision proficiency.",

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
      "pr1.type": "Senior Capstone II · RAG + LLMs",
      "pr1.desc": 'Agentic advisor answering academic questions with retrieval-augmented generation over a curated knowledge base. Achieved <b>top performance</b> in the capstone showcase.',
      "pr1.badge": "🏆 Top Capstone",
      "pr2.title": "AI Image Super-Resolution",
      "pr2.type": "Senior Capstone I · ISR",
      "pr2.desc": 'CNNs, GANs & Transformer models (SwinIR) that reconstruct low-resolution images — boosting perceived resolution by <b>25%</b> with PSNR/SSIM benchmarking.',
      "pr3.title": "Intelligent Malware Detection",
      "pr3.type": "Junior Project · Threat Analytics",
      "pr3.desc": 'AI agent that classifies malware by analyzing <b>visual representations of executables</b> — reaching <b>98% accuracy</b> and recognized for exceptional innovation.',
      "pr3.badge": "⚡ 98% Accuracy",
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
      "sk1.title": "Programming", "sk2.title": "AI & Machine Learning",
      "sk3.title": "Frameworks", "sk4.title": "Databases & Vector Stores",
      "sk5.title": "Tools & DevOps", "sk6.title": "Core CS",

      "exp.kicker": "05. experience",
      "exp.title": 'Where I\'ve <span class="grad">worked</span>.',
      "job0.p": "Mid 2026 — Present",
      "job0.badge": "Current Role",
      "job0.title": "AI Models Engineer & Developer — Data Science",
      "job0.org": "General Secretariat of the Presidency of the Syrian Arab Republic",
      "job0.b1": "Developing and fine-tuning Large Language Models (LLMs) for sensitive institutional missions.",
      "job0.b2": "Building advanced RAG systems over official knowledge bases with secure vector indexes.",
      "job0.b3": "Feature engineering and data-science pipelines that turn institutional data into decisions.",
      "job0.b4": "Deploying solutions with Docker in high-reliability, high-confidentiality environments.",
      "job1.p": "2023 — Present",
      "job1.title": "IT, Media & AI Solutions Specialist",
      "job1.org": "Artizan Interior Design · Syria & Dubai",
      "job1.b1": "Manage IT infrastructure and support across Damascus & Dubai branches.",
      "job1.b2": "Lead AI-driven initiatives and automation to boost productivity.",
      "job1.b3": "Direct multimedia production aligned with a luxury design portfolio.",
      "job1.b4": "Bridge technical and creative teams for consistent brand delivery.",
      "job2.p": "2022 — Present",
      "job2.title": "IT Systems Coordinator & Team Manager",
      "job2.org": "Wael Coating & Decoration · Sheraton, Damascus",
      "job2.b1": "Run IT infrastructure and coordinate teams to hit project goals.",
      "job2.b2": "Enhance workflows with digital media and AI tooling.",
      "job2.b3": "Oversee maintenance and deliver staff training.",
      "job3.p": "2020 — Present",
      "job3.title": "Freelance Graphic Designer", "job3.org": "Independent",
      "job3.b1": "Design visual identities and marketing materials for digital & print.",
      "job3.b2": "Translate complex ideas into clear, compelling design systems.",
      "job4.p": "2018 — Present",
      "job4.title": "Mobile & Laptop Specialist", "job4.org": "Retail & Service",
      "job4.b1": "Diagnose and resolve complex hardware/software issues.",
      "job4.b2": "Deep expertise in troubleshooting, optimization & customer support.",
      "job5.p": "2015 — Present",
      "job5.title": "Freelance Photographer", "job5.org": "Independent",
      "job5.b1": "Advanced digital imaging & AI-assisted enhancement workflows.",
      "job5.b2": "End-to-end client management across diverse assignments.",
      "edu.title": "BSc — AI Engineering & Data Science",
      "edu.org": "Syrian Private University (SPU) · Damascus",
      "edu.desc": "Graduated with exceptional performance in technical projects, with strong practical application of AI principles.",

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
      "c1.title": "Generative AI with Large Language Models",
      "c2.title": "Neural Networks and Deep Learning",
      "c3.title": "LangChain for LLM Application Development",
      "c4.title": "LangChain Chat with Your Data",
      "c5.title": "Generative AI for Enhanced Content Creation",
      "c6.title": "Generative AI Primer · GenAI in Marketing · Prompt Engineering for ChatGPT",
      "c7.title": "Gemini Certified — Student (K12) · Educator · Student (University)",
      "c8.title": "MySQL Workbench — Database Creation & Design",

      "ref.kicker": "08. references",
      "ref.title": 'Trusted by <span class="grad">academia</span>.',
      "ref.sub": "Academic references from the faculty where I studied and volunteered.",
      "ref1.name": "Dr. Mouhib Al-Nokari",
      "ref1.role": "Dean of the Faculty of Artificial Intelligence Engineering",
      "ref1.org": "Syrian Private University (SPU)",
      "ref2.name": "Eng. Aya Alaswad",
      "ref2.role": "Teaching Assistant & Lab Instructor, Faculty of Informatics Engineering (ITE)",
      "ref2.org": "Syrian Private University (SPU)",
      "ref.note": "Contact details available upon request.",

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

      "hero.badge": "مهندس نماذج ذكاء اصطناعي · رئاسة الجمهورية",
      "hero.desc": 'خريج هندسة الذكاء الاصطناعي وعلوم البيانات، أبني أنظمةً ذكية بـ<strong>النماذج اللغوية الكبيرة</strong> و<strong>خطوط RAG</strong> و<strong>الرؤية الحاسوبية</strong> — أحوّل أحدث الأبحاث إلى منتجات تحل مشكلات حقيقية.',
      "hero.cta1": "شاهد أعمالي", "hero.cta2": "تحميل السيرة",
      "stats.projects": "مشاريع ذكاء اصطناعي", "stats.detection": "دقة كشف المالوير",
      "stats.resolution": "تحسين دقة الصور", "stats.years": "سنوات في المجال التقني",

      "about.kicker": "01. نبذة عني",
      "about.title": 'هندسة الذكاء،<br /><span class="grad">بإبداع.</span>',
      "about.bio1": "أنا <strong>طارق محيسن</strong>، مهندس ذكاء اصطناعي وعلوم بيانات من دمشق، سوريا. أبني تطبيقات ذكية مدعومة <strong>بالنماذج اللغوية الكبيرة</strong> و<strong>التوليد المعزز بالاسترجاع</strong> وقواعد البيانات المتجهية ورسومات المعرفة — أنظمة تفهم السياق وتقدّم إجابات دقيقة وذات معنى.",
      "about.bio2": "إلى جانب النماذج والشيفرات، أنا <strong>مصوّر</strong> و<strong>مصمم</strong> — ولهذا مشاريعي لا تعمل جيداً فحسب، بل <em>تبدو</em> و<em>تُحَسّ</em> بشكل صحيح. أعيش عند تقاطع الهندسة الدقيقة والسرد البصري.",
      "about.point1": "تخرّج بأداء استثنائي في المشاريع التقنية — الجامعة السورية الخاصة، دمشق",
      "about.point2": "مشروع التخرج الأبرز: مستشار أكاديمي Agentic AI‏ (RAG + LLMs)",
      "about.point3": "أكثر من 6 سنوات في دمج التقنية والذكاء الاصطناعي والإعلام والإنتاج الإبداعي",
      "about.name": "طارق محيسن", "about.role": "مهندس ذكاء اصطناعي وعلوم بيانات", "about.open": "متاح للعمل",
      "about.fLoc": "الموقع", "about.vLoc": "ريف دمشق، سوريا",
      "about.fDeg": "الدرجة", "about.vDeg": "بكالوريوس هندسة AI وعلوم بيانات",
      "about.fUni": "الجامعة", "about.vUni": "الجامعة السورية الخاصة",
      "about.fYears": "السنوات", "about.fMail": "البريد", "about.fPhone": "الهاتف",

      "ach1.title": "نجاح في كشف المالوير",
      "ach1.desc": "تحليل تهديدات دقيق مدعوم بالذكاء الاصطناعي للملفات التنفيذية — وكيل مبتكر يبلغ كشفًا شبه مثالي.",
      "ach2.title": "رفع دقة النماذج",
      "ach2.desc": "حسّنت أداء النماذج عبر بنى عصبية متقدمة وتقنيات تعلم آلي مصقولة.",
      "ach3.title": "تعزيز دقة الصور",
      "ach3.desc": "شبكات GAN وترانسفورمر (SwinIR) تعيد بناء الصور منخفضة الجودة بإتقان عميق في الرؤية الحاسوبية.",

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
      "pr1.type": "مشروع تخرج II · RAG + LLMs",
      "pr1.desc": 'مستشار وكيل يجيب عن الأسئلة الأكاديمية بتوليد معزز بالاسترجاع فوق قاعدة معرفة منسقة. حقق <b>الأداء الأفضل</b> في عرض مشاريع التخرج.',
      "pr1.badge": "🏆 الأفضل في التخرج",
      "pr2.title": "فائق دقة الصور بالذكاء الاصطناعي",
      "pr2.type": "مشروع تخرج I · ISR",
      "pr2.desc": 'نماذج CNN وGAN وترانسفورمر (SwinIR) تعيد بناء الصور منخفضة الدقة — بتحسّن إدراكي <b>25%</b> وقياس PSNR/SSIM.',
      "pr3.title": "الكشف الذكي عن المالوير",
      "pr3.type": "مشروع سنة ثالثة · تحليل تهديدات",
      "pr3.desc": 'وكيل ذكي يصنّف البرمجيات الخبيثة بتحليل <b>التمثيل البصري للملفات التنفيذية</b> — بدقة <b>98%</b> وتقدير على الابتكار.',
      "pr3.badge": "⚡ دقة 98%",
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
      "sk1.title": "البرمجة", "sk2.title": "الذكاء الاصطناعي وتعلّم الآلة",
      "sk3.title": "الأطر والمكتبات", "sk4.title": "قواعد البيانات والمتجهات",
      "sk5.title": "الأدوات وDevOps", "sk6.title": "أساسيات الحاسوب",

      "exp.kicker": "05. الخبرات",
      "exp.title": 'أين <span class="grad">عملت</span>.',
      "job0.p": "منتصف 2026 — الآن",
      "job0.badge": "المنصب الحالي",
      "job0.title": "مهندس ومطوّر نماذج الذكاء الاصطناعي وعلوم البيانات",
      "job0.org": "الأمانة العامة لرئاسة الجمهورية العربية السورية",
      "job0.b1": "تطوير وضبط دقيق (Fine-Tuning) لنماذج لغوية كبيرة لخدمة مهام مؤسسية حساسة.",
      "job0.b2": "بناء أنظمة RAG متقدمة فوق قواعد معرفة رسمية مع فهارس متجهية آمنة.",
      "job0.b3": "هندسة الخصائص وخطوط علوم البيانات لتحويل بيانات المؤسسة إلى رؤى وقرارات.",
      "job0.b4": "نشر الحلول بحاويات Docker ضمن بيئات عالية الموثوقية والسرية.",
      "job1.p": "2023 — الآن",
      "job1.title": "أخصائي تقنية معلومات وإعلام وحلول ذكاء اصطناعي",
      "job1.org": "أرتيزان للتصميم الداخلي · سوريا ودبي",
      "job1.b1": "إدارة بنية التقنية المعلوماتية والدعم في فرعي دمشق ودبي.",
      "job1.b2": "قيادة مبادرات ذكاء اصطناعي وأتمتة لرفع الإنتاجية.",
      "job1.b3": "إدارة الإنتاج الإعلامي المتوافق مع محفظة تصميم فاخرة.",
      "job1.b4": "الجسر بين الفرق التقنية والإبداعية لتسليم متسق للعلامة.",
      "job2.p": "2022 — الآن",
      "job2.title": "منسق أنظمة تقنية ومدير فريق",
      "job2.org": "وائل للدهانات والديكور · الشيراتون، دمشق",
      "job2.b1": "تشغيل بنية التقنية المعلوماتية وتنسيق الفرق لتحقيق أهداف المشاريع.",
      "job2.b2": "تطوير سير العمل بأدوات الإعلام الرقمي والذكاء الاصطناعي.",
      "job2.b3": "الإشراف على الصيانة وتقديم تدريب للموظفين.",
      "job3.p": "2020 — الآن",
      "job3.title": "مصمم جرافيك مستقل", "job3.org": "عمل حر",
      "job3.b1": "تصميم هويات بصرية ومواد تسويقية للرقمي والمطبوع.",
      "job3.b2": "تحويل الأفكار المعقدة إلى أنظمة تصميم واضحة وجذابة.",
      "job4.p": "2018 — الآن",
      "job4.title": "أخصائي هواتف وحواسيب", "job4.org": "تجزئة وخدمات",
      "job4.b1": "تشخيص وحل مشكلات عتاد وبرمجيات معقدة.",
      "job4.b2": "خبرة عميقة في الصيانة والتحسين ودعم العملاء.",
      "job5.p": "2015 — الآن",
      "job5.title": "مصوّر فوتوغرافي مستقل", "job5.org": "عمل حر",
      "job5.b1": "تقنيات تصوير رقمي متقدمة ومعالجة معززة بالذكاء الاصطناعي.",
      "job5.b2": "إدارة عملاء من البداية للنهاية عبر مهام متنوعة.",
      "edu.title": "بكالوريوس — هندسة الذكاء الاصطناعي وعلوم البيانات",
      "edu.org": "الجامعة السورية الخاصة (SPU) · دمشق",
      "edu.desc": "تخرّجت بأداء استثنائي في المشاريع التقنية، مع تطبيق عملي قوي لمبادئ الذكاء الاصطناعي.",

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
      "c1.title": "الذكاء التوليدي مع النماذج اللغوية الكبيرة",
      "c2.title": "الشبكات العصبية والتعلّم العميق",
      "c3.title": "LangChain لتطوير تطبيقات LLM",
      "c4.title": "LangChain: الدردشة مع بياناتك",
      "c5.title": "الذكاء التوليدي لإثراء صناعة المحتوى",
      "c6.title": "أساسيات الذكاء التوليدي · GenAI في التسويق · هندسة الأوامر لـChatGPT",
      "c7.title": "شهادات Gemini — طالب (K12) · مربٍّ · طالب جامعي",
      "c8.title": "MySQL Workbench — إنشاء قواعد البيانات وتصميمها",

      "ref.kicker": "08. التوصيات",
      "ref.title": 'ثقة <span class="grad">أكاديمية</span>.',
      "ref.sub": "مراجع أكاديميون من الكلية التي درست وتطوعت فيها.",
      "ref1.name": "د. مهيب النقري",
      "ref1.role": "عميد كلية هندسة الذكاء الاصطناعي",
      "ref1.org": "الجامعة السورية الخاصة (SPU)",
      "ref2.name": "م. آية الأسود",
      "ref2.role": "معيدة ومشرفة مختبرات — كلية الهندسة المعلوماتية (ITE)",
      "ref2.org": "الجامعة السورية الخاصة (SPU)",
      "ref.note": "بيانات التواصل متاحة عند الطلب.",

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
    en: ["AI & Data Science Engineer", "AI Models Engineer", "LLM & RAG Developer", "Computer Vision Engineer", "Creative Technologist"],
    ar: ["مهندس ذكاء اصطناعي وعلوم بيانات", "مهندس نماذج الذكاء الاصطناعي", "مطوّر أنظمة LLM وRAG", "مهندس رؤية حاسوبية", "تقني مبدع ومصوّر"],
  };

  /* ═══════════════ PROJECT MODAL DATA ═══════════════ */
  const PROJECTS = {
    intellipath: {
      year: "2025 — 2026",
      tags: ["Python", "LangChain", "LLaMA 3", "FAISS", "Hugging Face", "RAG"],
      en: {
        title: "IntelliPath — Agentic AI Academic Advisor",
        type: "Senior Capstone II · RAG + LLMs",
        desc: [
          "An agentic academic advisor built as my Senior Capstone II project. Students ask natural-language questions about courses, regulations and university life — and get precise, source-grounded answers.",
          "The pipeline indexes a curated academic knowledge base into a FAISS vector store, retrieves the most relevant passages per query, and grounds Llama 3 responses through LangChain orchestration and careful prompt engineering.",
        ],
        highlights: [
          "Top performance in the Senior Capstone II showcase",
          "Agentic RAG over a curated academic knowledge base",
          "Context-grounded answers via FAISS retrieval + prompt engineering",
        ],
      },
      ar: {
        title: "IntelliPath — مستشار أكاديمي بوكيل ذكي",
        type: "مشروع تخرج II · RAG + LLMs",
        desc: [
          "مستشار أكاديمي وكيل بنيته كمشروع التخرج الثاني. يطرح الطلبة أسئلتهم بلغة طبيعية عن المواد واللوائح والحياة الجامعية — فيحصلون على إجابات دقيقة ومستندة إلى المصادر.",
          "يفهرس النظام قاعدة معرفة أكاديمية منسقة داخل متجر متجهات FAISS، ويسترجع المقاطع الأكثر صلة بكل سؤال، ثم يؤطّر إجابات Llama 3 عبر تنسيق LangChain وهندسة أوامر مدروسة.",
        ],
        highlights: [
          "الأداء الأفضل في عرض مشاريع التخرج الثاني",
          "نظام RAG وكيل فوق قاعدة معرفة أكاديمية منسقة",
          "إجابات مؤطّرة بالسياق عبر استرجاع FAISS وهندسة الأوامر",
        ],
      },
    },
    isr: {
      year: "2025",
      tags: ["TensorFlow", "SwinIR", "ESRGAN", "OpenCV", "PSNR", "SSIM"],
      en: {
        title: "AI Image Super-Resolution",
        type: "Senior Capstone I · ISR",
        desc: [
          "A comparative study and implementation of image super-resolution. I trained and benchmarked CNNs, GANs and Transformer architectures that reconstruct high-quality images from degraded low-resolution inputs.",
          "SwinIR — a Swin Transformer-based model — delivered the strongest perceptual results, with every experiment measured in PSNR and SSIM against ESRGAN baselines.",
        ],
        highlights: [
          "+25% perceived resolution improvement",
          "SwinIR Transformer outperformed GAN baselines",
          "Rigorous PSNR/SSIM benchmarking methodology",
        ],
      },
      ar: {
        title: "فائق دقة الصور بالذكاء الاصطناعي",
        type: "مشروع تخرج I · ISR",
        desc: [
          "دراسة مقارنة وتنفيذ لتقنية فائق دقة الصور. درّبت وقيّمت شبكات CNN وGAN وبنى ترانسفورمر تعيد بناء صور عالية الجودة من مدخلات منخفضة الدقة.",
          "قدّم نموذج SwinIR المبني على Swin Transformer أفضل النتائج الإدراكية، مع قياس كل تجربة بمؤشري PSNR وSSIM مقارنة بنماذج ESRGAN.",
        ],
        highlights: [
          "تحسّن إدراكي في الدقة بنسبة 25%",
          "تفوّق SwinIR الترانسفورمري على نماذج GAN",
          "منهجية قياس صارمة بمؤشري PSNR/SSIM",
        ],
      },
    },
    malware: {
      year: "2024 — 2025",
      tags: ["Python", "TensorFlow", "DenseNet201", "Scikit-learn"],
      en: {
        title: "Intelligent Malware Detection",
        type: "Junior Project · Threat Analytics",
        desc: [
          "An intelligent agent that detects and classifies Windows malware by converting executables into images and analyzing their visual structure with DenseNet201 — malware families leave distinct visual fingerprints.",
          "The system reached 98% detection accuracy and earned recognition for exceptional innovation and technical execution.",
        ],
        highlights: [
          "98% detection accuracy",
          "Novel visual-analysis approach to threat detection",
          "Recognized for exceptional innovation",
        ],
      },
      ar: {
        title: "الكشف الذكي عن المالوير",
        type: "مشروع سنة ثالثة · تحليل تهديدات",
        desc: [
          "وكيل ذكي يكشف البرمجيات الخبيثة ويصنّفها عبر تحويل الملفات التنفيذية إلى صور وتحليل بنيتها البصرية بشبكة DenseNet201 — فعائلات المالوير تترك بصمات بصرية مميزة.",
          "بلغ النظام دقة كشف 98% وحاز تقديرًا على الابتكار والتنفيذ التقني الاستثنائي.",
        ],
        highlights: [
          "دقة كشف 98%",
          "نهج بصري مبتكر لتحليل التهديدات",
          "تقدير على الابتكار الاستثنائي",
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

  /* ═══════════════ PRELOADER ═══════════════ */
  const preloader = $("#preloader");
  const hidePreloader = () => setTimeout(() => preloader && preloader.classList.add("done"), 1500);
  if (document.readyState === "complete") hidePreloader();
  else window.addEventListener("load", hidePreloader);
  setTimeout(() => preloader && preloader.classList.add("done"), 4000);

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

  const onScroll = () => {
    const st = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (docH > 0 ? (st / docH) * 100 : 0) + "%";
    navbar.classList.toggle("scrolled", st > 40);
    toTop.classList.toggle("show", st > 600);

    let current = sections[0] && sections[0].id;
    for (const s of sections) {
      if (st >= s.offsetTop - 140) current = s.id;
    }
    navLinks.forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === "#" + current)
    );
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ═══════════════ MOBILE MENU ═══════════════ */
  const hamburger = $("#hamburger");
  const navPanel = $("#nav-links");
  const closeMenu = () => {
    hamburger.classList.remove("open");
    navPanel.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  };
  hamburger.addEventListener("click", () => {
    const open = navPanel.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  navPanel.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  /* ═══════════════ REVEAL + COUNTERS ═══════════════ */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        entry.target.querySelectorAll("[data-target]").forEach((el) => {
          if (el.dataset.counted) return;
          el.dataset.counted = "1";
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || "";
          const dur = 1400;
          const start = performance.now();
          const step = (now) => {
            const t3 = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - t3, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (t3 < 1) requestAnimationFrame(step);
          };
          if (prefersReduced) el.textContent = target + suffix;
          else requestAnimationFrame(step);
        });
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
    if (e.key === "Escape") { closeModal(); closeMenu(); }
  });

  /* ═══════════════ 3D TILT + GLOW ═══════════════ */
  if (finePointer && !prefersReduced) {
    $$(".tilt").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 10}deg) translateY(-4px)`;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
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
