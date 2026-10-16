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
      "Former Chairperson @ IEEE CUSB (Main Branch) & Mentor @ IEEE CIS CUSB",
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
    imageUrls: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
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
    imageUrls: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: "ieee-cis-cusb",
    organisation: "IEEE Computational Intelligence Society (CIS) CUSB",
    role: "Mentor, Chairperson & Executive Leadership",
    type: "leadership",
    location: "Mohali, Punjab",
    period: "July 2024 — Present",
    description:
      "Led and currently mentor the specialized Computational Intelligence Society chapter at Chandigarh University through growth, technical workshops, and national competitions.",
    bullets: [
      "Mentor, IEEE CIS CUSB (July 2026 – Present): Guiding executive officers, advisory oversight, and technical direction for student project cohorts.",
      "Chairperson (August 2025 – May 2026): Led the society to winning Best Chapter at CU during IEEE Excellence Awards 2.0.",
      "Vice Chairperson (December 2024 – August 2025): Spearheaded technical hackathons, guest lectures, and AI/ML project cohorts.",
      "Public Relations Lead (September 2024 – December 2024): Drove community outreach and digital branding across university networks.",
    ],
    tags: [
      "Technical Mentorship",
      "Computational Intelligence",
      "AI/ML Workshops",
      "Chapter Governance",
      "Public Relations",
    ],
    subRoles: [
      { title: "Mentor @ IEEE CIS CUSB", period: "July 2026 — Present" },
      { title: "Chairperson", period: "August 2025 — May 2026" },
      { title: "Vice Chairperson", period: "December 2024 — August 2025" },
      { title: "Public Relation Lead", period: "September 2024 — December 2024" },
      { title: "Student Member", period: "July 2024 — Present" },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
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
    details: [
      "Evaluated by DFINITY & ICP developer jury on canister Rust architecture and automated heartbeat dead-man switch.",
      "Competed against 700+ collegiate developer teams across India.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinnacle-command",
    title: "Pinnacle of Command Award",
    organisation: "IEEE Excellence Awards 2.0",
    year: "May 2026",
    description:
      "Honored for exceptional executive chapter leadership, guiding IEEE CUSB to Best Chapter at Chandigarh University.",
    badge: "Executive Leadership",
    details: [
      "Recognized for chapter governance, event execution velocity, and student member engagement metrics.",
      "Awarded during IEEE Annual Student Branch convocation.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "best-branch",
    title: "Best Student Branch 2025–26",
    organisation: "Chandigarh University IEEE",
    year: "May 2026",
    description:
      "Led IEEE CUSB through a transformative tenure, clinching the overall Best Student Branch trophy across the university.",
    badge: "University Honor",
    details: [
      "Organized 15+ high-impact technical bootcamps, industrial visits, and national hackathons.",
      "Maintained an active community of 500+ student members.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "change-maker",
    title: "Change Maker Award",
    organisation: "Chandigarh University",
    year: "April 2026",
    description:
      "Recognized for technical leadership and impactful community initiatives supporting a 500+ student body.",
    badge: "Community Impact",
    details: [
      "Fostered open-source culture and technical peer mentorship programs.",
      "Bridged student developers with industrial opportunities and research projects.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "cu-project-expo",
    title: "1st Place Winner — CU Project Expo",
    organisation: "Chandigarh University",
    year: "April 2026",
    description:
      "Secured First Place for the Green Credit Program (GCP) Automation platform, automating Ministry of Environment, Forest and Climate Change (MoEFCC) workflows.",
    badge: "1st Place",
    details: [
      "Designed parcel geometry mapping and automated air/water credit verification pipelines.",
      "Judged on technical implementation, geospatial map rendering, and policy alignment.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ieee-day-global",
    title: "Global Winner — IEEE Day 2025 Photo Contest",
    organisation: "IEEE Global",
    year: "October 2025",
    description:
      "Led IEEE CUSB to world champion status in the global competition representing the student branch internationally.",
    badge: "World Champion",
    details: [
      "Global competition judged by IEEE international committee among hundreds of global chapters.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "student-volunteer",
    title: "Outstanding Student Volunteer Award",
    organisation: "IEEE Student Activities Committee",
    year: "2025",
    description:
      "Awarded for dedicated volunteer contributions toward organizing national workshops, student hackathons, and technical bootcamps.",
    badge: "Volunteer Award",
    details: [
      "Recognized for 100+ hours of community volunteer service and technical event coordination.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "vivibha",
    title: "VIVIBHA 2047 Finalist",
    organisation: "National Research Paper Writing Competition",
    year: "August 2024",
    description:
      "Qualified as a national finalist in technical research and academic paper writing on India's technological future.",
    badge: "National Finalist",
    details: [
      "Authored research synthesis on distributed systems and digital public infrastructure.",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
];
