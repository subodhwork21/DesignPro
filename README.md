# 🖌️ DesignPro Website

DesignPro is a modern, content-driven website for a creative studio showcasing its work, team, insights, and brand philosophy. Built with **Next.js (App Router)** and integrated with a **Payload CMS**, the project emphasizes structured content, flexible routing, and reusable components.

---

## 📁 Project Structure Overview

```
/
├── app/                        # Main application pages and layout
├── cms/                        # Payload CMS config, collections, admin assets
├── components/                # UI and section-specific React components
├── constants/                 # Static data used throughout the site
├── context/                   # Shared React context providers
├── lib/                       # Utility functions
├── styles/                    # Global CSS
├── types/                     # TypeScript interfaces for structured content
├── utils/                     # Routing and helper utils
├── payload.config.ts          # Payload CMS main config
├── payload-types.ts           # Auto-generated types from Payload
```

---

## 🚀 Features

* 🔗 **Next.js App Router** (fully typed with TypeScript)
* 🧠 **Payload CMS** as a headless backend
* 🖼️ Dynamic routing for pages like `/news`, `/work`, `/future-series`
* 🤩 Modular, reusable React components
* 🌐 Custom GraphQL endpoints with Payload
* 🎨 Responsive and modern UI
* 📄 Static and dynamic data support (via CMS + constants)

---

## 🛠️ Tech Stack

* **Frontend**: React + Next.js 14 (App Router)
* **CMS**: [Payload CMS](https://payloadcms.com/)
* **Styling**: Tailwind CSS (via `globals.css`)
* **Type System**: TypeScript
* **Routing**: App router with dynamic routes
* **GraphQL**: Custom endpoints for Payload GraphQL API
* **Admin Panel**: Hosted inside `/app/(payload)/admin`

---

## 🧱 Notable Folders

### `/app/`

* `(app)/`: Public-facing pages (about, work, news, etc.)
* `(payload)/`: Admin and API pages powered by Payload
* `my-route/`: Example of custom route handling

### `/components/`

* `homepage/`: Hero carousel, featured work
* `about/`: Crew and expertise sections
* `future-series/`: Grid and item views
* `global/`: Header, Footer, Navigation, PDF viewer
* `work/`: Filtering and work showcase
* `ui/`: Common inputs, buttons, cards, dialogs

### `/cms/`

* `collections/`: Payload collections (users, media)
* `components/flyingcode/`: Payload CMS branding components
* `assets/logo/`: Logos and icons for Payload admin

### `/constants/`

* Contains static mock data used for development or display

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/subodhwork21/DesignPro.git
cd designpro
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file with necessary variables (Payload database URL, API keys, etc.):

```env
PAYLOAD_SECRET=your-secret
MONGODB_URI=mongodb://localhost:27017/designpro
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run Locally (Frontend + CMS)

```bash
npm run dev
```

This will:

* Start the Next.js app
* Load Payload CMS backend
* Make the admin panel available at `/admin`

---

## 🔌 CMS Configuration

* Payload is configured via `payload.config.ts`
* Collections like `users` and `media` are defined in `/cms/collections/`
* Admin UI is styled using `custom.scss`
* CMS endpoints like `/api/graphql` and `/api/graphql-playground` are available

---

## 🧪 Testing (Optional)

```bash
npm run lint
```

For type-checking:

```bash
tsc --noEmit
```

---

## 📄 License

This project is proprietary and protected under copyright.

---

## ✨ Contact

For collaboration or inquiries, please contact the DesignPro team.
