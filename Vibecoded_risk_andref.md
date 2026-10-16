# Vibe-Coded Websites: Why They Are Vulnerable and Why They Look Vibe-Coded

A researched reference with facts, figures, detection commands and fixes. Built to sit next to `TODO.md` and `DEPLOYMENT.md` for the Concert Booking System, and reusable for any project.

Compiled 16 October 2026 from public reports, vendor research, standards bodies and practitioner write-ups. Every figure carries a source tag `[S#]` (list in section 12) and a confidence grade.

---

## 0. How to read this document

### Confidence grades

| Grade | Meaning                                                                                    | Use it as                                           |
| ----- | ------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| **A** | Published methodology, large sample or standards body                                      | A fact you can cite                                 |
| **B** | Credible secondary reporting of an A source, or a clear vendor study with disclosed method | A strong indicator                                  |
| **C** | Small sample, vendor marketing, or a scanner author's own dataset                          | Directionally useful, do not quote as a hard number |
| **D** | Ambiguous definition or unverifiable                                                       | Ignore the number, keep the idea                    |
| **J** | My judgment or practitioner consensus, no dataset                                          | A reasonable rule of thumb                          |

### Four honest caveats

1. **Many numbers come from companies that sell security tools.** Their incentive is to find problems. Their methods are often still sound, but treat headline percentages with care.
2. **Studies disagree, and the disagreement is informative.** Example: one lab found AI code failed XSS defences in the large majority of test cases, while another found no exploitable XSS or SQL injection at all in apps built with modern frameworks (section 2.2). Both can be true: the first measured raw code completions with no security requirement stated, the second measured full apps on frameworks that escape output by default.
3. **"Vibe-coded" is not one thing.** A no-code platform user who never reads the output (Lovable, Bolt, Base44), and an experienced engineer who reviews every diff from an AI agent, produce very different risk. Most scary statistics describe the first group.
4. **Visual and writing "tells" are heuristics, and they decay.** Several have already faded as models were retrained and people started prompting against them (section 6). Do not build a quality bar out of "avoid this list". Build one out of real specificity.

### A note about authenticity

Removing the generic look and tightening security is good engineering regardless of how the code was written. It is not a reason to claim "no AI was used" if that is untrue. For a portfolio, the strongest signal is evidence of understanding: real tests, a written account of decisions, a clean history, and a running deployment. This document points you toward that.

(Disclosure, since it is relevant: I am an AI model made by Anthropic. The GitGuardian data in section 2.3 includes a finding about commits co-authored by Claude Code, and the writing-tells data says Claude is among the heaviest em dash users. Take both as reasons to review AI-assisted output carefully, including mine.)

---

## 1. The numbers at a glance

| #   | Fact                                                            | Figure                                                                                                    | Source                                          | Grade                                |
| --- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------ |
| 1   | AI code that introduced a security flaw across curated tasks    | **45%** of cases (80 tasks, 100+ models)                                                                  | Veracode 2025 [S1]                              | A                                    |
| 2   | Models picked the insecure option when a secure one existed     | **45%** of the time                                                                                       | Veracode [S1]                                   | A                                    |
| 3   | Java security failure rate for AI-generated code                | **over 70%** (relevant: your backend is Java)                                                             | Veracode [S1]                                   | A                                    |
| 4   | Samples that failed to defend against XSS (CWE-80)              | **86%**                                                                                                   | Veracode via Help Net Security [S2]             | B                                    |
| 5   | Samples vulnerable to log injection (CWE-117)                   | **88%**                                                                                                   | Veracode via Help Net Security [S2]             | B                                    |
| 6   | Security performance trend vs newer models                      | **not improving** (syntax improves, security flat)                                                        | Veracode [S1]                                   | A                                    |
| 7   | Vulnerabilities in 15 apps built by 5 AI coding tools           | **69** total, ~6 critical                                                                                 | Tenzai, Dec 2025 [S3][S4]                       | B                                    |
| 8   | Exploitable SQLi or XSS in those 15 apps                        | **none**                                                                                                  | Tenzai [S3]                                     | B                                    |
| 9   | Dominant Tenzai failure classes                                 | **API authorization and business logic**                                                                  | Tenzai [S3][S4]                                 | B                                    |
| 10  | Live vibe-coded apps scanned (passive)                          | **5,600** apps: 2,000+ vulns, 400+ exposed secrets, 175 PII exposures                                     | Escape.tech, Oct 2025 [S6]                      | B (skewed to Lovable, disclosed)     |
| 11  | Lovable showcase apps with missing/broken RLS                   | **170 of 1,645 (10.3%)**, 303 endpoints, CVE-2025-48757                                                   | Researcher disclosure via secondary [S7]        | B (CVSS quoted as both 8.26 and 9.3) |
| 12  | One vibe-coded app breach                                       | **1.5M API tokens, 35k emails, ~4.75M records** exposed through a client-side DB key with no row security | Wiz on Moltbook [S8]                            | A/B                                  |
| 13  | New hardcoded secrets in public GitHub commits in 2025          | **28.65M**, +34% year on year                                                                             | GitGuardian 2026 [S5]                           | A                                    |
| 14  | Leaked AI-service secrets                                       | **1.275M**, +81%                                                                                          | GitGuardian [S5]                                | A                                    |
| 15  | Secret leak rate in public commits co-authored by Claude Code   | **3.2%** vs **1.5%** baseline; converged after Sept 2025                                                  | GitGuardian [S5]                                | A                                    |
| 16  | Valid leaked secrets from 2022 still not revoked in 2026        | **64%**                                                                                                   | GitGuardian [S5]                                | A                                    |
| 17  | Hallucinated package names across 576,000 code samples, 16 LLMs | **at least 5.2%** (commercial), **21.7%** (open-source); 205,474 unique fake names; 43% repeat            | arXiv 2406.10279 [S11]                          | A                                    |
| 18  | OWASP Top 10 2025, top two risks                                | **#1 Broken Access Control, #2 Security Misconfiguration**; supply chain failures new at #3               | OWASP [S10]                                     | A                                    |
| 19  | Home pages with detectable WCAG failures                        | **95.9%**, 56.1 errors/page; low contrast on **83.9%**                                                    | WebAIM Million 2026 [S12]                       | A                                    |
| 20  | Em dash rate, AI vs human text                                  | roughly **10x** (AI) in one detector's corpus; but the tell has **faded** for most models                 | Pangram [S14]; Economist analysis summary [S14] | C/B                                  |
| 21  | Organisations carrying security debt                            | **82%**, up 11%                                                                                           | Veracode 2026 SoSS [S18]                        | B                                    |

The two-sentence summary: **AI is decent at avoiding classic injection mistakes in modern frameworks, and bad at the things that depend on knowing your rules: who may do what, which secret is public, what happens under concurrency.** Those are exactly the things a booking system is made of.

---

## 2. Why vibe-coded sites are vulnerable: the mechanisms

### 2.1 Root causes

