// src/i18n/dictionaries.ts
import type { Locale } from './config'

export type ServiceItem = {
  title: string
  body: string
}

export type WhyItem = {
  before: string
  accent: string
  after: string
}

export type StatItem = { v: string; l: string }
export type RosterItem = { idx: string; role: string }

export type Dict = {
  nav: {
    services: string
    why: string
    team: string
    contact: string
    cta: string
  }
  hero: {
    badge: string
    line1: string
    accent: string
    line2: string
    sub: string
    cta: string
    seeServices: string
    dragHint: string
  }
  services: {
    label: string
    heading: string
    headingAccent: string
    sub: string
    items: [ServiceItem, ServiceItem, ServiceItem, ServiceItem, ServiceItem]
  }
  why: {
    label: string
    heading: string
    headingAccent: string
    sub: string
    items: [WhyItem, WhyItem, WhyItem]
  }
  team: {
    label: string
    heading: string
    headingAccent: string
    body: string
    stats: [StatItem, StatItem, StatItem, StatItem]
    roster: [RosterItem, RosterItem, RosterItem, RosterItem, RosterItem]
    rosterLabel: string
    onlineLabel: string
  }
  contact: {
    label: string
    line1: string
    accent: string
    body: string
    cta: string
    form: {
      namePlaceholder: string
      emailPlaceholder: string
      servicesLabel: string
      descriptionPlaceholder: string
      submit: string
      successTitle: string
      successBody: string
    }
  }
  footer: {
    /** Use {year} as placeholder — replaced at render time */
    copy: string
    version: string
  }
}

// ─── English ─────────────────────────────────────────────────────────────────

