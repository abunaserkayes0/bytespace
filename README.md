# 🚀 ByteSpace

**ByteSpace** is a modern, responsive e-learning and course discovery landing page built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/abunaserkayes0/bytespace)

---

## ✨ Features

- **Dynamic Hero Section**: Fluid viewport-relative layout with 3D decorative shapes, course metrics, and a responsive search bar.
- **Mobile Navigation Drawer**: Smooth slide-in left drawer with a light gradient background, branded header, and backdrop overlay.
- **Course Discovery & Filters**: Filterable courses and skills categorized by development, design, business, and more.
- **Interactive Metrics & Analytics**: Visual progress cards, revenue tracking showcases, and certificates.
- **Trusted Partners & Testimonials**: Brand logo showcases and social proof from active learners.
- **Fully Responsive**: Optimized for all devices from mobile viewports to ultra-wide desktop monitors.
- **Performance Optimized**: Zero layout shifts, Next.js optimized images, and sub-second load times.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Clash Display & Satoshi

---

## 📂 Project Structure

```text
bytespace/
├── public/                 # Static assets, icons, and illustration graphics
│   ├── icons/
│   └── images/
├── src/
│   └── app/
│       ├── (website)/
│       │   └── components/ # Reusable UI components
│       │       ├── hero.tsx
│       │       ├── brands.tsx
│       │       ├── course-card.tsx
│       │       ├── features.tsx
│       │       ├── skills.tsx
│       │       ├── learning-paths.tsx
│       │       ├── creator-cta.tsx
│       │       ├── testimonials.tsx
│       │       ├── footer.tsx
│       │       └── ui/
│       ├── layout.tsx      # Root layout & font configuration
│       ├── page.tsx        # Landing page entrypoint
│       └── globals.css     # Global styles & design system tokens
├── package.json
└── tsconfig.json
```

---

## 💻 How to Run Locally

Follow these step-by-step instructions to get the project up and running on your local machine:

### 1. Prerequisites

Make sure you have the following installed:

- **Node.js**: `v18.18.0` or higher ([Download Node.js](https://nodejs.org/))
- **Package Manager**: [pnpm](https://pnpm.io/) (recommended), `npm`, or `yarn`
  ```bash
  npm install -g pnpm
  ```

### 2. Clone the Repository

Clone the project to your local directory:

```bash
git clone https://github.com/abunaserkayes0/bytespace.git
cd bytespace
```

### 3. Install Dependencies

Install all required project dependencies:

```bash
pnpm install
```

_(Alternatively, you can run `npm install` or `yarn install`)_

### 4. Start the Local Development Server

Start the Next.js development server powered by Turbopack:

```bash
pnpm dev
```

_(Or `npm run dev` / `yarn dev`)_

### 5. Open in Your Browser

Once the dev server is active, open your browser and visit:

```text
http://localhost:3000
```

The application will hot-reload automatically as you edit files in `src/app`.

---

### 📦 (Optional) Running the Production Build Locally

To test the compiled, optimized production bundle on your local machine:

```bash
# 1. Generate the production build
pnpm build

# 2. Start the local production server
pnpm start
```

Then navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

| Command       | Description                                    |
| ------------- | ---------------------------------------------- |
| `pnpm dev`    | Starts the development server with Turbopack   |
| `pnpm build`  | Creates an optimized production build          |
| `pnpm start`  | Runs the built production application          |
| `pnpm lint`   | Runs ESLint to check for code issues           |
| `pnpm format` | Formats code with Prettier and runs ESLint fix |

---

## 🌐 Deployment

### Deploy with Vercel (Recommended)

The easiest way to deploy this Next.js app to production is with [Vercel](https://vercel.com):

#### Method 1: Git Integration (Continuous Deployment)

1. Push your latest code to GitHub:
   ```bash
   git push origin main
   ```
2. Navigate to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
3. Import the **`bytespace`** repository.
4. Framework and build settings will be auto-detected (`Next.js`, `pnpm build`).
5. Click **Deploy**. Vercel will build the application and provide you with a live production URL. Every subsequent `git push` will trigger an automatic deployment!

#### Method 2: Deploy via Vercel CLI

You can also deploy directly from your terminal:

```bash
# 1. Log in to Vercel
npx vercel login

# 2. Deploy to production
npx vercel --prod
```

---

## 👤 Author

- **Abunaser Kayes** - [@abunaserkayes0](https://github.com/abunaserkayes0)
