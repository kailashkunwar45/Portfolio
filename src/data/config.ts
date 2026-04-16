// ============================================================
// PORTFOLIO CONFIG — Edit this file to update all content
// ============================================================

export const portfolioConfig = {
  // ── Personal Info ──────────────────────────────────────────
  name: "Kailash Kunwar",
  title: "Full Stack / MERN Developer",
  tagline: "Building scalable web apps with modern tech",
  typingWords: [
    "Full Stack Developer",
    "MERN Stack Engineer",
    "React & Next.js Expert",
    "Node.js Backend Dev",
    "UI/UX Enthusiast",
  ],
  bio: `I'm a motivated and responsible BCA student (4th Semester) at Aadim National College with a passion for clean code and modern web technologies. I specialize in the MERN stack and I'm currently seeking opportunities to grow as a Correspondence Officer or Full Stack Developer. I bring a strong mix of technical expertise and professional communication skills to every project.`,
  location: "Machhapokhari, Kathmandu",
  availableForWork: true,
  profileImage: "/IMG_3965.JPG",

  // ── Resume ─────────────────────────────────────────────────
  resumeFile: "/Kailash_Kunwar_Resume.pdf", // Place your PDF in /public

  // ── Contact ────────────────────────────────────────────────
  contact: {
    email: "kailashkunwar10@gmail.com",
    phone: "9865367653 / 9825191257",
    location: "Machhapokhari, Kathmandu",
  },

  // ── Social Links ───────────────────────────────────────────
  socials: {
    github: "https://github.com/kailashkunwar45",
    linkedin: "https://linkedin.com/in/kailash08",
    facebook: "https://www.facebook.com/profile.php?id=61582392415239",
    instagram: "https://www.instagram.com/jungey_kai?igsh=MXF5eW5vZGRldDBkeQ== ",
  },

  // ── Skills ─────────────────────────────────────────────────
  skills: {
    Frontend: [
      { name: "React.js", icon: "⚛️", level: 92 },
      { name: "Next.js", icon: "▲", level: 90 },
      { name: "Tailwind CSS", icon: "🎨", level: 90 },
      { name: "Web Designing", icon: "✨", level: 85 },
      { name: "HTML & CSS", icon: "🌐", level: 95 },
    ],
    Backend: [
      { name: "Node.js", icon: "🟢", level: 88 },
      { name: "Express.js", icon: "🚂", level: 87 },
      { name: "MongoDB", icon: "🍃", level: 85 },
      { name: "Database / SQL", icon: "📊", level: 80 },
      { name: "REST APIs", icon: "🔗", level: 90 },
    ],
    Tools: [
      { name: "Email Handling", icon: "📧", level: 95 },
      { name: "Professional Correspondence", icon: "📝", level: 90 },
      { name: "Git & GitHub", icon: "🐙", level: 90 },
      { name: "VS Code", icon: "💻", level: 95 },
      { name: "Postman", icon: "📮", level: 88 },
    ],
  },

  // ── Projects ───────────────────────────────────────────────
  projects: [
    {
      id: "sanskar",
      title: "Sanskar — Multi-Vendor App",
      description:
        "A production-grade multi-vendor platform for religious services and e-commerce. Built with the MERN stack, featuring secure payment integration with eSewa and Khalti. It includes advanced features like marketplace management, vendor dashboards, and a booking system for religious ceremonies and services. This project is a comprehensive solution for connecting users with religious practitioners and high-quality spiritual products, designed for scalability and professional reliability.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "eSewa", "Khalti"],
      github: "https://github.com/kailashkunwar45/Sanskar",
      live: "https://sanskar-bu44.onrender.com/",
      featured: true,
      image: "",
    },
    {
      id: "linkit",
      title: "LinkIt — Real-Time Chat App",
      description:
        "A full-featured real-time chat application with video calling, group chats, and a neural-network themed UI. Built with Socket.io for instant messaging and WebRTC for peer-to-peer video communication. It features a modern, responsive design with glassmorphism aesthetics, secure authentication, and real-time 'seen' indicators. Designed for seamless communication across devices with a focus on speed, privacy, and an immersive user experience.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC", "Tailwind CSS"],
      github: "https://github.com/kailashkunwar45/connectify",
      live: "https://link-it-8q6z.onrender.com",
      featured: true,
      image: "",
    },
    {
      id: "portfolio",
      title: "Developer Portfolio",
      description:
        "This very portfolio — a highly animated, glassmorphism-styled developer portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/kailashkunwar45/myPortfolio",
      live: "https://kailashkunwar.vercel.app",
      featured: false,
      image: "",
    },
  ],

  // ── Experience ─────────────────────────────────────────────
  experience: [
    {
      id: "exp1",
      role: "Full Stack Developer",
      company: "Fresher / Freelance",
      period: "2023 – Present",
      description:
        "Highly motivated and eager to work. Building full-stack web applications using the MERN stack. Focused on professional correspondence, technical excellence, and problem-solving.",
      type: "work",
    },
  ],

  // ── Education ──────────────────────────────────────────────
  education: [
    {
      id: "edu1",
      degree: "BCA — 4th Semester (Running)",
      institution: "Aadim National College, Tribhuvan University",
      period: "2024 – Present",
      description: "Focusing on software development, database management, and computer applications.",
      type: "education",
    },
    {
      id: "edu2",
      degree: "+2 (Science)",
      institution: "Xavier International College",
      period: "2021 – 2023",
      description: "Completed higher secondary education with a focus on science and mathematics.",
      type: "education",
    },
    {
      id: "edu3",
      degree: "SEE",
      institution: "Saraswati Secondary School",
      period: "2019",
      description: "Secondary Education Examination.",
      type: "education",
    },
  ],
  languages: ["Nepali", "English", "Hindi"],
} as const;

export type SkillCategory = keyof typeof portfolioConfig.skills;
export type Project = (typeof portfolioConfig.projects)[number];
export type Experience = (typeof portfolioConfig.experience)[number];
export type Education = (typeof portfolioConfig.education)[number];
