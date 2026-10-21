/**
 * SETUBANDH (सेतुबंध) — Front Page JavaScript Engine
 * Features:
 * - Dynamic Startup Directory & Filtering (Category, City, Stage, Search)
 * - Full Hindi / English Translation Engine (i18n)
 * - Registration Modal with Validation & Success State
 * - Connect Request Modal with Context Injection
 * - Meetup Booking Toast Flow
 * - Animated Number Odometers
 * - Mobile Drawer & Accessible Focus
 */

// 1. Startup Directory Seed Data
const STARTUPS_DATA = [
  {
    id: "kisansetu",
    name: "KisanSetu",
    nameHi: "किसानसेतु",
    logo: "🌾",
    city: "Indore",
    cityHi: "इंदौर",
    sector: "agritech",
    sectorLabel: "AgriTech (कृषि)",
    stage: "early_revenue",
    stageLabel: "Early Revenue",
    funding: "₹1.5 Cr Seed Open",
    taglineHi: "मालवा के सोयाबीन और गेहूं किसानों के लिए AI-संचालित मृदा परीक्षण और मौसम पूर्वानुमान।",
    taglineEn: "AI-driven precision soil analytics and hyper-local weather advisory for Malwa farmers.",
    isVerified: true,
    verifyType: "DPIIT #DIPP84920",
    founders: "अमित पाटीदार, मयंक शर्मा",
    website: "https://kisansetu.in"
  },
  {
    id: "narmadaclean",
    name: "Narmada CleanEnergy",
    nameHi: "नर्मदा क्लीनएनर्जी",
    logo: "⚡",
    city: "Indore",
    cityHi: "इंदौर",
    sector: "cleantech",
    sectorLabel: "CleanTech & EV",
    stage: "growth",
    stageLabel: "Growth / Scale",
    funding: "₹4.2 Cr Raised",
    taglineHi: "इंदौर-भोपाल हाईवे कॉरिडोर पर 100% सोलर पॉवर्ड हाई-स्पीड EV चार्जिंग हब नेटवर्क।",
    taglineEn: "100% solar-powered EV fast-charging hub network across Indore-Bhopal industrial highway.",
    isVerified: true,
    verifyType: "CIN #U40106MP",
    founders: "रोहित वर्मा, दीपाली जैन",
    website: "https://narmadaclean.mp.gov.in"
  },
  {
    id: "vyapaardost",
    name: "VyapaarDost",
    nameHi: "व्यापारदोस्त",
    logo: "💳",
    city: "Indore",
    cityHi: "इंदौर",
    sector: "fintech",
    sectorLabel: "FinTech & SaaS",
    stage: "seed",
    stageLabel: "Seed Stage",
    funding: "₹2.1 Cr Pre-Seed",
    taglineHi: "टियर-2/3 भारत के 50,000+ किराना स्टोर्स के लिए सरल हिंदी/हिंग्लिश GST बिलिंग व डिजिटल बहीखाता।",
    taglineEn: "Vernacular Hindi & Hinglish GST billing and credit ledger platform for 50,000+ Bharat merchants.",
    isVerified: true,
    verifyType: "GST #23AABC9876",
    founders: "गौरव पोरवाल",
    website: "https://vyapaardost.app"
  },
  {
    id: "chaichaupal",
    name: "ChaiChaupal",
    nameHi: "चायचौपाल",
    logo: "☕",
    city: "Indore",
    cityHi: "इंदौर",
    sector: "d2c",
    sectorLabel: "D2C & Retail",
    stage: "growth",
    stageLabel: "Growth Stage",
    funding: "₹7.5 Cr Series A",
    taglineHi: "इंदौर की प्रसिद्ध मसाला चाय संस्कृति को भारत के 40+ शहरों में 120 आउटलेट्स के ज़रिए पहुँचाना।",
    taglineEn: "Bringing Indore's artisanal chai & poha culture across 40+ Indian cities with 120 franchise outlets.",
    isVerified: true,
    verifyType: "CIN #U55101MP",
    founders: "आनंद जोशी, सारांश जैन",
    website: "https://chaichaupal.com"
  },
  {
    id: "medlinkmalwa",
    name: "MedLink Malwa",
    nameHi: "मेडलिंक मालवा",
    logo: "🩺",
    city: "Bhopal",
    cityHi: "भोपाल / इंदौर",
    sector: "healthtech",
    sectorLabel: "HealthTech",
    stage: "mvp",
    stageLabel: "MVP Ready",
    funding: "Seeking ₹80 Lakh",
    taglineHi: "मध्य प्रदेश के ग्रामीण और अर्ध-शहरी इलाकों में 24/7 टेली-परामर्श और शुद्ध जेनेरिक दवा आपूर्ति।",
    taglineEn: "24/7 tele-consultation and verified generic medicine delivery across semi-urban Madhya Pradesh.",
    isVerified: true,
    verifyType: "Udyam #MP-10-00492",
    founders: "डॉ. निकिता निगम",
    website: "https://medlinkmalwa.org"
  },
  {
    id: "fleetgati",
    name: "FleetGati",
    nameHi: "फ़्लीटगति",
    logo: "🚚",
    city: "Indore",
    cityHi: "इंदौर",
    sector: "logistics",
    sectorLabel: "Logistics & Supply",
    stage: "early_revenue",
    stageLabel: "Early Revenue",
    funding: "₹3 Cr Seed Open",
    taglineHi: "पीथमपुर औद्योगिक क्षेत्र और इंदौर कृषि मंडियों के लिए ऑन-डिमांड कोल्ड-चेन मिनी-ट्रक एग्रीगेटर।",
    taglineEn: "On-demand cold-chain and cargo mini-truck aggregator connecting Pithampur and regional Mandis.",
    isVerified: true,
    verifyType: "DPIIT #DIPP99411",
    founders: "शुभम चौधरी, विवेक राठौर",
    website: "https://fleetgati.in"
  },
  {
    id: "shikshasetu",
    name: "ShikshaSetu",
    nameHi: "शिक्षासेतु",
    logo: "🎓",
    city: "Indore",
    cityHi: "इंदौर",
    sector: "edtech",
    sectorLabel: "EdTech & Skills",
    stage: "mvp",
    stageLabel: "MVP Stage",
    funding: "Bootstrapped",
    taglineHi: "हिंदी माध्यम के छात्रों को व्यावहारिक कोडिंग, AI टूल्स और स्थानीय कंपनियों में इंटर्नशिप तैयार करना।",
    taglineEn: "Vernacular Hindi coding bootcamps and AI literacy connecting regional youth to Indore tech jobs.",
    isVerified: true,
    verifyType: "Udyam #MP-10-09812",
    founders: "प्रिया उपाध्याय",
    website: "https://shikshasetu.org"
  },
  {
    id: "krishidrone",
    name: "AeroKisan Drones",
    nameHi: "एयरोकिसान ड्रोन्स",
    logo: "🚁",
    city: "Jabalpur",
    cityHi: "जबलपुर / इंदौर",
    sector: "agritech",
    sectorLabel: "AgriTech & Drones",
    stage: "early_revenue",
    stageLabel: "Early Revenue",
    funding: "₹1.8 Cr Seed",
    taglineHi: "खेतों में कीटनाशक छिड़काव और फसल स्वास्थ्य निगरानी के लिए DGCA-स्वीकृत कृषि ड्रोन सेवा।",
    taglineEn: "DGCA-approved agricultural drone spraying and crop health mapping service for central India.",
    isVerified: true,
    verifyType: "DPIIT #DIPP10243",
    founders: "हर्षल शर्मा",
    website: "https://aerokisan.in"
  }
];

