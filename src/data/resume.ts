import type { EducationItem, ExperienceItem, AwardItem } from "@/types";

export const resumeSummary =
  "Analytical problem solver and systems builder with strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and Databases, complemented by practical engineering experience across Web3 dApps, enterprise logistics analysis, and distributed system design. Proven leader and communicator, having led a 500+ member IEEE student chapter to multiple national and university-level recognitions.";

export const educationList: EducationItem[] = [
  {
    degree: "B.E. in Computer Science and Engineering",
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    period: "July 2023 — May 2027",
    grade: "CGPA: 7.4 / 10.0",
    highlights: [
      "Former Chairperson @ IEEE CUSB (Main Branch) & Chairperson @ IEEE CIS",
      "Specializing in Distributed Systems, System Design, and Modern Web Architectures",
    ],
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Lal Bahadur Shastri Sr. Sec School",
    location: "Kota, Rajasthan",
    period: "April 2022 — March 2023",
    highlights: ["Science & Mathematics focus with intensive competitive examination preparation"],
  },
  {
    degree: "Secondary Education (Class X)",
    institution: "Lal Bahadur Shastri Sr. Sec School",
    location: "Kota, Rajasthan",
    period: "April 2020 — March 2021",
    highlights: ["Academic excellence with foundation in computer science and mathematics"],
  },
  {
    degree: "Middle Schooling (Class VIII)",
    institution: "Birla School, Pilani",
    location: "Pilani, Rajasthan",
    period: "March 2018 — April 2019",
    highlights: [
      "Foundational residential schooling fostering discipline and independent thinking",
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "dalmia-intern",
    organisation: "Dalmia Bharat Group (DCBL)",
    role: "Intern — IT & Logistics Analysis",
    type: "internship",
    location: "Rajgangpur, Sundargarh, Odisha",
    period: "May 2025 — July 2025 (3 mos)",
    description:
      "Analyzed and mapped SAP ERP–TMS (Blue Yonder) integration touchpoints across core supply chain workflows to identify process inefficiencies.",
    bullets: [
      "Mapped and analyzed integration touchpoints across 3 core workflows: order creation, dispatch management, and transit tracking.",
      "Applied structured, requirements-driven analysis to diagnose bottlenecks and propose data-backed operational improvements.",
      "Authored a comprehensive 51-page technical audit report for executive stakeholder review.",
    ],
    tags: [
      "SAP ERP",
      "Blue Yonder TMS",
      "Logistics Analysis",
      "System Integration",
      "Data Analytics",
    ],
  },
  {
    id: "ieee-cusb-chair",
    organisation: "IEEE Chandigarh University Student Branch (CUSB)",
    role: "Chairperson (Main Branch) & Executive Leadership",
    type: "leadership",
    location: "Mohali, Punjab",
    period: "July 2024 — Present (2 yrs 4 mos)",
    description:
      "Served across multiple executive leadership tiers for the Best Student Branch at Chandigarh University, managing a 500+ member community.",
    bullets: [
      "Chairperson, IEEE CUSB Main Branch (May 2026 – July 2026): Directed strategic alignment and institutional partnerships.",
      "Executive Member, IEEE CUSB (September 2024 – July 2026): Coordinated cross-departmental operations and student initiatives.",
      "Managed day-to-day operations for 500+ members through consistent communication and stakeholder alignment.",
      "Worked across 3 executive divisions to plan and deliver 15+ events, including major hackathons and industrial visits.",
      "Mentored 50+ junior students in full-stack development and Java fundamentals, with documented improvement in their project outcomes.",
    ],
    tags: [
      "Leadership",
      "Community Management",
      "Event Planning",
      "Technical Mentorship",
      "Stakeholder Alignment",
    ],
    subRoles: [
      { title: "Chairperson, IEEE CUSB Main Branch", period: "May 2026 — July 2026" },
      { title: "Executive Member, IEEE CUSB", period: "September 2024 — July 2026" },
      { title: "Student Member", period: "July 2024 — Present" },
    ],
  },
  {
    id: "ieee-cis-cusb",
    organisation: "IEEE Computational Intelligence Society (CIS) CUSB",
    role: "Chairperson & Vice-Chairperson",
    type: "leadership",
    location: "Mohali, Punjab",
    period: "July 2024 — Present (2 yrs 4 mos)",
    description:
      "Led the specialized Computational Intelligence Society chapter at Chandigarh University through rapid growth, technical workshops, and national competitions.",
    bullets: [
      "Chairperson (August 2025 – May 2026): Led the society to winning Best Chapter at CU during IEEE Excellence Awards 2.0.",
      "Vice Chairperson (December 2024 – August 2025): Spearheaded technical hackathons, guest lectures, and AI/ML project cohorts.",
      "Public Relations Lead (September 2024 – December 2024): Drove community outreach and digital branding across university networks.",
    ],
    tags: [
      "Computational Intelligence",
      "AI/ML Workshops",
      "Chapter Management",
      "Public Relations",
    ],
    subRoles: [
      { title: "Chairperson", period: "August 2025 — May 2026" },
      { title: "Vice Chairperson", period: "December 2024 — August 2025" },
      { title: "Public Relation Lead", period: "September 2024 — December 2024" },
      { title: "Student Member", period: "July 2024 — Present" },
    ],
  },
];

export const awardsList: AwardItem[] = [
  {
    id: "icp-wchl",
    title: "Top 3 Nationally (Round 1)",
    organisation: "ICP WCHL 2025",
    year: "August 2025",
    description:
      "Secured 3rd Position nationally among 700+ competing collegiate teams with InheritNext; advanced to regional round and earned a $200 award.",
    badge: "National Top 3",
  },
  {
    id: "pinnacle-command",
    title: "Pinnacle of Command Award",
    organisation: "IEEE Excellence Awards 2.0",
    year: "May 2026",
    description:
      "Honored for exceptional executive chapter leadership, guiding IEEE CUSB to Best Chapter at Chandigarh University.",
    badge: "Executive Leadership",
  },
  {
    id: "best-branch",
    title: "Best Student Branch 2025–26",
    organisation: "Chandigarh University IEEE",
    year: "May 2026",
    description:
      "Led IEEE CUSB through a transformative tenure, clinching the overall Best Student Branch trophy across the university.",
    badge: "University Honor",
  },
  {
    id: "change-maker",
    title: "Change Maker Award",
    organisation: "Chandigarh University",
    year: "April 2026",
    description:
      "Recognized for technical leadership and impactful community initiatives supporting a 500+ student body.",
    badge: "Community Impact",
  },
  {
    id: "cu-project-expo",
    title: "1st Place Winner — CU Project Expo",
    organisation: "Chandigarh University",
    year: "April 2026",
    description:
      "Secured First Place for the Green Credit Program (GCP) Automation platform, automating the Ministry of Environment, Forest and Climate Change (MoEFCC) credit workflows and geospatial monitoring.",
    badge: "1st Place",
  },
  {
    id: "ieee-day-global",
    title: "Global Winner — IEEE Day 2025 Photo Contest",
    organisation: "IEEE Global",
    year: "October 2025",
    description:
      "Led IEEE CUSB to world champion status in the global competition representing the student branch internationally.",
    badge: "World Champion",
  },
  {
    id: "student-volunteer",
    title: "Outstanding Student Volunteer Award",
    organisation: "IEEE Student Activities Committee",
    year: "2025",
    description:
      "Awarded for dedicated volunteer contributions toward organizing national workshops, student hackathons, and technical bootcamps.",
    badge: "Volunteer Award",
  },
  {
    id: "vivibha",
    title: "VIVIBHA 2047 Finalist",
    organisation: "National Research Paper Writing Competition",
    year: "August 2024",
    description:
      "Qualified as a national finalist in technical research and academic paper writing on India's technological future.",
    badge: "National Finalist",
  },
];
