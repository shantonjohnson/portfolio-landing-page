Recommended Structure (Modern Next.js App Router)

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx            // Home page  "/"
│   ├── projects/
│   │   └── [id]/
│   │       └── page.tsx    // /projects/123
│   └── blog/
│       └── page.tsx
│
├── components/
│   ├── ui/                // Small reusable UI
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   │
│   ├── layout/            // Layout parts
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── shared/            // Bigger shared components
│       ├── ProjectCard.tsx
│       └── Hero.tsx
│
├── features/              // Page sections / logic
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── index.ts
│   │
│   ├── projects/
│   │   ├── ProjectList.tsx
│   │   └── ProjectDetails.tsx
│   │
│   └── auth/
│       └── LoginForm.tsx
│
├── lib/                   // Helpers / API / utils
│   ├── fetcher.ts
│   └── constants.ts
│
├── hooks/
│   └── useAuth.ts
│
├── styles/
│   └── globals.css
│
└── types/
    └── project.ts
