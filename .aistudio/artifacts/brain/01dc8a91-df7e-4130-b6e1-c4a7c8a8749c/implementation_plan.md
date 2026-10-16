# Implementation Plan: Skills & Hobbies Navigation, Meta Title & Devanagari Monogram Favicon

Restructure the portfolio to include a dedicated **Skills & Hobbies** page (`/skills`) with compact Chess stats, update Twitter meta tags to exact "Yash Sharma", and replace default placeholder site icons with the classic Devanagari "यश" monogram icon.

---

## User Requests & Specific Changes

1. **Skills & Hobbies Navigation**:
   - Add a dedicated **Skills & Hobbies** link (`/skills`) to the top navigation bar (`navItems`), replacing the former standalone Chess page link.
   - Include a compact Chess statistics grid displaying live Rapid, Blitz, and Bullet ratings with peak scores and win/loss/draw records.

2. **Meta Tags & Twitter Title**:
   - Change `<meta name="twitter:title" content="...">` from _"Yash Sharma — Problem Solver · Systems Thinker · Algorithmic Builder"_ to strictly **`Yash Sharma`**.

3. **Head Tag Icon & Logo**:
   - Replace default icon references in the `<head>` tag (`og:image`, `twitter:image`, and `favicon`) with the classic Devanagari **"यश"** monogram badge matching the landing page branding.

---

## Proposed Changes & File Architecture

### 1. Head Tag & Metadata Branding (`src/routes/__root.tsx`, `public/favicon.svg`)

- Create `/public/favicon.svg` with a dark zinc rounded square badge containing the glowing amber Devanagari monogram **"यश"**.
- In `src/routes/__root.tsx`:
  - Set `{ name: "twitter:title", content: "Yash Sharma" }`.
  - Update `og:image` and `twitter:image` to point to `/favicon.svg`.
  - Update `<link rel="icon">` to point to `/favicon.svg`.

### 2. Navigation & Routing (`src/config/navigation.ts`, `src/routes/skills.tsx`)

- In `src/config/navigation.ts`: Add `{ id: "skills", label: "Skills & Hobbies", href: "/skills" }` to `navItems`.
- Create `src/routes/skills.tsx`: Render the dedicated Skills & Hobbies page featuring technical skill groups, compact Chess stats grid, and personal interests.

---

## Verification & Quality Assurance Plan

1. **Compilation Check**: Run `compile_applet` to verify route tree and component typing.
2. **ESLint & Format Verification**: Execute `lint_applet` and `npm run format`.
3. **Dev Server Verification**: Verify server status with `restart_dev_server`.
