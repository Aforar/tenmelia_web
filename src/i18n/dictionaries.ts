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
export type RosterItem = { idx: string; role: string; count: string }

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
    badge: 'A digital agency — Est. 2018',
    line1: 'Built to',
    accent: 'perform.',
    line2: 'Made to last.',
    sub: 'Five disciplines under one roof: engineering, design, social, production, and support. We ship complete work, end to end.',
    cta: 'Start a project',
    seeServices: 'See services',
    dragHint: 'Drag to rotate',
  },
  services: {
    label: '02 — Services',
    heading: 'Five services.',
    headingAccent: 'One team.',
    sub: 'You get the same producers, designers, and engineers from kickoff to launch. No subcontractors. No handoffs.',
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
        title: 'Social Media Management',
        body: 'We run your channels like a newsroom. Content ships on time, on brand, and on strategy — every week, without you chasing it.',
      },
      {
        title: 'Photo & Video Production',
        body: 'We shoot, edit, and deliver. From product stills to brand films, the footage lands, the cut tells the story.',
      },
      {
        title: 'Help Desk',
        body: 'We are your first and last line of support. Issues get logged, tracked, and resolved — fast, with a human on the other end.',
      },
    ],
  },
  why: {
    label: '03 — Why us',
    heading: 'Three reasons.',
    headingAccent: 'No fluff.',
    sub: 'Most agencies sell process. We sell output. Here is what changes when you work with us.',
    items: [
      { before: 'You get one team across four disciplines, so ', accent: 'nothing falls between the cracks.', after: '' },
      { before: 'You see real work in ', accent: 'days, not months', after: ' — we ship in tight, weekly cycles.' },
      { before: 'You own everything we make — ', accent: 'files, footage, source code, accounts.', after: '' },
    ],
  },
  team: {
    label: '04 — Team',
    heading: 'Twelve specialists.',
    headingAccent: 'One account lead.',
    body: 'Engineers, designers, strategists, and producers work on your project in-house — no subcontractors, no agency middle layer. You get one lead, direct access to the makers, and a Slack channel that stays open until launch.',
    stats: [
      { v: '12', l: 'In-house specialists' },
      { v: '8 yrs', l: 'Average tenure' },
      { v: '100%', l: 'Work owned by you' },
      { v: '< 24h', l: 'Reply time' },
    ],
    roster: [
      { idx: '01', role: 'Engineering & DevOps', count: '×4' },
      { idx: '02', role: 'Brand & Product Design', count: '×3' },
      { idx: '03', role: 'Social Strategy & Editorial', count: '×2' },
      { idx: '04', role: 'Photo, Video & Motion', count: '×2' },
      { idx: '05', role: 'Account & Production', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — Sofia / Remote',
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
    badge: 'وكالة رقمية — تأسست 2018',
    line1: 'بُني للأداء',
    accent: 'والإتقان.',
    line2: 'صُنع ليدوم.',
    sub: 'أربعة تخصصات تحت سقف واحد: هندسة، تصميم، تواصل اجتماعي، وإنتاج. نُسلّم عملًا متكاملًا من البداية للنهاية.',
    cta: 'ابدأ مشروعًا',
    seeServices: 'استعرض الخدمات',
    dragHint: 'اسحب للتدوير',
  },
  services: {
    label: '02 — الخدمات',
    heading: 'خمس خدمات.',
    headingAccent: 'فريق واحد.',
    sub: 'تحصل على نفس المنتجين والمصممين والمهندسين من البداية حتى الإطلاق. لا مقاولين من الباطن. لا تسليمات.',
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
        title: 'إدارة التواصل الاجتماعي',
        body: 'ندير قنواتك كغرفة أخبار. يُنشر المحتوى في وقته وبهوية موحدة واستراتيجية واضحة — أسبوعيًا ودون مطاردة.',
      },
      {
        title: 'التصوير والإنتاج المرئي',
        body: 'نصوّر، ونُحرّر، ونُسلّم. من الصور الثابتة إلى الأفلام التعريفية، اللقطة تصل والمونتاج يروي القصة.',
      },
      {
        title: 'مكتب المساعدة',
        body: 'نحن خط الدعم الأول والأخير. تُسجَّل المشكلات وتُتابَع وتُحَل بسرعة، ودائمًا بإنسان حقيقي في الطرف الآخر.',
      },
    ],
  },
  why: {
    label: '03 — لماذا نحن',
    heading: 'ثلاثة أسباب.',
    headingAccent: 'بلا حشو.',
    sub: 'معظم الوكالات تبيع عمليات. نحن نبيع نتائج. إليك ما يتغير حين تعمل معنا.',
    items: [
      { before: 'تحصل على فريق واحد عبر أربعة تخصصات، لذا ', accent: 'لا شيء يضيع بين الثغرات.', after: '' },
      { before: 'ترى عملًا حقيقيًا في ', accent: 'أيام، لا شهور', after: ' — نشحن في دورات أسبوعية محكمة.' },
      { before: 'تمتلك كل ما نصنعه — ', accent: 'الملفات، اللقطات، الكود المصدري، الحسابات.', after: '' },
    ],
  },
  team: {
    label: '04 — الفريق',
    heading: 'اثنا عشر متخصصًا.',
    headingAccent: 'مسؤول حساب واحد.',
    body: 'يعمل المهندسون والمصممون والاستراتيجيون والمنتجون على مشروعك داخليًا — بلا مقاولين من الباطن ولا وسيط وكالة. تحصل على مسؤول واحد، ووصول مباشر للمبدعين، وقناة Slack مفتوحة حتى الإطلاق.',
    stats: [
      { v: '12', l: 'متخصص داخلي' },
      { v: '8 سنوات', l: 'متوسط الخبرة' },
      { v: '100%', l: 'العمل ملكك' },
      { v: '< 24 ساعة', l: 'وقت الرد' },
    ],
    roster: [
      { idx: '01', role: 'هندسة وعمليات', count: '×4' },
      { idx: '02', role: 'هوية وتصميم منتجات', count: '×3' },
      { idx: '03', role: 'استراتيجية اجتماعية وتحرير', count: '×2' },
      { idx: '04', role: 'تصوير وفيديو وموشن', count: '×2' },
      { idx: '05', role: 'إدارة حسابات وإنتاج', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — صوفيا / عن بُعد',
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
    badge: 'Una agencia digital — Est. 2018',
    line1: 'Construido para',
    accent: 'rendir.',
    line2: 'Hecho para durar.',
    sub: 'Cuatro disciplinas bajo un mismo techo: ingeniería, diseño, social y producción. Entregamos trabajo completo, de principio a fin.',
    cta: 'Iniciar proyecto',
    seeServices: 'Ver servicios',
    dragHint: 'Arrastra para rotar',
  },
  services: {
    label: '02 — Servicios',
    heading: 'Cinco servicios.',
    headingAccent: 'Un equipo.',
    sub: 'Los mismos productores, diseñadores e ingenieros desde el inicio hasta el lanzamiento. Sin subcontratistas. Sin traspasos.',
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
        title: 'Gestión de Redes Sociales',
        body: 'Gestionamos tus canales como una redacción. El contenido se publica a tiempo, con tu identidad y estrategia — cada semana, sin que tengas que perseguirlo.',
      },
      {
        title: 'Producción Foto & Video',
        body: 'Grabamos, editamos y entregamos. Desde fotografías de producto hasta películas de marca, las tomas impactan y el montaje cuenta la historia.',
      },
      {
        title: 'Mesa de Ayuda',
        body: 'Somos tu primera y última línea de soporte. Los problemas se registran, rastrean y resuelven rápido, con una persona real al otro lado.',
      },
    ],
  },
  why: {
    label: '03 — Por qué nosotros',
    heading: 'Tres razones.',
    headingAccent: 'Sin relleno.',
    sub: 'La mayoría de las agencias venden procesos. Nosotros vendemos resultados. Esto es lo que cambia cuando trabajas con nosotros.',
    items: [
      { before: 'Tienes un equipo en cuatro disciplinas, así que ', accent: 'nada cae entre las grietas.', after: '' },
      { before: 'Ves trabajo real en ', accent: 'días, no meses', after: ' — entregamos en ciclos semanales ajustados.' },
      { before: 'Eres dueño de todo lo que hacemos — ', accent: 'archivos, metraje, código fuente, cuentas.', after: '' },
    ],
  },
  team: {
    label: '04 — Equipo',
    heading: 'Doce especialistas.',
    headingAccent: 'Un responsable de cuenta.',
    body: 'Ingenieros, diseñadores, estrategas y productores trabajan en tu proyecto internamente — sin subcontratistas, sin intermediarios. Tienes un responsable, acceso directo a los creadores y un canal de Slack abierto hasta el lanzamiento.',
    stats: [
      { v: '12', l: 'Especialistas internos' },
      { v: '8 años', l: 'Experiencia media' },
      { v: '100%', l: 'El trabajo es tuyo' },
      { v: '< 24h', l: 'Tiempo de respuesta' },
    ],
    roster: [
      { idx: '01', role: 'Ingeniería & DevOps', count: '×4' },
      { idx: '02', role: 'Marca & Diseño de Producto', count: '×3' },
      { idx: '03', role: 'Estrategia Social & Editorial', count: '×2' },
      { idx: '04', role: 'Foto, Video & Movimiento', count: '×2' },
      { idx: '05', role: 'Cuenta & Producción', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — Sofía / Remoto',
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
    badge: 'Une agence digitale — Est. 2018',
    line1: 'Conçu pour',
    accent: 'performer.',
    line2: 'Fait pour durer.',
    sub: 'Quatre disciplines sous un même toit : ingénierie, design, social et production. Nous livrons un travail complet, de bout en bout.',
    cta: 'Démarrer un projet',
    seeServices: 'Voir les services',
    dragHint: 'Glisser pour pivoter',
  },
  services: {
    label: '02 — Services',
    heading: 'Cinq services.',
    headingAccent: 'Une équipe.',
    sub: 'Les mêmes producteurs, designers et ingénieurs du lancement au déploiement. Pas de sous-traitants. Pas de transferts.',
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
        title: 'Gestion des Réseaux Sociaux',
        body: "Nous gérons vos canaux comme une salle de rédaction. Le contenu sort dans les temps, dans votre charte et selon votre stratégie — chaque semaine, sans relance.",
      },
      {
        title: 'Production Photo & Vidéo',
        body: "Nous tournons, montons et livrons. Des visuels produit aux films de marque, les images frappent et le montage raconte l'histoire.",
      },
      {
        title: "Service d'Assistance",
        body: "Nous sommes votre première et dernière ligne de support. Les problèmes sont enregistrés, suivis et résolus rapidement, avec un humain à l'autre bout.",
      },
    ],
  },
  why: {
    label: '03 — Pourquoi nous',
    heading: 'Trois raisons.',
    headingAccent: 'Sans rembourrage.',
    sub: 'La plupart des agences vendent un processus. Nous vendons des résultats. Voici ce qui change quand vous travaillez avec nous.',
    items: [
      { before: 'Vous avez une équipe sur quatre disciplines, donc ', accent: 'rien ne tombe dans les failles.', after: '' },
      { before: 'Vous voyez un vrai travail en ', accent: 'jours, pas en mois', after: ' — nous livrons en cycles hebdomadaires serrés.' },
      { before: 'Vous possédez tout ce que nous créons — ', accent: 'fichiers, séquences, code source, comptes.', after: '' },
    ],
  },
  team: {
    label: '04 — Équipe',
    heading: 'Douze spécialistes.',
    headingAccent: 'Un chef de compte.',
    body: "Ingénieurs, designers, stratèges et producteurs travaillent sur votre projet en interne — pas de sous-traitants, pas d'intermédiaire. Vous avez un responsable, un accès direct aux créateurs et un canal Slack ouvert jusqu'au lancement.",
    stats: [
      { v: '12', l: 'Spécialistes en interne' },
      { v: '8 ans', l: 'Ancienneté moyenne' },
      { v: '100%', l: 'Le travail vous appartient' },
      { v: '< 24h', l: 'Temps de réponse' },
    ],
    roster: [
      { idx: '01', role: 'Ingénierie & DevOps', count: '×4' },
      { idx: '02', role: 'Identité & Design Produit', count: '×3' },
      { idx: '03', role: 'Stratégie Sociale & Éditoriale', count: '×2' },
      { idx: '04', role: 'Photo, Vidéo & Motion', count: '×2' },
      { idx: '05', role: 'Compte & Production', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — Sofia / Distant',
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
    badge: '数字代理机构 — 成立于 2018',
    line1: '专为',
    accent: '高效而生。',
    line2: '经久不衰。',
    sub: '四大专业融于一体：工程、设计、社交媒体与制作。我们从头到尾交付完整的工作成果。',
    cta: '开始项目',
    seeServices: '查看服务',
    dragHint: '拖动旋转',
  },
  services: {
    label: '02 — 服务',
    heading: '五项服务。',
    headingAccent: '一支团队。',
    sub: '从启动到发布，同一批制作人、设计师和工程师全程陪伴。无外包，无交接。',
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
        title: '社交媒体管理',
        body: '我们像新闻编辑室一样运营您的频道。内容按时发布，符合品牌调性，每周推进，无需催促。',
      },
      {
        title: '摄影与视频制作',
        body: '我们拍摄、剪辑并交付。从产品静图到品牌影片，画面震撼，剪辑叙事。',
      },
      {
        title: '服务台支持',
        body: '我们是您的第一道也是最后一道支持防线。问题被记录、跟踪并快速解决——始终有真人在另一端响应。',
      },
    ],
  },
  why: {
    label: '03 — 为何选择我们',
    heading: '三个理由。',
    headingAccent: '直接了当。',
    sub: '大多数代理机构兜售流程，我们兜售成果。以下是与我们合作后的改变。',
    items: [
      { before: '您拥有一支覆盖四个专业的团队，因此 ', accent: '没有任何事情会被遗漏。', after: '' },
      { before: '您能在 ', accent: '几天内，而非几个月', after: ' 看到真实成果——我们采用紧凑的每周迭代交付。' },
      { before: '我们创作的一切均归您所有—— ', accent: '文件、素材、源代码、账号。', after: '' },
    ],
  },
  team: {
    label: '04 — 团队',
    heading: '十二位专家。',
    headingAccent: '一位客户负责人。',
    body: '工程师、设计师、策略师和制作人在内部直接参与您的项目——无外包，无中间层。您获得一位负责人、与创作者的直接沟通渠道，以及一个在发布前始终开放的 Slack 频道。',
    stats: [
      { v: '12', l: '内部专家' },
      { v: '8 年', l: '平均工作年限' },
      { v: '100%', l: '成果归您所有' },
      { v: '< 24小时', l: '回复时间' },
    ],
    roster: [
      { idx: '01', role: '工程与 DevOps', count: '×4' },
      { idx: '02', role: '品牌与产品设计', count: '×3' },
      { idx: '03', role: '社交策略与内容编辑', count: '×2' },
      { idx: '04', role: '摄影、视频与动效', count: '×2' },
      { idx: '05', role: '客户管理与制作', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — 索菲亚 / 远程',
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
    badge: 'Цифровое агентство — осн. 2018',
    line1: 'Создано для',
    accent: 'результата.',
    line2: 'Сделано навсегда.',
    sub: 'Четыре направления под одной крышей: разработка, дизайн, SMM и производство. Мы сдаём законченный продукт — от начала до конца.',
    cta: 'Начать проект',
    seeServices: 'Посмотреть услуги',
    dragHint: 'Перетащить для вращения',
  },
  services: {
    label: '02 — Услуги',
    heading: 'Пять услуг.',
    headingAccent: 'Одна команда.',
    sub: 'Одни и те же продюсеры, дизайнеры и инженеры от старта до запуска. Без субподрядчиков. Без передачи.',
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
        title: 'Управление соцсетями',
        body: 'Мы ведём ваши каналы как редакция. Контент выходит вовремя, в рамках бренда и по стратегии — каждую неделю, без напоминаний.',
      },
      {
        title: 'Фото и видеопроизводство',
        body: 'Снимаем, монтируем и сдаём. От предметных фото до имиджевых фильмов — кадр работает, монтаж рассказывает историю.',
      },
      {
        title: 'Служба поддержки',
        body: 'Мы — ваша первая и последняя линия поддержки. Проблемы фиксируются, отслеживаются и решаются быстро, с живым человеком на другом конце.',
      },
    ],
  },
  why: {
    label: '03 — Почему мы',
    heading: 'Три причины.',
    headingAccent: 'Без воды.',
    sub: 'Большинство агентств продают процесс. Мы продаём результат. Вот что меняется, когда вы работаете с нами.',
    items: [
      { before: 'Вы получаете одну команду в четырёх направлениях, поэтому ', accent: 'ничто не проваливается между строк.', after: '' },
      { before: 'Вы видите реальную работу за ', accent: 'дни, а не месяцы', after: ' — мы отгружаем в плотных недельных циклах.' },
      { before: 'Вам принадлежит всё, что мы создаём — ', accent: 'файлы, материалы, исходный код, аккаунты.', after: '' },
    ],
  },
  team: {
    label: '04 — Команда',
    heading: 'Двенадцать специалистов.',
    headingAccent: 'Один аккаунт-менеджер.',
    body: 'Инженеры, дизайнеры, стратеги и продюсеры работают над вашим проектом внутри — без субподрядчиков, без посредников. Вы получаете одного менеджера, прямой доступ к исполнителям и канал в Slack, который открыт до самого запуска.',
    stats: [
      { v: '12', l: 'Штатных специалистов' },
      { v: '8 лет', l: 'Средний стаж' },
      { v: '100%', l: 'Работа принадлежит вам' },
      { v: '< 24ч', l: 'Время ответа' },
    ],
    roster: [
      { idx: '01', role: 'Разработка & DevOps', count: '×4' },
      { idx: '02', role: 'Бренд & Продуктовый дизайн', count: '×3' },
      { idx: '03', role: 'Стратегия SMM & Редакция', count: '×2' },
      { idx: '04', role: 'Фото, Видео & Моушн', count: '×2' },
      { idx: '05', role: 'Аккаунт & Производство', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — София / Удалённо',
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
    badge: 'Agencja cyfrowa — zał. 2018',
    line1: 'Zbudowane by',
    accent: 'działać.',
    line2: 'Stworzone by trwać.',
    sub: 'Cztery dyscypliny pod jednym dachem: inżynieria, design, media społecznościowe i produkcja. Dostarczamy kompletną pracę, od początku do końca.',
    cta: 'Rozpocznij projekt',
    seeServices: 'Zobacz usługi',
    dragHint: 'Przeciągnij, by obrócić',
  },
  services: {
    label: '02 — Usługi',
    heading: 'Pięć usług.',
    headingAccent: 'Jeden zespół.',
    sub: 'Ci sami producenci, designerzy i inżynierowie od kickoffu do premiery. Bez podwykonawców. Bez przekazywania.',
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
        title: 'Zarządzanie Mediami Społecznościowymi',
        body: 'Prowadzimy Twoje kanały jak redakcja. Treści wychodzą na czas, zgodnie z marką i strategią — co tydzień, bez gonienia.',
      },
      {
        title: 'Produkcja Foto & Wideo',
        body: 'Nagrywamy, montujemy i dostarczamy. Od zdjęć produktowych po filmy brandingowe — obraz trafia, montaż opowiada historię.',
      },
      {
        title: 'Pomoc Techniczna',
        body: 'Jesteśmy Twoją pierwszą i ostatnią linią wsparcia. Zgłoszenia są rejestrowane, śledzone i rozwiązywane szybko — zawsze przez człowieka.',
      },
    ],
  },
  why: {
    label: '03 — Dlaczego my',
    heading: 'Trzy powody.',
    headingAccent: 'Bez lania wody.',
    sub: 'Większość agencji sprzedaje proces. My sprzedajemy wynik. Oto co się zmienia, gdy pracujesz z nami.',
    items: [
      { before: 'Masz jeden zespół w czterech dyscyplinach, więc ', accent: 'nic nie wpada przez szczeliny.', after: '' },
      { before: 'Widzisz prawdziwą pracę w ', accent: 'dni, a nie miesiące', after: ' — dostarczamy w ścisłych, tygodniowych cyklach.' },
      { before: 'Jesteś właścicielem wszystkiego, co tworzymy — ', accent: 'pliki, nagrania, kod źródłowy, konta.', after: '' },
    ],
  },
  team: {
    label: '04 — Zespół',
    heading: 'Dwunastu specjalistów.',
    headingAccent: 'Jeden opiekun konta.',
    body: 'Inżynierowie, designerzy, stratedzy i producenci pracują nad Twoim projektem wewnętrznie — bez podwykonawców, bez pośredników. Masz jednego opiekuna, bezpośredni dostęp do twórców i kanał Slack otwarty aż do premiery.',
    stats: [
      { v: '12', l: 'Wewnętrznych specjalistów' },
      { v: '8 lat', l: 'Średni staż' },
      { v: '100%', l: 'Praca jest Twoja' },
      { v: '< 24h', l: 'Czas odpowiedzi' },
    ],
    roster: [
      { idx: '01', role: 'Inżynieria & DevOps', count: '×4' },
      { idx: '02', role: 'Marka & Projektowanie Produktu', count: '×3' },
      { idx: '03', role: 'Strategia Społecznościowa & Redakcja', count: '×2' },
      { idx: '04', role: 'Foto, Wideo & Motion', count: '×2' },
      { idx: '05', role: 'Konto & Produkcja', count: '×1' },
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
    copy: '© {year} Tinmelia Studio',
    version: 'v2.6 — Sofia / Zdalnie',
  },
}

// ─── Export map ───────────────────────────────────────────────────────────────

export const dictionaries: Record<Locale, Dict> = { en, ar, es, fr, zh, ru, pl }