// 2. Bilingual Translation Dictionary (Hindi / English)
const TRANSLATIONS = {
  hi: {
    announcementText: "🔥 <strong>अगला इंदौर फ़ाउंडर्स मीटअप:</strong> 15 नवंबर | सुपर कॉरिडोर इन्क्यूबेशन सेंटर | 100+ सीटें आरक्षित",
    announcementLink: "पास बुक करें &rarr;",
    taglineMini: "इंदौर से भारत तक",
    navDirectory: "स्टार्टअप डायरेक्टरी",
    navIndore: "इंदौर हब 🌟",
    navHow: "कैसे काम करता है",
    navInvestors: "इन्वेस्टर्स व मेंटर्स",
    navFaq: "FAQ",
    btnInvestorLogin: "इन्वेस्टर लॉगिन",
    btnRegister: "स्टार्टअप रजिस्टर करें",
    heroPill: "🚀 मध्य प्रदेश का सबसे बड़ा स्वतंत्र स्टार्टअप नेटवर्क",
    heroTitle1: "इंदौर से भारत तक,",
    heroTitle2: "स्टार्टअप्स का सबसे भरोसेमंद सेतु",
    heroLead: "सरकारी पोर्टलों के चक्कर और बिखरे हुए संपर्कों को कहें अलविदा। 5 मिनट में अपना स्टार्टअप रजिस्टर करें, DPIIT / CIN वेरिफ़ाइड बैज पाएँ, और सीधे टॉप एंजेल इन्वेस्टर्स, इन्क्यूबेटर्स व मेंटर्स से जुड़ें।",
    ctaPrimary: "अपना स्टार्टअप रजिस्टर करें (5 min)",
    ctaSecondary: "स्टार्टअप्स खोजें व कनेक्ट हों",
    trust1: "DPIIT / CIN जाँचे गए प्रोफ़ाइल",
    trust2: "DPDP Act 2023 प्राइवेसी सुरक्षित",
    trust3: "मासिक ऑफ़लाइन फाउंडर्स मीटअप",
    statVerified: "वेरिफ़ाइड स्टार्टअप्स",
    statFunding: "कैपिटल व फ़ंडिंग सुविधा",
    statFounders: "सक्रिय फ़ाउंडर्स व मेंटर्स",
    statMeetups: "सफल ऑफ़लाइन मीटअप",
    dirBadge: "सार्वजनिक डायरेक्टरी",
    dirTitle: "स्टार्टअप्स खोजें और सीधे कनेक्ट हों",
    dirLead: "उद्योग, शहर, फ़ंडिंग स्टेज या कीवर्ड से खोजें। बिना बिचौलियों के सीधे फ़ाउंडर से परिचय पाएँ।",
    searchPlaceholder: "स्टार्टअप का नाम, सेक्टर, या समस्या खोजें (जैसे AgriTech, AI, Indore, Seed)...",
    optAllCities: "सभी शहर (All Cities)",
    optIndore: "📍 केवल इंदौर (Indore Special)",
    optAllStages: "सभी स्टेज (All Stages)",
    catAll: "सभी (All)",
    emptyTitle: "कोई स्टार्टअप नहीं मिला",
    emptyDesc: "अपने सर्च शब्द या फ़िल्टर बदलकर देखें।",
    btnResetFilters: "फ़िल्टर रीसेट करें",
    bottomCtaText: "क्या आपका स्टार्टअप इस लिस्ट में नहीं है? आज ही जुड़ें और इंदौर के स्टार्टअप इकोसिस्टम का हिस्सा बनें।",
    btnRegisterFast: "5 मिनट में फ़्री रजिस्टर करें &rarr;",
    btnCardConnect: "फ़ाउंडर से कनेक्ट हों &rarr;",
    btnDeck: "पिच डेक",
    verifiedTitle: "सरकारी दस्तावेज़ से सत्यापित",
    indoreTag: "🌟 मालवा व मध्य भारत का पावरहाउस",
    indoreTitle: "इंदौर सिर्फ़ पोहा-जलेबी नहीं,<br><span class=\"text-gradient-saffron\">भारत की अगली स्टार्टअप राजधानी है</span>",
    indoreDesc: "देश का लगातार 7 बार सबसे साफ़ शहर, आईआईटी + आईआईएम का अनूठा संगम, सुपर कॉरिडोर की आईटी क्रांति और मेट्रो की तुलना में 60% कम बर्न रेट। मध्य प्रदेश स्टार्टअप नीति के तहत विशेष सीड कैपिटल और अनुदान का सीधा लाभ उठाएं।",
    indorePt1Title: "IIT + IIM इंदौर इनक्यूबेशन",
    indorePt1Desc: "डीप-टेक, पेटेंट और मेंटरशिप के लिए सीधा अकादमिक समर्थन।",
    indorePt2Title: "MP स्टार्टअप पॉलिसी ग्रांट्स",
    indorePt2Desc: "किराया प्रतिपूर्ति, पेटेंट सहायता और महिला फ़ाउंडर्स के लिए विशेष इंसेंटिव।",
    indorePt3Title: "सक्रिय एंजेल नेटवर्क",
    indorePt3Desc: "स्थानीय मालवा बिज़नेस लीडर्स और प्रवासी इंदौरी निवेशकों का मजबूत नेटवर्क।",
    ticketBadge: "मासिक फ़ाउंडर्स मीटअप #19",
    meetupTitle: "इंदौर फ़ाउंडर्स & एंजेल मिक्सर",
    tDate: "तारीख",
    tTime: "समय",
    tAttendees: "अपेक्षित उपस्थित",
    tEntry: "प्रवेश",
    tFree: "निःशुल्क (रजिस्ट्रेशन अनिवार्य)",
    btnBookMeetup: "मीटअप सीट आरक्षित करें &rarr;",
    seatsLeft: "⚠️ केवल 24 सीटें शेष हैं",
    howBadge: "पारदर्शी और तेज़",
    howTitle: "सेतुबंध कैसे काम करता है?",
    howLead: "बिना किसी जटिलता के, सिर्फ 4 सरल चरणों में अपने स्टार्टअप को राष्ट्रीय स्तर पर विज़िबिलिटी दिलाएँ।",
    step1Title: "5 मिनट में प्रोफ़ाइल बनाएँ",
    step1Desc: "फ़ोन OTP से तुरंत साइन-अप। स्टार्टअप का नाम, सेक्टर, स्टेज, टीम साइज़ और पिच डेक जोड़ें।",
    step2Title: "वेरिफ़ाइड बैज पाएँ",
    step2Desc: "DPIIT, CIN, GST या Udyam नंबर दर्ज करें। हमारी टीम 24 घंटे में प्रामाणिकता जाँचकर 'Verified' बैज जारी करती है।",
    step3Title: "पब्लिक डायरेक्टरी में छाएँ",
    step3Desc: "आपका स्टार्टअप पूरे भारत के निवेशकों, इन्क्यूबेटर्स और कॉर्पोरेट्स को सर्च रिज़ल्ट्स और Google SEO में दिखता है।",
    step4Title: "सीधा इन्वेस्टर कनेक्शन",
    step4Desc: "निवेशक और मेंटर्स आपसे सीधा 'कनेक्ट रिक्वेस्ट' भेजते हैं। बिना कमीशन, बिना बिचौलियों के पूंजी जुटाएँ।",
    invBadge: "निवेशकों और मेंटर्स के लिए",
    invTitle: "भारत के टियर-2 और टियर-3 हीरों को सबसे पहले पहचानें",
    invLead: "सिलिकॉन वैली या केवल बेंगलुरु-दिल्ली तक सीमित न रहें। मालवा, मध्य प्रदेश और मध्य भारत के ग्राउंड-लेवल प्रॉफ़िटेबल बिज़नेस और हाई-ग्रोथ टेक स्टार्टअप्स को सीधे अपनी वॉचलिस्ट में जोड़ें।",
    invPerk1: "<strong>प्री-स्क्रीन और वेरिफ़ाइड:</strong> DPIIT व MCA डेटा से जाँचे हुए संस्थापक।",
    invPerk2: "<strong>सीधा पिच डेक एक्सेस:</strong> बिना कोल्ड ईमेल के तुरंत 1-क्लिक एक्सेस।",
    invPerk3: "<strong>स्थानीय डील्स & को-इन्वेस्टमेंट:</strong> इंदौर एंजल्स व सिंडिकेट्स के साथ साझेदारी।",
    btnInvestorRegister: "इन्वेस्टर / मेंटर के रूप में जुड़ें",
    btnBrowseDeck: "पिच डेक्स देखें",
    networkTitle: "पार्टनर एंजेल नेटवर्क व इन्क्यूबेटर्स",
    faqBadge: "सवाल-जवाब",
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqLead: "सेतुबंध, वेरिफ़िकेशन और रजिस्ट्रेशन से जुड़ी सारी जानकारियाँ।",
    q1: "क्या सेतुबंध पर स्टार्टअप रजिस्टर करना बिल्कुल मुफ़्त है?",
    a1: "हाँ! MVP फ़ेज़ में स्टार्टअप्स के लिए रजिस्ट्रेशन, प्रोफ़ाइल बनाना और डायरेक्टरी लिस्टिंग 100% मुफ़्त है। हमारा उद्देश्य मध्य भारत के हर योग्य संस्थापक को मंच देना है।",
    q2: "वेरिफ़ाइड (Verified) बैज कैसे मिलता है?",
    a2: "रजिस्ट्रेशन के समय या बाद में आप अपना DPIIT नंबर, CIN (कंपनी निगमन नंबर), GST नंबर या Udyam रजिस्ट्रेशन दर्ज कर सकते हैं। हमारी एडमिन टीम दस्तावेज़ों की प्राथमिक जाँच 24 घंटे में करके वेरिफ़ाइड टिक जारी करती है।",
    q3: "क्या सिर्फ़ इंदौर के स्टार्टअप्स ही जुड़ सकते हैं?",
    a3: "नहीं! सेतुबंध की शुरुआत इंदौर और मालवा क्षेत्र से हुई है, लेकिन पूरा प्लेटफ़ॉर्म पूरे भारत (Pan-India) के सभी शहरों — भोपाल, जबलपुर, ग्वालियर, जयपुर, पुणे, आदि — के संस्थापकों के लिए खुला है।",
    q4: "मेरे डेटा और पिच डेक की सुरक्षा की क्या गारंटी है?",
    a4: "हम भारत के डिजिटल पर्सनल डेटा प्रोटेक्शन एक्ट 2023 (DPDP Act 2023) का पूर्ण अनुपालन करते हैं। आपकी अनुमति के बिना आपकी निजी संपर्क जानकारी किसी को नहीं दी जाती। आपका पिच डेक सुरक्षित क्लाउड स्टोरेज पर होस्ट रहता है।",
    q5: "इन्वेस्टर या मेंटर से संपर्क कैसे होता है?",
    a5: "किसी भी स्टार्टअप कार्ड पर 'कनेक्ट रिक्वेस्ट' बटन दबाकर आप एक संक्षिप्त परिचय संदेश भेज सकते हैं। संस्थापक के स्वीकार करने पर दोनों पक्षों को सीधे ईमेल/फ़ोन द्वारा कनेक्ट कर दिया जाता है।",
    finalTitle: "अपने स्टार्टअप को वह मंच दें जिसका वह हकदार है",
    finalDesc: "500+ संस्थापक और 40+ सक्रिय निवेशक पहले ही सेतुबंध नेटवर्क का हिस्सा बन चुके हैं। आज ही शुरुआत करें।",
    btnRegisterNow: "मुफ़्त में स्टार्टअप जोड़ें (5 min) &rarr;",
    btnJoinMeetup: "अगले मीटअप में आएँ",
    footerMotto: "इंदौर से भारत तक, स्टार्टअप्स का सबसे भरोसेमंद डायरेक्टरी, नेटवर्किंग व इन्वेस्टर कनेक्ट नेटवर्क।",
    fCol1Title: "एक्सप्लोर करें",
    fCol2Title: "सेक्टर डायरेक्टरी",
    fCol3Title: "कानूनी व सुरक्षा",
    privacyPolicy: "प्राइवेसी पॉलिसी (DPDP 2023)",
    terms: "उपयोग की शर्तें (Terms)",
    verifyRules: "वेरिफ़िकेशन नियम",
    modalPre: "5 मिनट रजिस्ट्रेशन • निःशुल्क",
    modalTitle: "अपना स्टार्टअप जोड़ें",
    lblStartupName: "स्टार्टअप का नाम *",
    lblStartupCity: "शहर (City) *",
    lblSector: "सेक्टर (Sector) *",
    lblStage: "स्टेज (Stage) *",
    lblTagline: "एक वाक्य में परिचय (Tagline, Max 140 chars) *",
    lblPhone: "फ़ाउंडर मोबाइल नंबर (OTP सत्यापन के लिए) *",
    lblEmail: "ईमेल (Email) *",
    lblVerifyDoc: "वेरिफ़ाइड बैज के लिए दस्तावेज़ (वैकल्पिक पर अनुशंसित)",
    verifyHint: "DPIIT / CIN जोड़ने से आपके प्रोफ़ाइल पर हरा 'Verified' बैज आ जाता है।",
    consentText: "मैं DPDP Act 2023 के तहत सेतुबंध डायरेक्टरी में अपने स्टार्टअप की सार्वजनिक लिस्टिंग की सहमति देता/देती हूँ।",
    btnSubmitReg: "रजिस्ट्रेशन सबमिट करें (Submit Startup) &rarr;",
    successTitle: "बधाई! आपका स्टार्टअप दर्ज हो गया है",
    successDesc: "आपकी प्रोफ़ाइल सेतुबंध डायरेक्टरी में जोड़ दी गई है। हमारे एडमिन 24 घंटे में आपके वेरिफ़िकेशन दस्तावेज़ की पुष्टि करेंगे।",
    btnViewCard: "डायरेक्टरी में देखें",
    connectPre: "सीधा परिचय • शून्य कमीशन",
    lblYourName: "आपका नाम *",
    lblYourRole: "आपकी भूमिका *",
    lblContact: "फ़ोन या लिंक्डइन *",
    lblMsg: "संक्षिप्त संदेश (Pitch Note) *",
    btnSendConnect: "कनेक्ट रिक्वेस्ट भेजें &rarr;",
    connectSentTitle: "कनेक्ट रिक्वेस्ट भेज दी गई है!",
    connectSentDesc: "संस्थापक को आपका परिचय भेज दिया गया है। वे आपसे सीधे संपर्क करेंगे।",
    btnClose: "बंद करें"
  },
  en: {
    announcementText: "🔥 <strong>Next Indore Founders Meetup:</strong> Nov 15 | Super Corridor Incubation Center | 100+ Seats Reserved",
    announcementLink: "Claim Free Pass &rarr;",
    taglineMini: "Bridging Indore to Bharat",
    navDirectory: "Startup Directory",
    navIndore: "Indore Hub 🌟",
    navHow: "How It Works",
    navInvestors: "Investors & Mentors",
    navFaq: "FAQ",
    btnInvestorLogin: "Investor Login",
    btnRegister: "Register Startup",
    heroPill: "🚀 Central India's Leading Independent Startup Network",
    heroTitle1: "From Indore to Bharat,",
    heroTitle2: "The Most Trusted Startup Bridge",
    heroLead: "Say goodbye to bureaucratic portals and fragmented WhatsApp groups. Register your startup in 5 minutes, obtain verified DPIIT/CIN credentials, and connect directly with Tier-2/3 focused angel investors, incubators, and mentors.",
    ctaPrimary: "Register Your Startup (5 min)",
    ctaSecondary: "Browse Startups & Connect",
    trust1: "DPIIT / CIN Verified Founders",
    trust2: "DPDP Act 2023 Privacy Compliant",
    trust3: "Monthly In-Person Founders Mixers",
    statVerified: "Verified Startups",
    statFunding: "Capital Facilitated",
    statFounders: "Active Founders & Mentors",
    statMeetups: "Offline Meetups Hosted",
    dirBadge: "Public Directory",
    dirTitle: "Discover Startups & Connect Instantly",
    dirLead: "Search by industry, city, stage, or problem statement. Skip intermediaries and introduce yourself directly to founders.",
    searchPlaceholder: "Search startup name, sector, or keyword (e.g. AgriTech, AI, Indore, Seed)...",
    optAllCities: "All Cities",
    optIndore: "📍 Indore Spotlight",
    optAllStages: "All Stages",
    catAll: "All Sectors",
    emptyTitle: "No startups found",
    emptyDesc: "Try adjusting your search terms or filter selection.",
    btnResetFilters: "Reset All Filters",
    bottomCtaText: "Is your venture missing from this registry? Join today and become part of Indore's booming startup ecosystem.",
    btnRegisterFast: "Register in 5 Mins (Free) &rarr;",
    btnCardConnect: "Connect with Founder &rarr;",
    btnDeck: "Pitch Deck",
    verifiedTitle: "Government Document Verified",
    indoreTag: "🌟 Malwa & Central India Powerhouse",
    indoreTitle: "Indore is not just culinary capital,<br><span class=\"text-gradient-saffron\">It is Bharat's next startup superpower</span>",
    indoreDesc: "India's cleanest city 7 years running, unique convergence of IIT + IIM Indore, the Super Corridor IT surge, and 60% lower burn rate compared to metro cities. Direct access to MP Startup Policy grants and incubation.",
    indorePt1Title: "IIT + IIM Indore Incubation",
    indorePt1Desc: "Deep-tech, patent support, and academic advisory at your doorstep.",
    indorePt2Title: "MP Startup Policy Grants",
    indorePt2Desc: "Lease reimbursement, patent assistance, and dedicated incentives for women founders.",
    indorePt3Title: "Active Angel Syndicate",
    indorePt3Desc: "A formidable network of local industrialists, NRIs, and seasoned founders.",
    ticketBadge: "Monthly Founders Meetup #19",
    meetupTitle: "Indore Founders & Angel Mixer",
    tDate: "Date",
    tTime: "Time",
    tAttendees: "Attendees",
    tEntry: "Entry",
    tFree: "Free (RSVP Required)",
    btnBookMeetup: "Reserve Free Ticket &rarr;",
    seatsLeft: "⚠️ Only 24 seats left",
    howBadge: "Transparent & Fast",
    howTitle: "How Setubandh Works",
    howLead: "Gain pan-India visibility and connect with capital in 4 simple steps without administrative friction.",
    step1Title: "Build Profile in 5 Mins",
    step1Desc: "Instant passwordless OTP sign-up. Add your startup name, sector, stage, team size, and pitch deck.",
    step2Title: "Get Verified Badge",
    step2Desc: "Submit your DPIIT, CIN, GST, or Udyam ID. Our team reviews documents within 24 hours to award the verified tick.",
    step3Title: "Gain Pan-India Visibility",
    step3Desc: "Your startup profile ranks on search engines and gets discovered by top institutional and angel investors.",
    step4Title: "Direct Investor Introductions",
    step4Desc: "Investors and mentors send connection requests directly to you. Raise capital with zero commissions.",
    invBadge: "For Investors & Mentors",
    invTitle: "Discover High-Growth Gems in Tier-2/3 Bharat First",
    invLead: "Look beyond Bangalore and Delhi. Discover capital-efficient, high-conviction businesses with solid unit economics originating in Central India.",
    invPerk1: "<strong>Pre-Screened & Verified:</strong> Founders verified against official DPIIT & MCA databases.",
    invPerk2: "<strong>Direct Pitch Deck Access:</strong> Skip cold emails with instant verified deck reviews.",
    invPerk3: "<strong>Co-Investment & Local Syndicates:</strong> Collaborate with Malwa Angel Network.",
    btnInvestorRegister: "Join as Investor / Mentor",
    btnBrowseDeck: "Browse Pitch Decks",
    networkTitle: "Partner Angel Networks & Hubs",
    faqBadge: "Q & A",
    faqTitle: "Frequently Asked Questions",
    faqLead: "Everything you need to know about Setubandh, verification, and our network.",
    q1: "Is registering a startup on Setubandh free?",
    a1: "Yes! Registration, profile creation, and public directory listing are 100% free during the MVP phase. Our mission is to empower every worthy founder across Central India.",
    q2: "How do I earn the Verified Badge?",
    a2: "Enter your DPIIT number, MCA CIN, GSTIN, or MSME Udyam registration ID. Our moderation team verifies credentials within 24 hours and issues the green Verified badge.",
    q3: "Is Setubandh exclusively for Indore startups?",
    a3: "No! Setubandh is headquartered in Indore and spotlights Malwa, but our platform is open to founders across Bhopal, Jabalpur, Gwalior, Raipur, Jaipur, and pan-India.",
    q4: "How is my pitch deck and data protected?",
    a4: "We strictly comply with India's Digital Personal Data Protection Act (DPDP Act 2023). Your contact details are never sold, and pitch decks are served through secure cloud storage.",
    q5: "How do introductions with investors work?",
    a5: "Anyone can click 'Connect with Founder' on a startup card to send a brief introduction. Once the founder accepts, both parties receive direct contact details.",
    finalTitle: "Give your venture the spotlight it deserves",
    finalDesc: "500+ founders and 40+ active investors are already building together on Setubandh.",
    btnRegisterNow: "Add Your Startup (5 min) &rarr;",
    btnJoinMeetup: "Attend Next Meetup",
    footerMotto: "From Indore to Bharat: Central India's trusted startup registry, directory, and investor bridge.",
    fCol1Title: "Explore",
    fCol2Title: "Sectors",
    fCol3Title: "Legal & Trust",
    privacyPolicy: "Privacy Policy (DPDP 2023)",
    terms: "Terms of Service",
    verifyRules: "Verification Guidelines",
    modalPre: "5-Min Registration • Free",
    modalTitle: "Register Your Startup",
    lblStartupName: "Startup Name *",
    lblStartupCity: "City *",
    lblSector: "Sector *",
    lblStage: "Stage *",
    lblTagline: "One-line Pitch (Max 140 chars) *",
    lblPhone: "Founder Mobile Number (For OTP) *",
    lblEmail: "Founder Email *",
    lblVerifyDoc: "Verification ID (Optional but recommended)",
    verifyHint: "Adding DPIIT/CIN/GST awards the green 'Verified' badge instantly after review.",
    consentText: "I consent to publicly listing my startup profile on Setubandh under DPDP Act 2023.",
    btnSubmitReg: "Submit Startup Registration &rarr;",
    successTitle: "Congratulations! Your startup is submitted",
    successDesc: "Your startup card is now live in the directory. Verification documents will be processed within 24 hours.",
    btnViewCard: "View in Directory",
    connectPre: "Direct Introduction • Zero Commission",
    lblYourName: "Your Full Name *",
    lblYourRole: "Your Role *",
    lblContact: "Contact Number or LinkedIn *",
    lblMsg: "Short Introduction Message *",
    btnSendConnect: "Send Connection Request &rarr;",
    connectSentTitle: "Connection Request Dispatched!",
    connectSentDesc: "The founder has been notified with your introduction and contact info.",
    btnClose: "Close"
  }
};

