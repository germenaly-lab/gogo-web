// Site Data extracted from AgencyBook - Bigo Live Agency Portal

export const siteInfo = {
  title: "دليل وكالات Bigo Live | Agency Book",
  subtitle: "الموقع الرسمي لدليل وتوجيهات وكالات Bigo Live المعتمدة",
  description: "هذا الدليل شامل لكل ما يخص عمل الوكالة على منصة Bigo Live. يهدف الى ضمان الالتزام، الفهم الكامل للسياسات، وزيادة فرص النجاح.",
  heroBanner: "/images/image_1.png",
  contactLinks: {
    whatsapp: "https://wa.me/",
    telegram: "https://t.me/",
    agencyForm: "#apply-agency",
    cibus: "https://sites.google.com/view/cibusjo/about-us"
  }
};

export const navItems = [
  { id: "home", label: "الصفحة الرئيسية", icon: "Home" },
  { id: "updates", label: "العروض والإشعارات", icon: "Bell" },
  { id: "badges", label: "القلادات والترقيات", icon: "Award" },
  { id: "points", label: "حاسبة العمولات والنقاط", icon: "Calculator" },
  { id: "guide", label: "دليل الوكالات الجديدة", icon: "BookOpen" },
  { id: "gala", label: "احتفال GALA السنوي", icon: "Sparkles" },
  { id: "english", label: "English Guide", icon: "Globe" },
  { id: "login", label: "تسجيل الدخول", icon: "UserCheck" },
];

export const badgesData = [
  {
    id: "gold",
    title: "قلادة الوكالة الذهبية",
    badgeType: "الأساسية",
    color: "gold",
    description: "هي القلادة الاساسية للوكالة والتي تعني ان هذا الحساب هو حساب وكالة معتمدة لدى تطبيق BigoLive، وهذه القلادة تكون فقط للحساب الاساسي صاحب الترخيص.",
    features: [
      "تثبيت شعار الوكالة الذهبي على الملف الشخصي",
      "صلاحية كاملة لإدارة المذيعين والمشرفين",
      "أولوية الحصول على الدعم الفني الخاص بالوكالات",
      "دخول اجتماعات الوكالات الرسمية مع إدارة Bigo Live"
    ],
    image: "/images/image_7.png"
  },
  {
    id: "silver",
    title: "قلادة الوكالة الفضية",
    badgeType: "المشرف المساعد",
    color: "silver",
    description: "هي قلادة مشرف الوكالة او المساعد، والتي تعني ان هذا الحساب هو حساب مشرف مساعد في هذه الوكالة، ويمكن إعطاءها لحساب واحد فقط مختلف عن حساب الوكالة الاساسي.",
    features: [
      "تثبيت الشعار الفضي المعتمد للمشرف",
      "مساعدة رئيس الوكالة في متابعة المذيعين والتارجت",
      "إمكانية الانضمام لقروبات الوكلاء المساعدين"
    ],
    image: "/images/image_8.png"
  },
  {
    id: "celebrity",
    title: "قلادة المشاهير والداعمين",
    badgeType: "تكريم خاص",
    color: "bronze",
    description: "قلادة مميزة تُمنح لكبار المذيعين والداعمين والمشاركين البارزين داخل الوكالة تقديراً لجهودهم وإنجازاتهم الاستثنائية.",
    features: [
      "مظهر فريد ورتبة خاصة في رومات الوكالة",
      "أولوية المشاركة في فعاليات Bigo GALA السنوية"
    ],
    image: "/images/image_9.png"
  }
];

export const updatesData = [
  {
    id: 1,
    title: "تحديث سياسات التارجت والعمولات لشهر اغسطس 2026",
    date: "أغسطس 2026",
    category: "سياسات جديدة",
    summary: "تم تحديث جدول العمولات للمستويات الجديدة وتسهيل شروط الساعات للمذيعين الجدد.",
    details: [
      "الحد الأدنى لساعات البث المباشر المعتمدة هو 30 ساعة شهرياً بمعدل ساعة واحدة يومياً على الأقل.",
      "تم إضافة بونص إضافي للوكالات التي تحقق أكثر من 1,000,000 فاصوليا شهرياً.",
      "التأكيد على منع الانتقال غير القانوني بين الوكالات دون موافقة الإدارة."
    ],
    badge: "مهم جداً"
  },
  {
    id: 2,
    title: "شروط توثيق حسابات الوكالات والمذيعين الرسمية",
    date: "يوليو 2026",
    category: "التوثيق والأمان",
    summary: "إرشادات حماية الحسابات وإكمال هوية الوكالة وتفادي البلاغات الوهمية.",
    details: [
      "ضرورة ربط الحساب برقم هاتف موثق وبريد إلكتروني نشط.",
      "تحديث بيانات الهوية في نموذج CIBUS المعتمد.",
      "عدم مشاركة بيانات تسجيل الدخول مع أي طرف ثالث."
    ],
    badge: "تحديث أمني"
  },
  {
    id: 3,
    title: "انطلاق الاستعدادات لحفل Bigo GALA العالمي 2027",
    date: "يونيو 2026",
    category: "فعاليات",
    summary: "فتح باب الترشيح للوكالات المتميزة للمشاركة في حفل الجالا السنوي.",
    details: [
      "الترشح يتم بناءً على مجموع النقاط المحققة خلال الربع الثالث والرابع.",
      "تكريم أفضل 10 وكالات على مستوى الشرق الأوسط وشمال أفريقيا."
    ],
    badge: "حدث عالمي"
  }
];

