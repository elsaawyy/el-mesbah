# EL-MESBAH

Production web app for **EL-MESBAH** — a software, AI, and automation solutions company.

Built with **Next.js (App Router)**, **React**, **TypeScript**, and **plain CSS**.

---

## Requirements

* Node.js 20+ (tested on 24.11.1)
* npm 10+

---

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## Scripts

| Script          | Purpose                                     |
| --------------- | ------------------------------------------- |
| `npm run dev`   | Start the development server with Turbopack |
| `npm run build` | Create a production build                   |
| `npm run start` | Run the production build locally            |
| `npm run lint`  | Run ESLint                                  |

---

## Project Structure

```text
app/
  Next.js App Router routes

components/
  home/          Home page sections
  layout/        Navigation and Footer
  projects/      ProjectMockup
  ui/            Button, Tag, Reveal, SkipLink

hooks/
  Custom React hooks

lib/
  content/       Typed content data
  seo/           Metadata helpers
  utils/         Small utilities

styles/
  tokens.css
  reset.css
  components.css

docs/
  Architecture and phase checklists

public/
  Static assets
```

---

## Content Editing

All site copy lives in:

```text
lib/content/*.ts
```

The main content files are:

| File            | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `site.ts`       | Company information, contact details, and domain |
| `nav.ts`        | Navigation links                                 |
| `services.ts`   | The 4 services and their bullet points           |
| `projects.ts`   | Demo projects                                    |
| `solutions.ts`  | Problem → solution pairs                         |
| `principles.ts` | Company principles                               |

Edit these files to update the website content without changing the components.

---

## Roadmap

### Phase 0 — Foundations

**Status:** Done

Project structure, design foundations, reusable components, and core setup.

### Phase 1 — Frontend Rebuild

**Status:** In Progress

Complete the production frontend and refine the user experience.

### Phase 2 — Backend MVP

Planned features:

* Leads API
* PostgreSQL database
* Admin dashboard

### Phase 3 — Contact Flow + Polish

* Improve contact flow
* Lead capture
* Final UI/UX polish
* Production improvements

### Phase 4 — Arabic / RTL

Add full Arabic support with proper RTL layouts and content.

### Phase 5 — Launch

Final testing, deployment, production configuration, and public launch.

See:

```text
docs/ARCHITECTURE.md
```

for the full architecture and phase checklists.

---

## Notes

### Demo Projects

Demo projects are intentionally labeled **"Demo project"**.

Do **not** remove this label until the projects are replaced with real client work.

### Contact Form

The contact form is **email-only** for now.

Full lead capture and backend integration are planned for **Phase 2 / Phase 3**.

---

## Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **CSS**
* **ESLint**
* **Turbopack**
* **Node.js**
* **npm**

---

## EL-MESBAH

Software • AI • Automation