const en: Dict = {
  nav: {
    services: 'Services',
    why: 'Why us',
    team: 'Team',
    contact: 'Contact',
    cta: 'Start a project',
  },
  hero: {
    badge: 'A digital agency — 4+ years of experience',
    line1: 'Built to',
    accent: 'perform.',
    line2: 'Made to last.',
    sub: 'Five disciplines under one roof: engineering, design, production, support, and training. We ship complete work, end to end.',
    cta: 'Start a project',
    seeServices: 'See services',
    dragHint: 'Drag to rotate',
  },
  services: {
    label: '02 — Services',
    heading: 'Five services.',
    headingAccent: 'One team.',
    sub: 'You get the same producers, designers, and engineers from kickoff to launch. No handoffs.',
    items: [
      {
        title: 'IT Solutions',
        body: 'We build the systems your business runs on. From infrastructure to custom software, your stack stays fast, secure, and ready to scale.',
      },
      {
        title: 'Design',
        body: 'We design brands, products, and interfaces that work. Every pixel earns its place, every system holds up under pressure.',
      },
      {
        title: 'Photo & Video Production',
        body: 'We shoot, edit, and deliver. From product stills to brand films, the footage lands, the cut tells the story.',
      },
      {
        title: 'Help Desk',
        body: 'We are your first and last line of support. Issues get logged, tracked, and resolved — fast, with a human on the other end.',
      },
      {
        title: 'IT Training',
        body: 'We train your team on the tools, systems, and workflows that matter. From onboarding to advanced sessions, your people leave ready to execute.',
      },
    ],
  },
  why: {
    label: '03 — Why us',
    heading: 'Three reasons.',
    headingAccent: 'No fluff.',
    sub: 'Most agencies sell process. We sell output. Here is what changes when you work with us.',
    items: [
      { before: 'You get one team across five disciplines, so ', accent: 'nothing falls between the cracks.', after: '' },
      { before: 'You see real work in ', accent: 'days, not months', after: ' — we ship in tight, weekly cycles.' },
      { before: 'You own everything we make — ', accent: 'files, footage, source code, accounts.', after: '' },
    ],
  },
  team: {
    label: '04 — Team',
    heading: 'Expert team.',
    headingAccent: 'One account lead.',
    body: 'Engineers, designers, producers, and support specialists work on your project in-house. You get one lead, direct access to the team, and a channel that stays open until launch.',
    stats: [
      { v: '+4 yrs', l: 'Experience' },
      { v: 'Casablanca', l: 'Morocco' },
      { v: '100%', l: 'Work owned by you' },
      { v: '< 24h', l: 'Reply time' },
    ],
    roster: [
      { idx: '01', role: 'Engineering & DevOps' },
      { idx: '02', role: 'Brand & Product Design' },
      { idx: '03', role: 'Photo, Video & Motion' },
      { idx: '04', role: 'Help Desk & Support' },
      { idx: '05', role: 'Account & Production' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● ONLINE',
  },
  contact: {
    label: '05 — Contact',
    line1: 'Ready when',
    accent: 'you are.',
    body: 'Tell us what you are building, and we will get back within one business day with a scope, a price, and a start date.',
    cta: 'Start a project',
    form: {
      namePlaceholder: 'Full name or company',
      emailPlaceholder: 'your@email.com',
      servicesLabel: 'Service interest',
      descriptionPlaceholder: 'Tell us about your project…',
      submit: 'Send message',
      successTitle: 'Message sent',
      successBody: "We'll be in touch within one business day.",
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── Arabic ──────────────────────────────────────────────────────────────────

const ar: Dict = {
  nav: {
    services: 'الخدمات',
    why: 'لماذا نحن',
    team: 'الفريق',
    contact: 'التواصل',
    cta: 'ابدأ مشروعًا',
  },
  hero: {
    badge: 'وكالة رقمية — أكثر من 4 سنوات خبرة',
    line1: 'بُني للأداء',
    accent: 'والإتقان.',
    line2: 'صُنع ليدوم.',
    sub: 'خمسة تخصصات تحت سقف واحد: هندسة، تصميم، إنتاج، دعم، وتدريب. نُسلّم عملًا متكاملًا من البداية للنهاية.',
    cta: 'ابدأ مشروعًا',
    seeServices: 'استعرض الخدمات',
    dragHint: 'اسحب للتدوير',
  },
  services: {
    label: '02 — الخدمات',
    heading: 'خمس خدمات.',
    headingAccent: 'فريق واحد.',
    sub: 'تحصل على نفس المنتجين والمصممين والمهندسين من البداية حتى الإطلاق. لا تسليمات.',
    items: [
      {
        title: 'حلول تقنية',
        body: 'نبني الأنظمة التي تعمل عليها أعمالك. من البنية التحتية إلى البرمجيات المخصصة، يظل مجموعك التقني سريعًا وآمنًا وجاهزًا للتوسع.',
      },
      {
        title: 'التصميم',
        body: 'نصمم هويات وأنظمة ومنتجات تعمل. كل بكسل يؤدي دوره، وكل نظام يصمد تحت الضغط.',
      },
      {
        title: 'التصوير والإنتاج المرئي',
        body: 'نصوّر، ونُحرّر، ونُسلّم. من الصور الثابتة إلى الأفلام التعريفية، اللقطة تصل والمونتاج يروي القصة.',
      },
      {
        title: 'مكتب المساعدة',
        body: 'نحن خط الدعم الأول والأخير. تُسجَّل المشكلات وتُتابَع وتُحَل بسرعة، ودائمًا بإنسان حقيقي في الطرف الآخر.',
      },
      {
        title: 'التدريب التقني',
        body: 'ندرّب فريقك على الأدوات والأنظمة التي تهم. من جلسات التأهيل إلى التدريب المتقدم، يغادر موظفوك كل جلسة جاهزين للتنفيذ.',
      },
    ],
  },
  why: {
    label: '03 — لماذا نحن',
    heading: 'ثلاثة أسباب.',
    headingAccent: 'بلا حشو.',
    sub: 'معظم الوكالات تبيع عمليات. نحن نبيع نتائج. إليك ما يتغير حين تعمل معنا.',
    items: [
      { before: 'تحصل على فريق واحد عبر خمسة تخصصات، لذا ', accent: 'لا شيء يضيع بين الثغرات.', after: '' },
      { before: 'ترى عملًا حقيقيًا في ', accent: 'أيام، لا شهور', after: ' — نشحن في دورات أسبوعية محكمة.' },
      { before: 'تمتلك كل ما نصنعه — ', accent: 'الملفات، اللقطات، الكود المصدري، الحسابات.', after: '' },
    ],
  },
  team: {
    label: '04 — الفريق',
    heading: 'فريق متخصص.',
    headingAccent: 'مسؤول حساب واحد.',
    body: 'يعمل المهندسون والمصممون والمنتجون ومتخصصو الدعم على مشروعك داخليًا. تحصل على مسؤول واحد، ووصول مباشر للفريق، وقناة مفتوحة حتى الإطلاق.',
    stats: [
      { v: '+4 سنوات', l: 'خبرة' },
      { v: 'الدار البيضاء', l: 'المغرب' },
      { v: '100%', l: 'العمل ملكك' },
      { v: '< 24 ساعة', l: 'وقت الرد' },
    ],
    roster: [
      { idx: '01', role: 'هندسة وعمليات' },
      { idx: '02', role: 'هوية وتصميم منتجات' },
      { idx: '03', role: 'تصوير وفيديو وموشن' },
      { idx: '04', role: 'مكتب المساعدة والدعم' },
      { idx: '05', role: 'إدارة حسابات وإنتاج' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● متصل',
  },
  contact: {
    label: '05 — التواصل',
    line1: 'مستعدون',
    accent: 'متى شئت.',
    body: 'أخبرنا بما تبنيه، وسنعود إليك خلال يوم عمل واحد بنطاق العمل والسعر وتاريخ البدء.',
    cta: 'ابدأ مشروعًا',
    form: {
      namePlaceholder: 'الاسم الكامل أو اسم الشركة',
      emailPlaceholder: 'بريدك@الإلكتروني.com',
      servicesLabel: 'الخدمة المطلوبة',
      descriptionPlaceholder: 'أخبرنا عن مشروعك…',
      submit: 'إرسال الرسالة',
      successTitle: 'تم الإرسال',
      successBody: 'سنتواصل معك خلال يوم عمل واحد.',
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── Spanish ─────────────────────────────────────────────────────────────────

const es: Dict = {
  nav: {
    services: 'Servicios',
    why: 'Por qué nosotros',
    team: 'Equipo',
    contact: 'Contacto',
    cta: 'Iniciar proyecto',
  },
  hero: {
    badge: 'Una agencia digital — más de 4 años de experiencia',
    line1: 'Construido para',
    accent: 'rendir.',
    line2: 'Hecho para durar.',
    sub: 'Cinco disciplinas bajo un mismo techo: ingeniería, diseño, producción, soporte y formación. Entregamos trabajo completo, de principio a fin.',
    cta: 'Iniciar proyecto',
    seeServices: 'Ver servicios',
    dragHint: 'Arrastra para rotar',
  },
  services: {
    label: '02 — Servicios',
    heading: 'Cinco servicios.',
    headingAccent: 'Un equipo.',
    sub: 'Los mismos productores, diseñadores e ingenieros desde el inicio hasta el lanzamiento. Sin traspasos.',
    items: [
      {
        title: 'Soluciones IT',
        body: 'Construimos los sistemas en los que opera tu empresa. Desde infraestructura hasta software personalizado, tu stack se mantiene rápido, seguro y listo para escalar.',
      },
      {
        title: 'Diseño',
        body: 'Diseñamos marcas, productos e interfaces que funcionan. Cada píxel gana su lugar, cada sistema aguanta la presión.',
      },
      {
        title: 'Producción Foto & Video',
        body: 'Grabamos, editamos y entregamos. Desde fotografías de producto hasta películas de marca, las tomas impactan y el montaje cuenta la historia.',
      },
      {
        title: 'Mesa de Ayuda',
        body: 'Somos tu primera y última línea de soporte. Los problemas se registran, rastrean y resuelven rápido, con una persona real al otro lado.',
      },
      {
        title: 'Formación en IT',
        body: 'Formamos a tu equipo en las herramientas, sistemas y flujos de trabajo que importan. Desde la incorporación hasta las sesiones avanzadas, tu equipo sale listo para ejecutar.',
      },
    ],
  },
  why: {
    label: '03 — Por qué nosotros',
    heading: 'Tres razones.',
    headingAccent: 'Sin relleno.',
    sub: 'La mayoría de las agencias venden procesos. Nosotros vendemos resultados. Esto es lo que cambia cuando trabajas con nosotros.',
    items: [
      { before: 'Tienes un equipo en cinco disciplinas, así que ', accent: 'nada cae entre las grietas.', after: '' },
      { before: 'Ves trabajo real en ', accent: 'días, no meses', after: ' — entregamos en ciclos semanales ajustados.' },
      { before: 'Eres dueño de todo lo que hacemos — ', accent: 'archivos, metraje, código fuente, cuentas.', after: '' },
    ],
  },
  team: {
    label: '04 — Equipo',
    heading: 'Equipo experto.',
    headingAccent: 'Un responsable de cuenta.',
    body: 'Ingenieros, diseñadores, productores y especialistas de soporte trabajan en tu proyecto internamente. Tienes un responsable, acceso directo al equipo y un canal abierto hasta el lanzamiento.',
    stats: [
      { v: '+4 años', l: 'Experiencia' },
      { v: 'Casablanca', l: 'Marruecos' },
      { v: '100%', l: 'El trabajo es tuyo' },
      { v: '< 24h', l: 'Tiempo de respuesta' },
    ],
    roster: [
      { idx: '01', role: 'Ingeniería & DevOps' },
      { idx: '02', role: 'Marca & Diseño de Producto' },
      { idx: '03', role: 'Foto, Video & Movimiento' },
      { idx: '04', role: 'Mesa de Ayuda & Soporte' },
      { idx: '05', role: 'Cuenta & Producción' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● EN LÍNEA',
  },
  contact: {
    label: '05 — Contacto',
    line1: 'Listos cuando',
    accent: 'tú lo estés.',
    body: 'Cuéntanos qué estás construyendo y te responderemos en un día hábil con un alcance, un precio y una fecha de inicio.',
    cta: 'Iniciar proyecto',
    form: {
      namePlaceholder: 'Nombre completo o empresa',
      emailPlaceholder: 'tu@email.com',
      servicesLabel: 'Servicio de interés',
      descriptionPlaceholder: 'Cuéntanos sobre tu proyecto…',
      submit: 'Enviar mensaje',
      successTitle: 'Mensaje enviado',
      successBody: 'Te responderemos en un día hábil.',
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── French ──────────────────────────────────────────────────────────────────

const fr: Dict = {
  nav: {
    services: 'Services',
    why: 'Pourquoi nous',
    team: 'Équipe',
    contact: 'Contact',
    cta: 'Démarrer un projet',
  },
  hero: {
    badge: "Une agence digitale — 4+ ans d'expérience",
    line1: 'Conçu pour',
    accent: 'performer.',
    line2: 'Fait pour durer.',
    sub: 'Cinq disciplines sous un même toit : ingénierie, design, production, support et formation. Nous livrons un travail complet, de bout en bout.',
    cta: 'Démarrer un projet',
    seeServices: 'Voir les services',
    dragHint: 'Glisser pour pivoter',
  },
  services: {
    label: '02 — Services',
    heading: 'Cinq services.',
    headingAccent: 'Une équipe.',
    sub: 'Les mêmes producteurs, designers et ingénieurs du lancement au déploiement. Pas de transferts.',
    items: [
      {
        title: 'Solutions IT',
        body: "Nous construisons les systèmes sur lesquels repose votre entreprise. De l'infrastructure aux logiciels sur mesure, votre stack reste rapide, sécurisé et prêt à évoluer.",
      },
      {
        title: 'Design',
        body: 'Nous concevons des marques, des produits et des interfaces qui fonctionnent. Chaque pixel justifie sa présence, chaque système tient sous pression.',
      },
      {
        title: 'Production Photo & Vidéo',
        body: "Nous tournons, montons et livrons. Des visuels produit aux films de marque, les images frappent et le montage raconte l'histoire.",
      },
      {
        title: "Service d'Assistance",
        body: "Nous sommes votre première et dernière ligne de support. Les problèmes sont enregistrés, suivis et résolus rapidement, avec un humain à l'autre bout.",
      },
      {
        title: 'Formation IT',
        body: 'Nous formons votre équipe sur les outils, systèmes et workflows qui comptent. Des sessions d'intégration aux formations avancées, vos collaborateurs repartent prêts à agir.',
      },
    ],
  },
  why: {
    label: '03 — Pourquoi nous',
    heading: 'Trois raisons.',
    headingAccent: 'Sans rembourrage.',
    sub: 'La plupart des agences vendent un processus. Nous vendons des résultats. Voici ce qui change quand vous travaillez avec nous.',
    items: [
      { before: 'Vous avez une équipe sur cinq disciplines, donc ', accent: 'rien ne tombe dans les failles.', after: '' },
      { before: 'Vous voyez un vrai travail en ', accent: 'jours, pas en mois', after: ' — nous livrons en cycles hebdomadaires serrés.' },
      { before: 'Vous possédez tout ce que nous créons — ', accent: 'fichiers, séquences, code source, comptes.', after: '' },
    ],
  },
  team: {
    label: '04 — Équipe',
    heading: 'Équipe experte.',
    headingAccent: 'Un chef de compte.',
    body: "Ingénieurs, designers, producteurs et spécialistes du support travaillent sur votre projet en interne. Vous avez un responsable, un accès direct à l'équipe et un canal ouvert jusqu'au lancement.",
    stats: [
      { v: '+4 ans', l: 'Expérience' },
      { v: 'Casablanca', l: 'Maroc' },
      { v: '100%', l: 'Le travail vous appartient' },
      { v: '< 24h', l: 'Temps de réponse' },
    ],
    roster: [
      { idx: '01', role: 'Ingénierie & DevOps' },
      { idx: '02', role: 'Identité & Design Produit' },
      { idx: '03', role: 'Photo, Vidéo & Motion' },
      { idx: '04', role: "Service d'Assistance" },
      { idx: '05', role: 'Compte & Production' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● EN LIGNE',
  },
  contact: {
    label: '05 — Contact',
    line1: 'Prêts quand',
    accent: "vous l'êtes.",
    body: "Dites-nous ce que vous construisez, et nous vous répondrons dans un jour ouvré avec un périmètre, un prix et une date de début.",
    cta: 'Démarrer un projet',
    form: {
      namePlaceholder: 'Nom complet ou entreprise',
      emailPlaceholder: 'votre@email.com',
      servicesLabel: 'Service souhaité',
      descriptionPlaceholder: 'Parlez-nous de votre projet…',
      submit: 'Envoyer le message',
      successTitle: 'Message envoyé',
      successBody: 'Nous vous répondrons dans un jour ouvré.',
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── Chinese ─────────────────────────────────────────────────────────────────

const zh: Dict = {
  nav: {
    services: '服务',
    why: '为何选择我们',
    team: '团队',
    contact: '联系我们',
    cta: '开始项目',
  },
  hero: {
    badge: '数字代理机构 — 4+ 年经验',
    line1: '专为',
    accent: '高效而生。',
    line2: '经久不衰。',
    sub: '五大专业融于一体：工程、设计、制作、支持与培训。我们从头到尾交付完整的工作成果。',
    cta: '开始项目',
    seeServices: '查看服务',
    dragHint: '拖动旋转',
  },
  services: {
    label: '02 — 服务',
    heading: '五项服务。',
    headingAccent: '一支团队。',
    sub: '从启动到发布，同一批制作人、设计师和工程师全程陪伴。无交接。',
    items: [
      {
        title: 'IT 解决方案',
        body: '我们构建企业运营所依赖的系统。从基础设施到定制软件，您的技术栈始终保持快速、安全、随时可扩展。',
      },
      {
        title: '设计',
        body: '我们设计能真正发挥作用的品牌、产品和界面。每个像素都有其意义，每个系统都经得住考验。',
      },
      {
        title: '摄影与视频制作',
        body: '我们拍摄、剪辑并交付。从产品静图到品牌影片，画面震撼，剪辑叙事。',
      },
      {
        title: '服务台支持',
        body: '我们是您的第一道也是最后一道支持防线。问题被记录、跟踪并快速解决——始终有真人在另一端响应。',
      },
      {
        title: 'IT 培训',
        body: '我们对您的团队进行工具、系统和工作流程方面的培训。从入职培训到高级课程，您的员工在每次培训后都能立即投入执行。',
      },
    ],
  },
  why: {
    label: '03 — 为何选择我们',
    heading: '三个理由。',
    headingAccent: '直接了当。',
    sub: '大多数代理机构兜售流程，我们兜售成果。以下是与我们合作后的改变。',
    items: [
      { before: '您拥有一支覆盖五个专业的团队，因此 ', accent: '没有任何事情会被遗漏。', after: '' },
      { before: '您能在 ', accent: '几天内，而非几个月', after: ' 看到真实成果——我们采用紧凑的每周迭代交付。' },
      { before: '我们创作的一切均归您所有—— ', accent: '文件、素材、源代码、账号。', after: '' },
    ],
  },
  team: {
    label: '04 — 团队',
    heading: '专业团队。',
    headingAccent: '一位客户负责人。',
    body: '工程师、设计师、制作人和支持专家在内部直接参与您的项目。您获得一位负责人、与团队的直接沟通渠道，以及一个在发布前始终开放的频道。',
    stats: [
      { v: '+4 年', l: '经验' },
      { v: '卡萨布兰卡', l: '摩洛哥' },
      { v: '100%', l: '成果归您所有' },
      { v: '< 24小时', l: '回复时间' },
    ],
    roster: [
      { idx: '01', role: '工程与 DevOps' },
      { idx: '02', role: '品牌与产品设计' },
      { idx: '03', role: '摄影、视频与动效' },
      { idx: '04', role: '服务台支持' },
      { idx: '05', role: '客户管理与制作' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● 在线',
  },
  contact: {
    label: '05 — 联系我们',
    line1: '随时',
    accent: '准备就绪。',
    body: '告诉我们您在构建什么，我们将在一个工作日内回复您，并提供方案范围、报价和启动日期。',
    cta: '开始项目',
    form: {
      namePlaceholder: '姓名或公司名称',
      emailPlaceholder: 'your@email.com',
      servicesLabel: '感兴趣的服务',
      descriptionPlaceholder: '请描述您的项目……',
      submit: '发送消息',
      successTitle: '消息已发送',
      successBody: '我们将在一个工作日内与您联系。',
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── Russian ─────────────────────────────────────────────────────────────────

const ru: Dict = {
  nav: {
    services: 'Услуги',
    why: 'Почему мы',
    team: 'Команда',
    contact: 'Контакт',
    cta: 'Начать проект',
  },
  hero: {
    badge: 'Цифровое агентство — 4+ лет опыта',
    line1: 'Создано для',
    accent: 'результата.',
    line2: 'Сделано навсегда.',
    sub: 'Пять направлений под одной крышей: разработка, дизайн, производство, поддержка и обучение. Мы сдаём законченный продукт — от начала до конца.',
    cta: 'Начать проект',
    seeServices: 'Посмотреть услуги',
    dragHint: 'Перетащить для вращения',
  },
  services: {
    label: '02 — Услуги',
    heading: 'Пять услуг.',
    headingAccent: 'Одна команда.',
    sub: 'Одни и те же продюсеры, дизайнеры и инженеры от старта до запуска. Без передачи.',
    items: [
      {
        title: 'IT-решения',
        body: 'Мы строим системы, на которых работает ваш бизнес. От инфраструктуры до кастомного ПО — ваш стек остаётся быстрым, надёжным и готовым к масштабированию.',
      },
      {
        title: 'Дизайн',
        body: 'Мы создаём бренды, продукты и интерфейсы, которые работают. Каждый пиксель на своём месте, каждая система выдерживает давление.',
      },
      {
        title: 'Фото и видеопроизводство',
        body: 'Снимаем, монтируем и сдаём. От предметных фото до имиджевых фильмов — кадр работает, монтаж рассказывает историю.',
      },
      {
        title: 'Служба поддержки',
        body: 'Мы — ваша первая и последняя линия поддержки. Проблемы фиксируются, отслеживаются и решаются быстро, с живым человеком на другом конце.',
      },
      {
        title: 'IT-обучение',
        body: 'Мы обучаем вашу команду инструментам, системам и рабочим процессам, которые имеют значение. От вводных сессий до продвинутых курсов — ваши люди уходят готовыми к работе.',
      },
    ],
  },
  why: {
    label: '03 — Почему мы',
    heading: 'Три причины.',
    headingAccent: 'Без воды.',
    sub: 'Большинство агентств продают процесс. Мы продаём результат. Вот что меняется, когда вы работаете с нами.',
    items: [
      { before: 'Вы получаете одну команду в пяти направлениях, поэтому ', accent: 'ничто не проваливается между строк.', after: '' },
      { before: 'Вы видите реальную работу за ', accent: 'дни, а не месяцы', after: ' — мы отгружаем в плотных недельных циклах.' },
      { before: 'Вам принадлежит всё, что мы создаём — ', accent: 'файлы, материалы, исходный код, аккаунты.', after: '' },
    ],
  },
  team: {
    label: '04 — Команда',
    heading: 'Команда экспертов.',
    headingAccent: 'Один аккаунт-менеджер.',
    body: 'Инженеры, дизайнеры, продюсеры и специалисты поддержки работают над вашим проектом внутри. Вы получаете одного менеджера, прямой доступ к команде и канал, который открыт до самого запуска.',
    stats: [
      { v: '+4 года', l: 'Опыт' },
      { v: 'Касабланка', l: 'Марокко' },
      { v: '100%', l: 'Работа принадлежит вам' },
      { v: '< 24ч', l: 'Время ответа' },
    ],
    roster: [
      { idx: '01', role: 'Разработка & DevOps' },
      { idx: '02', role: 'Бренд & Продуктовый дизайн' },
      { idx: '03', role: 'Фото, Видео & Моушн' },
      { idx: '04', role: 'Служба поддержки' },
      { idx: '05', role: 'Аккаунт & Производство' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● В СЕТИ',
  },
  contact: {
    label: '05 — Контакт',
    line1: 'Готовы когда',
    accent: 'захотите вы.',
    body: 'Расскажите, что вы создаёте, — мы ответим в течение одного рабочего дня с описанием объёма, ценой и датой старта.',
    cta: 'Начать проект',
    form: {
      namePlaceholder: 'Имя или название компании',
      emailPlaceholder: 'ваш@email.com',
      servicesLabel: 'Интересующая услуга',
      descriptionPlaceholder: 'Расскажите о вашем проекте…',
      submit: 'Отправить сообщение',
      successTitle: 'Сообщение отправлено',
      successBody: 'Мы свяжемся с вами в течение одного рабочего дня.',
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── Polish ──────────────────────────────────────────────────────────────────

const pl: Dict = {
  nav: {
    services: 'Usługi',
    why: 'Dlaczego my',
    team: 'Zespół',
    contact: 'Kontakt',
    cta: 'Rozpocznij projekt',
  },
  hero: {
    badge: 'Agencja cyfrowa — 4+ lata doświadczenia',
    line1: 'Zbudowane by',
    accent: 'działać.',
    line2: 'Stworzone by trwać.',
    sub: 'Pięć dyscyplin pod jednym dachem: inżynieria, design, produkcja, wsparcie i szkolenia. Dostarczamy kompletną pracę, od początku do końca.',
    cta: 'Rozpocznij projekt',
    seeServices: 'Zobacz usługi',
    dragHint: 'Przeciągnij, by obrócić',
  },
  services: {
    label: '02 — Usługi',
    heading: 'Pięć usług.',
    headingAccent: 'Jeden zespół.',
    sub: 'Ci sami producenci, designerzy i inżynierowie od kickoffu do premiery. Bez przekazywania.',
    items: [
      {
        title: 'Rozwiązania IT',
        body: 'Budujemy systemy, na których opiera się Twój biznes. Od infrastruktury po oprogramowanie na zamówienie — Twój stack pozostaje szybki, bezpieczny i gotowy do skalowania.',
      },
      {
        title: 'Design',
        body: 'Projektujemy marki, produkty i interfejsy, które działają. Każdy piksel ma sens, każdy system wytrzymuje presję.',
      },
      {
        title: 'Produkcja Foto & Wideo',
        body: 'Nagrywamy, montujemy i dostarczamy. Od zdjęć produktowych po filmy brandingowe — obraz trafia, montaż opowiada historię.',
      },
      {
        title: 'Pomoc Techniczna',
        body: 'Jesteśmy Twoją pierwszą i ostatnią linią wsparcia. Zgłoszenia są rejestrowane, śledzone i rozwiązywane szybko — zawsze przez człowieka.',
      },
      {
        title: 'Szkolenia IT',
        body: 'Szkolimy Twój zespół z narzędzi, systemów i procesów, które mają znaczenie. Od sesji wdrożeniowych po zaawansowane warsztaty — Twoi ludzie wychodzą gotowi do działania.',
      },
    ],
  },
  why: {
    label: '03 — Dlaczego my',
    heading: 'Trzy powody.',
    headingAccent: 'Bez lania wody.',
    sub: 'Większość agencji sprzedaje proces. My sprzedajemy wynik. Oto co się zmienia, gdy pracujesz z nami.',
    items: [
      { before: 'Masz jeden zespół w pięciu dyscyplinach, więc ', accent: 'nic nie wpada przez szczeliny.', after: '' },
      { before: 'Widzisz prawdziwą pracę w ', accent: 'dni, a nie miesiące', after: ' — dostarczamy w ścisłych, tygodniowych cyklach.' },
      { before: 'Jesteś właścicielem wszystkiego, co tworzymy — ', accent: 'pliki, nagrania, kod źródłowy, konta.', after: '' },
    ],
  },
  team: {
    label: '04 — Zespół',
    heading: 'Zespół ekspertów.',
    headingAccent: 'Jeden opiekun konta.',
    body: 'Inżynierowie, designerzy, producenci i specjaliści wsparcia pracują nad Twoim projektem wewnętrznie. Masz jednego opiekuna, bezpośredni dostęp do zespołu i kanał otwarty aż do premiery.',
    stats: [
      { v: '+4 lata', l: 'Doświadczenie' },
      { v: 'Casablanca', l: 'Maroko' },
      { v: '100%', l: 'Praca jest Twoja' },
      { v: '< 24h', l: 'Czas odpowiedzi' },
    ],
    roster: [
      { idx: '01', role: 'Inżynieria & DevOps' },
      { idx: '02', role: 'Marka & Projektowanie Produktu' },
      { idx: '03', role: 'Foto, Wideo & Motion' },
      { idx: '04', role: 'Pomoc Techniczna & Wsparcie' },
      { idx: '05', role: 'Konto & Produkcja' },
    ],
    rosterLabel: '// roster.json',
    onlineLabel: '● ONLINE',
  },
  contact: {
    label: '05 — Kontakt',
    line1: 'Gotowi gdy',
    accent: 'Ty będziesz.',
    body: 'Powiedz nam, co budujesz, a odpowiemy w jeden dzień roboczy z zakresem, ceną i datą startu.',
    cta: 'Rozpocznij projekt',
    form: {
      namePlaceholder: 'Pełna nazwa lub firma',
      emailPlaceholder: 'twoj@email.com',
      servicesLabel: 'Interesująca usługa',
      descriptionPlaceholder: 'Opowiedz nam o swoim projekcie…',
      submit: 'Wyślij wiadomość',
      successTitle: 'Wiadomość wysłana',
      successBody: 'Odezwiemy się w ciągu jednego dnia roboczego.',
    },
  },
  footer: {
    copy: '© {year} Tinmelia',
    version: 'v2.6',
  },
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const dictionaries: Record<Locale, Dict> = { en, ar, es, fr, zh, ru, pl }