export const targetTiers = [
  { target: "D", beans: 10000, hours: 30, days: 15, hostSalaryUSD: 80, agencyBonusUSD: 16 },
  { target: "C", beans: 30000, hours: 30, days: 15, hostSalaryUSD: 240, agencyBonusUSD: 48 },
  { target: "B", beans: 50000, hours: 30, days: 15, hostSalaryUSD: 400, agencyBonusUSD: 80 },
  { target: "A", beans: 100000, hours: 30, days: 15, hostSalaryUSD: 800, agencyBonusUSD: 160 },
  { target: "S1", beans: 200000, hours: 30, days: 15, hostSalaryUSD: 1600, agencyBonusUSD: 320 },
  { target: "S2", beans: 500000, hours: 30, days: 15, hostSalaryUSD: 4000, agencyBonusUSD: 800 },
  { target: "S3", beans: 1000000, hours: 30, days: 15, hostSalaryUSD: 8000, agencyBonusUSD: 1600 },
  { target: "VIP", beans: 2000000, hours: 30, days: 15, hostSalaryUSD: 16000, agencyBonusUSD: 3200 }
];

export const newAgenciesGuide = {
  title: "دليل الوكالات الجديدة الشامل",
  subtitle: "خارطة الطريق لإنشاء وإدارة وكالة بث مباشر ناجحة على Bigo Live",
  sections: [
    {
      step: "01",
      title: "متطلبات إنشاء الوكالة المعتمدة",
      content: [
        "تقديم الطلب الرسمي عبر نموذج CIBUS المعالج لدى إدارة Bigo Live.",
        "توفر صاحب الوكالة على خبرة سابقة في إدارة المذيعين أو صناعة المحتوى.",
        "الالتزام بجلب 5 مقتدرين/مذيعين جدد على الأقل في الشهر الأول من التأسيس.",
        "إكمال الهوية الرسمية وتعيين حساب الوكالة الأساسي للحصول على القلادة الذهبية."
      ]
    },
    {
      step: "02",
      title: "قواعد واشتراطات المذيعين",
      content: [
        "يجب أن يكون المذيع ملتزماً بالبث المباشر بجودة عالية وإضاءة مناسبة.",
        "الحد الأدنى للتارجت الشهري المقبول هو 10,000 فاصوليا و 30 ساعة بث.",
        "ممنوع البث أثناء القيادة أو البث في ظروف غير ملائمة تخرق سياسة السلامة.",
        "الالتزام بالقواعد السلوكية والأخلاقية وعدم مشاركة محتوى يحرض على الكراهية."
      ]
    },
    {
      step: "03",
      title: "إدارة الأرباح وسحب العمولات",
      content: [
        "يتم تحويل الأرباح والعمولات شهرية تلقائياً في الأسبوع الأول من كل شهر ميلادي.",
        "تتوفر خيارات السحب عبر الحساب البنكي، Payoneer، أو المحافظ الإلكترونية المعتمدة.",
        "يحق للوكالة متابعة كشوفات الحسابات والتارجت عبر اللوحة المخصصة للوكلاء."
      ]
    },
    {
      step: "04",
      title: "الدعم والمساندة الفنية",
      content: [
        "توفر إدارة Bigo Live مدراء حسابات مخصصين لمساعدة الوكالات المعتمدة.",
        "حل النزاعات وبلاغات المذيعين يتم خلال 24 إلى 48 ساعة كحد أقصى.",
        "تنسيق فعاليات ورومات دعم خاصة لوكالات الشبكة."
      ]
    }
  ]
};

export const galaData = {
  title: "حفل Bigo GALA السنوي العالمي",
  description: "إحتفال الـGala هو أحد الإحتفالات السنوية لتطبيق BigoLive الذي يتم كل سنة في دولة مختلفة، ويضم العديد من الوكالات المتميزة حيث يتم دعوتهم وتكريمهم خلال حضور هذا الإحتفال.",
  events: [
    {
      year: "2025",
      location: "الاحتفال العالمي",
      tag: "GALA 2025",
      description: "حفل تكريم كبار الوكالات وصناع المحتوى بحضور قيادات التطبيق وكبار الداعمين من مختلف أنحاء العالم.",
      videoId: "RvIuebO91HY",
      highlights: ["تكريم أفضل 50 وكالة عالمية", "عروض فنية مباشرة وشغف صناع المحتوى", "جوائز دروع التميز الذهبية"]
    },
    {
      year: "2023",
      location: "الرياض - المملكة العربية السعودية",
      tag: "GALA 2023",
      description: "الحدث الأضخم في المنطقة العربية لتكريم وكالات الشرق الأوسط في فندق قصر الأناقة بالرياض.",
      videoId: "3QxhhNwN09g",
      highlights: ["حضور أكثر من 300 وكيل ومذيع", "توزيع جوائز الملايين من الفاصوليا", "تغطية إعلامية وشبكية واسعة"]
    }
  ]
};

