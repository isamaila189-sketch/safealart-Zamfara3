/**
 * SafeAlert – Zamfara State Community Safety Portal
 * ZITDA SIWES Safety Initiative supporting UN SDG 16 (Peace, Justice & Strong Institutions)
 * Vanilla JavaScript Architecture (Interactive Single Page Engine)
 */

document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================================================
  // 1. DATA DIRECTORY: VERIFIED Zamfara & National Safety Forces
  // ==========================================================================
  const safetyAgencies = [
    {
      id: "npf",
      name: "Nigeria Police Force",
      nameHa: "Rundunar Ƴan Sandan Najeriya",
      location: "State Command HQ, Zaria Road, Gusau, Zamfara",
      locationHa: "Hedikwatar Runduna, Hanyar Zaria, Gusau, Zamfara",
      phone: "+2348034537596",
      displayPhone: "0803 453 7596",
      website: "https://npf.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "General Law Enforcement, Anti-Banditry Response, Public Security",
      serviceHa: "Tabbatar da Dokoki, Dakile Yan Bindiga, Tsaron Jama'a",
      keywords: ["police", "npf", "crime", "bandit", "thief", "sanda", "yansanda", "security", "tsaro"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/><line x1="12" y1="14" x2="12" y2="17"/></svg>`
    },
    {
      id: "nscdc",
      name: "NSCDC (Civil Defence)",
      nameHa: "Hukumar Tsaron Farar Hula (NSCDC)",
      location: "State Command Office, Sani Abacha Way, Gusau, Zamfara",
      locationHa: "Sakatariyar NSCDC, Hanyar Sani Abacha, Gusau, Zamfara",
      phone: "+2348033800408",
      displayPhone: "0803 380 0408",
      website: "https://nscdc.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Infrastructure Protection, Community Safety, Disaster Support",
      serviceHa: "Kare Kadarorin Kasa, Kare Al'umma, Agajin Bala'i",
      keywords: ["civil defence", "nscdc", "protection", "community", "vandal", "farar hula", "tsaro"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 6l3 6H9l3-6z"/></svg>`
    },
    {
      id: "frsc",
      name: "FRSC (Road Safety)",
      nameHa: "Hukumar Kula da Kare Hadurra (FRSC)",
      location: "RS10.3 Sector Command, Sokoto Road, Gusau, Zamfara",
      locationHa: "RS10.3 Shiyyar Zamfara, Hanyar Sokoto, Gusau, Zamfara",
      phone: "+2348077690103",
      displayPhone: "0807 769 0103",
      website: "https://frsc.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Highway Accident Management, Traffic Enforcement, Ambulance",
      serviceHa: "Kula da Hadurran Hanya, Hanyoyi, mota, Taimakon Gaggawa",
      keywords: ["road", "safety", "accident", "frsc", "highway", "car", "hadari", "mota"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>`
    },
    {
      id: "ffs",
      name: "Federal Fire Service",
      nameHa: "Hukumar Kashe Gobara ta Kasa",
      location: "State Command Station, Sani Abacha Road, Gusau, Zamfara",
      locationHa: "Ofishin Kashe Gobara, Hanyar Sani Abacha, Gusau, Zamfara",
      phone: "+2348032003557",
      displayPhone: "0803 200 3557",
      website: "https://fedfire.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Fire Suppression, Search & Rescue Operations, Fire Safety Audit",
      serviceHa: "Kashe Gobara, Ceto Mutane, Kandagarkin Gobara",
      keywords: ["fire", "firefighter", "burn", "smoke", "rescue", "gobara", "kashe wuta", "wuta"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`
    },
    {
      id: "nema",
      name: "NEMA (National Emergency Agency)",
      nameHa: "Hukumar Ba da Agajin Gaggawa ta Kasa (NEMA)",
      location: "Plot 8, Adetokunbo Ademola Crescent, Maitama, Abuja (North-West Zonal)",
      locationHa: "Fili na 8, Adetokunbo Ademola Crescent, Maitama, Abuja",
      phone: "+23480022556362",
      displayPhone: "0800 2255 6362 (Toll Free)",
      website: "https://nema.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Disaster Coordination, Relief Distribution, Emergency Search Operations",
      serviceHa: "Tsara Agajin Bala'i, Raba Kayan Taimako, Aikin Ceto",
      keywords: ["nema", "disaster", "relief", "aid", "flood", "collapse", "agaji", "balai"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v8M8 12h8"/></svg>`
    },
    {
      id: "zasema",
      name: "ZASEMA (Zamfara Emergency Agency)",
      nameHa: "Hukumar Ba da Agajin Gaggawa ta Zamfara",
      location: "JB Yakubu Secretariat, Gusau, Zamfara State",
      locationHa: "Sakatariyar JB Yakubu, Gusau, Jihar Zamfara",
      phone: "112",
      displayPhone: "112 (State Dispatch)",
      website: "https://zamfara.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "State Disaster Relief Management, Local Emergency Action",
      serviceHa: "Gudanar da Agajin Gaggawa na Jihar Zamfara, Aikin Gida",
      keywords: ["zasema", "sema", "zamfara", "disaster", "relief", "flood", "local", "agaji"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M12 3v18"/><circle cx="12" cy="12" r="9"/></svg>`
    },
    {
      id: "nrcs",
      name: "Nigerian Red Cross Society",
      nameHa: "Kungiyar Jan Tsalfe ta Najeriya",
      location: "Zamfara State Command Hub, Gusau, Zamfara",
      locationHa: "Rukunin Jihar Zamfara, Gusau, Zamfara",
      phone: "+2348031230430",
      displayPhone: "0803 123 0430 (Toll Free)",
      website: "https://www.redcrossnigeria.org",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "First Aid Services, Medical Evacuations, Humanitarian Relief Dispatch",
      serviceHa: "Agajin Farko, Kwashe Masu Rauni, Tallafin Al'umma",
      keywords: ["red", "cross", "nrcs", "first aid", "medical", "blood", "humanitarian", "jan tsalfe", "agaji"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
    },
    {
      id: "dss",
      name: "DSS (State Services)",
      nameHa: "Hukumar Tsaron Cikin Gida (DSS)",
      location: "DSS State Command Headquarters, Gusau, Zamfara",
      locationHa: "Hedikwatar DSS ta Zamfara, Gusau, Zamfara",
      phone: "+2349153391309",
      displayPhone: "0915 339 1309",
      website: "https://dss.gov.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Intelligence Gathering, Internal Counter-Terrorism, National Threats",
      serviceHa: "Tattara Bayanan Sirri, Yakar Yan Ta'adda, Kare Mutuncin Kasa",
      keywords: ["dss", "intelligence", "threat", "investigation", "terror", "bincike", "sirri"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`
    },
    {
      id: "army",
      name: "Nigerian Army (1 Brigade)",
      nameHa: "Rundunar Sojin Kasa ta Najeriya",
      location: "1 Brigade Command, Gusau, Zamfara State",
      locationHa: "Runduna ta 1 ta Sojin Kasa, Gusau, Zamfara",
      phone: "+2347017222225",
      displayPhone: "0701 722 2225",
      website: "https://army.mil.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Military Defensive Operations, Special Security Patrols",
      serviceHa: "Kariya daga Makiyan Kasa, Samame a Jihohi, Yakar Yan Bindiga",
      keywords: ["army", "military", "soldier", "patrol", "brigade", "security", "soja", "soji"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5"/><line x1="12" y1="2" x2="12" y2="22"/></svg>`
    },
    {
      id: "naf",
      name: "Nigerian Air Force (207 QRG)",
      nameHa: "Rundunar Sojin Sama ta Najeriya",
      location: "NAF Base, Gusau, Zamfara State",
      locationHa: "Sansanin Sojin Sama na NAF, Gusau, Zamfara",
      phone: "112",
      displayPhone: "112 (National Air Dispatch)",
      website: "https://airforce.mil.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Aerial Reconnaissance, Rapid Response Operations, Air Defense Support",
      serviceHa: "Tsaron Sararin Samaniya, Samame ta Jirgin Sama, Agajin Gaggawa",
      keywords: ["air", "airforce", "naf", "plane", "reconnaissance", "sojan sama", "sama"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`
    },
    {
      id: "navy",
      name: "Nigerian Navy",
      nameHa: "Rundunar Sojin Ruwa ta Najeriya",
      location: "Naval Headquarters, Garki, Abuja (National Command)",
      locationHa: "Hedikwatar Sojin Ruwa ta Kasa, Garki, Abuja",
      phone: "+2348095039777",
      displayPhone: "0809 503 9777",
      website: "https://navy.mil.ng",
      available: "24/7",
      availableHa: "Awanni 24",
      service: "Maritime Sovereignty Protection, Hydrographic Operations",
      serviceHa: "Kare Ruwan Kasa, Taimakon Ruwa, Tsaron Iyakar Ruwa",
      keywords: ["navy", "water", "marine", "hydrographic", "naval", "sojan ruwa", "ruwa"],
      svgLogo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><line x1="8" y1="12" x2="16" y2="12"/><path d="M12 21a5 5 0 0 0 5-5m-10 0a5 5 0 0 0 5 5"/></svg>`
    }
  ];

  // ==========================================================================
  // 2. DICTIONARY: English & Hausa Translations
  // ==========================================================================
  const translations = {
    en: {
      skip_to_content: "Skip to Main Content",
      announcement_text: "ZITDA SIWES Safety Initiative • Supporting UN SDG 16 (Peace, Justice & Strong Institutions)",
      brand_sub: "Zamfara Safety Portal",
      nav_home: "Home",
      nav_about: "About Us",
      nav_tips: "Safety Tips",
      nav_emergency: "Emergency Contacts",
      nav_report: "Report Incident",
      hero_badge: "Official Community Safety Portal",
      hero_title: "Empowering Communities, Ensuring Safety in Zamfara",
      hero_desc: "Access verified official emergency response lines, locate state safety command units instantly, and securely report safety concerns in full anonymity.",
      hero_btn_report: "Report Incident Now",
      hero_btn_contacts: "Emergency Contacts",
      stat_sdg: "Peace & Justice",
      stat_active: "Active Dispatch",
      about_title: "About This Portal",
      about_subtitle: "An initiative of the Zamfara Information Technology Development Agency (ZITDA) SIWES Program",
      about_sdg_title: "Supporting UN SDG 16",
      about_sdg_desc: "We promote peaceful and inclusive societies, facilitate access to justice, and construct transparent, responsive, and accountable institutions across Zamfara State.",
      about_secure_title: "Protected Anonymous Channels",
      about_secure_desc: "Your identity stays secure. SafeAlert processes anonymous logs with robust verification, passing critical warnings to response forces while protecting you.",
      about_zitda_title: "ZITDA Innovation",
      about_zitda_desc: "Harnessing robust, lightweight open-source web solutions to provide state citizens with reliable safety services even under critical network speeds.",
      form_title: "Report a Safety Incident",
      form_subtitle: "Provide factual, precise details. Use our dynamic tools for GPS location mapping.",
      form_anonymous: "File Report Anonymously",
      form_anonymous_help: "Checking this hides your name and telephone details from the final agency log.",
      form_lbl_name: "Full Name",
      form_lbl_phone: "Phone Number",
      form_lbl_type: "Incident Type",
      form_lbl_priority: "Priority Level",
      form_lbl_date: "Incident Date",
      form_lbl_time: "Incident Time",
      form_lbl_loc: "Exact Location Details",
      form_lbl_gps: "GPS Coordinates (Optional)",
      form_lbl_upload: "Upload Image (Optional)",
      form_lbl_desc: "Detailed Description",
      form_opt_select: "Select Incident Type",
      form_opt_security: "Security Threat / Banditry",
      form_opt_accident: "Road Accident (FRSC)",
      form_opt_fire: "Fire Outbreak",
      form_opt_medical: "Medical Emergency",
      form_opt_flood: "Flood / Natural Disaster",
      form_opt_other: "Other Urgent Matters",
      form_opt_low: "Low",
      form_opt_medium: "Medium",
      form_opt_high: "High (Immediate Threat)",
      form_btn_gps: "Get GPS",
      form_btn_submit: "Submit Secure Report",
      form_gps_help: "Browser will prompt for precise location permission.",
      form_upload_help: "Supported formats: JPG, PNG. Max file size: 5MB.",
      tips_title: "Emergency & Safety Guidelines",
      tips_subtitle: "Critical procedural knowledge to protect yourself and your family during an alert",
      tips_badge_security: "Security Threats",
      tips_threat_title: "Active Banditry or Security Intrusion",
      tips_threat_p1: "Identify clean egress points. Maintain absolute silence and lock down internal entries.",
      tips_threat_p2: "Mute all cellular devices and extinguish house lighting arrays immediately.",
      tips_threat_p3: "File a secure silent notification using the SafeAlert platform once safe.",
      tips_badge_fire: "Fire Hazard",
      tips_fire_title: "Building and Residential Fires",
      tips_fire_p1: "Evacuate the structure immediately. Avoid using mechanical elevations or lifts.",
      tips_fire_p2: "Crawl beneath thick smoke arrays to preserve clean oxygen routes.",
      tips_fire_p3: "Dial 112 instantly or contact the Federal Fire Service Sani Abacha Road hub.",
      tips_badge_flood: "Flood Threat",
      tips_flood_title: "Flooding and Severe Weather",
      tips_flood_p1: "Seek robust elevated landscapes. Avoid navigating active running water routes.",
      tips_flood_p2: "Disconnect master electrical circuit boxes to eliminate active ground shocks.",
      tips_flood_p3: "Coordinate with ZASEMA and NEMA teams during flash events.",
      dir_title: "Verified Zamfara State Emergency Agencies",
      dir_subtitle: "Search, filter, and contact the official government agencies deployed in Zamfara State.",
      btn_call: "Call Now",
      btn_web: "Official Website",
      footer_brand_desc: "An interactive safety solution built in alignment with UN Sustainable Development Goal 16.",
      footer_links_hdr: "Resource Links",
      footer_academic_hdr: "ZITDA SIWES Initiative",
      footer_academic_desc: "Designed and refined for the Zamfara Information Technology Development Agency (ZITDA) Industrial Training Scheme.",
      footer_dev_tag: "Designed for Safety and Institutional Strength.",
      modal_success_title: "Report Transmitted Successfully",
      modal_success_desc: "Your report has been securely processed. Our ZITDA dashboard route has forwarded your parameters to the appropriate safety forces.",
      modal_btn_close: "Close Window",
      validation_name: "Please enter your full name.",
      validation_phone: "Please enter a valid phone number.",
      validation_type: "Please select an incident type.",
      validation_date: "Please specify the incident date.",
      validation_time: "Please specify the incident time.",
      validation_location: "Please clarify the exact location details.",
      validation_desc: "Please provide a description of the incident.",
      avail_lbl: "24/7 Availability"
    },
    ha: {
      skip_to_content: "Tafi kai tsaye zuwa ga Shafi",
      announcement_text: "Yunkurin ZITDA SIWES na Kare Al'umma • Goyon bayan UN SDG 16 (Zaman Lafiya da Adalci)",
      brand_sub: "Tsarin Tsaron Zamfara",
      nav_home: "Gida",
      nav_about: "Game da Mu",
      nav_tips: "Hanyoyin Tsaro",
      nav_emergency: "Lambobin Gaggawa",
      nav_report: "Shigar da Rahoto",
      hero_badge: "Tashar Taimako da Tsaron Al'umma",
      hero_title: "Karfafa Tsaro da Tabbatar da Zaman Lafiya a Zamfara",
      hero_desc: "Nemi lambobin gaggawa na gaskiya, gano ofisoshin jami'an tsaro na Jihar Zamfara, kuma ka bayar da rahoton laifuka cikin asiri.",
      hero_btn_report: "Shigar da Rahoto Yanzu",
      hero_btn_contacts: "Lambobin Gaggawa",
      stat_sdg: "Lafiya & Adalci",
      stat_active: "Sufuri a Falke",
      about_title: "Game da Wannan Shafin",
      about_subtitle: "Wani yunkuri ne daga Hukumar Raya Fasahar Zamani ta Jihar Zamfara (ZITDA) a shirin SIWES",
      about_sdg_title: "Taimakawa UN SDG 16",
      about_sdg_desc: "Muna tallata zaman lafiya, saukaka samun adalci ga kowa, da gina hukumomi nagari masu amsa bukatun al'umma a duk fadin Zamfara.",
      about_secure_title: "Hanyar Rahoto Cikin Sirri",
      about_secure_desc: "Ana kare sirrinka. SafeAlert yana aiki da rahoton sirri bayan an tantance gaskiyar lamarin, don tura wa jami'an tsaro ba tare da an gano ka ba.",
      about_zitda_title: "Kirkiro na ZITDA",
      about_zitda_desc: "Yin amfani da fasaha mai sauki da sauri don baiwa al'ummar jihar damar kiran agaji koda a lokacin da gidan yanar gizo ke da rauni.",
      form_title: "Aika Rahoton Gaggawa",
      form_subtitle: "Da fatan za a bayar da bayani ingantacce. Yi amfani da GPS don turo da inda kake.",
      form_anonymous: "Aika Rahoto a Matsayin Sirri",
      form_anonymous_help: "Idan ka zabi wannan, za a boye sunanka da lambarka daga rumbun adana bayanai na jami'ai.",
      form_lbl_name: "Cikakken Suna",
      form_lbl_phone: "Lambar Waya",
      form_lbl_type: "Nau'in Matsala",
      form_lbl_priority: "Matakin Gaggawa",
      form_lbl_date: "Ranar da Abun Ya Faru",
      form_lbl_time: "Lokacin da Abun Ya Faru",
      form_lbl_loc: "Kwatancen Inda Abun Ya Faru",
      form_lbl_gps: "Maudu'in GPS (Idan akwai)",
      form_lbl_upload: "Dora Hoton Abun da Ya Faru (Na Zabi)",
      form_lbl_desc: "Cikakken Bayani",
      form_opt_select: "Zabi Nau'in Matsalar",
      form_opt_security: "Yan Bindiga / Barazanar Tsaro",
      form_opt_accident: "Hadarin Hanya (FRSC)",
      form_opt_fire: "Gobarar Wuta",
      form_opt_medical: "Bukatar Likita ta Gaggawa",
      form_opt_flood: "Ambaliyar Ruwa / Bala'i",
      form_opt_other: "Sauran Matsaloli",
      form_opt_low: "Kadan",
      form_opt_medium: "Matsakaici",
      form_opt_high: "Babba (Hadari na Nan-take)",
      form_btn_gps: "Gano GPS",
      form_btn_submit: "Aika Rahoto Cikin Tsaro",
      form_gps_help: "Wayarka ko kwamfutarka za ta tambaye ka izinin gano inda kake.",
      form_upload_help: "Hotuna masu siffar: JPG, PNG. Kada hoton ya wuce 5MB.",
      tips_title: "Matakan Tsaro da Kariya",
      tips_subtitle: "Muhimman bayanai don kare kanka da iyalinka kafin jami'an agaji su iso",
      tips_badge_security: "Barazanar Tsaro",
      tips_threat_title: "Idan Yan Bindiga Suka Hari",
      tips_threat_p1: "Nemi hanyar fita lafiya. Idan ba hali, shiga daki ka kulle kofa da kyau.",
      tips_threat_p2: "Saka wayarka a silent sannan ka kashe duk wani haske dake gidan.",
      tips_threat_p3: "Yi amfani da SafeAlert don shigar da rahoton sirri lokacin da ka samu dama.",
      tips_badge_fire: "Gobarar Wuta",
      tips_fire_title: "Kariya daga Gobara",
      tips_fire_p1: "Fita daga ginin da gaggawa. Kada ka yi amfani da lif (elevator).",
      tips_fire_p2: "Saba a kasa idan hayaki ya cika dakin don samun iskar numfashi.",
      tips_fire_p3: "Kira 112 ko jami'an kashe gobara dake Sani Abacha Road, Gusau nan take.",
      tips_badge_flood: "Ambaliyar Ruwa",
      tips_flood_title: "Barazanar Ambaliyar Ruwa",
      tips_flood_p1: "Gudu zuwa tudu mai tsaro. Kada ka yi kokarin ketare ruwa mai gudu.",
      tips_flood_p2: "Kashe babban canjin wutar gidan gaba daya don kaucewa wutar lantarki.",
      tips_flood_p3: "Tuntubi jami'an ZASEMA ko NEMA don samun cikakken taimako.",
      dir_title: "Ofisoshin Lambobin Gaggawa a Jihar Zamfara",
      dir_subtitle: "Bincika, zaba, sannan ka kira sahihan hukumomin da ke aiki a Jihar Zamfara.",
      btn_call: "Kira Yanzu",
      btn_web: "Shafin Intanet",
      footer_brand_desc: "Tsarin tsaro ne da aka gina shi don tallafawa muradin Majalisar Dinkin Duniya (SDG 16).",
      footer_links_hdr: "Muhimman Shafuka",
      footer_academic_hdr: "Yunkurin ZITDA SIWES",
      footer_academic_desc: "An tsara shi ne don Hukumar Raya Fasahar Zamani ta Jihar Zamfara (ZITDA) a shirin horaswa na dalibai.",
      footer_dev_tag: "An tsara shi don Tabbatar da Tsaron Al'umma.",
      modal_success_title: "An Shigar da Rahoto Lafiya",
      modal_success_desc: "An canza bayanan rahotonku lafiya. Tsarinmu ya tura sakon ga jami'an tsaro da kuka zaba.",
      modal_btn_close: "Rufe",
      validation_name: "Saka cikakken sunanka da fatan za a.",
      validation_phone: "Saka lambar waya da ta dace.",
      validation_type: "Da fatan za a zabi nau'in matsalar.",
      validation_date: "Zabi ranar da abun ya faru.",
      validation_time: "Saka lokacin da abun ya faru.",
      validation_location: "Bayyana takamaiman inda abun ya faru.",
      validation_desc: "Da fatan za a bayyana yadda abun ya faru.",
      avail_lbl: "Sufuri Sa'o'i 24"
    }
  };

  // State Management
  let currentLanguage = localStorage.getItem("safealert_lang") || "en";
  let activeTheme = localStorage.getItem("safealert_theme") || "light";

  // ==========================================================================
  // 3. CORE DOM SELECTIONS
  // ==========================================================================
  const preloader = document.getElementById("preloader");
  const langSelector = document.getElementById("lang-selector");
  const themeToggle = document.getElementById("theme-toggle");
  const mobileNavToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const agencySearch = document.getElementById("agency-search");
  const agencyDirectory = document.getElementById("agency-directory");
  const incidentForm = document.getElementById("incident-form");
  const anonymousCheckbox = document.getElementById("anonymous-checkbox");
  const contactInfoGroup = document.getElementById("contact-info-group");
  const btnGps = document.getElementById("btn-gps");
  const gpsDisplay = document.getElementById("gps-display");
  const scrollTopBtn = document.getElementById("scroll-top");
  const statusModal = document.getElementById("status-modal");
  const modalClose = document.getElementById("modal-close");

  // ==========================================================================
  // 4. THEME & LANGUAGE INITIALIZATION (WITH NULL-CHECKS)
  // ==========================================================================
  
  // Safe setting of language selector value
  if (langSelector) {
    langSelector.value = currentLanguage;
  }
  
  // Apply visual theme immediately
  if (activeTheme === "dark") {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }

  // Disable preloader gently if present
  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.classList.add("hidden");
      }, 400);
    }, 600);
  }

  // Theme Switch Interaction
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("light-mode")) {
        document.body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("safealert_theme", "dark");
      } else {
        document.body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("safealert_theme", "light");
      }
    });
  }

  // Language Selection Interaction
  if (langSelector) {
    langSelector.addEventListener("change", (e) => {
      currentLanguage = e.target.value;
      localStorage.setItem("safealert_lang", currentLanguage);
      applyTranslations();
      renderAgencies();
    });
  }

  // Translate DOM elements dynamically with checks
  function applyTranslations() {
    const langData = translations[currentLanguage];
    if (!langData) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const translationKey = element.getAttribute("data-i18n");
      if (langData[translationKey]) {
        // Handle input placeholders as well
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          element.placeholder = langData[translationKey];
        } else {
          element.textContent = langData[translationKey];
        }
      }
    });

    // Handle interactive form placeholder dynamic shifts safely
    const reporterName = document.getElementById("reporter-name");
    const reporterPhone = document.getElementById("reporter-phone");
    const incidentLocation = document.getElementById("incident-location");
    const incidentDesc = document.getElementById("incident-desc");

    if (currentLanguage === "ha") {
      if (reporterName) reporterName.placeholder = "Saka cikakken suna";
      if (reporterPhone) reporterPhone.placeholder = "Kamar 08031234567";
      if (incidentLocation) incidentLocation.placeholder = "Misali: Kusa da kasuwar Gusau, a hanyar Zaria, Gusau";
      if (incidentDesc) incidentDesc.placeholder = "Bayyana matsalolin ko laifukan da kake gani...";
    } else {
      if (reporterName) reporterName.placeholder = "Enter full name";
      if (reporterPhone) reporterPhone.placeholder = "e.g. 08031234567";
      if (incidentLocation) incidentLocation.placeholder = "e.g. Near Gusau Market, along Zaria Road, Gusau LGA";
      if (incidentDesc) incidentDesc.placeholder = "Provide any useful details to assist rescue forces...";
    }
  }

  // Run initial translation pass
  applyTranslations();

  // ==========================================================================
  // 5. MOBILE NAVIGATION CONTROLLER
  // ==========================================================================
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener("click", () => {
      const expanded = mobileNavToggle.getAttribute("aria-expanded") === "true" || false;
      mobileNavToggle.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("active");
    });
  }

  // Close nav on anchor link click for overlay menus
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active");
      }
      if (mobileNavToggle) {
        mobileNavToggle.setAttribute("aria-expanded", "false");
      }
      
      // Update active state visual indicators
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Scroll spy active link setup
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".scroll-spy");
    const navLinks = document.querySelectorAll(".nav-link");
    let currentActive = "home";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentActive = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentActive}`) {
        link.classList.add("active");
      }
    });

    // Toggle Scroll Top visibility threshold
    if (scrollTopBtn) {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ==========================================================================
  // 6. EMERGENCY AGENCY RENDERING & INSTANT FILTER SEARCH
  // ==========================================================================
  function renderAgencies(filterText = "") {
    if (!agencyDirectory) return;
    
    agencyDirectory.innerHTML = "";
    const cleanFilter = filterText.toLowerCase().trim();
    
    const filtered = safetyAgencies.filter(agency => {
      if (!cleanFilter) return true;
      const matchName = (currentLanguage === "ha" ? agency.nameHa : agency.name).toLowerCase().includes(cleanFilter);
      const matchService = (currentLanguage === "ha" ? agency.serviceHa : agency.service).toLowerCase().includes(cleanFilter);
      const matchKeywords = agency.keywords.some(keyword => keyword.includes(cleanFilter));
      return matchName || matchService || matchKeywords;
    });

    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "col-span-2 text-center card";
      noResults.style.padding = "3rem";
      noResults.innerHTML = `
        <p style="font-size: 1.25rem; font-weight: 600; color: var(--text-muted);">
          ${currentLanguage === "ha" ? "Babu hukumomin da suka dace da wannan binciken." : "No agencies found matching your request."}
        </p>
      `;
      agencyDirectory.appendChild(noResults);
      return;
    }

    filtered.forEach(agency => {
      const card = document.createElement("article");
      card.className = "agency-card card";
      card.setAttribute("tabindex", "0");
      
      const displayName = currentLanguage === "ha" ? agency.nameHa : agency.name;
      const displayLoc = currentLanguage === "ha" ? agency.locationHa : agency.location;
      const displayService = currentLanguage === "ha" ? agency.serviceHa : agency.service;
      const displayAvail = currentLanguage === "ha" ? agency.availableHa : agency.available;
      
      card.innerHTML = `
        <div>
          <div class="agency-header">
            <div class="agency-badge-logo" aria-hidden="true">
              ${agency.svgLogo}
            </div>
            <div class="agency-meta">
              <h3>${displayName}</h3>
              <span class="availability-label">${displayAvail}</span>
            </div>
          </div>
          <div class="agency-details">
            <div class="agency-info-row">
              <span class="agency-info-icon" aria-hidden="true">📍</span>
              <span><strong>${currentLanguage === "ha" ? "Ofishin:" : "Office:"}</strong> ${displayLoc}</span>
            </div>
            <div class="agency-info-row">
              <span class="agency-info-icon" aria-hidden="true">📞</span>
              <span><strong>${currentLanguage === "ha" ? "Waya:" : "Phone:"}</strong> ${agency.displayPhone}</span>
            </div>
            <div class="agency-info-row">
              <span class="agency-info-icon" aria-hidden="true">🛡️</span>
              <span><strong>${currentLanguage === "ha" ? "Ayyuka:" : "Service:"}</strong> ${displayService}</span>
            </div>
          </div>
        </div>
        <div class="agency-actions">
          <a href="tel:${agency.phone}" class="btn btn-primary" aria-label="Call ${displayName} now">
            📞 ${translations[currentLanguage]?.btn_call || 'Call'}
          </a>
          <a href="${agency.website}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" aria-label="Visit official website for ${displayName}">
            🌐 ${translations[currentLanguage]?.btn_web || 'Website'}
          </a>
        </div>
      `;
      agencyDirectory.appendChild(card);
    });
  }

  // Search input listeners safely added
  if (agencySearch) {
    agencySearch.addEventListener("input", (e) => {
      renderAgencies(e.target.value);
    });
  }

  // Run initial card compile
  renderAgencies();

  // ==========================================================================
  // 7. INCIDENT REPORT INTERACTIVE LOGIC
  // ==========================================================================
  
  // Hide Contact Info dynamically if Anonymous Reporting is Checked
  if (anonymousCheckbox) {
    anonymousCheckbox.addEventListener("change", (e) => {
      const reporterName = document.getElementById("reporter-name");
      const reporterPhone = document.getElementById("reporter-phone");

      if (e.target.checked) {
        if (contactInfoGroup) contactInfoGroup.style.display = "none";
        if (reporterName) {
          reporterName.removeAttribute("required");
          reporterName.value = "";
        }
        if (reporterPhone) {
          reporterPhone.removeAttribute("required");
          reporterPhone.value = "";
        }
      } else {
        if (contactInfoGroup) contactInfoGroup.style.display = "grid";
        if (reporterName) reporterName.setAttribute("required", "");
        if (reporterPhone) reporterPhone.setAttribute("required", "");
      }
    });
  }

  // Retrieve GPS coordinates using standard Geolocation API with robust checks
  if (btnGps) {
    btnGps.addEventListener("click", () => {
      const errorMsg = currentLanguage === "ha" 
        ? "Kuskure wajen gano GPS. Da fatan za a kunna 'Location' a na'urarka."
        : "Could not retrieve GPS coordinates. Please enable location services.";

      if (navigator.geolocation) {
        btnGps.disabled = true;
        btnGps.textContent = currentLanguage === "ha" ? "Ina Gano..." : "Reading...";
        
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lng = position.coords.longitude.toFixed(6);
            if (gpsDisplay) {
              gpsDisplay.value = `Latitude: ${lat}, Longitude: ${lng}`;
            }
            btnGps.disabled = false;
            btnGps.textContent = currentLanguage === "ha" ? "Gano GPS" : "Get GPS";
          },
          () => {
            alert(errorMsg);
            btnGps.disabled = false;
            btnGps.textContent = currentLanguage === "ha" ? "Kuskure" : "Error";
          },
          { enableHighAccuracy: true, timeout: 8000 }
        );
      } else {
        alert(currentLanguage === "ha" ? "Fasahar GPS ba ta aiki a wannan burauza." : "GPS geolocation is not supported by your browser.");
      }
    });
  }

  // Clean validation visual styles safely
  function clearErrors() {
    document.querySelectorAll(".error-msg").forEach(box => {
      box.textContent = "";
    });
    document.querySelectorAll(".form-control").forEach(ctrl => {
      ctrl.classList.remove("invalid");
    });
  }

  // Handle Form Submission with validations
  if (incidentForm) {
    incidentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const isAnonymous = anonymousCheckbox ? anonymousCheckbox.checked : false;

      const nameInput = document.getElementById("reporter-name");
      const phoneInput = document.getElementById("reporter-phone");
      const typeInput = document.getElementById("incident-type");
      const dateInput = document.getElementById("incident-date");
      const timeInput = document.getElementById("incident-time");
      const locInput = document.getElementById("incident-location");
      const descInput = document.getElementById("incident-desc");

      const langData = translations[currentLanguage];

      // Validate personal details if not anonymous
      if (!isAnonymous) {
        if (nameInput && !nameInput.value.trim()) {
          nameInput.classList.add("invalid");
          if (nameInput.nextElementSibling) nameInput.nextElementSibling.textContent = langData.validation_name;
          isValid = false;
        }
        if (phoneInput && !phoneInput.value.trim()) {
          phoneInput.classList.add("invalid");
          if (phoneInput.nextElementSibling) phoneInput.nextElementSibling.textContent = langData.validation_phone;
          isValid = false;
        }
      }

      // Validate remaining inputs
      if (typeInput && !typeInput.value) {
        typeInput.classList.add("invalid");
        if (typeInput.nextElementSibling) typeInput.nextElementSibling.textContent = langData.validation_type;
        isValid = false;
      }
      if (dateInput && !dateInput.value) {
        dateInput.classList.add("invalid");
        if (dateInput.nextElementSibling) dateInput.nextElementSibling.textContent = langData.validation_date;
        isValid = false;
      }
      if (timeInput && !timeInput.value) {
        timeInput.classList.add("invalid");
        if (timeInput.nextElementSibling) timeInput.nextElementSibling.textContent = langData.validation_time;
        isValid = false;
      }
      if (locInput && !locInput.value.trim()) {
        locInput.classList.add("invalid");
        if (locInput.nextElementSibling) locInput.nextElementSibling.textContent = langData.validation_location;
        isValid = false;
      }
      if (descInput && !descInput.value.trim()) {
        descInput.classList.add("invalid");
        if (descInput.nextElementSibling) descInput.nextElementSibling.textContent = langData.validation_desc;
        isValid = false;
      }

      // Handle submission processing state
      if (isValid) {
        const btnSubmit = document.getElementById("btn-submit");
        const prevText = btnSubmit ? btnSubmit.textContent : "";
        if (btnSubmit) {
          btnSubmit.disabled = true;
          btnSubmit.textContent = currentLanguage === "ha" ? "Ina tura bayanan..." : "Transmitting securely...";
        }

        // Simulate secure API/dashboard processing
        setTimeout(() => {
          showStatusModal();
          
          incidentForm.reset();
          if (isAnonymous && anonymousCheckbox) {
            anonymousCheckbox.checked = true; 
          } else {
            if (contactInfoGroup) contactInfoGroup.style.display = "grid";
          }
          
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.textContent = prevText;
          }
        }, 1500);
      }
    });
  }

  // Modal display controllers with checks
  function showStatusModal() {
    if (!statusModal) return;
    
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    
    if (modalTitle) modalTitle.textContent = translations[currentLanguage].modal_success_title;
    if (modalDesc) modalDesc.textContent = translations[currentLanguage].modal_success_desc;
    
    statusModal.classList.remove("hidden");
    statusModal.setAttribute("aria-hidden", "false");
    if (modalClose) modalClose.focus();
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      if (statusModal) {
        statusModal.classList.add("hidden");
        statusModal.setAttribute("aria-hidden", "true");
      }
    });
  }

  // Close modal via backdrop touch
  if (statusModal) {
    statusModal.addEventListener("click", (e) => {
      if (e.target === statusModal) {
        statusModal.classList.add("hidden");
      }
    });
  }

  // Accessibility keyboard close triggers (Esc Key)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && statusModal && !statusModal.classList.contains("hidden")) {
      statusModal.classList.add("hidden");
    }
  });

});