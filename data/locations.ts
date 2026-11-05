export interface LocationData {
  slug: string;
  name: string;
  state: string;
  type: "branch" | "service-area";
  heroBadge: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  districtIntro: string;
  isPhysicalBranch: boolean;

  // Branch-specific info (if isPhysicalBranch === true)
  branchDetails?: {
    officeName: string;
    streetAddress: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    phone: string;
    email: string;
    timings: string;
    mapQuery: string;
    mapEmbedSrc: string;
    geo: {
      latitude: number;
      longitude: number;
    };
    transitPoints: Array<{
      title: string;
      distance: string;
      time: string;
      description: string;
    }>;
  };

  // Service-area specific info (if isPhysicalBranch === false)
  serviceAreaDetails?: {
    nearestBranchName: string;
    nearestBranchSlug: string;
    nearestBranchAddress: string;
    distanceFromCity: string;
    travelDuration: string;
    recommendedTrains: string[];
    roadRoute: string;
    howCandidatesApply: Array<{
      step: string;
      title: string;
      description: string;
    }>;
    onlineBenefits: string[];
  };

  // Common high-converting features
  inDemandTrades: Array<{
    category: string;
    roles: string[];
    monthlySalary: string;
    countries: string;
    overtime: string;
  }>;
  whyChoosePoints: Array<{
    title: string;
    desc: string;
  }>;
  testimonials: Array<{
    name: string;
    cityOrDistrict: string;
    jobRole: string;
    destinationCountry: string;
    monthlySalary: string;
    quote: string;
    rating: number;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const locationsList: LocationData[] = [
  // ==========================================
  // 1. PATNA BRANCH (Walk-In Branch Office)
  // ==========================================
  {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    type: "branch",
    heroBadge: "Official Regional Branch Office • Walk-in Center",
    metaTitle: "Work Visa Consultancy in Patna | WorkWise Visa Bihar",
    metaDescription:
      "Top-rated work visa consultancy in Patna, Bihar. Visit Varma Centre, Boring Road for verified Gulf & Europe jobs, GAMCA medical & Takamol test.",
    keywords: [
      "visa consultancy in patna",
      "work visa agency patna",
      "gulf job consultancy in patna",
      "overseas job consultancy in bihar",
      "best visa consultant boring road patna",
      "saudi work visa patna",
      "dubai work visa consultant bihar",
      "varma centre boring road visa agency",
    ],
    districtIntro:
      "Hamara Patna branch poore Bihar ke candidates ke liye state-of-the-art facilitation center hai. Varma Centre, Boring Road Crossing par hamari dedicated team Gulf aur European employers ke direct interviews, Takamol trade tests, GAMCA medical slot booking aur embassy visa stamping assist karti hai.",
    isPhysicalBranch: true,
    branchDetails: {
      officeName: "WorkWise Visa - Patna Branch (Europass Immigration Pvt Ltd)",
      streetAddress: "6th Floor Office No 606, Varma Centre, Boring Rd Crossing, Sri Krishna Puri",
      locality: "Boring Road Crossing, Sri Krishna Puri",
      city: "Patna",
      state: "Bihar",
      pincode: "800001",
      phone: "+918130161603",
      email: "workwisevisa@gmail.com",
      timings: "Monday - Saturday: 09:30 AM - 06:30 PM (Sunday Closed)",
      mapQuery: "Varma+Centre+Boring+Road+Patna",
      mapEmbedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5819777935745!2d85.1200236759547!3d25.613303914495568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5845c48b788d%3A0xebe6e6cb39c89482!2sVarma%20Center!5e0!3m2!1sen!2sin!4v1741541000000!5m2!1sen!2sin",
      geo: {
        latitude: 25.6133,
        longitude: 85.1226,
      },
      transitPoints: [
        {
          title: "Patna Junction (PNBE)",
          distance: "4.5 KM",
          time: "15-20 Mins",
          description:
            "Platform 1 exit se direct shared ya reserved auto/cab milta hai Dak Bungalow → Boring Road Crossing ke liye.",
        },
        {
          title: "Patna Airport (PAT)",
          distance: "6.5 KM",
          time: "20-25 Mins",
          description:
            "Jay Prakash Narayan International Airport se via Bailey Road aur Boring Canal Road seedhe Varma Centre.",
        },
        {
          title: "Bairiya ISBT / Patliputra Junction",
          distance: "11 KM / 5 KM",
          time: "25-35 Mins",
          description:
            "North/South Bihar se aane wali state transport aur private buses ISBT aati hain, wahan se Boring Road auto directly available hai.",
        },
      ],
    },
    inDemandTrades: [
      {
        category: "Civil & Construction",
        roles: ["Shuttering Carpenter", "Steel Fixer", "Mason (Tiles/Block)", "Scaffolder"],
        monthlySalary: "₹45,000 - ₹65,000",
        countries: "Saudi Arabia (NEOM), UAE, Qatar",
        overtime: "2-4 Hours Daily Guaranteed",
      },
      {
        category: "MEP & Technical Trades",
        roles: ["Electrician (Building/Industrial)", "Plumber", "HVAC Tech", "6G Pipe Welder"],
        monthlySalary: "₹52,000 - ₹85,000",
        countries: "Saudi Arabia, UAE, Kuwait, Oman",
        overtime: "Overtime + Free Food/Accommodation",
      },
      {
        category: "Heavy Equipment & Transport",
        roles: ["GCC Heavy Driver", "Excavator Operator", "Crane Operator", "Trailer Driver"],
        monthlySalary: "₹60,000 - ₹1,05,000",
        countries: "Saudi Arabia, UAE, Bahrain",
        overtime: "Allowance + Health Insurance Included",
      },
      {
        category: "Hospitality, Logistics & Facility",
        roles: ["Barista / Waiter", "Warehouse Associate", "Security Guard", "Cook"],
        monthlySalary: "₹48,000 - ₹80,000",
        countries: "Dubai, Qatar, Poland, Croatia",
        overtime: "Tips + Duty Meals Included",
      },
    ],
    whyChoosePoints: [
      {
        title: "Varma Centre Physical Presence",
        desc: "Patna ke prime Boring Road area me walk-in office. Candidates aur unke parivaar aamne-saamne milkar poora process samajh sakte hain.",
      },
      {
        title: "Zero Fraud Guarantee",
        desc: "Hamare paas sirf direct company demand letters hote hain. Kisi bhi sub-agent ya unauthorized mediator ka koi roll nahi hai.",
      },
      {
        title: "Takamol & GAMCA Coordination",
        desc: "Saudi Skill Verification Test (SVP) aur approved GAMCA medical centers ke liye priority slot booking aur mock training.",
      },
      {
        title: "Government Registered & MOFA Stamping",
        desc: "Aapke offer letter ki legal vetting, MEA apostille aur embassy visa stamping poori legal compliance ke saath hoti hai.",
      },
    ],
    testimonials: [
      {
        name: "Md. Tarique Anwar",
        cityOrDistrict: "Siwan / Patna Office",
        jobRole: "HVAC Senior Technician",
        destinationCountry: "Riyadh, Saudi Arabia",
        monthlySalary: "SAR 3,200 (₹71,000)",
        quote:
          "Siwan se Patna Boring Road office aaya tha interview dene. Varma Centre par staff ne Takamol test ki live practice karwayi aur sirf 22 din me visa stamping ho gaya.",
        rating: 5,
      },
      {
        name: "Chandan Kumar",
        cityOrDistrict: "Gopalganj / Patna Office",
        jobRole: "Shuttering Carpenter Lead",
        destinationCountry: "NEOM Project, Saudi Arabia",
        monthlySalary: "SAR 2,400 (₹53,000)",
        quote:
          "WorkWise Visa Patna office me sabse achhi baat ye hai ki hidden charges nahi hain. Agreement paper par har cheez likhi hoti hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Patna branch me walk-in consultation ka timing kya hai?",
        a: "Aap Monday se Saturday subah 09:30 AM se shaam 06:30 PM ke beech Varma Centre, Boring Road Crossing office me visit kar sakte hain.",
      },
      {
        q: "Kya interview ke liye trade test equipment uplabdh hai?",
        a: "Ji haan, Patna branch ke paas authorized trade testing workshops ka tie-up hai jahan welding, electrical, plumbing aur carpentry ka practical test hota hai.",
      },
      {
        q: "Patna office me payment mode kya hai?",
        a: "Ham bank transfer, UPI aur official company receipt ke saath direct transactions accept karte hain. Har candidate ko legal tax invoice milta hai.",
      },
      {
        q: "Kya Bihar ke bahar ke candidates bhi Patna office aa sakte hain?",
        a: "Beshak! Eastern UP (Gorakhpur, Deoria, Ballia) aur Jharkhand se bhi rozana candidates Patna office aate hain kyunki connectivity behtareen hai.",
      },
    ],
  },

  // ==========================================
  // 2. NOIDA HQ (Walk-In Head Office)
  // ==========================================
  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    type: "branch",
    heroBadge: "Corporate Headquarters • Delhi NCR",
    metaTitle: "Best Work Visa & Overseas Placement Consultancy in Noida Sector 132 | WorkWise Visa",
    metaDescription:
      "Premier overseas recruitment agency & work visa consultancy in Urbtech Trade Centre, Sector 132 Noida, Delhi NCR. Visit our corporate office for Europe & Gulf work permits.",
    keywords: [
      "visa consultancy in noida",
      "work visa agency delhi ncr",
      "overseas recruitment agency noida",
      "gulf job consultancy noida sector 132",
      "europe work visa consultant delhi ncr",
      "best immigration consultant noida",
      "workwise visa noida head office",
    ],
    districtIntro:
      "Our Noida Head Office at Urbtech Trade Centre, Sector 132 is the corporate hub for international workforce placement across Delhi NCR, hosting direct employer recruitment drives for Europe and GCC mega projects.",
    isPhysicalBranch: true,
    branchDetails: {
      officeName: "WorkWise Visa - Corporate Headquarters (Europass Immigration Pvt Ltd)",
      streetAddress: "Urbtech Trade Centre, D-701 C, Sector 132",
      locality: "Sector 132",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201304",
      phone: "+918130161603",
      email: "workwisevisa@gmail.com",
      timings: "Monday - Saturday: 09:30 AM - 06:30 PM (Sunday Closed)",
      mapQuery: "Urbtech+Trade+Centre+Sector+132+Noida",
      mapEmbedSrc:
        "https://www.google.com/maps?q=Urbtech+Trade+Centre+Sector+132+Noida&output=embed",
      geo: {
        latitude: 28.5165,
        longitude: 77.378,
      },
      transitPoints: [
        {
          title: "Sector 137 / 142 Metro Station (Aqua Line)",
          distance: "2.5 KM",
          time: "5-7 Mins",
          description: "Convenient access from Noida-Greater Noida Aqua Line with frequent e-rickshaws and cabs.",
        },
        {
          title: "Noida-Greater Noida Expressway",
          distance: "Direct Access",
          time: "Immediate Connect",
          description: "Direct expressway connect from South Delhi (Kalindi Kunj / DND Flyway) and Greater Noida.",
        },
        {
          title: "Botanical Garden Metro Station (Blue & Magenta Line Interchange)",
          distance: "12 KM",
          time: "15-18 Mins via Expressway",
          description: "Major Delhi Metro interchange hub connecting South Delhi, West Delhi, and Noida Sector 132.",
        },
      ],
    },
    inDemandTrades: [
      {
        category: "European Skilled Trades",
        roles: ["CNC Machine Operator", "Forklift Driver", "Food Factory Worker", "Electrician"],
        monthlySalary: "€950 - €1,600 (₹85,000 - ₹1,45,000)",
        countries: "Poland, Croatia, Romania, Hungary",
        overtime: "European Labor Standard + Accommodation",
      },
      {
        category: "Gulf Engineering & Foremen",
        roles: ["Site Supervisor", "QA/QC Inspector", "Safety Officer", "HVAC Foreman"],
        monthlySalary: "₹75,000 - ₹1,35,000",
        countries: "Saudi Arabia, UAE, Qatar",
        overtime: "Family Status Option + Free Travel",
      },
      {
        category: "GCC Logistics & Heavy Driving",
        roles: ["Trailer Drivers (Valid GCC)", "Heavy Bus Driver", "Boom Truck Operator"],
        monthlySalary: "₹65,000 - ₹1,10,000",
        countries: "Saudi Arabia, UAE, Oman",
        overtime: "Trip Allowances + Visa Stamping Fast Track",
      },
    ],
    whyChoosePoints: [
      {
        title: "Direct Client Delegate Interviews",
        desc: "Europe aur Gulf ke direct client representatives hamare Noida HQ me offline physical client interviews lene aate hain.",
      },
      {
        title: "Embassies Proximity in Delhi NCR",
        desc: "Chanakyapuri embassies (Saudi, UAE, Poland, Croatia) nazdeek hone ki wajah se visa stamping aur apostille record time me hota hai.",
      },
      {
        title: "Comprehensive Documentation Desk",
        desc: "PCC verification, apostille, MOFA attestation aur biometric scheduling sab ek hi chhat ke niche complete hota hai.",
      },
    ],
    testimonials: [
      {
        name: "Vikram Chauhan",
        cityOrDistrict: "Meerut / Noida Office",
        jobRole: "Forklift Operator",
        destinationCountry: "Warsaw, Poland",
        monthlySalary: "€1,150 (₹1,02,000)",
        quote: "Noida Sector 2 office me counseling li. 4 mahine ke andar Poland ka work permit aur National Visa mil gaya. Best agency in Delhi NCR!",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Noida office metro se kitna door hai?",
        a: "Hamara office Delhi Metro Blue Line ke Sector 15 station se sirf 600 meter door hai, aap 5 minute me paidal ya e-rickshaw se pahunch sakte hain.",
      },
      {
        q: "Kya European work permit Noida office me process hota hai?",
        a: "Ji haan! Poland, Romania, Croatia aur Czech Republic ke seasonal aur 1-2 saal ke work permits ka central processing Noida Head Office se hota hai.",
      },
    ],
  },

  // ==========================================
  // 3. DELHI (National Capital Region - Dedicated Candidate Desk)
  // ==========================================
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi NCR",
    type: "service-area",
    heroBadge: "National Capital Region • Dedicated Placement Desk",
    metaTitle: "Work Visa Consultancy in Delhi | Overseas Jobs & Recruitment | WorkWise Visa",
    metaDescription:
      "Premier work visa consultancy & overseas recruitment agency serving Delhi NCR. Verified Europe & Gulf work permits with MEA Apostille & embassy stamping support.",
    keywords: [
      "work visa consultancy in delhi",
      "visa consultancy in delhi",
      "overseas recruitment agency delhi",
      "gulf job consultancy in delhi",
      "europe work visa consultant delhi",
      "best immigration consultant delhi",
      "dubai work visa agent in delhi",
      "saudi arabia visa processing delhi",
      "manpower consultancy in delhi for gulf",
      "takamol trade test guidance delhi",
      "gamca medical appointment center delhi",
      "mea apostille attestation patiala house delhi",
      "vfs global delhi visa appointment",
      "licensed overseas manpower agency delhi",
    ],
    districtIntro:
      "WorkWise Visa serves candidates across Delhi—including South Delhi, East Delhi, West Delhi, North Delhi, and Central Delhi—providing direct access to Gulf and European work visa quotas, Patiala House MEA Apostille, and Chanakyapuri diplomatic consular clearance via our nearby Noida Corporate HQ.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa Corporate Headquarters (Urbtech Trade Centre, Sector 132)",
      nearestBranchSlug: "noida",
      nearestBranchAddress: "Urbtech Trade Centre, Sector 132, Noida-Greater Noida Expressway (20 Mins from South Delhi)",
      distanceFromCity: "12-15 KM from South Delhi",
      travelDuration: "20 Mins via Expressway",
      recommendedTrains: [
        "Delhi Metro Magenta Line (Janakpuri West - Hauz Khas - Botanical Garden)",
        "Delhi Metro Blue Line (Dwarka Sector 21 - Rajiv Chowk - Noida)",
        "DND Flyway & Kalindi Kunj Expressway Route",
      ],
      roadRoute: "Direct access via DND Flyway or Kalindi Kunj Road onto Noida-Greater Noida Expressway to Sector 132.",
      howCandidatesApply: [
        {
          step: "01",
          title: "Online Profile Evaluation",
          description: "Submit your resume, trade credentials, and target country preference online or via WhatsApp.",
        },
        {
          step: "02",
          title: "In-Person Review at Corporate HQ",
          description: "Visit our Corporate HQ at Urbtech Trade Centre, Sector 132 for document verification and trade testing.",
        },
        {
          step: "03",
          title: "Consular Biometrics & Stamping",
          description: "Attend your VFS Global appointment at Shivaji Stadium Metro Station for European Type-D stamping.",
        },
      ],
      onlineBenefits: [
        "100% verified employer-backed job offers in Europe & Gulf",
        "Direct coordination with Chanakyapuri foreign embassies",
        "Fast-track MEA Apostille at Patiala House Courts",
        "Zero registration fee for initial profile evaluation",
      ],
    },
    inDemandTrades: [
      {
        category: "European Industrial Trades & Logistics",
        roles: ["6G Pipe Welder", "CNC Operator", "Warehouse Logistics Handler", "Commercial Electrician"],
        monthlySalary: "€900 - €1,700 (₹82,000 - ₹1,55,000)",
        countries: "Poland, Croatia, Romania, Germany",
        overtime: "Standard EU Labor Protection + Provided Accommodation",
      },
      {
        category: "Gulf Megaprojects & Engineering",
        roles: ["Industrial Electrician", "Instrumentation Tech", "Refinery Pipefitter", "Civil Mason"],
        monthlySalary: "2,200 - 4,500 SAR/AED (₹50,000 - ₹1,05,000)",
        countries: "Saudi Arabia (NEOM), UAE, Qatar, Oman",
        overtime: "100% Tax-Free + Free Housing & Overtime @ 1.25x-1.5x",
      },
      {
        category: "Heavy Fleet & Transport Drivers",
        roles: ["Heavy Trailer Driver (GCC / Indian HMV)", "Transit Mixer Operator", "Bus Driver"],
        monthlySalary: "2,400 - 4,000 SAR/AED (₹55,000 - ₹92,000)",
        countries: "Saudi Arabia, UAE, Qatar, Bahrain",
        overtime: "Trip Bonuses + License Conversion Support",
      },
    ],
    whyChoosePoints: [
      {
        title: "Direct Diplomatic & Embassy Proximity",
        desc: "Located minutes from Chanakyapuri foreign embassies and VFS Global Shivaji Stadium for expedited file submissions.",
      },
      {
        title: "100% Verified Employer Work Visas",
        desc: "All vacancies carry official government labor quotas with guaranteed salary protections under Gulf WPS and EU standards.",
      },
      {
        title: "MEA Apostille & PSK PCC Support",
        desc: "Complete documentation desk facilitating fast-track police clearance and Patiala House Hague Apostille legalization.",
      },
    ],
    testimonials: [
      {
        name: "Mohammad Irfan",
        cityOrDistrict: "Okhla, New Delhi",
        jobRole: "6G Argon Welder",
        destinationCountry: "Dubai, UAE",
        monthlySalary: "3,200 AED (₹74,000)",
        quote: "Delhi me bohot agents ghumate the. WorkWise Visa se counseling li aur 22 din me MOHRE work visa aur flight ticket mil gayi. 100% genuine agency!",
        rating: 5,
      },
      {
        name: "Rahul Verma",
        cityOrDistrict: "Laxmi Nagar, East Delhi",
        jobRole: "Warehouse Logistics Handler",
        destinationCountry: "Warsaw, Poland",
        monthlySalary: "€1,250 (₹1,14,000)",
        quote: "Poland ka Voivodeship work permit aur National Type-D visa bilkul smooth mila. VFS Delhi appointment aur PCC apostille me puri help mili.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "How can candidates from Delhi visit the WorkWise Visa office?",
        a: "Candidates from anywhere in Delhi can easily reach our corporate office via the Delhi Metro Magenta Line (interchanging at Botanical Garden) or by car/cab via the DND Flyway or Kalindi Kunj Road (just 20 minutes from South Delhi).",
      },
      {
        q: "Does WorkWise Visa assist with MEA Apostille at Patiala House?",
        a: "Yes. We coordinate end-to-end document attestation with the Ministry of External Affairs (MEA) CPV Division at Patiala House and state HRD departments for European and Gulf visas.",
      },
      {
        q: "Which countries are currently recruiting candidates from Delhi?",
        a: "We have active direct recruitment drives for Poland, Romania, Croatia, Germany, Saudi Arabia (NEOM & Vision 2030), UAE (Dubai & Abu Dhabi), Qatar, and Oman across technical, driving, MEP, and hospitality roles.",
      },
    ],
  },

  // ==========================================
  // 4. SIWAN (Service Area - Bihar's #1 Gulf Hub)
  // ==========================================
  {
    slug: "siwan",
    name: "Siwan",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Dedicated Candidate Service Hub • Siwan District",
    metaTitle: "Best Gulf Job & Overseas Work Visa Consultancy for Siwan Candidates | WorkWise Visa",
    metaDescription:
      "Top-rated Gulf job placement & overseas work visa services for candidates in Siwan, Bihar. 100% verified Saudi, Dubai, Qatar work permits, Takamol test help & fast-track processing via nearest Patna office.",
    keywords: [
      "gulf job consultancy in siwan",
      "work visa agency siwan",
      "overseas recruitment in siwan bihar",
      "saudi visa agent in siwan",
      "dubai job placement siwan",
      "best visa consultant siwan bihar",
      "takamol test center siwan",
      "europe work visa consultant siwan",
    ],
    districtIntro:
      "Siwan Bihar ka sabse bada Gulf migrant hub hai jahan se har saal hazaron skilled aur technical workers Saudi Arabia, UAE, Qatar aur Oman jate hain. WorkWise Visa Siwan ke sabhi tehsilon (Barharia, Mairwa, Maharajganj, Daraunda, Raghunathpur) ke candidates ko 100% verified employer demand, safe online documentation aur direct Patna branch support provide karta hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "135 KM",
      travelDuration: "3 - 3.5 Hours",
      recommendedTrains: [
        "Maurya Express (Train No. 15028) - Direct Siwan to Patna",
        "Barauni Express & Intercity Trains via Chhapra",
        "Direct Ac/Non-Ac Buses from Siwan Bus Stand to Patna Boring Road",
      ],
      roadRoute: "Siwan → Chhapra Highway → JP Setu / Digha Bridge → Boring Road Crossing, Patna",
      howCandidatesApply: [
        {
          step: "1",
          title: "WhatsApp & Online CV Shortlisting",
          description:
            "Siwan me apne ghar se apna passport, photo aur trade experience WhatsApp (+91 81301 61603) par bhejein. Hamari team 24 ghante me verified Gulf vacancy match karke batayegi.",
        },
        {
          step: "2",
          title: "Direct Client Interview / Takamol Test",
          description:
            "Client selection ke liye aapko hamare Patna Varma Centre aana hoga (Sirf 3 ghante ka safar). Wahan trade test aur mock interview karwaya jayega.",
        },
        {
          step: "3",
          title: "GAMCA Medical & Embassy Visa Stamping",
          description:
            "Siwan ke candidates ko approved GAMCA medical slip di jayegi aur passport collection ke baad direct visa stamping karke ticket issue ki jayegi.",
        },
      ],
      onlineBenefits: [
        "Siwan ke candidates ko baar-baar travel karne ki zaroorat nahi — 80% process online WhatsApp & call par hota hai.",
        "Kisi local siwan agent ko commission ya advance dene ki zaroorat nahi — 100% direct company billing.",
        "Free Saudi Takamol Trade Test preparation materials provided on WhatsApp.",
      ],
    },
    inDemandTrades: [
      {
        category: "Siwan Top Trade: MEP & Plumbing",
        roles: ["Electrician (House & Industrial)", "Plumber", "Pipe Fitter", "Ductman"],
        monthlySalary: "₹48,000 - ₹75,000",
        countries: "Saudi Arabia (Riyadh/Jeddah), Dubai, Qatar",
        overtime: "2-4 Hours Daily Overtime Guaranteed",
      },
      {
        category: "Civil Construction Crew",
        roles: ["Shuttering Carpenter", "Steel Fixer", "Mason", "Painter"],
        monthlySalary: "₹42,000 - ₹62,000",
        countries: "Saudi Arabia (NEOM City), UAE, Kuwait",
        overtime: "Company Free Food & Accommodation",
      },
      {
        category: "Heavy Vehicle & Drivers",
        roles: ["Gulf Return Trailer Driver", "Dump Truck Driver", "Forklift Operator"],
        monthlySalary: "₹58,000 - ₹95,000",
        countries: "Saudi Arabia, UAE, Oman",
        overtime: "Trip Allowances + Medical Insurance",
      },
    ],
    whyChoosePoints: [
      {
        title: "No Sub-Agent Scam (Siwan Safe Hiring)",
        desc: "Siwan me aksar nakli offer letters se dhokha hota hai. WorkWise Visa candidate ko verified QR-coded offer letter aur direct client contract deta hai.",
      },
      {
        title: "Just 3 Hours from Patna Office",
        desc: "Aap subah Siwan se train pakad kar dopehar me hamare Varma Centre Boring Road office me interview dekar shaam ko wapas ghar ja sakte hain.",
      },
      {
        title: "Direct Gulf Employer Tie-ups",
        desc: "Al Fanar, Nesma, Binladin, Shibh Al Jazira, Almarai jaise top Gulf groups ke requirements regular chalte hain.",
      },
    ],
    testimonials: [
      {
        name: "Rashid Ali",
        cityOrDistrict: "Barharia, Siwan",
        jobRole: "Industrial Electrician",
        destinationCountry: "Jubail, Saudi Arabia",
        monthlySalary: "SAR 2,600 (₹57,000)",
        quote:
          "Siwan me kitne agents ghum rahe hain jo 1-1.5 lakh advance maangte hain. WorkWise Visa se direct Patna Varma Centre par mila, bina kisi mediator ke direct flight ho gayi.",
        rating: 5,
      },
      {
        name: "Sanjay Manjhi",
        cityOrDistrict: "Mairwa, Siwan",
        jobRole: "Steel Fixer",
        destinationCountry: "NEOM Sindalah, Saudi",
        monthlySalary: "SAR 2,200 (₹48,000)",
        quote: "Pehle dar lagta tha fraud se. WorkWise team ne WhatsApp par pura guide kiya aur Patna me live test karwaya. Aaj 1 saal se NEOM me kaam kar raha hoon.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Kya Siwan ke candidates ko har kaam ke liye Patna aana padega?",
        a: "Nahi! Initial counseling, CV submission, vacancy selection aur document checking poori tarah WhatsApp aur phone par hoti hai. Aapko sirf final client interview ya biometric ke waqt Patna aana hota hai.",
      },
      {
        q: "Siwan se Patna office pahunchna kitna aasan hai?",
        a: "Siwan Junction se Maurya Express ya Intercity train pakad kar aap 3 ghante me Patna Junction pahunch sakte hain. Wahan se Boring Road Crossing sirf 15 minute ki doori par hai.",
      },
      {
        q: "Siwan ke candidates ka GAMCA medical kahan hota hai?",
        a: "WorkWise Visa team aapke liye approved GAMCA center (Patna ya Gorakhpur) me slot book karti hai jahan 1 din me medical fit slip mil jati hai.",
      },
    ],
  },

  // ==========================================
  // 4. GOPALGANJ (Service Area - High Gulf Demand)
  // ==========================================
  {
    slug: "gopalganj",
    name: "Gopalganj",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Dedicated Candidate Service Hub • Gopalganj District",
    metaTitle: "Best Overseas Recruitment & Gulf Work Visa Consultancy for Gopalganj Candidates | WorkWise Visa",
    metaDescription:
      "Reliable Gulf job consultancy & work visa assistance for candidates in Gopalganj, Bihar. Verified Saudi, Qatar, UAE jobs for technical trades, drivers & construction workers with direct Patna support.",
    keywords: [
      "gulf job consultancy in gopalganj",
      "work visa agency gopalganj bihar",
      "saudi visa agent in gopalganj",
      "overseas job consultancy gopalganj",
      "dubai visa consultant gopalganj",
      "best visa agency barauli mirganj",
      "takamol skill verification gopalganj",
    ],
    districtIntro:
      "Gopalganj Bihar ka pramukh district hai jahan ke har doosre parivaar se koi na koi member Gulf me kaam karta hai. Mirganj, Barauli, Hathua, Thawe aur Baikunthpur ke candidates ko fake agencies se bachane aur direct verified employment dene ke liye WorkWise Visa doorstep assistance aur Patna center support provide karta hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "145 KM",
      travelDuration: "3.5 - 4 Hours",
      recommendedTrains: [
        "Thawe to Chhapra/Patna Passenger & Express Trains",
        "Direct Express Buses from Gopalganj Bus Stand (NH-27) to Patna Boring Road",
      ],
      roadRoute: "Gopalganj → Mohammadpur → Mashrakh → Chhapra → JP Setu → Patna",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online Document Verification",
          description: "Gopalganj se WhatsApp par passport aur trade details submit karein. Hamare visa advisors eligibility check karenge.",
        },
        {
          step: "2",
          title: "Patna Branch Client Walk-In",
          description: "Gopalganj se NH-27/Chhapra route se sidhe Patna Boring Road aakar company interview aur trade evaluation dein.",
        },
        {
          step: "3",
          title: "Transparent Stamping & Visa Delivery",
          description: "Embassy submission, MOFA biometric aur direct flight ticket booking — transparent billing ke saath.",
        },
      ],
      onlineBenefits: [
        "Mirganj, Hathua, Thawe ke candidates ke liye dedicated WhatsApp helpline.",
        "Free trade skill test orientation before actual interview.",
        "Salary slip & employer verification report provided prior to signing.",
      ],
    },
    inDemandTrades: [
      {
        category: "Gopalganj Drivers & Operators",
        roles: ["Light Vehicle Driver", "Heavy Trailer Driver", "JCB Operator", "Roller Operator"],
        monthlySalary: "₹50,000 - ₹90,000",
        countries: "Saudi Arabia, UAE, Qatar",
        overtime: "Trip Allowances + Food",
      },
      {
        category: "Construction & Finishing",
        roles: ["Tile Mason", "Gypsum Carpenter", "Spray Painter", "Scaffolder"],
        monthlySalary: "₹44,000 - ₹66,000",
        countries: "Saudi Arabia, UAE, Oman",
        overtime: "Daily OT + Free Accommodation",
      },
      {
        category: "Technical & MEP Trades",
        roles: ["Building Electrician", "Sanitary Plumber", "HVAC Tech"],
        monthlySalary: "₹48,000 - ₹78,000",
        countries: "Saudi Arabia, Dubai",
        overtime: "Medical + Return Ticket Every 2 Years",
      },
    ],
    whyChoosePoints: [
      {
        title: "Protection Against Fraud Agents",
        desc: "Gopalganj me fake visa aur visit visa par bhej kar fasane ka bada risk hota hai. WorkWise Visa sirf ECR/ECNR legal employment work visa par bhejta hai.",
      },
      {
        title: "Govt Recognized Legal Backing",
        desc: "Europass Immigration Pvt Ltd ke antargat poori legal compliance aur candidate welfare tracking ki jati hai.",
      },
    ],
    testimonials: [
      {
        name: "Santosh Yadav",
        cityOrDistrict: "Mirganj, Gopalganj",
        jobRole: "Heavy Trailer Driver (GCC Licence)",
        destinationCountry: "Dammam, Saudi Arabia",
        monthlySalary: "SAR 3,000 (₹66,000)",
        quote: "Mirganj me kaafi agents ne chakkar lagwaya. Patna Varma Centre par WorkWise Visa ke office gaya, 25 din me Saudi visa lag gaya.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Gopalganj se Patna aane ka sabse aasan rasta kya hai?",
        a: "Aap Thawe se train le sakte hain ya Gopalganj NH-27 se direct bus pakad kar Digha/Boring Road Crossing pahunch sakte hain, lagbhag 3.5 se 4 ghante lagte hain.",
      },
      {
        q: "Kya fresh candidates jinka passport naya hai unko Gulf job mil sakti hai?",
        a: "Ji haan! Construction, plumbing, electrical aur helper category me freshers ke liye bhi massive demand rehti hai.",
      },
    ],
  },

  // ==========================================
  // 5. GORAKHPUR (Service Area - Eastern UP Hub)
  // ==========================================
  {
    slug: "gorakhpur",
    name: "Gorakhpur",
    state: "Uttar Pradesh",
    type: "service-area",
    heroBadge: "Regional Candidate Service Hub • Purvanchal & Gorakhpur",
    metaTitle: "Best Overseas Work Visa & Gulf Job Consultancy for Gorakhpur Candidates | WorkWise Visa",
    metaDescription:
      "Leading Gulf recruitment agency & overseas job placement for candidates in Gorakhpur, UP. Verified Saudi Arabia, Dubai, Europe work visas with expert trade testing & direct visa stamping support.",
    keywords: [
      "gulf job consultancy in gorakhpur",
      "work visa agency gorakhpur",
      "overseas recruitment in gorakhpur",
      "saudi visa agent in gorakhpur",
      "dubai work visa consultant gorakhpur",
      "best visa consultancy eastern up",
      "europe work visa consultant gorakhpur",
    ],
    districtIntro:
      "Gorakhpur poore Eastern UP (Purvanchal), Deoria, Kushinagar aur Maharajganj ka sabse bada center hai. Yahan ke skilled electricians, welders, drivers aur European job seekers ke liye WorkWise Visa reliable transparency, zero-fraud placement aur fast-track embassy stamping provide karta hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch / Noida HQ",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Patna Branch (Varma Centre, Boring Road) / Noida HQ (Sector 2)",
      distanceFromCity: "220 KM (Patna) / 750 KM (Noida HQ)",
      travelDuration: "4 - 5 Hours to Patna",
      recommendedTrains: [
        "Direct Trains from Gorakhpur Junction (GKP) to Patna (PNBE / Patliputra)",
        "Gorakhpur - Patliputra Express / Vande Bharat connectivity",
        "Gorakhpur to Delhi/Noida Express trains (Vaishali, Gorakhdham Exp)",
      ],
      roadRoute: "Gorakhpur → Gopalganj → Chhapra → Patna (NH-27 / NH-31)",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online Screening from Gorakhpur",
          description: "Gorakhpur se WhatsApp par apni CV aur trade certificate share karein. Expert team matching vacancies shortlist karegi.",
        },
        {
          step: "2",
          title: "Convenient Branch Visit (Patna or Noida)",
          description: "Purvanchal ke candidates train se 4 ghante me Patna Varma Centre ya direct Noida HQ aakar client interview de sakte hain.",
        },
        {
          step: "3",
          title: "Direct Flight Departure",
          description: "Visa stamping ke baad Lucknow Airport ya Delhi Airport se direct international flight arrange ki jati hai.",
        },
      ],
      onlineBenefits: [
        "Deoria, Kushinagar, Maharajganj ke candidates ke liye WhatsApp helpline.",
        "Direct interview slots in Patna or Noida as per candidate convenience.",
        "Europe (Poland, Croatia) opportunities for skilled technical youth.",
      ],
    },
    inDemandTrades: [
      {
        category: "Welding & Fabrication (Gorakhpur Special)",
        roles: ["6G TIG & ARC Welder", "Pipe Fabricator", "Structural Welder", "Rigger"],
        monthlySalary: "₹55,000 - ₹95,000",
        countries: "Saudi Arabia (Aramco Projects), Qatar, UAE",
        overtime: "Double OT on Oil & Gas Sites",
      },
      {
        category: "Industrial & Electrical Maintenance",
        roles: ["Industrial Electrician", "Instrument Technician", "Panel Board Assembler"],
        monthlySalary: "₹50,000 - ₹82,000",
        countries: "Saudi Arabia, Kuwait, Oman",
        overtime: "Medical + Air Ticket Included",
      },
    ],
    whyChoosePoints: [
      {
        title: "No Sub-Agent Cuts",
        desc: "Gorakhpur railway station ke aas-paas chalne wale unauthorized agents se bachein. WorkWise Visa direct registered company hai.",
      },
      {
        title: "Choice of 2 Major Centers",
        desc: "Aap chahein to nazdeek Patna branch aa sakte hain ya agar Europe ka process karwana ho to Noida Head Office ja sakte hain.",
      },
    ],
    testimonials: [
      {
        name: "Rameshwar Prasad",
        cityOrDistrict: "Deoria / Gorakhpur Hub",
        jobRole: "6G Pipe Welder",
        destinationCountry: "Ras Tanura, Saudi Arabia",
        monthlySalary: "SAR 3,400 (₹75,000)",
        quote: "Gorakhpur me weld test diya tha pehle kisi agent ke paas, 6 mahine barbad kiye. WorkWise se Patna office gaya, 25 din me Saudi flight ho gayi.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Kya Gorakhpur ke candidates ke liye Gorakhpur me GAMCA medical hai?",
        a: "Ji haan, Gorakhpur me approved medical centers hain, hamari team wahan ka online slot generate kar ke deti hai.",
      },
      {
        q: "Kya Gorakhpur se flight Lucknow airport se mil sakti hai?",
        a: "Beshak! Riyadh, Dubai, Sharjah aur Doha ke liye Lucknow Chaudhary Charan Singh International Airport se direct flights provide ki jati hain.",
      },
    ],
  },

  // ==========================================
  // 6. MUZAFFARPUR (Service Area - North Bihar Hub)
  // ==========================================
  {
    slug: "muzaffarpur",
    name: "Muzaffarpur",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Regional Candidate Service Hub • North Bihar",
    metaTitle: "Best Overseas Work Visa & Gulf Recruitment for Muzaffarpur Candidates | WorkWise Visa",
    metaDescription:
      "Premier overseas job consultancy & work visa agency for candidates in Muzaffarpur, Bihar. Verified Gulf jobs, trade test booking & direct guidance via nearby Patna Boring Road office.",
    keywords: [
      "gulf job consultancy in muzaffarpur",
      "work visa agency muzaffarpur bihar",
      "overseas job consultancy muzaffarpur",
      "saudi visa agent in muzaffarpur",
      "dubai visa consultant muzaffarpur",
      "best overseas recruitment north bihar",
    ],
    districtIntro:
      "Muzaffarpur North Bihar ka commercial capital hai jahan se Sitamarhi, Sheohar, Motihari aur Vaishali ke skilled workers judte hain. Patna hamare Boring Road office se sirf 75 KM door hone ki wajah se Muzaffarpur ke candidates ke liye walk-in consultation aur trade verification sabse aasan hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "75 KM",
      travelDuration: "1.5 - 2 Hours",
      recommendedTrains: [
        "Vande Bharat & Intercity Express (Muzaffarpur Jn to Patna Jn / Patliputra)",
        "Direct Shared Cabs / AC Buses via JP Ganga Path & Digha Bridge",
      ],
      roadRoute: "Muzaffarpur → Hajipur → Digha JP Setu → Boring Road Crossing, Patna",
      howCandidatesApply: [
        {
          step: "1",
          title: "Quick WhatsApp Screening",
          description: "Muzaffarpur se apne documents send karein aur interview schedule karein.",
        },
        {
          step: "2",
          title: "Same-Day Visit to Patna Varma Centre",
          description: "Subah 8 baje ghar se nikle aur 10 baje tak Boring Road office me client interview aur document submit karein.",
        },
        {
          step: "3",
          title: "Visa Stamping & Flight Arrangement",
          description: "Poora legal paperwork complete hone par Patna ya Delhi se direct international flight.",
        },
      ],
      onlineBenefits: [
        "Sirf 2 ghante ki doori par state-of-the-art branch office.",
        "Free Saudi Takamol Trade Test orientation.",
        "Transparency & direct company billing with receipts.",
      ],
    },
    inDemandTrades: [
      {
        category: "Construction & MEP",
        roles: ["Electrician", "Plumber", "Mason", "Carpenter"],
        monthlySalary: "₹45,000 - ₹72,000",
        countries: "Saudi Arabia, UAE, Qatar",
        overtime: "2-3 Hours Daily OT",
      },
      {
        category: "Commercial Drivers",
        roles: ["Light Driver", "Heavy Trailer Driver", "Bus Driver"],
        monthlySalary: "₹52,000 - ₹90,000",
        countries: "Saudi Arabia, UAE, Kuwait",
        overtime: "Allowance + Free Housing",
      },
    ],
    whyChoosePoints: [
      {
        title: "Extremely Close to Patna Branch (75 KM)",
        desc: "Muzaffarpur ke candidate ko kisi door ke shehar jane ki zaroorat nahi — 1.5 ghante me hamare Boring Road office aa sakte hain.",
      },
      {
        title: "Guaranteed Offer Letter Verification",
        desc: "Company ke saath legal employment contract bina kisi mediator ke.",
      },
    ],
    testimonials: [
      {
        name: "Abhishek Pandey",
        cityOrDistrict: "Muzaffarpur",
        jobRole: "Building Electrician",
        destinationCountry: "Riyadh, Saudi Arabia",
        monthlySalary: "SAR 2,500 (₹55,000)",
        quote: "Hajipur hokar 1.5 ghante me Patna office pahunch gaya tha. Client interview wahi hua aur 3 hafte me visa mil gaya.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Muzaffarpur se Patna Boring Road office kaise aayein?",
        a: "Muzaffarpur se bus ya auto se Hajipur hote huye Digha JP Setu cross karein, bridge utarte hi Boring Road Crossing sirf 10 minute door hai.",
      },
    ],
  },

  // ==========================================
  // 7. CHHAPRA / SARAN (Service Area)
  // ==========================================
  {
    slug: "chhapra",
    name: "Chhapra (Saran)",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Candidate Facilitation Hub • Saran District",
    metaTitle: "Best Overseas Work Visa & Gulf Job Placement for Chhapra Candidates | WorkWise Visa",
    metaDescription:
      "Reliable overseas recruitment & Gulf work visa agency for candidates in Chhapra (Saran), Bihar. Verified Saudi, Dubai & Qatar jobs with fast access to nearest Patna office.",
    keywords: [
      "gulf job consultancy in chhapra",
      "work visa agency saran bihar",
      "overseas job consultancy chhapra",
      "saudi visa agent in chhapra",
      "dubai job placement chhapra",
    ],
    districtIntro:
      "Chhapra (Saran) Patna se JP Setu / Digha bridge ke zariye direct connected hai (matra 50 KM door). Yahan ke thousands of workers Gulf me civil, mechanical, driving aur facility management me kaam karte hain. WorkWise Visa direct direct company vacancies provide karta hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "50 KM",
      travelDuration: "1 - 1.5 Hours",
      recommendedTrains: [
        "Chhapra - Patna MEMU & Passenger Trains",
        "Direct Shared Autos & Cabs via Digha JP Setu",
      ],
      roadRoute: "Chhapra → Digha JP Setu → Boring Road Crossing, Patna",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online WhatsApp Shortlisting",
          description: "Chhapra se documents WhatsApp karein.",
        },
        {
          step: "2",
          title: "Direct Patna Office Consultation",
          description: "Sirf 1 ghante ka safar — Varma Centre aakar paper submit karein.",
        },
        {
          step: "3",
          title: "Direct Flight Departure",
          description: "Transparent legal visa stamping & flight departure.",
        },
      ],
      onlineBenefits: [
        "Closest district to Patna branch — matra 1 ghante ki drive.",
        "Zero agent commission.",
      ],
    },
    inDemandTrades: [
      {
        category: "Construction & Finishing",
        roles: ["Mason", "Steel Fixer", "Shuttering Carpenter"],
        monthlySalary: "₹42,000 - ₹60,000",
        countries: "Saudi Arabia (NEOM), UAE",
        overtime: "Food + Housing Free",
      },
    ],
    whyChoosePoints: [
      {
        title: "Just 50 KM from Patna Office",
        desc: "Digha JP Setu ke raste Chhapra se hamare office aana behad aasan aur sasta hai.",
      },
    ],
    testimonials: [
      {
        name: "Mukesh Kumar",
        cityOrDistrict: "Chhapra",
        jobRole: "Shuttering Carpenter",
        destinationCountry: "Jeddah, Saudi Arabia",
        monthlySalary: "SAR 2,300 (₹50,000)",
        quote: "Chhapra se bike se 1 ghante me Patna Varma Centre gaya tha. Ekdum authentic service mili.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Chhapra se Patna aane me kitna waqt lagta hai?",
        a: "JP Setu banne ke baad Chhapra se Boring Road Crossing sirf 1 ghante me pahuncha ja sakta hai.",
      },
    ],
  },

  // ==========================================
  // 8. LUCKNOW (Service Area - Uttar Pradesh)
  // ==========================================
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    type: "service-area",
    heroBadge: "Candidate Assistance Hub • Lucknow & Central UP",
    metaTitle: "Best Overseas Work Visa & European Placement for Lucknow Candidates | WorkWise Visa",
    metaDescription:
      "Premier work visa consultancy for candidates in Lucknow, UP. Verified Gulf & Europe work permits (Poland, Croatia, Romania), technical trade placements & complete embassy assistance.",
    keywords: [
      "visa consultancy in lucknow",
      "work visa agency lucknow",
      "europe work visa consultant lucknow",
      "gulf job consultancy lucknow",
      "overseas recruitment agency lucknow",
    ],
    districtIntro:
      "Lucknow aur Central UP ke skilled professionals, technicians aur hospitality workers ke liye WorkWise Visa Europe (Poland, Croatia, Romania) aur Gulf dono ke ECR/ECNR work permits provide karta hai. International airport connectivity hone se Lucknow ke candidates ko special priority di jati hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Noida HQ & Patna Branch",
      nearestBranchSlug: "noida",
      nearestBranchAddress: "Corporate Office: B-32, Sector 2, Noida, Delhi NCR (Near Metro)",
      distanceFromCity: "480 KM (Noida HQ via Agra Lucknow Expressway)",
      travelDuration: "3.5 Hours via Vande Bharat / Tejas to Delhi NCR",
      recommendedTrains: [
        "Lucknow to New Delhi Vande Bharat / Tejas Express (Sirf 6 ghante)",
        "Agra-Lucknow Expressway direct travel to Noida Sector 2",
      ],
      roadRoute: "Lucknow → Agra-Lucknow Expressway → Yamuna Expressway → Noida Sector 2",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online Digital Consultation",
          description: "Lucknow ke candidates 100% online WhatsApp aur video call par counseling le sakte hain.",
        },
        {
          step: "2",
          title: "European / Gulf File Processing",
          description: "Offer letter aur work permit approval ke baad Noida HQ me submission.",
        },
        {
          step: "3",
          title: "Direct Flight from Lucknow / Delhi",
          description: "Chaudhary Charan Singh International Airport se direct international departure.",
        },
      ],
      onlineBenefits: [
        "Direct European job offers in food manufacturing, warehousing & welding.",
        "Convenient flight options from Lucknow Airport.",
      ],
    },
    inDemandTrades: [
      {
        category: "European Jobs",
        roles: ["Warehouse Associate", "Food Factory Worker", "Electrician", "Welder"],
        monthlySalary: "€950 - €1,500 (₹85,000 - ₹1,35,000)",
        countries: "Poland, Croatia, Romania, Hungary",
        overtime: "EU Standard Benefits",
      },
    ],
    whyChoosePoints: [
      {
        title: "Europe & Gulf Dual Opportunities",
        desc: "Lucknow ke candidates ke liye European Shengen work permits ka exclusive processing Noida HQ se hota hai.",
      },
    ],
    testimonials: [
      {
        name: "Imran Siddiqui",
        cityOrDistrict: "Lucknow",
        jobRole: "Warehouse Specialist",
        destinationCountry: "Krakow, Poland",
        monthlySalary: "€1,200 (₹1,07,000)",
        quote: "Lucknow me rehte huye Noida office se file lagayi. 90 din me Poland work permit aa gaya.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Kya Lucknow me interview hota hai?",
        a: "Gulf aur Europe ke primary client interviews ham online video platform par conduct karte hain, ya aap hamare Noida office aa sakte hain.",
      },
    ],
  },

  // ==========================================
  // 9. DARBHANGA (Service Area - Mithilanchal)
  // ==========================================
  {
    slug: "darbhanga",
    name: "Darbhanga",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Candidate Facilitation Hub • Mithilanchal",
    metaTitle: "Best Overseas Work Visa & Gulf Job Placement for Darbhanga Candidates | WorkWise Visa",
    metaDescription:
      "Top Gulf recruitment consultancy for candidates in Darbhanga, Madhubani & Samastipur. Verified Gulf work permits & direct trade test guidance via Patna branch.",
    keywords: [
      "gulf job consultancy in darbhanga",
      "work visa agency darbhanga bihar",
      "saudi visa agent in darbhanga",
      "overseas job consultancy madhubani darbhanga",
    ],
    districtIntro:
      "Darbhanga aur Mithilanchal (Madhubani, Samastipur) ke mehanti skilled workers ke liye WorkWise Visa 100% genuine employment visas arrange karta hai. Patna hamare Boring Road office se 135 KM door hai aur NH-27 se seedha connectivity hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "135 KM",
      travelDuration: "3 - 3.5 Hours",
      recommendedTrains: [
        "Darbhanga to Patna MEMU & Intercity Trains",
        "Direct AC Buses via Muzaffarpur / Hajipur",
      ],
      roadRoute: "Darbhanga → Muzaffarpur → Hajipur → Digha JP Setu → Patna Boring Road",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online Document Review",
          description: "WhatsApp par apna trade experience aur passport share karein.",
        },
        {
          step: "2",
          title: "Patna Center Walk-in Interview",
          description: "Varma Centre Boring Road par direct client interview attend karein.",
        },
      ],
      onlineBenefits: [
        "Direct guidance for Madhubani, Samastipur & Darbhanga candidates.",
        "Free Saudi Takamol preparation.",
      ],
    },
    inDemandTrades: [
      {
        category: "Civil & Technical Trades",
        roles: ["Electrician", "Plumber", "Mason", "Painter"],
        monthlySalary: "₹45,000 - ₹68,000",
        countries: "Saudi Arabia, UAE, Qatar",
        overtime: "Guaranteed OT",
      },
    ],
    whyChoosePoints: [
      {
        title: "Transparent & Direct Process",
        desc: "Kisi local middleman ke bina seedha company contract.",
      },
    ],
    testimonials: [
      {
        name: "Lalit Jha",
        cityOrDistrict: "Darbhanga",
        jobRole: "Building Electrician",
        destinationCountry: "Riyadh, Saudi Arabia",
        monthlySalary: "SAR 2,400 (₹53,000)",
        quote: "Darbhanga se Patna 3 ghante me pahunch kar interview diya. Bahut transparent process hai.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Darbhanga se Patna office kaise pahuchein?",
        a: "Train ya bus se 3 ghante me Patna pahunch kar Boring Road Crossing auto se 15 minute me office pahuchein.",
      },
    ],
  },

  // ==========================================
  // 10. GAYA (Service Area - Magadh Hub)
  // ==========================================
  {
    slug: "gaya",
    name: "Gaya",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Candidate Facilitation Hub • Magadh Region",
    metaTitle: "Best Overseas Work Visa & Gulf Job Placement for Gaya Candidates | WorkWise Visa",
    metaDescription:
      "Reliable Gulf recruitment agency for candidates in Gaya, Jehanabad & Nawada. Verified Saudi, Dubai work permits & fast visa processing via Patna Varma Centre.",
    keywords: [
      "gulf job consultancy in gaya bihar",
      "work visa agency gaya",
      "saudi visa agent in gaya",
      "overseas recruitment jehanabad nawada gaya",
    ],
    districtIntro:
      "Gaya, Jehanabad aur Nawada ke candidates ke liye Patna Boring Road office sirf 100 KM door hai (Vande Bharat / MEMU se sirf 1.5 se 2 ghante). Yahan ke skilled drivers, heavy equipment operators aur civil workers ke liye GCC ke certified jobs available hain.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "100 KM",
      travelDuration: "1.5 - 2 Hours",
      recommendedTrains: [
        "Vande Bharat Express (Gaya to Patna in 1 Hour 15 mins)",
        "Gaya - Patna Fast MEMU & Express Trains",
      ],
      roadRoute: "Gaya → Jehanabad → Masaurhi → Patna (NH-22)",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online WhatsApp Shortlisting",
          description: "Gaya se passport aur driving licence details submit karein.",
        },
        {
          step: "2",
          title: "Patna Center Selection",
          description: "Varma Centre aakar physical interview aur driving evaluation dein.",
        },
      ],
      onlineBenefits: [
        "Superfast rail connection to Patna (Vande Bharat / MEMU).",
        "Direct GCC heavy driving vacancies.",
      ],
    },
    inDemandTrades: [
      {
        category: "Drivers & Heavy Operators",
        roles: ["Trailer Driver", "Bus Driver", "Shovel Operator"],
        monthlySalary: "₹55,000 - ₹95,000",
        countries: "Saudi Arabia, UAE, Qatar",
        overtime: "Trip Allowance Included",
      },
    ],
    whyChoosePoints: [
      {
        title: "Just 1.5 Hours via Train",
        desc: "Gaya se Vande Bharat ya MEMU se subah aakar dopehar me wapas ghar ja sakte hain.",
      },
    ],
    testimonials: [
      {
        name: "Santosh Paswan",
        cityOrDistrict: "Gaya",
        jobRole: "Trailer Driver",
        destinationCountry: "Riyadh, Saudi Arabia",
        monthlySalary: "SAR 2,800 (₹62,000)",
        quote: "Gaya se train se 1.5 ghante me Patna pahunch kar kaam ho gaya. Ek number agency!",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Gaya se Patna kitni der me pahunch sakte hain?",
        a: "Gaya se Patna Vande Bharat train se 1 hr 15 mins aur regular MEMU se 2 ghante lagte hain.",
      },
    ],
  },

  // ==========================================
  // 11. BHAGALPUR (Service Area - Anga Division)
  // ==========================================
  {
    slug: "bhagalpur",
    name: "Bhagalpur",
    state: "Bihar",
    type: "service-area",
    heroBadge: "Candidate Facilitation Hub • Anga Division",
    metaTitle: "Work Visa Consultancy in Bhagalpur | WorkWise Visa Bihar",
    metaDescription:
      "Premier overseas job consultancy for candidates in Bhagalpur, Naugachia, Kahalgaon & Banka. Verified Gulf & Europe work permits via Patna branch.",
    keywords: [
      "work visa consultancy in bhagalpur",
      "gulf job consultancy in bhagalpur",
      "visa agency in bhagalpur bihar",
      "overseas recruitment agency bhagalpur",
      "saudi work visa bhagalpur",
      "dubai job placement bhagalpur",
      "gamca medical test bhagalpur",
      "takamol test center bihar",
      "workwise visa bhagalpur",
    ],
    districtIntro:
      "Bhagalpur (Silk City of Bihar) aur Anga region (Naugachia, Kahalgaon, Sultanganj, Banka) ke mehanti skilled technicians, industrial welders, drivers aur healthcare professionals ke liye WorkWise Visa 100% authentic employment visas arrange karta hai. Patna hamare Boring Road office se express trains (Vande Bharat / Intercity Express) ke zariye seedha connectivity hai.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa - Patna Branch (Varma Centre)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Office No. 606, 6th Floor, Varma Centre, Boring Road Crossing, Patna, Bihar",
      distanceFromCity: "220 KM",
      travelDuration: "3.5 - 4 Hours",
      recommendedTrains: [
        "Bhagalpur - Danapur Intercity Express (Daily)",
        "Vikramshila Express & Jan Shatabdi Express",
        "Vande Bharat Express & Express Trains via Kiul",
      ],
      roadRoute: "Bhagalpur → Sultanganj → Munger / Mokama → Bakhtiyarpur → Patna (NH-80 & NH-31)",
      howCandidatesApply: [
        {
          step: "1",
          title: "Online Document Review",
          description: "WhatsApp par apna trade experience, ITI/Diploma aur passport details share karein.",
        },
        {
          step: "2",
          title: "Patna Center Walk-in Interview",
          description: "Varma Centre Boring Road par direct client interview attend karein.",
        },
      ],
      onlineBenefits: [
        "Direct guidance for Bhagalpur, Kahalgaon, Naugachia & Banka candidates.",
        "Free Saudi Takamol preparation & trade test scheduling.",
      ],
    },
    inDemandTrades: [
      {
        category: "Industrial, MEP & Power Trades",
        roles: ["6G Pipe Welder", "Industrial Electrician", "Fitter", "Scaffolder"],
        monthlySalary: "₹48,000 - ₹82,000",
        countries: "Saudi Arabia, UAE, Qatar, Oman",
        overtime: "Guaranteed OT & Inclusions",
      },
      {
        category: "Heavy Logistics & Driving",
        roles: ["Heavy Trailer Driver", "Dump Truck Driver", "Bus Driver"],
        monthlySalary: "₹55,000 - ₹95,000",
        countries: "Saudi Arabia, UAE, Kuwait",
        overtime: "Trip Allowance Included",
      },
    ],
    whyChoosePoints: [
      {
        title: "Transparent & Direct Process",
        desc: "Kisi local unverified middleman ke bina seedha government Qiwa aur MoHRE approved company contracts.",
      },
      {
        title: "Direct Connectivity to Patna",
        desc: "Bhagalpur Junction se direct daily express trains se 4 ghante me hamare Varma Centre Patna office pahuchein.",
      },
    ],
    testimonials: [
      {
        name: "Md. Tarique Alam",
        cityOrDistrict: "Bhagalpur (Nathnagar)",
        jobRole: "6G TIG & ARC Welder",
        destinationCountry: "Jubail, Saudi Arabia",
        monthlySalary: "SAR 2,700 (₹60,000)",
        quote: "Bhagalpur me local dalal 1.5 lakh maang rahe the. WorkWise Visa se Patna office aakar interview diya aur 35 din me visa aa gaya.",
        rating: 5,
      },
      {
        name: "Rajnish Kumar Singh",
        cityOrDistrict: "Bhagalpur (Kahalgaon)",
        jobRole: "Industrial Electrician",
        destinationCountry: "Dubai, UAE",
        monthlySalary: "AED 2,500 (₹57,000)",
        quote: "NTPC area me contract par kaam karta tha. WorkWise Visa ke zariye Dubai MEP contractor me permanent 2-year job mil gayi.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Bhagalpur se Patna office kaise pahuchein?",
        a: "Bhagalpur Junction se subah Intercity Express ya Jan Shatabdi se 3.5 se 4 ghante me Patna Junction pahunch kar Boring Road Crossing auto se 15 minute me Varma Centre office pahuchein.",
      },
      {
        q: "Kya Bhagalpur ke candidates online apply kar sakte hain?",
        a: "Haan, candidate WhatsApp ya online form ke zariye apna resume aur passport bhej kar shortlisting karwa sakte hain, document processing 100% digital hai.",
      },
    ],
  },

  // ==========================================
  // 13. FARIDABAD (Haryana / Delhi NCR Candidate Hub)
  // ==========================================
  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana (Delhi NCR)",
    type: "service-area",
    heroBadge: "Industrial & Automotive Hub • Dedicated Candidate Placement Desk",
    metaTitle: "Work Visa Consultancy in Faridabad | Overseas Jobs & Recruitment",
    metaDescription:
      "Top work visa consultancy & overseas recruitment agency serving Faridabad, Haryana. Verified Gulf & Europe work permits, MEA Apostille & embassy stamping support.",
    keywords: [
      "work visa consultancy in faridabad",
      "visa consultancy in faridabad",
      "overseas recruitment agency faridabad",
      "gulf job consultancy in faridabad",
      "europe work visa consultant faridabad",
      "best immigration consultant faridabad",
      "dubai work visa agent in faridabad",
      "saudi arabia visa processing faridabad",
      "manpower consultancy in faridabad for gulf",
      "takamol trade test guidance faridabad",
      "gamca medical appointment center faridabad",
      "mea apostille attestation faridabad",
      "nit faridabad job consultancy abroad",
      "ballabhgarh work visa agency",
      "licensed overseas manpower agency faridabad",
    ],
    districtIntro:
      "As Haryana's largest industrial manufacturing, automotive tooling, and heavy engineering corridor, Faridabad is home to thousands of experienced CNC machinists, mechanical fabricators, structural 6G welders, heavy fleet drivers, and electromechanical engineers. WorkWise Visa provides candidates across NIT Faridabad, Ballabhgarh, Old Faridabad, Greater Faridabad (Neharpar), and Sectors 15/16/21 direct access to verified, employer-backed work permits across Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). Backed by our Corporate Regional Headquarters in Sector 132, Noida (just 25-35 minutes away via Kalindi Kunj or Faridabad-Noida Road), we ensure 100% scam-free recruitment, authentic Qiwa digital contracts, Wafid GAMCA medical clearances, and MEA Apostille support.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa Corporate Headquarters (Urbtech Trade Centre, Sector 132, Noida)",
      nearestBranchSlug: "noida",
      nearestBranchAddress: "Urbtech Trade Centre, D-701 C, Sector 132, Noida-Greater Noida Expressway, Uttar Pradesh 201304 (Approx. 25-35 Mins from Faridabad)",
      distanceFromCity: "22-26 KM from Faridabad",
      travelDuration: "25–35 Mins via Kalindi Kunj / Faridabad-Noida Road",
      recommendedTrains: [
        "Delhi Metro Violet Line (Raja Nahar Singh / Bata Chowk / Old Faridabad to Kalkaji Mandir Interchange) → Magenta Line to Botanical Garden",
        "Direct Road Drive via Kalindi Kunj Bypass / Faridabad-Noida Link Road to Noida-Greater Noida Expressway (Sector 132)",
        "Auto / Cab from Badarpur Border / Sarita Vihar directly via Okhla Bird Sanctuary",
      ],
      roadRoute: "Take Mathura Road (NH-44) towards Badarpur, turn right towards Kalindi Kunj onto Noida-Greater Noida Expressway, take Sector 132 exit directly at Urbtech Trade Centre.",
      howCandidatesApply: [
        {
          step: "01",
          title: "Online Profile & Trade Evaluation",
          description: "Submit your resume, trade certificates (ITI/Diploma), and passport via our online portal or WhatsApp for instant employer eligibility matching.",
        },
        {
          step: "02",
          title: "In-Person Consultation at Noida Regional HQ",
          description: "Visit our Corporate HQ at Urbtech Trade Centre, Sector 132, Noida for physical document verification, trade interview briefing, and contract signing.",
        },
        {
          step: "03",
          title: "Takamol SVP / Wafid Medical / MEA Apostille",
          description: "Complete your biometric trade tests, Gulf medical fitness slips, or European MEA Apostille with direct assistance from our operational team.",
        },
        {
          step: "04",
          title: "Consular Stamping & Departure Flight",
          description: "Receive your genuine sovereign work permit (Qiwa, MOHRE, Voivodeship), consular visa stamping, and flight ticket with guaranteed on-site camp accommodation.",
        },
      ],
      onlineBenefits: [
        "100% verified employer-backed job quotas across Europe & the Gulf",
        "Direct 25-minute expressway connectivity to our Noida Corporate Headquarters",
        "Free guidance for Saudi Takamol SVP exams & Wafid GAMCA medical bookings",
        "Strict anti-scam protection with zero advance charges before authentic job selection",
      ],
    },
    inDemandTrades: [
      {
        category: "Industrial Manufacturing, CNC & Automotive",
        roles: ["CNC Milling / Lathe Operator", "VMC Programmer", "Tool & Die Maker", "Mechanical Fitter", "QA/QC Inspector"],
        monthlySalary: "₹85,000 - ₹1,65,000",
        countries: "Poland, Croatia, Germany, Saudi Arabia, UAE",
        overtime: "2-3 Hours daily paid OT + free accommodation",
      },
      {
        category: "Welding, Heavy Fabrication & Plant Engineering",
        roles: ["6G TIG & SMAW Pipe Welder", "Structural Steel Fabricator", "Pipe Rigger", "Millwright Fitter", "Hydraulic Mechanic"],
        monthlySalary: "₹68,000 - ₹1,25,000",
        countries: "Saudi Arabia (NEOM), Qatar, UAE, Romania",
        overtime: "1.5x basic rate (statutory overtime) + medical cover",
      },
      {
        category: "Construction, MEP & Commercial Transport",
        roles: ["Industrial Electrician", "HVAC Chiller Technician", "Heavy Trailer Driver", "Mobile Crane Operator", "Forklift Driver"],
        monthlySalary: "₹60,000 - ₹1,40,000",
        countries: "Dubai (UAE), Saudi Arabia, Kuwait, Poland",
        overtime: "2 hours daily + trip allowances + free transport",
      },
    ],
    whyChoosePoints: [
      {
        title: "Proximity to Noida Corporate HQ",
        desc: "Located just 25 to 35 minutes from Faridabad via Kalindi Kunj or Delhi Metro, candidates can visit our official office in Sector 132 for transparent in-person consultations.",
      },
      {
        title: "Direct Employer Recruitment (Zero Sub-Agents)",
        desc: "All vacancies are authenticated directly with Tier-1 overseas conglomerates and European manufacturing plants, completely bypassing local fraudulent middlemen.",
      },
      {
        title: "Comprehensive Compliance & Stamping",
        desc: "End-to-end management of Takamol SVP trade testing, Wafid GAMCA medicals, MEA Apostille attestation at Patiala House, and VFS biometrics at Shivaji Stadium.",
      },
    ],
    testimonials: [
      {
        name: "Gurpreet Singh",
        cityOrDistrict: "NIT Faridabad (Sector 1)",
        jobRole: "CNC Machine Operator",
        destinationCountry: "Poznań, Poland",
        monthlySalary: "€1,250 (₹1,12,000/mo)",
        quote: "Faridabad industrial area me 8 saal CNC par kaam karne ke baad bhi salary ₹24,000 thi. WorkWise Visa ke Noida office jakar Poland Type-D visa ke liye apply kiya. 3 mahine me Voivodeship permit aur visa stamp ho gaya.",
        rating: 5,
      },
      {
        name: "Amit Sharma",
        cityOrDistrict: "Ballabhgarh, Faridabad",
        jobRole: "6G Argon Welder",
        destinationCountry: "NEOM Green Hydrogen, Saudi Arabia",
        monthlySalary: "SAR 3,600 (₹82,000/mo)",
        quote: "Local agents NEOM ke naam par ₹1.5 lakh fraud kar rahe the. WorkWise Visa se direct client interview diya, Takamol test clear kiya aur bina kisi fake promise ke legal Qiwa contract par flight hui.",
        rating: 5,
      },
      {
        name: "Rahul Verma",
        cityOrDistrict: "Old Faridabad (Sector 19)",
        jobRole: "Heavy Trailer Driver",
        destinationCountry: "Dubai, UAE",
        monthlySalary: "AED 4,800 (₹1,08,000/mo)",
        quote: "Mathura Road par container chala raha tha. WorkWise team ne Dubai logistics company me direct driver vacancy dilwayi. RTA license test ki guidance bhi mili.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Faridabad se WorkWise Visa office kaise pahuchein?",
        a: "Faridabad se hamara Corporate Headquarters Urbtech Trade Centre, Sector 132, Noida me sthit hai. Aap Mathura Road se Kalindi Kunj hokar Noida Expressway par 25-35 minute me pahunch sakte hain, ya Violet Line Metro se Kalkaji Mandir interchange karke Botanical Garden/Noida aa sakte hain.",
      },
      {
        q: "Kya Faridabad ke industrial trade workers ke liye Europe me vacancies hain?",
        a: "Haan, Poland, Croatia, aur Romania ke manufacturing plants me Faridabad ke CNC operators, tool & die makers, 6G welders, aur maintenance mechanics ki continuous demand rehti hai jahan monthly take-home salary ₹95,000 se ₹1,50,000+ tak hoti hai.",
      },
      {
        q: "Kya initial profile assessment ke liye koi charge lagta hai?",
        a: "Bilkul nahi. WorkWise Visa par initial resume evaluation aur trade eligibility review 100% free of charge hai.",
      },
    ],
  },

  // ==========================================
  // 14. MEERUT (Uttar Pradesh / Western UP Candidate Hub)
  // ==========================================
  {
    slug: "meerut",
    name: "Meerut",
    state: "Uttar Pradesh (Delhi NCR)",
    type: "service-area",
    heroBadge: "Sports Capital & Industrial Tooling Hub • Dedicated Candidate Placement Desk",
    metaTitle: "Work Visa Consultancy in Meerut | Overseas Jobs & Recruitment",
    metaDescription:
      "Top overseas job consultancy in Meerut, Western UP. Verified Europe & Gulf work permits for CNC machinists, sports equipment artisans, toolmakers, welders & drivers.",
    keywords: [
      "work visa consultancy in meerut",
      "visa consultancy in meerut",
      "overseas recruitment agency meerut",
      "gulf job consultancy in meerut",
      "europe work visa consultant meerut",
      "best immigration consultant meerut",
      "dubai work visa agent in meerut",
      "saudi arabia visa processing meerut",
      "partapur industrial area job consultancy abroad",
      "mohkampur work visa agency",
      "sports goods craftsman jobs europe",
      "cnc machinist jobs abroad meerut",
      "6g welder gulf vacancy meerut",
      "delhi meerut expressway visa office",
    ],
    districtIntro:
      "As India's sporting goods manufacturing capital and Western Uttar Pradesh's prominent metallurgical engineering center, Meerut is home to thousands of experienced CNC machinists, precision tool & die makers, sports goods craftsmen, structural 6G welders, heavy commercial drivers, and electromechanical technicians. WorkWise Visa provides candidates across Partapur Industrial Area, Mohkampur, Suraj Kund, Begum Bridge, Modipuram, and Shastri Nagar direct access to verified, employer-backed work permits across Europe (Poland, Croatia, Romania, Germany) and the Gulf (Saudi Arabia, UAE, Qatar, Oman, Kuwait). Backed by our Corporate Regional Headquarters in Sector 132, Noida (just 45-55 minutes away via the Delhi-Meerut Expressway / DME), we ensure 100% scam-free recruitment, authentic Qiwa digital contracts, Wafid GAMCA medical clearances, and MEA Apostille support.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa Corporate Headquarters (Urbtech Trade Centre, Sector 132, Noida)",
      nearestBranchSlug: "noida",
      nearestBranchAddress: "Urbtech Trade Centre, D-701 C, Sector 132, Noida-Greater Noida Expressway, Uttar Pradesh 201304 (Approx. 45-55 Mins from Meerut via DME)",
      distanceFromCity: "62-68 KM from Meerut",
      travelDuration: "45–55 Mins via Delhi-Meerut Expressway (NE-3)",
      recommendedTrains: [
        "Delhi-Meerut Expressway (NE-3 / DME): Direct 45-55 min drive from Partapur Bypass straight to Sector 132 Noida",
        "Namo Bharat Rapid Rail (RRTS): Meerut South / Shatabdi Nagar to Anand Vihar RRTS (35 mins) → Metro to Noida",
        "UPSRTC Express AC Buses & Cabs from Bhainsali Bus Stand / Begum Bridge directly to Noida Expressway",
      ],
      roadRoute: "Take the Delhi-Meerut Expressway (NE-3) south from Partapur Bypass past Bhojpur and Dasna, exit towards Indirapuram onto the Noida Link Road, and join the Noida-Greater Noida Expressway straight to Urbtech Trade Centre at Sector 132.",
      howCandidatesApply: [
        {
          step: "01",
          title: "Online Profile & Trade Evaluation",
          description: "Submit your resume, trade certificates (ITI/Diploma/Experience), and passport via our online portal or WhatsApp for instant employer eligibility matching.",
        },
        {
          step: "02",
          title: "Visit Noida HQ or Attend Client Drives",
          description: "Visit our Corporate Headquarters in Sector 132 Noida (45 mins via DME) for physical document vetting, trade assessment, and client interviews.",
        },
        {
          step: "03",
          title: "Sovereign Work Permit & Visa Stamping",
          description: "We handle your Wafid medical, MEA Apostille at Patiala House, VFS biometrics at Shivaji Stadium, eMigrate POE clearance, and IGI Airport flight mobilization.",
        },
      ],
      onlineBenefits: [
        "100% verified employer-backed job quotas across Europe & the Gulf",
        "Direct 45-minute expressway connectivity to our Noida Corporate Headquarters",
        "Specialized European placements for sports goods, leather, and precision tooling artisans",
        "Strict anti-scam protection with zero advance charges before authentic job selection",
      ],
    },
    inDemandTrades: [
      {
        category: "Industrial Tooling, CNC & Precision Machining",
        roles: ["CNC Milling / VMC 4-Axis Operator", "Tool & Die Maker", "Bench Fitter", "Industrial Surface Grinder", "QA/QC Inspector"],
        monthlySalary: "₹85,000 - ₹1,55,000",
        countries: "Poland, Germany, Romania, Czechia",
        overtime: "2-3 Hours daily paid OT + free accommodation",
      },
      {
        category: "Sports Goods & Leather Craftsmanship",
        roles: ["Cricket Bat Willow Carver", "Sports Gear Stitcher", "Leather Fabricator", "Composite Materials Tech", "Quality Checker"],
        monthlySalary: "₹80,000 - ₹1,30,000",
        countries: "Poland, Romania, Portugal, UAE",
        overtime: "Clean factory conditions + subsidized meals",
      },
      {
        category: "Welding, Heavy Transport & Electrical",
        roles: ["6G TIG & SMAW Pipe Welder", "Heavy Trailer / Container Driver", "HT/LT Panel Wireman", "Transformer Winder", "Diesel Mechanic"],
        monthlySalary: "₹72,000 - ₹1,65,000",
        countries: "Saudi Arabia (NEOM), Dubai (UAE), Qatar, Kuwait",
        overtime: "Statutory 1.5x OT + free camp & flights",
      },
    ],
    whyChoosePoints: [
      {
        title: "Fast 45-Min Expressway Proximity to Noida HQ",
        desc: "Located just 45 to 55 minutes from Meerut via the Delhi-Meerut Expressway, candidates can visit our official office in Sector 132 for transparent in-person consultations.",
      },
      {
        title: "Direct Employer Recruitment (Zero Sub-Agents)",
        desc: "All vacancies are authenticated directly with Tier-1 overseas conglomerates and European manufacturing plants, completely bypassing local fraudulent middlemen.",
      },
      {
        title: "Comprehensive Compliance & Stamping",
        desc: "End-to-end management of Takamol SVP trade testing, Wafid GAMCA medicals, MEA Apostille attestation at Patiala House, and VFS biometrics at Shivaji Stadium.",
      },
    ],
    testimonials: [
      {
        name: "Vikas Chaudhary",
        cityOrDistrict: "Partapur Industrial Area, Meerut",
        jobRole: "CNC Lathe Operator",
        destinationCountry: "Wrocław, Poland",
        monthlySalary: "€1,300 (₹1,18,000/mo)",
        quote: "Partapur me 7 saal CNC par kaam karne ke baad bhi salary ₹22,000 thi. Delhi-Meerut Expressway se WorkWise Visa office gaya. Direct interview ke baad Poland Type-D visa mila. Aaj monthly ₹1,18,000 bachat bhej raha hoon.",
        rating: 5,
      },
      {
        name: "Mohammad Rizwan",
        cityOrDistrict: "Suraj Kund, Meerut",
        jobRole: "Sports Equipment Leather Craftsman",
        destinationCountry: "Romania Sporting Goods Plant",
        monthlySalary: "€950 (₹88,000/mo)",
        quote: "Suraj Kund me leather sports gear banata tha. WorkWise team ne Romania me direct sports equipment manufacturing company me vacancy dilwayi. Zero advance charge aur genuine single permit mila.",
        rating: 5,
      },
      {
        name: "Sandeep Tyagi",
        cityOrDistrict: "Modipuram, Meerut",
        jobRole: "Heavy Commercial Trailer Driver",
        destinationCountry: "Dubai, UAE",
        monthlySalary: "AED 4,600 (₹1,05,000/mo)",
        quote: "NH-334 par heavy container chala raha tha. WorkWise Visa ke through Dubai logistics firm me direct trailer driver vacancy mili. RTA license test ki guidance bhi mili.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Meerut se WorkWise Visa office kaise pahuchein?",
        a: "Meerut se hamara Corporate Headquarters Urbtech Trade Centre, Sector 132, Noida me sthit hai. Aap Delhi-Meerut Expressway (NE-3) se sirf 45-55 minute me Partapur Bypass se Noida Expressway pahunch sakte hain, ya Namo Bharat RRTS se Anand Vihar aakar metro le sakte hain.",
      },
      {
        q: "Kya Meerut ke sports goods aur tooling artisans ke liye Europe me jobs hain?",
        a: "Haan, Poland, Romania, aur Czechia ke manufacturing plants me Meerut ke sports goods craftsmen, precision tool & die makers, CNC operators, aur 6G welders ki continuous demand rehti hai jahan monthly net salary ₹85,000 se ₹1,55,000+ tak hoti hai.",
      },
      {
        q: "Kya initial profile assessment ke liye koi charge lagta hai?",
        a: "Bilkul nahi. WorkWise Visa par initial resume evaluation aur trade eligibility review 100% free of charge hai.",
      },
    ],
  },

  // ==========================================
  // 15. VARANASI (Eastern UP / Purvanchal Candidate Hub)
  // ==========================================
  {
    slug: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    type: "service-area",
    heroBadge: "Purvanchal Industrial & Railway Engineering Hub • Dedicated Candidate Placement Desk",
    metaTitle: "Work Visa Consultancy in Varanasi | Overseas Jobs & Recruitment",
    metaDescription:
      "Top overseas job consultancy in Varanasi, Purvanchal. Verified Europe & Gulf work permits for locomotive machinists, 6G welders, heavy drivers, MEP & trade artisans.",
    keywords: [
      "work visa consultancy in varanasi",
      "visa consultancy in varanasi",
      "overseas recruitment agency varanasi",
      "gulf job consultancy in varanasi",
      "europe work visa consultant varanasi",
      "best immigration consultant varanasi",
      "dubai work visa agent in varanasi",
      "saudi arabia visa processing varanasi",
      "banaras locomotive works job abroad",
      "ramnagar industrial area visa consultant",
      "mughal sarai heavy driver jobs gulf",
      "6g welder vacancy europe varanasi",
    ],
    districtIntro:
      "Serving as the spiritual and industrial nerve center of Eastern Uttar Pradesh (Purvanchal), Varanasi and the surrounding Chandauli-Mughal Sarai corridor host a premier workforce of precision locomotive technicians, heavy mechanical fitters, structural 6G pipe welders, commercial trailer drivers, and electromechanical MEP specialists. WorkWise Visa provides skilled and technical candidates across DLW/BLW, Ramnagar Industrial Area, Sigra, Shivpur, Lahartara, and Pt. Deen Dayal Upadhyaya Junction (Mughal Sarai) transparent, employer-backed overseas employment across Europe (Poland, Romania, Croatia, Germany) and the Arabian Gulf (Saudi Arabia, UAE, Qatar, Kuwait, Oman). Candidates are fully assisted by our Patna Regional Branch (Varma Centre, Boring Road — just 3.5 hours via Vande Bharat / NH-19) and our Corporate Headquarters in Noida.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa Regional Branch Office (Varma Centre, Boring Road, Patna)",
      nearestBranchSlug: "patna",
      nearestBranchAddress: "Varma Centre, Boring Road, Patna, Bihar 800001 (Approx. 3.5 Hours via Vande Bharat Express / NH-19)",
      distanceFromCity: "220–240 KM from Varanasi",
      travelDuration: "3 Hours 20 Mins via Vande Bharat / 4.5 Hours via NH-19",
      recommendedTrains: [
        "Vande Bharat Express (22346 / 20888): Varanasi Jn (BSB) to Patna Jn (PNBE) in just 3 hrs 20 mins",
        "Jan Shatabdi Express (15126): Daily morning train connecting Pt. Deen Dayal Upadhyaya / Varanasi to Patna",
        "Purvanchal Expressway & NH-19 Direct Road Connectivity: 4.5 hours by direct express bus or taxi",
      ],
      roadRoute: "Take NH-19 / Grand Trunk Road eastward past Mohania, Sasaram, and Dehri-on-Sone, connecting via Ara straight into Patna Boring Road, or board the direct high-speed Vande Bharat from Varanasi Cantt.",
      howCandidatesApply: [
        {
          step: "01",
          title: "Online Profile & Trade Evaluation",
          description: "Submit your CV, trade certificates (ITI/Diploma/Experience), and passport via our online portal or WhatsApp for instant employer eligibility matching.",
        },
        {
          step: "02",
          title: "Visit Patna Branch or Attend Client Drives",
          description: "Visit our Patna Regional Branch (Varma Centre, Boring Road) for physical document vetting, trade assessment, and client interviews.",
        },
        {
          step: "03",
          title: "Sovereign Work Permit & Visa Stamping",
          description: "We handle your Wafid medical, MEA Apostille, VFS biometrics, eMigrate POE clearance, and flight mobilization.",
        },
      ],
      onlineBenefits: [
        "100% verified employer-backed job quotas across Europe & the Gulf",
        "Convenient 3.5-hour Vande Bharat rail connectivity to our Patna Regional Branch",
        "Specialized overseas placements for railway fitters, 6G welders, and heavy transport drivers",
        "Strict anti-scam protection with zero advance charges before authentic job selection",
      ],
    },
    inDemandTrades: [
      {
        category: "Industrial Fitting, Heavy Machinery & Locomotive Trades",
        roles: ["DLW Locomotive Fitter", "Hydraulic Press Maintenance", "Industrial Machinist", "Diesel Engine Mechanic"],
        monthlySalary: "₹85,000 - ₹1,60,000",
        countries: "Poland, Germany, Czechia, Romania",
        overtime: "2-3 Hours daily OT + employer lodging",
      },
      {
        category: "6G Welding, Fabrication & Structural Rigging",
        roles: ["6G TIG/SMAW Pipe Welder", "Structural Steel Fabricator", "Pipe Fitter", "Industrial Rigging Rigger"],
        monthlySalary: "₹75,000 - ₹1,50,000",
        countries: "Saudi Arabia (NEOM/Aramco), UAE, Qatar",
        overtime: "1.5x statutory OT + food & camp",
      },
      {
        category: "Commercial Heavy Transport & Heavy Equipment",
        roles: ["Heavy Trailer / Container Driver", "Articulated Dump Truck Operator", "Mobile Crane Operator"],
        monthlySalary: "₹70,000 - ₹1,40,000",
        countries: "UAE, Saudi Arabia, Kuwait, Poland",
        overtime: "Fixed allowance + performance trip bonus",
      },
    ],
    whyChoosePoints: [
      {
        title: "Direct Proximity to Patna Branch & Varanasi Assistance",
        desc: "Candidates across Varanasi and Mughal Sarai have seamless access to our Patna Regional Branch in Boring Road via 3.5-hour high-speed Vande Bharat trains for safe in-person onboarding.",
      },
      {
        title: "Zero Sub-Agent Verification (Direct Sovereign Visas)",
        desc: "All vacancies are validated directly with multinational European corporations and Tier-1 Gulf EPC contractors, completely bypassing local fraudulent middlemen.",
      },
      {
        title: "Complete GAMCA, Apostille & Emigration Support",
        desc: "End-to-end processing including Takamol SVP trade testing, Wafid GAMCA medical appointments, MEA Apostille attestation, and eMigrate POE clearance.",
      },
    ],
    testimonials: [
      {
        name: "Rajesh Kumar Yadav",
        cityOrDistrict: "DLW Colony / Shivpur, Varanasi",
        jobRole: "Locomotive Mechanical Fitter",
        destinationCountry: "Katowice, Poland",
        monthlySalary: "€1,450 (₹1,32,000/mo)",
        quote: "DLW me apprenticeship ke baad contract par kaam karta tha. WorkWise Visa ke guidance se Patna branch jakar interview diya. Poland me railway rolling stock unit me direct visa mila.",
        rating: 5,
      },
      {
        name: "Arvind Bind",
        cityOrDistrict: "Mughal Sarai / Chandauli",
        jobRole: "6G Pipe Welder",
        destinationCountry: "Saudi Aramco Project, KSA",
        monthlySalary: "SAR 4,800 (₹1,08,000/mo)",
        quote: "Purvanchal me local dalalo ne do baar thaga tha. WorkWise Visa ke digital process se genuine Qiwa contract mila. Aaj Saudi Aramco project me kaam kar raha hoon.",
        rating: 5,
      },
      {
        name: "Mohammad Shakeel",
        cityOrDistrict: "Ramnagar Industrial Area, Varanasi",
        jobRole: "Heavy Commercial Trailer Driver",
        destinationCountry: "Dubai Logistics Hub, UAE",
        monthlySalary: "AED 4,500 (₹1,02,000/mo)",
        quote: "Ramnagar industrial corridor me container chalata tha. WorkWise team ne Dubai me MNC transport firm me placement dilwayi. RTA license test me bhi poori help mili.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Varanasi se WorkWise Visa office kaise pahuchein?",
        a: "Varanasi ke candidates ke liye hamara nearest Regional Branch Office Varma Centre, Boring Road, Patna me hai, jo Varanasi Jn se Vande Bharat Express ke zariye sirf 3 ghante 20 minute ki doori par hai. Saath hi Noida Corporate Headquarters bhi direct trains ke through connected hai.",
      },
      {
        q: "Kya DLW/BLW ke trained fitters aur machinists ke liye Europe me vacancies hain?",
        a: "Haan, Poland, Germany, aur Czechia ke railway engineering aur heavy machinery plants me Indian locomotive fitters aur machinists ki bhari demand rehti hai jahan monthly salary ₹85,000 se ₹1,60,000 tak milti hai.",
      },
      {
        q: "Kya initial profile assessment ke liye koi fees deni hoti hai?",
        a: "Nahi, WorkWise Visa par initial CV evaluation aur trade eligibility review bilkul free of cost hai.",
      },
    ],
  },

  // ==========================================
  // 16. ALIGARH (Uttar Pradesh / Western UP Candidate Hub)
  // ==========================================
  {
    slug: "aligarh",
    name: "Aligarh",
    state: "Uttar Pradesh (Delhi NCR)",
    type: "service-area",
    heroBadge: "Tala Nagri & Precision Metallurgy Hub • Dedicated Candidate Placement Desk",
    metaTitle: "Work Visa Consultancy in Aligarh | Overseas Jobs & Recruitment",
    metaDescription:
      "Top overseas job consultancy in Aligarh, Western UP. Verified Europe & Gulf work permits for die-casting artisans, toolmakers, CNC machinists, welders & drivers.",
    keywords: [
      "work visa consultancy in aligarh",
      "visa consultancy in aligarh",
      "overseas recruitment agency aligarh",
      "gulf job consultancy in aligarh",
      "europe work visa consultant aligarh",
      "best immigration consultant aligarh",
      "dubai work visa agent in aligarh",
      "saudi arabia visa processing aligarh",
      "tala nagri industrial area job abroad",
      "amu polytechnic overseas placement",
      "die casting mold maker jobs europe",
      "electroplating technician gulf vacancy",
    ],
    districtIntro:
      "Celebrated globally as India's 'Tala Nagri' (City of Locks) and a prominent metallurgical hardware manufacturing powerhouse, Aligarh boasts a dense ecosystem of precision mold makers, die-casting artisans, electroplating technicians, CNC lathe programmers, sheet metal fabricators, and AMU-trained polytechnic engineers. WorkWise Visa provides skilled artisans and technical workforce across Tala Nagri Industrial Area, ITI Road, Sasni Gate, University Road, G.T. Road, and Khair direct, authenticated access to government-sanctioned work permits across Europe (Poland, Romania, Croatia, Germany) and the GCC (Saudi Arabia, UAE, Qatar, Kuwait, Oman). Located merely 115-125 KM (approx. 90-110 minutes via the Yamuna Expressway / NH-34) from our Corporate Regional Headquarters in Sector 132, Noida, Aligarh candidates enjoy seamless in-person document verification, genuine Qiwa electronic contracts, GAMCA medical coordination, and 100% scam-free career progression.",
    isPhysicalBranch: false,
    serviceAreaDetails: {
      nearestBranchName: "WorkWise Visa Corporate Headquarters (Urbtech Trade Centre, Sector 132, Noida)",
      nearestBranchSlug: "noida",
      nearestBranchAddress: "Urbtech Trade Centre, D-701 C, Sector 132, Noida-Greater Noida Expressway, Uttar Pradesh 201304 (Approx. 90-110 Mins from Aligarh via Yamuna Expressway / NH-34)",
      distanceFromCity: "115–125 KM from Aligarh",
      travelDuration: "90–110 Mins via Yamuna Expressway or NH-34",
      recommendedTrains: [
        "Yamuna Expressway / Tappal Route: 90-110 min direct drive from Aligarh via Khair/Tappal straight to Noida Expressway",
        "Northern Railway Express Trains: Aligarh Jn (ALJN) to New Delhi / Ghaziabad (1.5-2 hrs) → Blue/Aqua Line Metro to Sector 132 Noida",
        "UPSRTC AC Janrath & Volvo Buses: Direct continuous bus service from Aligarh Old/New Bus Stand to Anand Vihar & Noida Pari Chowk",
      ],
      roadRoute: "Take the Aligarh-Palwal road through Khair and Tappal directly onto the Yamuna Expressway northbound towards Greater Noida, transitioning smoothly onto the Noida-Greater Noida Expressway directly to Urbtech Trade Centre at Sector 132.",
      howCandidatesApply: [
        {
          step: "01",
          title: "Online Profile & Trade Evaluation",
          description: "Submit your resume, trade certificates (ITI/Diploma/Experience), and passport via our online portal or WhatsApp for instant employer eligibility matching.",
        },
        {
          step: "02",
          title: "Visit Noida HQ or Attend Client Drives",
          description: "Visit our Corporate Headquarters in Sector 132 Noida (90-110 mins) for physical document vetting, trade assessment, and client interviews.",
        },
        {
          step: "03",
          title: "Sovereign Work Permit & Visa Stamping",
          description: "We handle your Wafid medical, MEA Apostille at Patiala House, VFS biometrics at Shivaji Stadium, eMigrate POE clearance, and IGI Airport flight mobilization.",
        },
      ],
      onlineBenefits: [
        "100% verified employer-backed job quotas across Europe & the Gulf",
        "Direct 90-minute expressway connectivity to our Noida Corporate Headquarters",
        "Specialized overseas placements for die-casting, electroplating, and precision tooling artisans",
        "Strict anti-scam protection with zero advance charges before authentic job selection",
      ],
    },
    inDemandTrades: [
      {
        category: "Precision Mold Making, Die-Casting & Tooling",
        roles: ["High-Pressure Die Casting Operator", "Mold Maker", "EDM Wire-Cut Operator", "CNC Milling / Lathe Programmer"],
        monthlySalary: "₹85,000 - ₹1,65,000",
        countries: "Poland, Germany, Romania, Czechia",
        overtime: "2-3 Hours daily OT + free furnished accommodation",
      },
      {
        category: "Electroplating, Powder Coating & Metal Finishing",
        roles: ["Automated Electroplating Line Operator", "Powder Coating Specialist", "Metal Polishing Craftsman", "Anodizing Technician"],
        monthlySalary: "₹78,000 - ₹1,35,000",
        countries: "Poland, Slovakia, UAE, Saudi Arabia",
        overtime: "Paid OT + safety-standard working environment",
      },
      {
        category: "Welding, Electrical MEP & Heavy Commercial Transport",
        roles: ["6G TIG/MIG Welder", "Industrial Electrician", "Heavy Trailer / Tipper Driver", "HVAC Duct Fabricator"],
        monthlySalary: "₹72,000 - ₹1,50,000",
        countries: "Saudi Arabia (NEOM), UAE, Qatar, Kuwait",
        overtime: "1.5x statutory OT + food & camp",
      },
    ],
    whyChoosePoints: [
      {
        title: "Direct 90-Min Connectivity to Noida Corporate HQ",
        desc: "Located just 90 to 110 minutes from Aligarh via the Yamuna Expressway, candidates can visit our official headquarters in Sector 132 Noida for transparent in-person onboarding.",
      },
      {
        title: "Direct Employer Recruitment (Zero Sub-Agents)",
        desc: "All vacancies are authenticated directly with Tier-1 overseas conglomerates and European manufacturing plants, completely bypassing local fraudulent middlemen.",
      },
      {
        title: "End-to-End Embassies, GAMCA & Apostille Handling",
        desc: "Comprehensive management of Takamol SVP trade testing, Wafid GAMCA medicals, MEA Apostille attestation at Patiala House, and VFS biometrics at Shivaji Stadium.",
      },
    ],
    testimonials: [
      {
        name: "Farhan Khan",
        cityOrDistrict: "Tala Nagri Industrial Area, Aligarh",
        jobRole: "Die-Casting Mold Maker",
        destinationCountry: "Poznań, Poland",
        monthlySalary: "€1,350 (₹1,22,000/mo)",
        quote: "Tala Nagri me lock die casting mold banata tha. WorkWise Visa ke Noida office jakar interview diya. Poland me European single work permit mila. Monthly ₹1,22,000 kamata hoon.",
        rating: 5,
      },
      {
        name: "Dinesh Chandra Sharma",
        cityOrDistrict: "Sasni Gate, Aligarh",
        jobRole: "CNC Milling Operator",
        destinationCountry: "Brașov, Romania",
        monthlySalary: "€1,100 (₹1,00,000/mo)",
        quote: "Sasni Gate hardware cluster me 8 saal CNC par kaam kiya. WorkWise team ne Romania engineering plant me direct selection karwaya. Zero advance fee policy bilkul sach thi.",
        rating: 5,
      },
      {
        name: "Tariq Anwar",
        cityOrDistrict: "Dodhpur / AMU Area, Aligarh",
        jobRole: "6G TIG/MIG Pipe Welder",
        destinationCountry: "Jubail Industrial City, KSA",
        monthlySalary: "SAR 4,500 (₹1,01,000/mo)",
        quote: "AMU Polytechnic se ITI pass out hoon. WorkWise Visa ne authentic Qiwa contract aur Takamol test clear karwake Saudi Arabia me direct visa stamp karwaya.",
        rating: 5,
      },
    ],
    faqs: [
      {
        q: "Aligarh se WorkWise Visa office kaise pahuchein?",
        a: "Aligarh se hamara Corporate Headquarters Urbtech Trade Centre, Sector 132, Noida me sthit hai. Aap Yamuna Expressway se sirf 90-110 minute me drive karke direct hamare office pahunch sakte hain, ya Aligarh Jn se train lekar New Delhi/Ghaziabad se metro pakad sakte hain.",
      },
      {
        q: "Kya Aligarh ke die-casting aur mold makers ke liye Europe me vacancies hain?",
        a: "Haan, Poland, Germany, Romania, aur Czechia ke precision hardware aur automotive components plants me Aligarh ke experienced mold makers, die-casting operators, aur electroplaters ki bhari demand rehti hai.",
      },
      {
        q: "Kya initial trade evaluation ke koi charges hain?",
        a: "Bilkul nahi. WorkWise Visa par initial CV evaluation aur trade eligibility review 100% free of charge hai.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locationsList.find((loc) => loc.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllLocationSlugs(): string[] {
  return locationsList.map((loc) => loc.slug);
}