export const englishGuide = {
  title: "Bigo Live Official Agency Guidebook",
  subtitle: "Complete operational rules, target system, and guidelines for international sub-agencies and hosts.",
  overview: "This agency manual is designed to ensure strict policy compliance, maximum target achievement, and seamless cooperation with Bigo Live management.",
  keyPoints: [
    {
      title: "Target & Salary Structure",
      desc: "Beans target starts from 10,000 Beans (Tier D) up to 2,000,000+ Beans (VIP Tier). All valid stream hours require a minimum of 60 consecutive minutes per session."
    },
    {
      title: "Live Rules & Regulations",
      desc: "Strictly prohibited: driving while broadcasting, broadcasting in dark/unsafe environments, vulgarity, re-broadcasting pre-recorded content, or illegal host poaching."
    },
    {
      title: "Agency Badges",
      desc: "Gold Badge is assigned strictly to the main verified agency account. Silver Badge is assigned to the authorized co-manager or assistant account."
    },
    {
      title: "Monthly Payouts",
      desc: "Official payouts are calculated on the 1st of every month and disbursed within the official settlement window via direct bank transfer or Payoneer."
    }
  ]
};

export const defaultCustomBlocks = [
  {
    id: "block-1",
    title: "مركز الدعم السريع للوكلاء الجدد",
    subtitle: "تواصل مباشر مع مدير الحسابات المعتمد للحصول على القلادة والترخيص",
    category: "دعم فني",
    icon: "Headphones",
    color: "#f59e0b",
    image: "/images/image_1.png",
    buttonText: "تواصل عبر الواتساب",
    buttonLink: "https://wa.me/",
    enabled: true
  },
  {
    id: "block-2",
    title: "إرشادات الأمان وتوثيق الحسابات",
    subtitle: "تجنب الحظر واحمي بيانات الوكالة عبر التوثيق البيومتري المعتمد",
    category: "تنبيه أمني",
    icon: "ShieldAlert",
    color: "#06b6d4",
    image: "/images/image_7.png",
    buttonText: "قراءة إرشادات الأمان",
    buttonLink: "#guide",
    enabled: true
  },
  {
    id: "block-3",
    title: "مكافآت التميز الشهرية وكبار الداعمين",
    subtitle: "بونص إضافي بنسبة تصل إلى 15% للوكالات التي تتجاوز التارجت المستهدف",
    category: "جوائز وبونص",
    icon: "Zap",
    color: "#8b5cf6",
    image: "/images/image_9.png",
    buttonText: "استعراض حاسبة العمولات",
    buttonLink: "#points",
    enabled: true
  }
];

export const defaultThemeConfig = {
  fontFamily: "'Cairo', sans-serif",
  baseFontSize: 16,
  headingFontSize: 24,
  primaryColor: "#f59e0b",
  glowColor: "rgba(245, 158, 11, 0.3)"
};

export const defaultAccountsData = [
  {
    id: "acc-1",
    name: "وكالة الفرسان المعتمدة",
    email: "manager@bigo.tv",
    bigoId: "908765432",
    role: "manager",
    badge: "القلادة الذهبية",
    beans: "1,450,000",
    monthlySalary: "$11,600 USD",
    status: "active",
    joinDate: "أغسطس 2026"
  },
  {
    id: "acc-2",
    name: "المذيعة سارة خالد",
    email: "sara@bigo.tv",
    bigoId: "887766554",
    role: "streamer",
    badge: "مذيع مميز",
    beans: "180,000",
    monthlySalary: "$1,440 USD",
    status: "active",
    joinDate: "يوليو 2026"
  },
  {
    id: "acc-3",
    name: "المشرف أحمد علي",
    email: "ahmed@bigo.tv",
    bigoId: "776655443",
    role: "supervisor",
    badge: "القلادة الفضية",
    beans: "450,000",
    monthlySalary: "$3,600 USD",
    status: "active",
    joinDate: "يونيو 2026"
  },
  {
    id: "acc-4",
    name: "حساب الآدمن الرئيسي (Admin System)",
    email: "admin@bigo.tv",
    bigoId: "111000999",
    role: "admin",
    badge: "مسؤول نظام",
    beans: "N/A",
    monthlySalary: "N/A",
    status: "active",
    joinDate: "يناير 2026"
  }
];


