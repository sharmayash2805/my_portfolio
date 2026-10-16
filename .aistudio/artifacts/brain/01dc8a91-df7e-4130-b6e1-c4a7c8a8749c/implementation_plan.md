# Yash Sharma — Versatile Portfolio & Architecture Plan

A refined architectural blueprint for Yash Sharma's portfolio, presenting an authentic, multidisciplinary technologist—deliberately avoiding restrictive labels like "Full-Stack Engineer" or prematurely claiming "Computer Science Engineer," while showcasing deep algorithmic competence, systems thinking, verified hackathon awards, and an interactive developer avatar.

## User Review & Critical Decisions

> [!IMPORTANT]
> Key confirmed positioning & messaging updates:
>
> 1. **Versatile Professional Framing**:
>    - **NO Restrictive Boxed Titles**: Avoid rigid labels like "Computer Science Engineer" or "Full-Stack Developer."
>    - **Nuanced, Strategic Phrasing**: Position Yash as an **analytical software developer, problem solver, and builder** pursuing his undergraduate degree in Computer Science & Engineering (2023–2027 at Chandigarh University).
>    - **Broad Recruiter Appeal**: Emphasize versatility across algorithmic problem solving (LeetCode/Codeforces), systems architecture (Rust/ICP, Java Spring Boot, PostgreSQL), data & logistics analysis (DCBL), and student branch leadership (IEEE).
> 2. **Refined Hero Developer Avatar & Speech Bubble**:
>    - Modern illustrated developer character with animated desk, laptop, and floating kinetic speech bubble:
>      > _"Namaste! I'm Yash Sharma. Welcome to my portfolio. Explore a digital version of my journey, projects, and problem-solving ledger — and feel free to reach out!"_
>    - Completely silent and visual (no voice/audio reading).
> 3. **Competitive Programming & DSA Integration**:
>    - Transparently acknowledge Data Structures & Algorithms proficiency using verified public profiles:
>      - **LeetCode**: `https://leetcode.com/u/_yash_2805`
>      - **Codeforces**: `https://codeforces.com/profile/_yash_2805`
>    - Display contest ratings, badges, and algorithmic disciplines (Dynamic Programming, Graph Theory, System Invariants).
> 4. **Green Credit Program (GCP) Automation Rewrite**:
>    - Accurately frame as an automation platform for the **Government of India's Green Credit Program initiative (MoEFCC - `https://www.moefcc-gcp.in/`)**, explicitly dispelling any confusion with Google Cloud Platform.
>    - Detail modules: Air Credits, Water Credits, Land & Resource Allocation, Geospatial Monitoring maps, Admin Verification portal, and AI Analytics.
> 5. **InheritNext Web3 Architecture Rewrite**:
>    - Web3 dApp built on the **Internet Computer Protocol (ICP)** implementing an automated dead-man's switch for inheritance.
>    - Rust backend (`vault.rs`, `storage.rs`, Candid interfaces), DFINITY SDK, and ICP Heartbeat mechanism for automated 30-day inactivity evaluation.
> 6. **Linguistic Accuracy & Experience Pruning**:
>    - **Hindi** set as mother tongue (`हिन्दी`). Odia as regional bilingual fluency from Rajgangpur, Odisha.
>    - Removed Neomorons Developers Society from experience records.

---

## 1. Overview & Core Concept

- **What It Delivers**: A forward-looking, honest, and high-impact portfolio that highlights Yash's natural curiosity, competitive coding discipline, and end-to-end building abilities without boxing him into a single specialization or making premature professional claims.
- **Target Audience**: Technical recruiters, engineering hiring managers, hackathon mentors, and founders looking for versatile, high-agency engineering talent.

---

## 2. Visual Architecture & Component Layout

### A. Landing Page Hero (`/` & `src/components/ui/developer-avatar.tsx`)

