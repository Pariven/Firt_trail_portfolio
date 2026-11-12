export const profile = {
  name: "Pariventheswaran Paneerselvam",
  short: "Pariven",
  role: "Full-Stack Developer",
  email: "parivenmc06@gmail.com",
  phone: "+60 12-751 9334",
  whatsapp: "https://wa.me/60127519334",
  github: "https://github.com/Pariven",
  location: "Malaysia",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "Production projects shipped" },
  { value: 4, suffix: "+", label: "Freelance clients" },
  { value: 7, suffix: "", label: "Languages written" },
  { value: 100, suffix: "%", label: "Mobile-responsive builds" },
];

export const skills = [
  { title: "Languages", icon: "{ }", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3"], span: "md:col-span-2" },
  { title: "Frontend", icon: "◧", items: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design"], span: "" },
  { title: "Backend & Data", icon: "⌁", items: ["Node.js", "REST APIs", "Prisma ORM", "PostgreSQL (Neon)", "Supabase", "Firebase", "Stripe"], span: "" },
  { title: "Tools & Platforms", icon: "⚙", items: ["Git", "GitHub", "Vercel", "GitHub Pages", "WordPress", "Elementor", "XAMPP"], span: "md:col-span-2" },
];

export const marquee = ["Next.js", "React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Stripe", "Supabase", "Tailwind", "Vercel"];

export const projects = [
  {
    title: "KPINTAR Training & Certification Platform",
    url: "https://www.digitaltvetmalaysia.com/",
    image: "/assets/proj-dtvet.webp",
    date: "Oct – Nov 2025",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    desc: "Reworked cookie handling and auth state to fix login redirects and session persistence, resolved a checkout race condition, fixed Stripe and database relationship bugs, unblocked production builds and added SEO structured data.",
  },
  {
    title: "QR Noir Tech — QR Code Generator",
    url: "https://qrnoirtech.com",
    image: "/assets/proj-qrnoir.webp",
    date: "Jun 2026",
    tags: ["JavaScript", "SVG"],
    desc: "Custom SVG QR rendering with finder patterns, text alignment and scaling, plus print-ready output for bulk generation.",
  },
  {
    title: "Change Management Website",
    url: "https://changemanagement.my",
    image: "/assets/proj-changemgmt.webp",
    date: "Mar – Oct 2026",
    tags: ["Client website", "Responsive"],
    desc: "Built and maintained pages, content and responsive layouts for a change-management consulting business.",
  },
  {
    title: "Cedar Tech Training Website",
    url: "https://cedartechtraining.com.my",
    image: "/assets/proj-cedar.webp",
    date: "May – Jul 2026",
    tags: ["Client website", "Mobile-first"],
    desc: "Client-facing pages for a training provider — layout, content and mobile responsiveness.",
  },
  {
    title: "3D Shirt — Interactive 3D Clothing",
    url: "https://3d-shirt-zeta.vercel.app",
    image: "/assets/proj-3dshirt.webp",
    date: "Aug 2026",
    tags: ["3D / WebGL", "Vercel"],
    desc: "An interactive in-browser 3D clothing showcase with a cinematic, editorial interface — currently refining UI and mobile layout.",
  },
];

export const experience = [
  {
    date: "Oct 2025 — Present",
    role: "Freelance Web Developer",
    org: "Self-employed",
    points: [
      "Delivered and maintained websites and web apps for KPINTAR, Cedar Tech Training, changemanagement.my and QR Noir Tech — requirements through deployment.",
      "Built authentication, Stripe checkout and SEO for a training and certification platform.",
      "Handled responsive layouts, content updates, troubleshooting and production deploys on Vercel.",
    ],
  },
  {
    date: "May 2025",
    role: "Web Developer & Computer Repair Technician",
    org: "JSJ College Seremban",
    points: ["Web development alongside hands-on hardware troubleshooting and repair."],
  },
  {
    date: "May — Oct 2024",
    role: "Web Development Intern",
    org: "Katril Group of Companies",
    points: [
      "Built and maintained the corporate website for a construction group using WordPress and Elementor.",
      "Managed page updates, content, layout changes, graphic design and routine maintenance.",
    ],
  },
];

export const education = [
  { date: "May 2026", title: "Bachelor of Computer Science (Network & Security)", org: "INTI International University" },
  { date: "May 2024", title: "Diploma in Information Technology", org: "INTI International University" },
  { date: "2018", title: "SPM", org: "SMK St Paul" },
];

export const certs = [
  { date: "Nov 2026", title: "MOOC: Computer Security & Digital Forensics", org: "INTI International University" },
  { date: "Nov 2025", title: "CCNA: Introduction to Networks", org: "Cisco Networking Academy" },
  { date: "Feb 2023", title: "Online Symposium on Cloud Computing", org: "INTI International University" },
  { date: "Jul 2018", title: "Design & Prototyping Workshop", org: "INTI International University FabLab" },
];
