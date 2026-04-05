export type Lang = "en" | "ur";

export const translations = {
  en: {
    nav: {
      features: "Features",
      about: "About",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      signIn: "Sign In",
      getStarted: "Get Started",
      getStartedFree: "Get Started Free",
    },
    hero: {
      badge: "Fuel Station SaaS Platform",
      headline1: "Run Every",
      highlight1: "Pump.",
      headline2: "Own Every",
      highlight2: "Litre.",
      description:
        "PPMS is the all-in-one SaaS platform for petrol pump operators — managing sales, inventory, accounting, payroll, and multi-station oversight from a single dashboard.",
      cta1: "Start Free Trial",
      cta2: "Watch Demo",
      trust: "fuel stations trust PPMS",
      rating: "avg rating",
    },
    stats: [
      { label: "Fuel Stations", description: "Actively managed on the platform" },
      { label: "Litres Tracked", description: "Fuel flow monitored monthly" },
      { label: "Uptime SLA", description: "Always-on reliability" },
      { label: "Access Levels", description: "From operator to master admin" },
    ],
    features: {
      badge: "Everything Built In",
      heading: "Every Tool Your",
      highlight: "Fuel Station",
      heading2: "Needs",
      subheading:
        "From daily sales to multi-station enterprise — PPMS is built to handle every layer of your petroleum business.",
      items: [
        {
          title: "Real-Time Dashboard",
          description:
            "Monitor sales, fuel levels, and station performance live with actionable insights and alerts.",
        },
        {
          title: "Sales & Transactions",
          description:
            "Record every nozzle transaction with shift-wise, payment-type, and fuel-type breakdown.",
        },
        {
          title: "Inventory Management",
          description:
            "Track dip readings, deliveries, variance reports, and never run out of stock unplanned.",
        },
        {
          title: "Accounting & Finance",
          description:
            "Automated daily closing, receivables, payables, and profit & loss statements.",
        },
        {
          title: "Payroll & HR",
          description:
            "Manage salaries, advances, attendance, and auto-calculate shift earnings.",
        },
        {
          title: "Multi-Station Control",
          description:
            "Run multiple stations from one dashboard — compare performance across all locations.",
        },
        {
          title: "Role-Based Access",
          description:
            "Granular permissions for MasterAdmin, Operator, Manager, and Cashier roles.",
        },
        {
          title: "Reports & Analytics",
          description:
            "Daily, weekly, and monthly PDF/Excel reports with trend analysis and forecasting.",
        },
      ],
    },
    howItWorks: {
      badge: "Simple Onboarding",
      heading: "Up and Running in",
      highlight: "Minutes",
      subheading:
        "No complex setup. No IT team required. Just three steps to a fully operational fuel station management system.",
      steps: [
        {
          title: "Set Up Your Organization & Stations",
          description:
            "Register your fuel company, add stations, configure tanks, dispensers, and nozzles. PPMS mirrors your real-world infrastructure.",
          bullets: [
            "Create your organization profile",
            "Add one or multiple stations",
            "Configure fuel types, tanks & dispensers",
          ],
        },
        {
          title: "Assign Roles & Configure Modules",
          description:
            "Invite your team with the right role — from Head-Office down to Operators. Enable only the modules your station needs.",
          bullets: [
            "Role-based user invitations",
            "Enable/disable modules per station",
            "Configure permissions & access scope",
          ],
        },
        {
          title: "Go Live — Track Everything in Real Time",
          description:
            "Start recording sales, shifts, deliveries, and expenses. Your dashboard updates instantly with every transaction.",
          bullets: [
            "Real-time sales & shift tracking",
            "Automated alerts & daily reports",
            "Profit analysis across all stations",
          ],
        },
      ],
    },
    cta: {
      badge: "Free 14-Day Trial",
      heading: "Ready to Take Control of",
      highlight: "Your Fuel Station?",
      subheading:
        "Join 200+ petrol pump operators who have eliminated manual reconciliation, reduced errors, and gained complete visibility into every litre and every rupee.",
      btn1: "Start Free Trial",
      btn2: "Talk to Sales",
      trust: ["No credit card required", "14-day free trial", "Cancel anytime", "99.9% uptime SLA"],
    },
    pricing: {
      badge: "Simple Pricing",
      heading: "Invest in",
      highlight: "Your Station's",
      heading2: "Future",
      subheading:
        "Transparent pricing with no hidden fees. Start with a 14-day free trial — no credit card required.",
      monthly: "Monthly",
      annual: "Annual",
      save: "Save 20%",
      popular: "Most Popular",
      included: "What's included",
      perMonth: "per month",
      billedAnnually: "billed annually",
      custom: "Custom",
      customDesc: "tailored to your scale",
      note: "All plans include a 14-day free trial. No credit card required.",
      contactUs: "Contact us",
      volumeNote: "for volume discounts.",
      plans: [
        {
          name: "Starter",
          description: "Perfect for a single fuel station getting started.",
          cta: "Start Free Trial",
          features: [
            "1 Station",
            "Up to 5 users",
            "Sales & Shift tracking",
            "Basic inventory management",
            "Daily closing reports",
            "Email support",
            "Mobile app access",
          ],
        },
        {
          name: "Business",
          description: "For growing operators with multiple stations.",
          cta: "Start Free Trial",
          features: [
            "Up to 5 Stations",
            "Up to 25 users",
            "All modules included",
            "Accounting & ledger management",
            "Attendance & payroll",
            "Head-office dashboard",
            "Advanced reports & analytics",
            "Priority support",
            "API access",
          ],
        },
        {
          name: "Enterprise",
          description: "Unlimited scale with custom SLA and dedicated support.",
          cta: "Contact Sales",
          features: [
            "Unlimited Stations",
            "Unlimited users",
            "Everything in Business",
            "Custom module configuration",
            "Dedicated account manager",
            "SLA-backed uptime guarantee",
            "On-premises deployment option",
            "Training & onboarding sessions",
            "White-label options",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Customer Stories",
      heading: "Trusted by Operators",
      highlight: "Across Pakistan",
      items: [
        {
          quote: "Before PPMS we were doing everything in Excel and still had daily shortages nobody could explain. Now every rupee and every litre is accounted for.",
          name: "Muhammad Asif",
          role: "Owner, Al-Noor Petroleum",
          location: "Lahore",
        },
        {
          quote: "Managing 3 stations used to mean 3 separate headaches. PPMS gives me one dashboard to see everything — shifts, stock, profit — in real time.",
          name: "Tariq Mehmood",
          role: "Operations Manager",
          location: "Karachi",
        },
        {
          quote: "The payroll module alone saved us hours every month. Staff salary calculations, advances, deductions — it all happens automatically now.",
          name: "Sana Gul",
          role: "Finance Head, Galaxy Fuels",
          location: "Islamabad",
        },
      ],
    },
    footer: {
      tagline:
        "The all-in-one SaaS platform for petrol pump management. Built by Razex Solutions for Pakistan's fuel industry.",
      sectionTitles: ["Product", "Company", "Legal"],
      sections: {
        Product: [
          { label: "Features", href: "#features" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Pricing", href: "#pricing" },
          { label: "Changelog", href: "#" },
        ],
        Company: [
          { label: "About Razex Solutions", href: "https://razexsolutions.com" },
          { label: "Contact Us", href: "#contact" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
        ],
        Legal: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Policy", href: "#" },
        ],
      },
      rights: "All rights reserved.",
      status: "All systems operational",
    },
  },

  ur: {
    nav: {
      features: "خصوصیات",
      about: "ہمارے بارے میں",
      pricing: "قیمتیں",
      faq: "سوالات",
      contact: "رابطہ",
      signIn: "لاگ ان",
      getStarted: "شروع کریں",
      getStartedFree: "مفت شروع کریں",
    },
    hero: {
      badge: "فیول اسٹیشن سافٹ ویئر",
      headline1: "ہر پمپ",
      highlight1: "چلائیں۔",
      headline2: "ہر لیٹر",
      highlight2: "کنٹرول کریں۔",
      description:
        "PPMS پیٹرول پمپ آپریٹرز کے لیے ایک مکمل کلاؤڈ پلیٹ فارم ہے — فروخت، انوینٹری، اکاؤنٹنگ، پے رول، اور ملٹی اسٹیشن نگرانی ایک ہی ڈیش بورڈ سے۔",
      cta1: "مفت ٹرائل شروع کریں",
      cta2: "ڈیمو دیکھیں",
      trust: "فیول اسٹیشن PPMS پر بھروسہ کرتے ہیں",
      rating: "اوسط ریٹنگ",
    },
    stats: [
      { label: "فیول اسٹیشنز", description: "پلیٹ فارم پر فعال انتظام" },
      { label: "لیٹر ٹریک کیے گئے", description: "ماہانہ ایندھن کی نگرانی" },
      { label: "اپ ٹائم گارنٹی", description: "ہمیشہ آن — قابل اعتماد" },
      { label: "ایکسیس لیولز", description: "آپریٹر سے ماسٹر ایڈمن تک" },
    ],
    features: {
      badge: "سب کچھ موجود ہے",
      heading: "آپ کے",
      highlight: "فیول اسٹیشن",
      heading2: "کی ہر ضرورت",
      subheading:
        "روزانہ کی فروخت سے لے کر ملٹی اسٹیشن انٹرپرائز تک — PPMS آپ کے پیٹرولیم کاروبار کی ہر سطح کو سنبھالتا ہے۔",
      items: [
        {
          title: "ریئل ٹائم ڈیش بورڈ",
          description:
            "فروخت، ایندھن کی سطح، اور اسٹیشن کی کارکردگی کو براہ راست مانیٹر کریں۔",
        },
        {
          title: "فروخت اور لین دین",
          description:
            "ہر نوزل ٹرانزیکشن کو شفٹ وار، ادائیگی کی قسم اور ایندھن کی قسم کے مطابق ریکارڈ کریں۔",
        },
        {
          title: "انوینٹری مینجمنٹ",
          description:
            "ڈپ ریڈنگ، ڈیلیوری، فرق کی رپورٹس ٹریک کریں اور اسٹاک کی کمی سے بچیں۔",
        },
        {
          title: "اکاؤنٹنگ اور فنانس",
          description:
            "خودکار روزانہ کلوزنگ، وصولیاں، ادائیگیاں، اور منافع و نقصان کے بیانات۔",
        },
        {
          title: "پے رول اور ایچ آر",
          description:
            "تنخواہیں، پیشگی، حاضری، اور شفٹ آمدنی کا خودکار حساب کتاب کریں۔",
        },
        {
          title: "ملٹی اسٹیشن کنٹرول",
          description:
            "ایک ڈیش بورڈ سے متعدد اسٹیشن چلائیں — تمام مقامات کی کارکردگی کا موازنہ کریں۔",
        },
        {
          title: "رول بیسڈ ایکسیس",
          description:
            "ماسٹر ایڈمن، آپریٹر، مینیجر، اور کیشئر کے لیے الگ الگ اجازتیں۔",
        },
        {
          title: "رپورٹس اور تجزیات",
          description:
            "روزانہ، ہفتہ وار، اور ماہانہ پی ڈی ایف/ایکسل رپورٹس بمع ٹرینڈ تجزیہ۔",
        },
      ],
    },
    howItWorks: {
      badge: "آسان آغاز",
      heading: "چند منٹوں میں",
      highlight: "تیار",
      subheading:
        "کوئی پیچیدہ سیٹ اپ نہیں۔ آئی ٹی ٹیم کی ضرورت نہیں۔ صرف تین مراحل میں مکمل فیول اسٹیشن مینجمنٹ سسٹم۔",
      steps: [
        {
          title: "اپنا ادارہ اور اسٹیشن ترتیب دیں",
          description:
            "اپنی فیول کمپنی رجسٹر کریں، اسٹیشن شامل کریں، ٹینک، ڈسپنسر، اور نوزل ترتیب دیں۔",
          bullets: [
            "اپنا ادارہ پروفائل بنائیں",
            "ایک یا متعدد اسٹیشن شامل کریں",
            "ایندھن کی اقسام، ٹینک اور ڈسپنسر ترتیب دیں",
          ],
        },
        {
          title: "کردار تفویض کریں اور ماڈیول ترتیب دیں",
          description:
            "اپنی ٹیم کو مناسب کردار کے ساتھ مدعو کریں — ہیڈ آفس سے آپریٹر تک۔",
          bullets: [
            "رول بیسڈ صارف دعوتیں",
            "فی اسٹیشن ماڈیول فعال/غیر فعال کریں",
            "اجازتیں اور رسائی کا دائرہ ترتیب دیں",
          ],
        },
        {
          title: "لائیو ہوں — سب کچھ ریئل ٹائم میں دیکھیں",
          description:
            "فروخت، شفٹ، ڈیلیوری، اور اخراجات ریکارڈ کرنا شروع کریں۔ ہر ٹرانزیکشن کے ساتھ ڈیش بورڈ فوری اپڈیٹ ہوتا ہے۔",
          bullets: [
            "ریئل ٹائم فروخت اور شفٹ ٹریکنگ",
            "خودکار الرٹس اور روزانہ رپورٹس",
            "تمام اسٹیشنز میں منافع کا تجزیہ",
          ],
        },
      ],
    },
    cta: {
      badge: "مفت ۱۴ روزہ ٹرائل",
      heading: "اپنا فیول اسٹیشن",
      highlight: "آج ہی کنٹرول کریں",
      subheading:
        "۲۰۰ سے زیادہ پیٹرول پمپ آپریٹرز کے ساتھ شامل ہوں جنہوں نے دستی حساب کتاب ختم کیا، غلطیاں کم کیں، اور ہر لیٹر اور ہر روپے پر مکمل نظر رکھی۔",
      btn1: "مفت ٹرائل شروع کریں",
      btn2: "سیلز سے بات کریں",
      trust: [
        "کریڈٹ کارڈ کی ضرورت نہیں",
        "۱۴ روزہ مفت ٹرائل",
        "کسی بھی وقت منسوخ کریں",
        "۹۹.۹٪ اپ ٹائم گارنٹی",
      ],
    },
    pricing: {
      badge: "آسان قیمتیں",
      heading: "اپنے اسٹیشن کے",
      highlight: "مستقبل میں",
      heading2: "سرمایہ کاری کریں",
      subheading:
        "شفاف قیمتیں، کوئی چھپی ہوئی فیس نہیں۔ ۱۴ روزہ مفت ٹرائل سے شروع کریں — کریڈٹ کارڈ کی ضرورت نہیں۔",
      monthly: "ماہانہ",
      annual: "سالانہ",
      save: "۲۰٪ بچائیں",
      popular: "سب سے مقبول",
      included: "کیا شامل ہے",
      perMonth: "فی ماہ",
      billedAnnually: "سالانہ ادائیگی",
      custom: "کسٹم",
      customDesc: "آپ کی ضرورت کے مطابق",
      note: "تمام پلانز میں ۱۴ روزہ مفت ٹرائل شامل ہے۔ کریڈٹ کارڈ کی ضرورت نہیں۔",
      contactUs: "ہم سے رابطہ کریں",
      volumeNote: "بلک ڈسکاؤنٹ کے لیے۔",
      plans: [
        {
          name: "اسٹارٹر",
          description: "ایک فیول اسٹیشن کے آپریٹرز کے لیے بہترین۔",
          cta: "مفت ٹرائل شروع کریں",
          features: [
            "۱ اسٹیشن",
            "زیادہ سے زیادہ ۵ صارفین",
            "فروخت اور شفٹ ٹریکنگ",
            "بنیادی انوینٹری مینجمنٹ",
            "روزانہ کلوزنگ رپورٹس",
            "ای میل سپورٹ",
            "موبائل ایپ ایکسیس",
          ],
        },
        {
          name: "بزنس",
          description: "متعدد اسٹیشنوں والے آپریٹرز کے لیے۔",
          cta: "مفت ٹرائل شروع کریں",
          features: [
            "زیادہ سے زیادہ ۵ اسٹیشنز",
            "زیادہ سے زیادہ ۲۵ صارفین",
            "تمام ماڈیولز شامل",
            "اکاؤنٹنگ اور لیجر مینجمنٹ",
            "حاضری اور پے رول",
            "ہیڈ آفس ڈیش بورڈ",
            "جدید رپورٹس اور تجزیات",
            "ترجیحی سپورٹ",
            "اے پی آئی ایکسیس",
          ],
        },
        {
          name: "انٹرپرائز",
          description: "لامحدود اسکیل، کسٹم ایس ایل اے اور ڈیڈیکیٹڈ سپورٹ۔",
          cta: "سیلز سے رابطہ کریں",
          features: [
            "لامحدود اسٹیشنز",
            "لامحدود صارفین",
            "بزنس پلان کی تمام خصوصیات",
            "کسٹم ماڈیول ترتیب",
            "ڈیڈیکیٹڈ اکاؤنٹ مینیجر",
            "ایس ایل اے کے ساتھ اپ ٹائم گارنٹی",
            "آن پریمیسز ڈیپلائمنٹ",
            "تربیت اور آن بورڈنگ",
            "وائٹ لیبل آپشنز",
          ],
        },
      ],
    },
    testimonials: {
      badge: "گاہکوں کی آراء",
      heading: "پاکستان بھر کے آپریٹرز",
      highlight: "کا اعتماد",
      items: [
        {
          quote: "PPMS سے پہلے ہم سب کچھ Excel میں کرتے تھے اور پھر بھی روزانہ کمی ہوتی تھی۔ اب ہر روپیہ اور ہر لیٹر کا حساب ہوتا ہے۔",
          name: "محمد آصف",
          role: "مالک، النور پیٹرولیم",
          location: "لاہور",
        },
        {
          quote: "تین اسٹیشن مینیج کرنا مطلب تین سر درد تھے۔ PPMS نے مجھے ایک ڈیش بورڈ دیا — شفٹ، اسٹاک، منافع — سب ریئل ٹائم میں۔",
          name: "طارق محمود",
          role: "آپریشنز مینیجر",
          location: "کراچی",
        },
        {
          quote: "صرف پے رول ماڈیول نے ہمارے گھنٹے بچا دیے۔ تنخواہیں، پیشگی، کٹوتیاں — اب سب خودکار ہو گیا ہے۔",
          name: "ثنا گل",
          role: "فنانس ہیڈ، گیلکسی فیولز",
          location: "اسلام آباد",
        },
      ],
    },
    footer: {
      tagline:
        "پیٹرول پمپ مینجمنٹ کا مکمل کلاؤڈ پلیٹ فارم۔ Razex Solutions نے پاکستان کی فیول انڈسٹری کے لیے بنایا۔",
      sectionTitles: ["پروڈکٹ", "کمپنی", "قانونی"],
      sections: {
        Product: [
          { label: "خصوصیات", href: "#features" },
          { label: "یہ کیسے کام کرتا ہے", href: "#how-it-works" },
          { label: "قیمتیں", href: "#pricing" },
          { label: "تازہ ترین تبدیلیاں", href: "#" },
        ],
        Company: [
          { label: "Razex Solutions کے بارے میں", href: "https://razexsolutions.com" },
          { label: "ہم سے رابطہ کریں", href: "#contact" },
          { label: "بلاگ", href: "#" },
          { label: "کریئر", href: "#" },
        ],
        Legal: [
          { label: "پرائیویسی پالیسی", href: "/privacy" },
          { label: "استعمال کی شرائط", href: "/terms" },
          { label: "کوکی پالیسی", href: "#" },
        ],
      },
      rights: "جملہ حقوق محفوظ ہیں۔",
      status: "تمام سسٹمز فعال ہیں",
    },
  },
};

export type Translations = typeof translations.en;
