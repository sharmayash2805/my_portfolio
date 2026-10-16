import type { Project, ProjectFilter } from "@/types";

export const projectFilters: ProjectFilter[] = [
  { id: "all", label: "All Works" },
  { id: "fullstack", label: "Full-Stack & dApps" },
  { id: "systems", label: "Systems & Algorithms" },
  { id: "cloud", label: "Sustainability & Automation" },
];

export const projects: Project[] = [
  {
    id: "inheritnext",
    title: "InheritNext",
    subtitle: "Decentralized Digital Asset Vault & Inactivity Inheritance on ICP",
    summary:
      "A Web3 decentralized application built on the Internet Computer Protocol (ICP) that securely manages digital assets and executes automated inheritance via a 30-day inactivity heartbeat.",
    story:
      "InheritNext is a decentralized application (dApp) built on the Internet Computer Protocol (ICP) designed to solve a critical Web3 dilemma: what happens to private vaults, crypto keys, and digital assets when an individual unexpectedly becomes incapacitated? I led a team of 4 through the complete project lifecycle to build an automated dead-man's switch. The backend, written in Rust, leverages dedicated modules (vault.rs and storage.rs) to encrypt and manage digital assets, standardizing communication with the ICP network through Candid interface definitions. We harnessed ICP's native heartbeat mechanism—allowing smart canisters to execute periodic verification routines without external oracles—to evaluate owner check-ins and safely trigger multi-stage asset delegation to designated successors upon 30 days of verified inactivity. The React frontend interfaces directly with ICP canisters via icp-utils.js, validated with automated local deployment test scripts. The system clinched 3rd Position Nationally at ICP WCHL among 700+ competing collegiate teams and a $200 award.",
    category: "fullstack",
    stack: ["Internet Computer (ICP)", "Rust", "Candid", "React.js", "Vite", "SCSS", "DFINITY SDK"],
    year: "2025",
    award: "Top 3 Nationally at ICP WCHL (700+ Teams)",
    repos: [
      {
        label: "GitHub Repository",
        url: "https://github.com/MrAech/InheritNext",
      },
    ],
    highlights: [
      "Built Rust backend canisters (vault.rs, storage.rs) on Internet Computer Protocol",
      "Engineered automated dead-man's switch leveraging ICP's native periodic canister heartbeat",
      "Secured 3rd Position Nationally out of 700+ teams at ICP WCHL 2025",
    ],
  },
  {
    id: "gcp-automation",
    title: "Green Credit Program (GCP) Automation",
    subtitle: "Visionary Management Platform for MoEFCC's National Initiative",
    summary:
      "An environmental governance and credit allocation platform designed to automate the Government of India's Green Credit Program initiative (MoEFCC), featuring geospatial monitoring and verification workflows.",
    story:
      "The Green Credit Program (GCP) is a visionary national initiative launched by the Ministry of Environment, Forest and Climate Change (MoEFCC, Government of India - moefcc-gcp.in) to incentivize voluntary environmental actions. This project automates the complex administrative, allocation, and tracking processes of that initiative (distinct from Google Cloud Platform). Built using modern React.js and Vite, the platform features dedicated accounting modules for Air Credits and Water Credits alongside an overarching environmental credit overview. It incorporates land management and parcel allocation tools with geometric mapping (parcelGeometry.js, ParcelMapDialog.jsx) and interactive geospatial oversight (ForestMonitoringMap.jsx, IndiaMonitoringMap.jsx). The platform also delivers a secure administrative panel for vetting corporate participation and verifying field records, backed by AI analytics modules and comprehensive chart visualizations. The solution secured 1st Place at the Chandigarh University Project Expo for its real-world policy alignment and technical execution.",
    category: "cloud",
    stack: [
      "React.js",
      "Vite",
      "JavaScript (ES6+)",
      "Geospatial Mapping",
      "Data Visualization",
      "ESLint",
    ],
    year: "2026",
    award: "1st Place Winner — CU Project Expo 2026",
    repos: [
      {
        label: "GitHub Repository",
        url: "https://github.com/sharmayash2805/GCP-AUTOMATION",
      },
    ],
    highlights: [
      "Won 1st Place at Chandigarh University Project Expo 2026",
      "Automates Government of India's Green Credit Program (MoEFCC) tracking and allocation",
      "Built interactive geospatial forest monitoring, land parcel geometry, and credit verification workflows",
    ],
  },
  {
    id: "concert-booking",
    title: "Concert Booking System",
    subtitle: "Concurrency-Safe Seat Reservation Engine",
    summary:
      "A full-stack ticket reservation platform connecting a React frontend to a Java Spring Boot REST API with JWT role-based access control.",
    story:
      "High-traffic ticketing engines notoriously fail when multiple concurrent users attempt to lock the exact same seat simultaneously. I designed this ticket booking platform from the ground up to prevent double-booking and maintain transactional integrity. The backend, built with Java and Spring Boot, enforces clean database concurrency control to guarantee conflict-free reservations across simultaneous checkout sessions. I integrated JWT authentication with fine-grained role-based permissions, allowing venue organizers to manage seat configurations while fans experience real-time seat availability updates without locking collisions.",
    category: "fullstack",
    stack: ["Java", "Spring Boot", "React.js", "JWT Authentication", "MySQL", "REST APIs"],
    year: "2026",
    repos: [
      {
        label: "GitHub Repository",
        url: "https://github.com/sharmayash2805/Concert_Booking_System",
      },
    ],
    highlights: [
      "Built resilient Spring Boot REST backend with JWT role-based security",
      "Solved simultaneous seat-selection race conditions with robust database concurrency control",
      "Structured clean component-driven React frontend with interactive seat selection matrix",
    ],
  },
  {
    id: "smart-metro-kmrl",
    title: "Smart Metro Scheduling (KMRL)",
    subtitle: "Dynamic Timetable Optimization & Fleet Allocation",
    summary:
      "Algorithmic train timetable and routing system designed for Kochi Metro Rail Limited, backed by a normalized PostgreSQL database.",
    story:
      "Metropolitan transit operations like KMRL require minute-by-minute timetable synchronization: a single platform bottleneck can trigger cascading delays across an entire corridor. In this project, I developed the algorithmic scheduling engine that matches available trains to transit routes, dwell intervals, and operational time slots without schedule collisions. On the persistence tier, I structured a relational PostgreSQL database to manage station metadata, interchange junctions, and headway constraints. Through rigorous stress-testing against synthetic edge cases, the system reliably produces conflict-free daily dispatch schedules.",
    category: "systems",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Relational Modeling", "Algorithmic Scheduling"],
    year: "2025",
    repos: [
      {
        label: "KMRL Frontend",
        url: "https://github.com/MrAech/kmrl-rise",
      },
      {
        label: "KMRL Backend",
        url: "https://github.com/MrAech/kmrl-rise-backend",
      },
      {
        label: "Full TypeScript Stack",
        url: "https://github.com/MrAech/kmrl-rise-typescript",
      },
    ],
    highlights: [
      "Designed algorithmic conflict-free train scheduling for urban metro rail lines",
      "Modeled clean, highly-queryable PostgreSQL schema for stations, routes, and timetables",
      "Provided separate modular frontend and backend repositories with complete TypeScript typing",
    ],
  },
];