- **Left Column**:
  - Warm Sanskrit motto: `यशो धर्मस्ततो जयः` · _Rajgangpur, Odisha, India_
  - Clean name: **Yash Sharma**
  - Versatile tagline:
    > _"Building thoughtful, resilient software with analytical rigor — informed by competitive programming and the strategic discipline of chess."_
  - Strategic badges: _Pursuing B.E. in CSE @ Chandigarh University ('27)_ · _Open to Software Roles & Internships_
  - Clean action CTAs: `Explore Projects` · `Experience & Awards` · `Contact`
- **Right Column**:
  - Illustrated vector character sitting at a sleek desk with a glowing workstation and subtle ambient animations (breathing, soft blinking, gentle typing rhythm).
  - Floating stylized speech bubble:
    > _"Namaste! I'm Yash Sharma. Welcome to my portfolio. Explore a digital version of my journey, projects, and problem-solving ledger — and feel free to reach out!"_

### B. Competitive Programming & DSA Showcase (`/about`, `/projects`, & Overview)

- Dedicated **Algorithmic Discipline & Problem Solving** card:
  - Highlights rigorous practice across LeetCode (`_yash_2805`) and Codeforces (`_yash_2805`).
  - Summarizes core focus areas: Tree & Graph Algorithms, Dynamic Programming, Complexity Analysis, and Concurrency.
  - Direct verified links to profiles with live rating integration and graceful offline cache.

### C. Projects Case Studies (`/projects`)

1. **InheritNext (Digital Asset Vault on ICP)**:
   - True Web3 dApp built on the Internet Computer Protocol.
   - Rust backend with Candid interfaces and automated ICP Heartbeat dead-man's switch.
   - 3rd Position Nationally at ICP WCHL (700+ teams, $200 award).
2. **Green Credit Program (GCP) Automation**:
   - Visionary platform automating India's Ministry of Environment, Forest and Climate Change (MoEFCC) Green Credit initiative.
   - Modules: Air & Water credits, land parcel geometry, geospatial maps, and verification dashboards.
   - 1st Place Winner, Chandigarh University Project Expo 2026.
3. **Concert Booking System**:
   - Concurrency-safe ticket reservation platform in Java Spring Boot and React.js with JWT authentication.
4. **Smart Metro Scheduling (KMRL)**:
   - Algorithmic timetable matching and station metadata management with TypeScript and PostgreSQL.

### D. About & Experience (`/about`, `/experience`)

- **About Page**:
  - Mother tongue accurately stated as **Hindi** (`हिन्दी`), with native/bilingual Odia from Rajgangpur, Odisha, and professional English.
  - Academic journey: Birla School, Pilani (Class 8) → Lal Bahadur Shastri Sr. Sec. School, Kota (Classes 9–12) → Chandigarh University (B.E. CSE, 2023–2027).
- **Experience Page**:
  - Professional internship: Dalmia Bharat Group (DCBL), Rajgangpur (SAP ERP-TMS Blue Yonder audit).
  - Multi-tier IEEE CIS & CUSB leadership timeline (leading 500+ student members, 15+ hackathons/events).
  - Neomorons removed as requested.

---

## 3. Technical Architecture & File Organization

```
┌──────────────────────────────────────────────────────────────────┐
│                           Landing Hero                           │
│  [Yash Sharma | Analytical Builder]   [Illustrated Dev Avatar]   │
│  [Versatile Tagline & Action CTAs]    [Kinetic Speech Bubble]    │
└─────────────────────────────────┬────────────────────────────────┘
                                  │
      ┌───────────────────┬───────┴───────┬───────────────────┐
      ▼                   ▼               ▼                   ▼
  /about Page        /projects Page       /experience         /chess
  • Hindi (Native)   • GCP (MoEFCC)       • DCBL Intern       • Live Stats
  • Odia (Bilingual) • InheritNext (ICP)  • IEEE CUSB         • Game History
  • DSA (LC & CF)    • Concert Booking    • Awards            • Strategy Analogy
  • Academic Path    • KMRL Metro         (Neomorons out)
```

---

## 4. Verification & Validation Steps

1. **Terminology Audit**: Verify across all components that rigid claims of "Computer Science Engineer" or "Fullstack Engineer" are replaced with versatile, accurate language (e.g., "Software Developer", "Engineering Student", "Builder").
2. **Code Quality**: Run `npm run format` and `npm run lint` with zero errors.
3. **Compilation**: Execute `compile_applet` (`npm run build`) ensuring all routes and components build cleanly.
4. **Visual & Interactive Inspection**: Test the illustrated developer character and speech bubble, verify DSA links, and validate all 6 routes (`/`, `/about`, `/projects`, `/experience`, `/chess`, `/contact`).