let currentLang = "hi";
let currentCategory = "all";
let currentCity = "indore"; // Default Indore spotlight as per spec!
let currentStage = "all";
let searchQuery = "";

// 3. Render Startup Cards
function renderStartups() {
  const grid = document.getElementById("startupGrid");
  const emptyState = document.getElementById("emptyState");
  if (!grid) return;

  const filtered = STARTUPS_DATA.filter(item => {
    // Category match
    const matchCat = currentCategory === "all" || item.sector === currentCategory;
    // City match
    const matchCity = currentCity === "all" || item.city.toLowerCase() === currentCity.toLowerCase();
    // Stage match
    const matchStage = currentStage === "all" || item.stage === currentStage;
    // Search query match
    const query = searchQuery.trim().toLowerCase();
    const matchSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      (item.nameHi && item.nameHi.toLowerCase().includes(query)) ||
      item.city.toLowerCase().includes(query) ||
      item.sector.toLowerCase().includes(query) ||
      item.taglineHi.toLowerCase().includes(query) ||
      item.taglineEn.toLowerCase().includes(query) ||
      item.founders.toLowerCase().includes(query);

    return matchCat && matchCity && matchStage && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  const isHi = currentLang === "hi";

  grid.innerHTML = filtered.map(startup => {
    const nameDisplay = isHi && startup.nameHi ? `${startup.name} (${startup.nameHi})` : startup.name;
    const cityDisplay = isHi && startup.cityHi ? startup.cityHi : startup.city;
    const taglineDisplay = isHi ? startup.taglineHi : startup.taglineEn;
    const connectBtnText = isHi ? "फ़ाउंडर से कनेक्ट हों &rarr;" : "Connect with Founder &rarr;";
    const deckBtnText = isHi ? "पिच डेक" : "Pitch Deck";

    return `
      <article class="startup-card" data-id="${startup.id}">
        <div>
          <div class="card-top-row">
            <div class="startup-identity">
              <div class="startup-logo-box" aria-hidden="true">${startup.logo}</div>
              <div>
                <h3 class="startup-name">${nameDisplay}</h3>
                <span class="startup-city">📍 ${cityDisplay}</span>
              </div>
            </div>
            ${startup.isVerified ? `
              <div class="verified-badge" title="${startup.verifyType}">
                <svg class="verified-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Verified</span>
              </div>
            ` : ''}
          </div>

          <p class="startup-tagline">${taglineDisplay}</p>

          <div class="startup-meta-strip">
            <span class="meta-chip">${startup.sectorLabel}</span>
            <span class="meta-chip stage">${startup.stageLabel}</span>
            <span class="meta-chip funding">💰 ${startup.funding}</span>
          </div>
        </div>

        <div class="card-action-row">
          <button class="btn btn-card-connect" onclick="openConnectModal('${startup.id}')">
            ${connectBtnText}
          </button>
          <button class="btn btn-deck-sm" onclick="showToast('📄 ${startup.name} का पिच डेक डाउनलोड हो रहा है...')">
            ${deckBtnText}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// 4. Global Sector Filter Shortcut
window.filterBySector = function(sector) {
  currentCategory = sector;
  document.querySelectorAll(".cat-pill").forEach(p => {
    if (p.getAttribute("data-cat") === sector) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
  renderStartups();
};

// 5. Toast Notification System
function showToast(message, duration = 3500) {
  const shelf = document.getElementById("toastShelf");
  if (!shelf) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✨</span> <div>${message}</div>`;
  shelf.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// 6. Connect Modal Opener
window.openConnectModal = function(startupId) {
  const startup = STARTUPS_DATA.find(s => s.id === startupId);
  if (!startup) return;

  const modal = document.getElementById("connectModal");
  const targetBox = document.getElementById("connectTargetCard");
  const modalTitle = document.getElementById("connectModalTitle");
  const body = document.getElementById("connectFormBody");
  const success = document.getElementById("connectSuccess");

  if (!modal || !targetBox) return;

  body.classList.remove("hidden");
  success.classList.add("hidden");

  modalTitle.textContent = `${startup.name} — संपर्क अनुरोध`;
  targetBox.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px;">
      <span style="font-size:1.8rem;">${startup.logo}</span>
      <div>
        <strong style="color:#fff; font-size:1.05rem;">${startup.name}</strong>
        <div style="color:#94a3b8; font-size:0.8rem;">${startup.sectorLabel} • 📍 ${startup.city} • संस्थापक: ${startup.founders}</div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// 7. Language Switcher Engine
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);

  const dict = TRANSLATIONS[lang] || TRANSLATIONS.hi;

  // Translate all matching data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Toggle active styling on language button
  const btnHi = document.getElementById("btnHi");
  const btnEn = document.getElementById("btnEn");
  if (btnHi && btnEn) {
    if (lang === "hi") {
      btnHi.classList.add("active");
      btnEn.classList.remove("active");
    } else {
      btnHi.classList.remove("active");
      btnEn.classList.add("active");
    }
  }

  renderStartups();
}

// 8. Animated Odometer Counters
function initCounters() {
  const statNumbers = document.querySelectorAll(".stat-number");
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        let count = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = count;
          }
        }, 30);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statNumbers.forEach(num => observer.observe(num));
}

// 9. Dom Ready Event Initializers
document.addEventListener("DOMContentLoaded", () => {
  // Render initial directory
  renderStartups();
  initCounters();

  // Search input listener
  const searchInput = document.getElementById("directorySearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearBtn) {
        if (searchQuery.length > 0) {
          clearBtn.classList.add("active");
        } else {
          clearBtn.classList.remove("active");
        }
      }
      renderStartups();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.classList.remove("active");
      renderStartups();
      searchInput.focus();
    });
  }

  // City dropdown filter
  const citySelect = document.getElementById("cityFilter");
  if (citySelect) {
    citySelect.addEventListener("change", (e) => {
      currentCity = e.target.value;
      renderStartups();
    });
  }

  // Stage dropdown filter
  const stageSelect = document.getElementById("stageFilter");
  if (stageSelect) {
    stageSelect.addEventListener("change", (e) => {
      currentStage = e.target.value;
      renderStartups();
    });
  }

  // Category pills click
  const pillsContainer = document.getElementById("categoryPills");
  if (pillsContainer) {
    pillsContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".cat-pill");
      if (!pill) return;
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-cat");
      renderStartups();
    });
  }

  // Reset filter button in empty state
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      if (clearBtn) clearBtn.classList.remove("active");
      currentCategory = "all";
      currentCity = "all";
      currentStage = "all";
      if (citySelect) citySelect.value = "all";
      if (stageSelect) stageSelect.value = "all";
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      const allPill = document.querySelector(".cat-pill[data-cat='all']");
      if (allPill) allPill.classList.add("active");
      renderStartups();
    });
  }

  // Language Switcher Button
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      setLanguage(currentLang === "hi" ? "en" : "hi");
    });
  }

  // Mobile Drawer Menu
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileDrawer.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeDrawerBtn && mobileDrawer) {
    closeDrawerBtn.addEventListener("click", () => {
      mobileDrawer.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Close mobile drawer when clicking a link
  document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileDrawer) mobileDrawer.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // FAQ Accordion
  const accordion = document.getElementById("faqAccordion");
  if (accordion) {
    accordion.addEventListener("click", (e) => {
      const questionBtn = e.target.closest(".faq-question-btn");
      if (!questionBtn) return;
      const card = questionBtn.closest(".faq-card");
      const isOpen = card.classList.contains("open");

      // Close other cards
      document.querySelectorAll(".faq-card").forEach(c => {
        c.classList.remove("open");
        const btn = c.querySelector(".faq-question-btn");
        const arrow = c.querySelector(".faq-arrow");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (arrow) arrow.innerHTML = "&plus;";
      });

      if (!isOpen) {
        card.classList.add("open");
        questionBtn.setAttribute("aria-expanded", "true");
        const arrow = card.querySelector(".faq-arrow");
        if (arrow) arrow.innerHTML = "&minus;";
      }
    });
  }

  // Registration Modal Handlers
  const registerModal = document.getElementById("registerModal");
  const closeRegModal = document.getElementById("closeRegisterModal");
  const regForm = document.getElementById("startupRegistrationForm");
  const modalStep1 = document.getElementById("modalStep1");
  const modalSuccess = document.getElementById("modalSuccess");
  const viewSubmittedBtn = document.getElementById("viewSubmittedCardBtn");

  document.querySelectorAll(".register-trigger-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (registerModal) {
        if (modalStep1) modalStep1.classList.remove("hidden");
        if (modalSuccess) modalSuccess.classList.add("hidden");
        registerModal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (closeRegModal && registerModal) {
    closeRegModal.addEventListener("click", () => {
      registerModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const sName = document.getElementById("startupName").value;
      const sCity = document.getElementById("startupCity").value;
      const sSector = document.getElementById("startupSector").value;
      const sStage = document.getElementById("startupStage").value;
      const sTagline = document.getElementById("startupTagline").value;
      const docType = document.getElementById("verifyDocType").value;
      const docNumber = document.getElementById("verifyDocNumber").value;

      // Add newly registered startup to client session list!
      const newStartup = {
        id: "startup-" + Date.now(),
        name: sName,
        nameHi: sName,
        logo: "🚀",
        city: sCity,
        cityHi: sCity,
        sector: sSector.toLowerCase().split(" ")[0],
        sectorLabel: sSector,
        stage: sStage.toLowerCase().replace(" ", "_"),
        stageLabel: sStage,
        funding: "Self-Financed",
        taglineHi: sTagline,
        taglineEn: sTagline,
        isVerified: !!docNumber,
        verifyType: docNumber ? `${docType} #${docNumber}` : "Pending Review",
        founders: "Registered User",
        website: "#"
      };

      STARTUPS_DATA.unshift(newStartup);
      renderStartups();

      // Show success modal step
      modalStep1.classList.add("hidden");
      modalSuccess.classList.remove("hidden");
      showToast(`🎉 बधाई! ${sName} को डायरेक्टरी में जोड़ दिया गया है।`);
    });
  }

  if (viewSubmittedBtn && registerModal) {
    viewSubmittedBtn.addEventListener("click", () => {
      registerModal.classList.remove("active");
      document.body.style.overflow = "";
      const dirSection = document.getElementById("directory");
      if (dirSection) dirSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Connect Modal Close Handlers
  const connectModal = document.getElementById("connectModal");
  const closeConnectModalBtn = document.getElementById("closeConnectModal");
  const connectForm = document.getElementById("connectForm");
  const closeConnectSuccessBtn = document.getElementById("closeConnectSuccessBtn");

  if (closeConnectModalBtn && connectModal) {
    closeConnectModalBtn.addEventListener("click", () => {
      connectModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (closeConnectSuccessBtn && connectModal) {
    closeConnectSuccessBtn.addEventListener("click", () => {
      connectModal.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  if (connectForm) {
    connectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("connectFormBody").classList.add("hidden");
      document.getElementById("connectSuccess").classList.remove("hidden");
      showToast("📨 आपकी कनेक्ट रिक्वेस्ट सुरक्षित रूप से भेज दी गई है!");
    });
  }

  // Close modals when clicking backdrop
  window.addEventListener("click", (e) => {
    if (e.target === registerModal) {
      registerModal.classList.remove("active");
      document.body.style.overflow = "";
    }
    if (e.target === connectModal) {
      connectModal.classList.remove("active");
      document.body.style.overflow = "";
    }
    if (e.target === mobileDrawer) {
      mobileDrawer.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Meetup Ticket Booking Button
  const bookMeetupBtn = document.getElementById("bookMeetupBtn");
  if (bookMeetupBtn) {
    bookMeetupBtn.addEventListener("click", () => {
      bookMeetupBtn.textContent = "✓ पास आरक्षित हो गया!";
      bookMeetupBtn.style.background = "#10b981";
      bookMeetupBtn.disabled = true;
      showToast("🎟️ बधाई! आपकी सीट 15 नवंबर के इंदौर मीटअप के लिए आरक्षित है।");
    });
  }

  // Investor Hub CTAs
  const investorBtn = document.getElementById("investorRegisterBtn");
  const btnInvestorOpen = document.getElementById("btnInvestorOpen");
  const mobileInvestorBtn = document.getElementById("mobileInvestorBtn");

  const openInvestorAlert = () => {
    showToast("💼 इन्वेस्टर पोर्टल: सिंडिकेट और पिच डेक डायरेक्टरी एक्टिव है!");
    const dir = document.getElementById("directory");
    if (dir) dir.scrollIntoView({ behavior: "smooth" });
  };

  if (investorBtn) investorBtn.addEventListener("click", openInvestorAlert);
  if (btnInvestorOpen) btnInvestorOpen.addEventListener("click", openInvestorAlert);
  if (mobileInvestorBtn) {
    mobileInvestorBtn.addEventListener("click", () => {
      if (mobileDrawer) mobileDrawer.classList.remove("active");
      document.body.style.overflow = "";
      openInvestorAlert();
    });
  }

  // Theme Switcher Buttons
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const mobileThemeToggleBtn = document.getElementById("mobileThemeToggleBtn");

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", cycleTheme);
  }
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener("click", () => {
      cycleTheme();
      if (mobileDrawer) mobileDrawer.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  // Restore saved theme or default
  const savedTheme = localStorage.getItem("setubandh_theme") || "sapphire";
  const savedIdx = THEMES.findIndex(t => t.id === savedTheme);
  if (savedIdx !== -1) currentThemeIndex = savedIdx;
  applyTheme(savedTheme);

  // Initialize waving ambient cursor orb and 3D tilt physics
  initAmbientCursorOrb();
  initCard3DTilt();

  // Keyboard Escape to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (registerModal) registerModal.classList.remove("active");
      if (connectModal) connectModal.classList.remove("active");
      if (mobileDrawer) mobileDrawer.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

// 10. Multi-Theme Switching Engine
const THEMES = [
  { id: "sapphire", nameHi: "🌌 नीलम ऑरोरा", nameEn: "🌌 Sapphire Aurora", dotColor: "#38bdf8" },
  { id: "amber", nameHi: "🔥 रॉयल एम्बर", nameEn: "🔥 Royal Amber", dotColor: "#fbbf24" },
  { id: "emerald", nameHi: "⚡ नियो एमराल्ड", nameEn: "⚡ Neo Emerald", dotColor: "#10b981" }
];
let currentThemeIndex = 0;

function applyTheme(themeId) {
  document.documentElement.setAttribute("data-theme", themeId);
  try { localStorage.setItem("setubandh_theme", themeId); } catch(e){}
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  const nameEl = document.getElementById("themeName");
  const dotEl = document.getElementById("themeDot");
  if (nameEl) {
    nameEl.textContent = currentLang === "hi" ? theme.nameHi : theme.nameEn;
  }
  if (dotEl) {
    dotEl.style.backgroundColor = theme.dotColor;
    dotEl.style.boxShadow = `0 0 10px ${theme.dotColor}`;
  }
}

function cycleTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
  applyTheme(THEMES[currentThemeIndex].id);
  const theme = THEMES[currentThemeIndex];
  showToast(`🎨 थीम बदली गई: ${currentLang === "hi" ? theme.nameHi : theme.nameEn}`);
}

// 11. Interactive Ambient Cursor Orb Tracker (लहराती लाइव लाइट)
function initAmbientCursorOrb() {
  const orb = document.getElementById("cursorAmbientOrb");
  if (!orb || window.matchMedia("(pointer: coarse)").matches) return;

  orb.style.display = "block";
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let orbX = mouseX;
  let orbY = mouseY;

  window.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderOrb() {
    orbX += (mouseX - orbX) * 0.08;
    orbY += (mouseY - orbY) * 0.08;
    orb.style.left = `${orbX}px`;
    orb.style.top = `${orbY}px`;
    requestAnimationFrame(renderOrb);
  }
  renderOrb();
}

// 12. 3D Card Tilt & Interactive Physics (Animated Blocks)
function initCard3DTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.addEventListener("pointermove", (e) => {
    const cards = document.querySelectorAll(".startup-card, .step-card, .meetup-ticket-card");
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= -20 && x <= rect.width + 20 && y >= -20 && y <= rect.height + 20) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      } else {
        card.style.transform = "";
      }
    });
  });
}