1. **Nobody stated security requirements.** Veracode's CTO describes vibe coding as relying on AI "typically without explicitly defining security requirements" [S1]. A model optimises for "it works", and an insecure path that works is as good as a secure one.
2. **Authorization is business logic, not syntax.** There is little training signal for "user A must not read user B's booking", because it is specific to each app. Tenzai found access-control and business-logic bugs dominated and appeared in the first generation [S3][S4]. OWASP calls broken access control the hands-down number one category for web apps and APIs [S10].
3. **The happy path is all that gets tested.** A page that renders and a form that submits looks finished. Missing 401s, missing ownership checks and negative-number inputs are invisible until someone attacks them.
4. **Defaults ship to production.** Wide-open CORS, `permitAll()`, debug logging, verbose errors, no headers. Scans of Lovable apps found missing security headers as a default condition and exposed debug output [S17].
5. **Secrets get pasted where the code can see them.** In a chat-driven workflow the quickest fix is to put the key in the file. GitGuardian's numbers (section 2.3) show this at scale [S5].
6. **Iteration degrades security.** One study summarised in secondary coverage reports critical vulnerabilities rising 37% after five rounds of "paste the error, let the AI fix it" [S17] (grade C: secondary, treat as a warning, not a number). Re-audit after each large change.
7. **Large diffs, shallow review.** AI-assisted commits are bigger (about twice the lines in GitGuardian's data) [S5]. More code means more places for a credential, a skipped check or a stray debug route to hide.
8. **Hallucinated dependencies.** Models invent package names that attackers can later register (section 2.5) [S11].

### 2.2 The studies, side by side (and why they disagree)

| Study                  | What it measured                                                                           | Headline                                                                                                                                                             | Where it likely misleads                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Veracode 2025 [S1][S2] | 80 code-completion tasks, 100+ LLMs, each with a known CWE trap, scored by static analysis | 45% insecure; Java over 70%; XSS 86%; log injection 88%                                                                                                              | Tasks are built to contain a trap and don't ask for security. Real products have frameworks that escape output.           |
| Tenzai 2025 [S3][S4]   | 15 full apps (5 agents x 3 apps), same prompts, no human review                            | 69 vulns; no exploitable SQLi/XSS; authorization and business logic failures; reportedly no CSRF protection and no security headers in any app (secondary reporting) | Only 5 tools, 3 apps, one month; commercial interest in agentic security testing.                                         |
| Escape.tech [S6]       | 5,600 live apps, passive scan                                                              | 2,000+ vulns, 400+ secrets, 175 PII exposures                                                                                                                        | Dataset heavily weighted to Lovable (about 4,000 of 5,600), disclosed by the authors.                                     |
| Small scanners [S17]   | 50 to 100 app samples (leaktrap 101 apps, VibeWrench 100 apps, a 57-app Lovable scan)      | 63 to 70% with serious findings; ~70% lacking CSRF protection; ~41% exposed secrets                                                                                  | Samples are tiny and the authors sell scanners. Directional only.                                                         |
| Kingbird "91.5%" [S17] | 200+ apps in an audit                                                                      | "91.5% have vulnerabilities"                                                                                                                                         | Reporting itself says the figure is about hallucination-related flaws and counts an app if one flaw exists. Do not quote. |
| RedAccess [S17]        | ~5,000 apps exposing data, ~40% lacking protections                                        | Large exposure                                                                                                                                                       | Platforms said no URLs were provided to verify; none denied the apps exist.                                               |

**Reconciliation for your decisions:** use a modern framework (React escapes by default, Spring Data parameterises queries) and the injection risk is low. Spend your effort on **authorization, ownership checks, business rules, secrets, configuration and headers**.

### 2.3 Secrets: the clearest data

GitGuardian State of Secrets Sprawl 2026 [S5]:

- 28.65M new hardcoded secrets in public GitHub commits in 2025, up 34% (the largest rise recorded).
- 1.275M AI-service secrets, up 81%; 8 of the 10 fastest-growing secret types were AI-related.
- Commits co-authored by Claude Code leaked at about 3.2% against a 1.5% baseline, peaking near 31 secrets per 1,000 commits in August 2025 and converging with the human rate from around late September 2025. The report attributes the elevated rate to human oversight and shortcuts, not autonomous AI behaviour, and notes the commits were about twice as large.
- 64% of valid secrets found in 2022 remained unrevoked in 2026. Deleting a line does not un-leak a key; rotating does.
- About 28% of incidents originate outside repos (chat, tickets, docs).

**Your repo:** `Sharma@2805` and the JWT secret are in public history. That is the same class of finding, so rotate both.

### 2.4 Incidents worth knowing

| Incident                          | What happened                                                                                                                                                                                                                                                        | Lesson                                                                                                                   | Grade |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----- |
| **CVE-2025-48757** (May 2025)     | Researcher scanned 1,645 Lovable showcase apps; 170 (about 10%) had Supabase tables readable or writable with the public anon key because row-level security was off or wrong. Exposed emails, addresses, some API keys.                                             | A build-time configuration gap, not a platform breach. The public key was meant to be public; the policies were missing. | B     |
| **Moltbook** (Jan 2026)           | A fully vibe-coded social network for AI agents. Wiz found a database key in client JavaScript within minutes giving read and write on all tables: 1.5M agent tokens, 35k emails, thousands of private messages. Also, 1.5M "agents" belonged to ~17k humans (88:1). | Same RLS failure, plus fake-looking metrics. Also an example of why unverified growth numbers backfire.                  | A/B   |
| **Base44 auth bypass** (Jul 2025) | Wiz found registration and OTP-verification endpoints on the platform needed no authentication, risking every app built on it.                                                                                                                                       | Test every endpoint without credentials. Shared platforms concentrate risk.                                              | B     |
| **Client-side-only checks**       | Apps that enforced subscription or admin rules in the browser and allowed bypass by calling the API directly [S17]                                                                                                                                                   | The server must enforce every rule. The UI is a suggestion.                                                              | C     |
| **Live payment key in frontend**  | Stripe-style `sk_live` keys found in browser bundles [S17]                                                                                                                                                                                                           | Anyone can spend your money.                                                                                             | C     |

### 2.5 Supply chain and "slopsquatting"

A university study of 576,000 code samples from 16 models found at least 5.2% of recommended packages did not exist for commercial models and 21.7% for open-source models, with 205,474 unique invented names and 43% of invented names recurring across repeated runs [S11]. Recurrence is what makes it exploitable: an attacker can register a likely-hallucinated name and wait. OWASP's 2025 list reflects the wider concern by replacing "vulnerable components" with **Software Supply Chain Failures** at #3 [S10].

Practical consequences for this repo: a 392 kB bundle that pulls ~35 unused shadcn components and about 10 unused packages is attack surface you do not need, and any package you did not consciously choose deserves a look (`npm ls`, `npm view <pkg> time`, check publisher and download counts).

### 2.6 OWASP Top 10:2025 mapped to this project

| OWASP 2025                                 | Relevance to a booking site                           | Checklist items         |
| ------------------------------------------ | ----------------------------------------------------- | ----------------------- |
| A01 Broken Access Control (incl. SSRF)     | Booking ownership, admin routes, event deletion       | 35, 36, 37, 44          |
| A02 Security Misconfiguration              | CORS, headers, debug flags, default creds, actuator   | 34, 46, 49, 51, 52      |
| A03 Software Supply Chain Failures         | npm and Maven dependencies, CI, hallucinated packages | 54, 55, 56              |
| A04 Cryptographic Failures                 | Password hashing, JWT secret strength, TLS            | 31, 38, 48, 50          |
| A05 Injection                              | JPA queries, any native SQL, XSS                      | 39, 40, 41              |
| A06 Insecure Design                        | Oversell race, hold expiry, negative quantities       | 37, 39 (plus section 8) |
| A07 Authentication Failures                | Fake login, no brute-force limits, weak sessions      | 36, 38, 45, 50          |
| A08 Software or Data Integrity Failures    | Unsigned builds, trusting client totals               | 42, 55                  |
| A09 Security Logging and Alerting Failures | No audit trail for admin actions or failed logins     | 56 (plus section 8)     |
| A10 Mishandling of Exceptional Conditions  | Raw `RuntimeException` becoming 500s with details     | 44, 52 (plus section 8) |

---

## 3. The 56-point checklist, with evidence, detection and fixes

**Reading the "Your repo" column:** FAIL = problem present now, TODO = missing, OK = already fine, N/A = not applicable. Details live in `TODO.md`. Priority: **P0** stop-ship, **P1** before launch, **P2** polish.

### 3.1 Secrets and environment (31 to 34)

| #   | Item                        | Evidence / why it matters                                                                                                                                                                | Detect                                                                        | Fix                                                                                                            | Your repo                                  | Pri |
| --- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --- |
| 31  | Hide API keys               | 28.65M new secrets on public GitHub in 2025; AI-service keys +81%; Escape found 400+ exposed secrets in 5,600 live apps; Moltbook's database key sat in client JS [S5][S6][S8]           | `gitleaks detect --log-opts="--all"`; grep the built bundle (section 10)      | Server-side env vars only; never `VITE_*` for secrets; rotate anything ever committed                          | FAIL (DB password, JWT secret)             | P0  |
| 32  | Check environment variables | Anything with the public prefix (`VITE_`, `NEXT_PUBLIC_`) ships to every visitor. Supabase anon keys are public by design, the **service_role** key is not [S8][S17]                     | Search `dist/` for each env value; review hosting dashboards                  | `.env.example` with names only, fail-fast on missing values, separate dev and prod values                      | TODO                                       | P0  |
| 33  | Check Git for secrets       | 64% of valid 2022 secrets still unrevoked in 2026 [S5]; history keeps deleted lines forever                                                                                              | `gitleaks`, `trufflehog git file://. --only-verified`; GitHub secret scanning | Rotate first, then optionally rewrite history; add pre-commit hook and push protection                         | FAIL                                       | P0  |
| 34  | Check for exposed files     | Escape and RedAccess both found live apps reachable within hours; common leaks: `.env`, `.git/`, source maps, `swagger-ui`, `/actuator/*`, `h2-console`, committed IDE folders [S6][S17] | `curl` the common paths; `git ls-files`                                       | Root `.gitignore`; disable Swagger and Actuator beyond `health` in prod; no source maps in prod unless private | FAIL (`.idea/` committed, three lockfiles) | P1  |

### 3.2 Authentication, access control, accounts (35 to 38)

| #   | Item                                        | Evidence / why it matters                                                                                                                          | Detect                                                                               | Fix                                                                                           | Your repo                                          | Pri |
| --- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------------- | --- |
| 35  | Protect admin routes                        | OWASP #1; Tenzai: authorization was the top failure; destructive admin operations exposed to the public were found in Lovable scans [S3][S10][S17] | Call each admin endpoint with no token, then with a normal user's token              | Server `ROLE_ADMIN` check on every admin route; frontend guard is UX only                     | FAIL (anonymous event delete)                      | P0  |
| 36  | Proper authentication                       | Base44: signup and OTP endpoints needed no auth [S9]; many apps have a login screen but no enforcement behind it                                   | Remove the token and replay every request; try expired, tampered and `alg:none` JWTs | Validate tokens on every request; short expiry; strong random secret                          | FAIL (login is a toast; token never verified)      | P0  |
| 37  | Check user permissions / access (IDOR/BOLA) | Broken access control is #1; business logic flaws dominate AI-built apps [S3][S10]                                                                 | Log in as user A, call user B's IDs; change numeric IDs in URLs and bodies           | Derive the user from the token, never the body; ownership check in the service layer; test it | FAIL (`userId` from body; any booking id accepted) | P0  |
| 38  | Hash passwords properly                     | Part of OWASP cryptographic and authentication failures [S10]; plain text means one DB leak is every account on every site where users reuse it    | Inspect the `users` table; read the login code for `.equals(`                        | BCrypt or Argon2id, unique salt, never log or return the hash                                 | FAIL (plain text)                                  | P0  |

Also relevant: stop client-chosen roles (mass assignment), generic login error messages, and lockout or backoff. See section 8.

### 3.3 Input handling and injection (39 to 42)

| #   | Item                    | Evidence / why it matters                                                                                                                                                                                           | Detect                                                                   | Fix                                                                                                           | Your repo                                                | Pri |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --- |
| 39  | Sanitize inputs / forms | Veracode: 86% of samples missed XSS defences, 88% log injection [S2]. Tenzai's apps did better on injection but worse on logic, so validation must include **business rules** (quantity 1 to 6, price from DB) [S3] | Fuzz with negative, huge, null and unicode values; try `ticketCount=-50` | Server-side DTO validation (`@Valid`), allowlists, length caps; zod on the client for UX only                 | FAIL (no validation, negative quantities raise capacity) | P0  |
| 40  | XSS                     | React escapes by default, which is why Tenzai saw none [S3]; risks return with `dangerouslySetInnerHTML`, unsanitised markdown, unsafe URLs, and stored admin text                                                  | `semgrep` ruleset for React; grep `dangerouslySetInnerHTML`, `innerHTML` | Render text as text; sanitise any rich text with a vetted library; add CSP; keep tokens out of `localStorage` | OK now (add CSP)                                         | P1  |
| 41  | SQL injection           | Modern ORMs parameterise; Tenzai found none exploitable [S3]; injection-class issues still made up about a third of findings in a 534-sample, six-model study reported secondarily [S17, grade C]                   | Test `' OR 1=1 --` in every text field; `semgrep p/java`                 | Derived queries or bind parameters only; never concatenate                                                    | OK now                                                   | P1  |
| 42  | CSRF                    | Tenzai reportedly found no CSRF protection in any app, and a 100-app scan reported ~70% lacking it [S3][S17] (grade B/C). It only matters when auth rides on cookies                                                | Submit a cross-site form to a state-changing endpoint                    | Bearer header auth: document why CSRF is off. Cookie auth: `SameSite`, CSRF tokens or `Origin` checks         | FAIL (`csrf.disable()`, decision undocumented)           | P1  |

### 3.4 Database, API and network (43 to 47)

| #   | Item                        | Evidence / why it matters                                                                                                                                     | Detect                                                                                         | Fix                                                                                                                                                     | Your repo                         | Pri |
| --- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --- |
| 43  | DB rules / secure DB access | CVE-2025-48757: ~10% of showcase apps open via missing RLS; Moltbook ~4.75M records. Firebase equivalent: rules that allow all reads and writes [S7][S8][S17] | With the **public** key only, request every table; `SHOW GRANTS` for the app user              | Never use `root` or admin accounts; least privilege; TLS to the DB; if on Supabase enable RLS on every table with owner-based policies                  | FAIL (connects as `root`)         | P0  |
| 44  | Secure API endpoints        | OWASP A01/A02; deny by default                                                                                                                                | Unauthenticated `curl` against each route; OpenAPI diff vs reality                             | `anyRequest().denyAll()` with explicit allows; typed errors; no stack traces                                                                            | FAIL (`permitAll()`)              | P0  |
| 45  | Rate limiting               | Brute force and cost abuse; commonly flagged missing in AI-built apps by scanners (vendor claim, grade C) [S17]. Not in the AI code unless asked              | Fire 20 login requests in 10 seconds; expect 429                                               | Bucket4j or gateway rules on auth, booking and any LLM endpoint; progressive lockout                                                                    | TODO                              | P1  |
| 46  | CORS                        | Wildcard origins with credentials and permissive defaults are a classic misconfiguration (OWASP A02)                                                          | `curl -H "Origin: https://evil.test" -I <api>` and check `Access-Control-Allow-Origin`         | Single env-driven allowlist; no `*`; or same-origin proxy so CORS is not needed                                                                         | FAIL (`@CrossOrigin` wildcard x4) | P1  |
| 47  | Secure file uploads         | No dataset, but upload handlers are a recurring path to stored XSS and server compromise; AI often generates "save whatever arrives" code [J]                 | Upload `.html`, `.svg` with script, a 500 MB file, a double extension, path-traversal filename | Allowlist type and extension, verify magic bytes, size cap, random names, object storage, never serve user files from your origin with script execution | N/A until you add uploads         | P2  |

### 3.5 Server, headers, transport, production (48 to 53)

| #   | Item                | Evidence / why it matters                                                                                                                    | Detect                                                                 | Fix                                                                                             | Your repo                                      | Pri |
| --- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------- | --- |
| 48  | HTTPS               | Table stakes; mixed content blocks calls from an `https` site to an `http` API                                                               | Browser console; `curl -I http://...` should redirect                  | Host-provided TLS, HSTS, `Secure` cookies, DB over TLS, no hardcoded `http://`                  | FAIL (`http://localhost:8081` baked in)        | P0  |
| 49  | Security headers    | Lovable scans found headers missing by default; Tenzai reportedly saw none set in any app [S3][S17] (grade B/C)                              | securityheaders.com, Mozilla Observatory, `curl -sI`                   | CSP, HSTS, `nosniff`, frame protection, referrer and permissions policy (see `DEPLOYMENT.md`)   | TODO                                           | P1  |
| 50  | Secure cookies      | OWASP auth and crypto failures; `localStorage` tokens are readable by any XSS                                                                | DevTools, Application tab                                              | `HttpOnly; Secure; SameSite=Lax/Strict`, short life, rotate on login, clear on logout           | TODO                                           | P1  |
| 51  | Disable debug mode  | Scans found debug headers and verbose output live in production [S17]; log injection (88%) makes verbose logs worse [S2]                     | Trigger an error and read the response; check logs for PII             | `show-sql=false`, no stack traces to clients, no `System.out` debugging, sanitise log inputs    | FAIL (`show-sql=true`, debug print with emoji) | P1  |
| 52  | Production settings | OWASP A02 and A10                                                                                                                            | Compare dev and prod config; run the app with the prod profile locally | Separate profiles, `ddl-auto=validate`, actuator limited to `health`, memory flags for the host | TODO                                           | P1  |
| 53  | Spend cap           | "Denial of wallet": a leaked `sk_live` or AI key lets strangers spend your money [S17]; AI-service secrets are the fastest-growing leak [S5] | Billing dashboards, usage alerts                                       | Provider hard limits, budget alerts, server-side rate limits, keys scoped and restricted        | TODO                                           | P1  |

### 3.6 Maintenance and auditing (54 to 56)

| #   | Item                   | Evidence / why it matters                                                                                                                      | Detect                                                                                                                     | Fix                                                                                                  | Your repo                                                        | Pri |
| --- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --- |
| 54  | Remove unused packages | Supply chain is OWASP #3; hallucinated packages 5.2% to 21.7% of suggestions, 43% recurring [S10][S11]. Fewer dependencies, fewer chances      | `npx depcheck`, `npx knip`, `npm ls`, `mvn dependency:analyze`                                                             | Delete unused components and deps; verify publisher, age and downloads before adding any new package | FAIL (about 35 unused UI components and their deps, 3 lockfiles) | P1  |
| 55  | Update dependencies    | 82% of organisations carry security debt [S18]; your `npm audit` shows 43 issues including 2 critical                                          | `npm audit`, `osv-scanner -r .`, `mvn versions:display-dependency-updates`, Dependabot                                     | Fix criticals first; review majors individually; automate updates; pin and review lockfile changes   | FAIL (43 npm vulns; JJWT 0.11.5 old)                             | P1  |
| 56  | Full security audit    | Scores did not improve with model generation [S1]; security degrades with iteration [S17, C]. Java's failure rate is the highest measured [S1] | SAST (`semgrep`), DAST (ZAP), secret scan, dependency scan, manual authorization tests, then a human read of the auth code | Repeat before each release; record in `SECURITY.md` with a disclosure contact                        | TODO                                                             | P1  |

---

## 4. Why it looks vibe-coded: the design tells

### 4.1 Mechanism

Models return the statistical centre of what they were trained on. For web UI that centre has a recognisable look, sometimes called "AI slop" [S13]. A widely repeated origin story: Tailwind UI's examples used `bg-indigo-500` as the default accent, it saturated tutorials and templates, and models now associate "modern button" with that hue. Tailwind's creator publicly joked about apologising for it [S13]. Inter is similarly the most common safe sans on the web, so it is the highest-probability answer to "pick a font" [S13]. Add shadcn/ui and Lucide (the default stack in most generators) and the outputs converge.

Reference values worth recognising on sight:

| Token           | Value                         | Why it reads as default                                               |
| --------------- | ----------------------------- | --------------------------------------------------------------------- |
| indigo-500      | `#6366F1`                     | Tailwind's old hero colour                                            |
| violet-500      | `#8B5CF6`                     | Gradient partner                                                      |
| purple-500      | `#A855F7`                     | Third gradient stop                                                   |
| emerald-500     | `#10B981`                     | The "success green" AI reaches for [S13]                              |
| Font-size scale | 12/14/16/18/24/30/36/48/60/72 | Tailwind's default `text-xs` to `text-7xl` scale left untouched [S13] |
| Body weight     | 600 semibold                  | A common AI default for body copy [S13]                               |

### 4.2 Your 23 design items, with the reasoning

Evidence column: **Src** = named in published detection guides [S13]; **Con** = practitioner consensus; **Jdg** = my judgment.

| #   | Tell                          | Why it reads as generated                                                                                                                     | Evidence | Better move                                                                 | Your repo         |
| --- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------- | ----------------- |
| 1   | Harsh gradients               | Purple-to-blue or pink-to-purple on buttons, hero text and headings is the signature; gradient headline text and gradient borders also listed | Src      | Flat colour; one accent; use texture (paper, print) instead of gradients    | FAIL              |
| 2   | Lucide icons                  | Same set, same size, same stroke on every feature and button; default in shadcn                                                               | Src      | Few icons, custom or none; use type and layout to carry meaning             | FAIL              |
| 3   | Pure white background         | `#FFFFFF` with a purple gradient is the default light theme                                                                                   | Src      | Warm paper tone and warm near-black text                                    | OK (dark now)     |
| 4   | Rainbow coloring              | Every card or tag gets a different hue (purple, cyan, pink, amber)                                                                            | Con      | One accent plus tints of ink                                                | FAIL              |
| 5   | Drop shadows                  | Soft, large, identical shadows on every card                                                                                                  | Src      | Hairline borders or hard offset blocks, used deliberately                   | FAIL              |
| 6   | 3 feature cards in a row      | Hero then three equal rounded cards with an icon each                                                                                         | Src      | Vary scale, lead with the real thing (events), use lists or a ledger layout | FAIL              |
| 7   | Emojis                        | Emoji standing in for icons or bullets, including in logs                                                                                     | Src      | Remove from UI, toasts, code and comments                                   | FAIL              |
| 8   | Liquid glass                  | `backdrop-blur` frosted panels everywhere                                                                                                     | Con      | Solid surfaces                                                              | FAIL              |
| 9   | Em dashes                     | See section 6; the tell is fading but structural patterns persist                                                                             | Src/Con  | Commas, colons, full stops                                                  | FAIL              |
| 10  | Inter / Geist / Space Grotesk | Strongest single typographic tell; Plus Jakarta Sans, Roboto also listed                                                                      | Src      | A face with a point of view, paired display and body, self-hosted           | FAIL (Inter)      |
| 11  | Colored left stripe           | Alert or card with a coloured left border                                                                                                     | Con      | Full borders or none                                                        | OK                |
| 12  | Bento grids                   | Asymmetric card mosaic for features                                                                                                           | Con      | Not needed for a ticket site                                                | OK                |
| 13  | Terminal window               | Fake macOS terminal in the hero                                                                                                               | Con      | Show the real product                                                       | OK                |
| 14  | Checkmark bullets             | Green tick lists under feature blurbs                                                                                                         | Con      | Plain prose or numbered facts                                               | FAIL (tick glyph) |
| 15  | Soft corner radius            | `rounded-xl/2xl` on everything, 0.75rem default radius                                                                                        | Src      | Square or barely rounded corners                                            | FAIL              |
| 16  | Purple and black scheme       | Dark slate with violet accent                                                                                                                 | Src      | Any palette chosen on purpose and not purple                                | FAIL              |
| 17  | Radial orbs                   | Blurred coloured circles behind the hero                                                                                                      | Con      | Delete; use real imagery                                                    | FAIL              |
| 18  | Dot grids                     | Dotted background pattern                                                                                                                     | Con      | Avoid                                                                       | OK                |
| 19  | Sparkle icons                 | Sparkle or star glyph next to AI-ish features                                                                                                 | Con      | Avoid                                                                       | OK                |
| 20  | Animated arrows               | Arrow on a button that slides on hover                                                                                                        | Con      | Text links                                                                  | FAIL              |
| 21  | Hover animations              | Scale, lift and glow on every card                                                                                                            | Src      | Colour or underline changes only                                            | FAIL              |
| 22  | Neon colors                   | Neon pink, cyan, green glows                                                                                                                  | Con      | Muted or ink-based palette                                                  | FAIL              |
| 23  | Basic pastel colors           | Soft default pastels for tags and badges                                                                                                      | Con      | Deliberate palette                                                          | OK                |

### 4.3 Additional design tells beyond your list

| Tell                                                        | Detail                                                                                                                                               | Evidence         |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Centered hero + gradient + three cards + CTA, in that order | The "familiar top-to-bottom landing page order"                                                                                                      | Src [S13]        |
| Every section the same height, padding and heading size     | Rhythm without hierarchy                                                                                                                             | Src              |
| Default shadcn look                                         | Slate-gray cards, default accent, default radius and spacing untouched; one analysis lists this as the top concrete cause of the "looks AI" reaction | Src (C)          |
| Gradient borders and gradient headline text                 | Listed separately from background gradients                                                                                                          | Src              |
| Uniform icon size and weight                                | Every icon the same                                                                                                                                  | Src              |
| Placeholder names and numbers                               | "John Doe", "Acme", round-number stats                                                                                                               | Src              |
| Stock-feeling illustrations / gradient blobs                | Decorative filler                                                                                                                                    | Src              |
| Fade-and-slide-up on every element                          | Motion with no purpose                                                                                                                               | Con              |
| Default favicon, "Lovable App" title and OG image           | The most visible giveaway, shows in every link preview                                                                                               | J (strong)       |
| Inaccessible by default                                     | Labels, alt text, focus order, contrast skipped                                                                                                      | A (WebAIM) [S12] |
| Mixed currencies, past dates, lorem-style data              | Seed data nobody reviewed                                                                                                                            | J                |

### 4.4 Accessibility is part of the tell (and a legal risk)

WebAIM's 2026 survey of one million home pages: **95.9%** had detectable WCAG 2 failures, averaging **56.1** errors per page, and six categories made up about 96% of all errors for the seventh year running [S12]:

| Failure                   | Share of pages |
| ------------------------- | -------------- |
| Low-contrast text         | 83.9%          |
| Missing image alt text    | 53.1%          |
| Missing form labels       | 51.0%          |
| Empty links               | 46.3%          |
| Empty buttons             | 30.6%          |
| Missing document language | 13.5%          |

AI-built UI tends to look finished while skipping this invisible layer, and low-contrast "muted" grey text on dark glass is a common cause [S12]. A June 2026 French court order against a major retailer to reach full accessibility conformance within six months (under the European Accessibility Act) shows enforcement is real, though it applies to commercial services in scope [S12].

**For this project:** every input labelled, alt text that describes the event (not "image"), contrast at least 4.5:1 for body text, visible focus, `lang="en"`, keyboard-operable zone map, reduced-motion support. Check with axe and WAVE (section 10).

---

## 5. Product, content and UX tells (items 24 to 30)

| #   | Item                 | Why it reads as generated or unfinished                                                                                                                     | Fix                                                                                            | Your repo         |
| --- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------- |
| 24  | Fake testimonials    | Invented names, stock avatars, round praise. Worse: Moltbook's "1.5M agents" versus 17k real owners shows fabricated or unexamined metrics get exposed [S8] | Show verifiable facts only: commit count, test count, uptime, real repo link                   | OK                |
| 25  | "It's not X, it's Y" | Negative parallelism is one of the structural tells that has **persisted** even as word-level tells faded [S14]                                             | Say what the thing is, plainly                                                                 | TODO (audit copy) |
| 26  | 3 pricing tiers      | The middle "Most Popular" card in purple is the cliché [S13]; meaningless on a booking site                                                                 | Show real prices per zone                                                                      | OK                |
| 27  | No real product demo | Mock data and fake spinners; the product never actually does anything                                                                                       | Real API, seeded demo login, real screenshots or a short recording                             | FAIL              |
| 28  | No skeleton loaders  | Layout jumps; or, as here, a skeleton on a fake `setTimeout`                                                                                                | Skeletons mirroring the real layout, driven by real loading state, plus error and empty states | FAIL (fake timer) |
| 29  | No Terms of Service  | Reads as unfinished; no rules for users or limits for you                                                                                                   | Plain-language ToS, link in footer and at signup                                               | TODO              |
| 30  | No privacy policy    | Legal exposure plus a trust signal                                                                                                                          | See 5.1                                                                                        | TODO              |

### 5.1 Privacy and legal (not legal advice)

You are in India, so the Digital Personal Data Protection Act is relevant. Facts as reported [S15]:

- The DPDP Rules were notified on **13 November 2025** and take effect in phases over about **12 to 18 months**.
- The final phase (around **May 2027**) activates the main obligations: privacy notices, reasonable security safeguards, breach reporting, erasure, and verifiable parental consent.
- Rule 3 requires notices that can be understood independently, which signals the end of burying terms inside long policies behind one "I accept" box.
- Withdrawing consent should be as easy as giving it, and data should be deleted after withdrawal unless a legal duty says otherwise.
- A consent-manager phase begins around 13 November 2026.
- If you have EU visitors, GDPR also applies; if you ever take payments, PCI scope applies (use a hosted provider, never touch card data).

A portfolio project that collects names, emails and password hashes should still have a short honest privacy page: what is collected, why, retention, how to delete the account, who to contact. Consult a qualified professional before relying on any template.

### 5.2 Process tells (what a recruiter sees in the repo)

| Tell                                         | Seen in your repo                                                                | Fix                                                               |
| -------------------------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| README is the generator's placeholder        | `FrontEnd/README.md` is a "welcome" stub with a TODO                             | Write real docs: what, why, how to run, decisions, limits         |
| Giant single commits with vague messages     | History is two commits ("Add frontend files", "Move backend files to subfolder") | Meaningful incremental commits going forward; do not fake history |
| No meaningful tests                          | One `expect(true).toBe(true)`                                                    | Tests for auth, oversell race, IDOR, role escalation              |
| IDE folders and multiple lockfiles committed | `.idea/`, `bun.lock`, `bun.lockb`, `package-lock.json`                           | Clean `.gitignore`, one package manager                           |
| Tool metadata in HTML                        | "Lovable Generated Project", Lovable OG image                                    | Your own title, description, OG image                             |
| Unused dependency pile                       | 35 unused UI components                                                          | Delete; `depcheck`                                                |
| Lint and type errors                         | 7 ESLint errors, `strictNullChecks: false`                                       | Zero errors; turn on strict mode                                  |

---

## 6. Writing tells (item 9 and 25, and more)

### 6.1 What the data says

- **Em dash.** One detector's corpus found AI text used em dashes at about ten times the human rate (humans about 5 per 10,000 words) [S14]. Academic-abstract studies saw usage roughly double after ChatGPT's release [S14]. **But the tell is decaying:** an Economist analysis, as summarised publicly, found that of the major models tested only Claude still uses em dashes more than humans, with ChatGPT now below human levels [S14]. So the dash alone no longer proves much, and heavy suppression can itself look odd.
- **Word lists move.** "Delve" and similar words dropped sharply in academic writing soon after they were publicised as AI-favoured, while other favoured words kept rising [S14]. A banned-word list is a moving target.
- **Structure is more durable.** The same Economist summary says models still default to "it's not X, it's Y", the rule of three, and long sentences of similar length that stack into uniform blocky paragraphs; they use fewer commas, semicolons and parentheses, lean on "and", favour longer, more formal words, and turn verbs into nouns ("utilisation" for "use") [S14].
- **Detector multipliers (vendor data, grade C):** AI-typical phrases about 12x, em dashes about 10x, "not just X but Y" about 3x, AI-style headers about 2x human frequency [S14].
- **Prevalence:** a public analysis cites Pew finding roughly one in ten sampled web pages in July 2026 showed meaningful signs of AI writing [S14] (grade C: secondhand).
- **False positives are real.** Wikipedia's own guide to spotting AI writing stresses that none of the signs is proof and that humans share these habits [S14].

### 6.2 Copy rules for this project

- Write like a person describing a ticket site: short, concrete, specific. Name the venue, the date, the price.
- No em dashes. No "not X, but Y". No groups of exactly three adjectives or benefits as a reflex.
- Avoid openers like "Your gateway to", "Unforgettable", "Discover", "Elevate", "Seamless", "Unlock", "Revolutionise", "in today's fast-paced world". Treat the list as a smell test, not a ban.
- Vary sentence length. Use a comma or parenthesis where you would naturally.
- Real error messages ("That email is already registered") beat "Oops! Something went wrong".
- Alt text describes the image's information, not "a concert". AI-written alt text is often worthless [S12].
- Have a human read every string in the product once, aloud.

---

## 7. How AI-built sites get attacked in practice (so you can test like an attacker)

A short attacker's script, all doable from a browser and `curl`:

1. **View source and the JS bundle.** Search for keys, `service_role`, `password`, internal URLs, `localhost`, comments with TODOs. Wiz found Moltbook's database key this way "within minutes" [S8].
2. **Hit the API directly.** Skip the UI. Call every endpoint without a token, with a normal user's token, and with someone else's IDs.
3. **Use the public key to read the database** (Supabase or Firebase style) and see what comes back [S7][S17].
4. **Tamper with numbers.** Negative quantities, zero, huge values, floats, price in the request body.
5. **Replay and race.** Fire the same booking request twenty times in parallel to find oversell.
6. **Try the boring paths.** `/.env`, `/.git/config`, `/actuator/env`, `/swagger-ui.html`, `/h2-console`, `/admin`, `/robots.txt`, `/*.map`.
7. **Brute force login and reset flows** to see whether anything throttles.
8. **Check headers and cookies** for the missing defaults.

If your own app survives that list, it is already ahead of most of the sample.

---

## 8. Issues that are not on your 56-point list but matter

| Area            | Issue                                                                                             | Why it matters here                                                      |
| --------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Access control  | **Mass assignment**: client sends `"role":"ADMIN"`                                                | Direct privilege escalation; present in this repo                        |
| Access control  | **IDOR / BOLA** on numeric IDs                                                                    | Booking IDs are sequential and guessable                                 |
| Access control  | **Function-level checks** missing on state-changing verbs                                         | Anyone can DELETE events                                                 |
| Business logic  | **Negative or zero quantities**, client-trusted totals                                            | Raises capacity or books for free [S3]                                   |
| Business logic  | **Race conditions / TOCTOU** on stock                                                             | Overselling; needs locks or optimistic versioning                        |
| Business logic  | **Idempotency and state machine** (hold, confirm, cancel, expire)                                 | Double release inflates capacity; cancel-after-confirm bug in this repo  |
| Business logic  | **Money as floating point**                                                                       | Rounding errors; use integer minor units                                 |
| Auth            | JWT pitfalls: weak or short secret, no expiry, `alg:none`, token in `localStorage`, no revocation | Hardcoded 35-character secret here                                       |
| Auth            | Account enumeration via different error messages or timings                                       | Generic messages; constant-time compares                                 |
| Auth            | Password reset and OTP flows without rate limits or expiry                                        | The Base44 bypass sat in signup and OTP endpoints [S9]                   |
| Config          | Actuator, Swagger, H2 console, default credentials                                                | Common leaked-endpoint set                                               |
| Config          | Verbose errors and stack traces                                                                   | OWASP A10 and A02 [S10]                                                  |
| Logging         | **No audit log** of admin actions and failed logins; log injection (88% failure rate) [S2]        | OWASP A09; add structured logs, strip control characters from user input |
| Supply chain    | Slopsquatting; unpinned versions; unreviewed lockfile changes; CI actions not pinned              | [S11]                                                                    |
| Supply chain    | Secrets in config files used by AI tooling (editor and agent config)                              | GitGuardian lists leaks outside repos [S5]                               |
| Network         | SSRF if the server ever fetches a user-supplied URL (e.g. image import)                           | Folded into OWASP A01 in 2025 [S10]                                      |
| Network         | Open redirects after login                                                                        | Phishing helper                                                          |
| Resilience      | Unbounded pagination or search; expensive queries                                                 | Cheap denial of service                                                  |
| Resilience      | Free-tier cold starts treated as errors                                                           | Show a waking state; do not retry blindly                                |
| LLM features    | Prompt injection if you ever add a chatbot or AI feature                                          | Top risk in OWASP's separate LLM list [S10]                              |
| Privacy         | Logging PII, long retention, no deletion path                                                     | DPDP/GDPR exposure [S15]                                                 |
| Quality         | `console.log`, TODO comments, dead code, unused routes                                            | Easy tells and easy leaks                                                |
| Accessibility   | Section 4.4                                                                                       | Legal and quality                                                        |
| SEO and sharing | Default title, generic meta description, missing canonical, no sitemap                            | The generator fingerprint appears in every share                         |

---

## 9. Priority order (what to fix first)

| Tier                 | Do this before anything else                                                                                                                                                                       | Items                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **P0 stop-ship**     | Rotate leaked secrets; remove hardcoded secrets; real authentication; enforce roles and ownership on the server; hash passwords; least-privilege DB user; deny-by-default API; validate quantities | 31, 33, 35, 36, 37, 38, 39, 43, 44, 48 |
| **P1 before launch** | CORS allowlist; rate limiting; headers; cookie flags; disable debug; prod profile; spend caps; dependency cleanup and updates; automated tests for the P0 items; audit pass                        | 34, 40 to 42, 45, 46, 49 to 56         |
| **P2 polish**        | Design overhaul, copy pass, skeletons, accessibility, legal pages, README, screenshots, upload hardening if added                                                                                  | 1 to 30, 47                            |

Rationale: a beautiful site with open endpoints is worse than an ugly one with closed endpoints. Fix what can hurt users first, then what makes it look credible.

---

## 10. Detection toolkit (copy and run)

```bash
# 1) Secrets in history and working tree
gitleaks detect --source . --log-opts="--all"
trufflehog git file://. --only-verified

# 2) Secrets or dev leftovers that shipped in the frontend bundle
cd FrontEnd && npm run build
grep -rEio "(sk_live_[A-Za-z0-9]+|sk-[A-Za-z0-9]{20,}|service_role|AKIA[0-9A-Z]{16}|BEGIN (RSA|PRIVATE)|password|secret|localhost|127\.0\.0\.1|lovable)" dist/ | sort | uniq -c

# 3) Dependency risk
npm audit --omit=dev --audit-level=high
osv-scanner -r .
npx depcheck          # unused deps
npx knip              # unused files/exports
cd ../demo && ./mvnw -B org.owasp:dependency-check-maven:check
./mvnw versions:display-dependency-updates

# 4) Static analysis
semgrep --config p/owasp-top-ten --config p/java --config p/typescript --config p/react .

# 5) Live scan of the deployed site (baseline, passive)
docker run --rm -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py -t https://YOUR-SITE

# 6) Headers, cookies, TLS
curl -sI https://YOUR-SITE | grep -iE "strict-transport|content-security|x-frame|x-content|referrer|permissions"
curl -sI -H "Origin: https://evil.test" https://YOUR-SITE/api/events | grep -i access-control
# also: securityheaders.com, developer.mozilla.org/observatory, ssllabs.com

# 7) Authorization tests (expect 401/403/400, never 200)
curl -i -X DELETE https://YOUR-SITE/api/events/1
curl -i -X POST https://YOUR-SITE/api/bookings/hold -H 'content-type: application/json' -d '{"zoneId":1,"ticketCount":-50}'
curl -i -X POST https://YOUR-SITE/api/auth/register -H 'content-type: application/json' -d '{"name":"x","email":"x@x.x","password":"Passw0rd!","role":"ADMIN"}'

# 8) Exposed paths
for p in .env .git/config actuator/env actuator/beans swagger-ui.html v3/api-docs h2-console admin robots.txt; do
  printf "%-20s" "$p"; curl -s -o /dev/null -w "%{http_code}\n" https://YOUR-SITE/$p; done

# 9) Race test for overselling (needs hey, wrk or a small script)
#    Fire 50 parallel holds for the last 5 tickets and assert capacity never goes negative

# 10) Accessibility and quality
npx @axe-core/cli https://YOUR-SITE
npx lighthouse https://YOUR-SITE --view     # aim 90+ in all four categories
# also: WAVE browser extension, keyboard-only walkthrough, screen reader pass
```

### Tell-detector for copy (rough, for your own review)

```bash
# em dashes and common negative-parallelism in UI strings
grep -rnE "—|–" FrontEnd/src | grep -v node_modules
grep -rniE "it'?s not .{1,40},? it'?s|not just .{1,40} but" FrontEnd/src
grep -rniE "seamless|unlock|elevate|unforgettable|revolution|delve|leverage|game-?changer" FrontEnd/src
```

---

## 11. Guardrails for AI-assisted work (so it stops re-introducing these)

Because the studies say the missing ingredient is stated security requirements [S1], put them in the repo where agents will read them (`AGENTS.md`, `CLAUDE.md` or `.cursorrules`):

```md
# Non-negotiable rules for this repo

Security

- Never put secrets in code, config checked into git, or any VITE_* variable. Read from env; fail fast if missing.
- Every endpoint is deny-by-default. Derive the user from the authenticated principal, never from the request body.
- Every state-changing endpoint checks role AND ownership in the service layer.
- All request bodies are DTOs with validation. Quantities 1..6. Prices and totals come from the database.
- Passwords: BCrypt/Argon2id. Generic login errors. Rate limit auth endpoints.
- No System.out or console.log of user data. No stack traces to clients. No show-sql in prod.
- Before adding any dependency: confirm it exists, check publisher, age, downloads; prefer none.
- After each large change: run lint, typecheck, tests, npm audit, gitleaks.
  Design and copy
- No gradients, glass, glow, orbs, emoji, em dashes, or "not X, but Y". No Inter/Geist/Space Grotesk.
- Palette and fonts come from DESIGN.md only. Square corners. One accent colour.
- Every input has a label; every image has meaningful alt; contrast >= 4.5:1.
  Process
- Small commits with real messages. Add or update a test for every bug fixed.
```

Then re-audit after every big generation. One study summarised in secondary coverage suggests risk rises with repeated "fix it" iterations [S17].

---

## 12. Sources and confidence

| ID  | Source                                                                                                                                                                                                                                                   | Used for                                                                                            | Grade                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| S1  | Veracode, "2025 GenAI Code Security Report" press release (30 Jul 2025), veracode.com; also SD Times and others                                                                                                                                          | 45% failure, Java over 70%, no improvement with newer models, 80 tasks, 100+ LLMs                   | A                                                   |
| S2  | Help Net Security coverage of the Veracode report (7 Aug 2025)                                                                                                                                                                                           | XSS 86%, log injection 88%                                                                          | B                                                   |
| S3  | SecurityWeek, "Vibe Coding Tested: AI Agents Nail SQLi but Fail Miserably on Security Controls" (Tenzai)                                                                                                                                                 | 69 vulns in 15 apps, no exploitable SQLi/XSS, authorization failures                                | B                                                   |
| S4  | InfoWorld, "Output from vibe coding tools prone to critical security flaws" (Tenzai)                                                                                                                                                                     | Same study, severity detail                                                                         | B                                                   |
| S5  | GitGuardian, "State of Secrets Sprawl 2026" (17 Mar 2026), via SC World, CPO Magazine, Passwork summary, NHI Mgmt Group PDF                                                                                                                              | 28.65M secrets, +34%, AI secrets +81%, Claude Code 3.2% vs 1.5%, 64% unrevoked                      | A                                                   |
| S6  | Escape.tech, "Methodology: How we discovered over 2k high-impact vulnerabilities..."                                                                                                                                                                     | 5,600 apps, 2,000+ vulns, 400+ secrets, 175 PII, stated sampling bias                               | B                                                   |
| S7  | CVE-2025-48757 coverage (Intruder CVE monitor; RapidDev Lovable security guide; Rocking Tech)                                                                                                                                                            | 170 of 1,645 apps, 303 endpoints; CVSS quoted inconsistently (8.26 and 9.3)                         | B                                                   |
| S8  | Wiz Research on Moltbook, via CPO Magazine, TechRadar, Cyber Daily, Red Sky Alliance                                                                                                                                                                     | 1.5M tokens, 35k emails, ~4.75M records, 88:1 ratio                                                 | A/B                                                 |
| S9  | Wiz Research on Base44 authentication bypass, via Autonoma incident roundup                                                                                                                                                                              | Unauthenticated registration and OTP endpoints                                                      | B                                                   |
| S10 | OWASP Top 10:2025 (owasp.org/Top10/2025) and The Register coverage (11 Nov 2025)                                                                                                                                                                         | Category list and ranking changes                                                                   | A                                                   |
| S11 | "We Have a Package for You!", arXiv 2406.10279; TechRepublic and TechRadar coverage                                                                                                                                                                      | 576,000 samples, 5.2% and 21.7%, 205,474 names, 43% recurrence                                      | A                                                   |
| S12 | WebAIM Million 2026, via Priority Pixels, DigitalApplied, Nexer Digital, Martech; EAA court order via Martech                                                                                                                                            | 95.9%, 56.1 errors, six failure types; Carrefour ruling                                             | A/B                                                 |
| S13 | Design-tell write-ups: SuperDesign, prg.sh, 925 Studios, "How to detect AI slop" wiki, vp0, Magier, "unslop-ui" skill notes                                                                                                                              | Inter, indigo/violet gradients, three cards, Tailwind indigo-500 origin, default scale, emerald-500 | C/J (practitioner consensus, internally consistent) |
| S14 | Pangram "9 signs of AI writing"; arXiv 2502.09606; McGill OSS; Wikipedia "Signs of AI writing"; Economist-analysis summary; Towards AI                                                                                                                   | Em dash rates and decay, word-list decay, structural tells, caveats                                 | C/B                                                 |
| S15 | Hogan Lovells, Legal 500, ComplianceHub, K&S Partners on DPDP Act and Rules                                                                                                                                                                              | Notification date, phased timeline, notice and consent rules                                        | B                                                   |
| S17 | Small-sample and secondary: leaktrap (101 apps), VibeWrench via Rocking Tech (100 apps), Vibe App Scanner (57 Lovable apps), Kingbird via SoftwareSeni, RedAccess via VentureBeat, AppSec Santa via vybe.build, iterative-degradation study via Substack | Directional prevalence figures flagged grade C/D above                                              | C/D                                                 |
| S18 | Veracode 2026 State of Software Security (Business Wire snippet)                                                                                                                                                                                         | 82% of organisations with security debt                                                             | B                                                   |

### Things I could not verify

- The exact CVSS score for CVE-2025-48757 (sources give both 8.26 and 9.3).
- The "zero apps had CSRF protection or security headers" claim for Tenzai beyond secondary summaries.
- The "37% more critical vulnerabilities after five iterations" figure beyond a secondary write-up.
- Any figure from Kingbird's "91.5%" claim (definition unclear).
- Whether specific free-tier limits cited in `DEPLOYMENT.md` have changed since publication; check provider docs on the day you deploy.

---

## 13. One-page pre-launch gate

Stop and fix if any answer is "no".

**Security**

- [ ] No secret in repo, history or built bundle; leaked ones rotated
- [ ] Anonymous, user and admin tokens each tried against every endpoint with correct 401/403
- [ ] User A cannot read or change user B's bookings
- [ ] Client cannot set role, price, total, or user id
- [ ] Negative, zero and huge quantities rejected
- [ ] 50 parallel requests cannot oversell
- [ ] Passwords hashed; generic login errors; auth endpoints rate limited
- [ ] DB user is least-privilege; TLS on; no root
- [ ] CORS allowlist, security headers, secure cookies, prod profile, debug off
- [ ] `npm audit` and Maven dependency check show 0 high or critical
- [ ] Spend caps and alerts set; no card on free-tier accounts where avoidable

**Credibility**

- [ ] Title, description, OG image, favicon are yours
- [ ] None of the 23 design tells remain (or each is a conscious choice)
- [ ] Copy read aloud by a human; no negative parallelism, no em dashes, no filler
- [ ] Real demo path, real data, future dates, one currency
- [ ] ToS and privacy pages live; deletion path exists
- [ ] Lighthouse 90+; axe clean; keyboard-only walkthrough passes
- [ ] README has real screenshots, architecture, decisions and honest limits
- [ ] Landing page credits https://github.com/sharmayash2805 and links the repo
