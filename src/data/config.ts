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
      id: "jungagame",
      title: "Junga — UE5 & Web Companion Sandboxed Open-World Slice",
      description:
        "A premium, highly-immersive open-world vertical slice and interactive companion app set during the rise of Jung Bahadur Rana in 19th-century Nepal. Inspired by high-fidelity gameplay loops like Ghost of Tsushima, Assassin's Creed, and GTA, this project blends advanced Unreal Engine 5 C++ subsystems with a glassmorphic HTML5 client-side dashboard sandbox.",
      techStack: ["Unreal Engine 5", "C++", "HTML5", "Web Audio API", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/kailashkunwar45/jungaGame",
      live: "https://jungagame.onrender.com",
      featured: true,
      image: "/jungagame.png",
      features: [
        {
          title: "Secure Faction Gateway",
          desc: "Immersive login and registration overlay allowing courtiers to authenticate their noble lineage."
        },
        {
          title: "Persistent Lineage Stats",
          desc: "Automatically saves and loads your gold, health, equipped armaments, active quest stage, and unlocked achievements directly using browser storage (localStorage and sessionStorage)."
        },
        {
          title: "Intruder Alert System",
          desc: "Entering an incorrect password signals the palace guards, raising the wanted level by 15 points and triggering combat warnings."
        },
        {
          title: "Interactive Palace Map",
          desc: "Explore Taleju Bazaar, Kot Courtyard, Palace Interiors, and the Safehouse with real-time random encounter checks."
        },
        {
          title: "Authentic Nepalese Kauda",
          desc: "A traditional cowrie shell gambling board allowing you to place stakes on physical-simulation face-up shell bets."
        },
        {
          title: "Temple Sparring Arena",
          desc: "Spar with Royal Guard captains or rival nobles, compiling real-time strike and parry log traces."
        },
        {
          title: "Procedural Soundboard Synthesizers",
          desc: "Features low-pass Himalayan Torrent rain & thunder, Sarangi Whispers string raga slides, Bansuri flute Himalayan Breath, and 110 BPM Rana War Drums."
        }
      ],
      ueSystems: [
        {
          name: "AProtagonistCharacter",
          desc: "Controls weapon switches (Gurkha Khukuris, cavalry Talwars, heavy sacrificial Koras, flintlock Muskets), stamina scaling, blocking states, and active input bindings."
        },
        {
          name: "AHorseVehicle",
          desc: "A physics-driven rideable mount controller managing galloping, equine stamina, and skeletal attachment snapping."
        },
        {
          name: "ANpcCitizenCharacter",
          desc: "A dynamic citizen AI class shifting state machines among four specific routines (Work, Gossip, Patrol, Rest) based on the Time of Day clock."
        },
        {
          name: "APoliticalThreatSystem",
          desc: "Monitors player threat points (0-100) and shifts world parameters (double patrol counts, lock gates, checkpoints, treason hunt status) across five distinct tiers."
        },
        {
          name: "UQuestMissionManager",
          desc: "World Subsystem managing quest milestones, dialogue, waypoint coordinates, and reward distribution."
        }
      ]
    },
    {
      id: "vlogapp",
      title: "Vlog App — Social Memory Sharing Platform",
      description:
        "A full-stack social platform where users can create, share, and explore cherished memories with the world. Features secure JWT-based authentication, image-rich post creation with Cloudinary storage, interactive likes and comments, real-time search, and a beautifully responsive card-based feed. Built with the MERN stack using a clean monorepo architecture, Memories delivers a seamless and nostalgic experience for storytelling and community connection.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Cloudinary"],
      github: "https://github.com/kailashkunwar45/vlog-app",
      live: "https://vlog-app-5lvn.onrender.com",
      featured: true,
      image: "/vlogapp.png",
    },
    {
      id: "medique",
      title: "Medique — Healthcare Management System",
      description:
        "A comprehensive healthcare platform connecting patients, doctors, and hospitals. Features a sophisticated appointment booking system, real-time notifications, and dedicated dashboards for all user roles. Built with a scalable monorepo architecture, it streamlines medical consultations and hospital operations with a focus on efficiency and user experience.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "TypeScript", "Socket.io"],
      github: "https://github.com/kailashkunwar45/MEDIQUE",
      live: "https://medique-2sad.onrender.com",
      featured: true,
      image: "/medique.png",
    },
    {
      id: "nexus",
      title: "Nexus — Social Media Platform",
      description:
        "A modern social media platform designed for seamless user interaction, featuring real-time post updates, user authentication, and interactive elements like likes, comments, and following. Built with the MERN stack, it offers a dynamic feed and a responsive UI for an engaging social experience.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Cloudinary"],
      github: "https://github.com/kailashkunwar45/Nexus",
      live: "https://nexus-a27b.onrender.com",
      featured: true,
      image: "/nexus.png",
    },
    {
      id: "sanskar",
      title: "Sanskar — Multi-Vendor App",
      description:
        "A production-grade multi-vendor platform for religious services and e-commerce. Built with the MERN stack, featuring secure payment integration with eSewa and Khalti. It includes advanced features like marketplace management, vendor dashboards, and a booking system for religious ceremonies and services. This project is a comprehensive solution for connecting users with religious practitioners and high-quality spiritual products, designed for scalability and professional reliability.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "eSewa", "Khalti"],
      github: "https://github.com/kailashkunwar45/Sanskar",
      live: "https://sanskar-bu44.onrender.com/",
      featured: true,
      image: "/sanskar.png",
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
      image: "/linkit.png",
    },
    {
      id: "bloodmatch",
      title: "BloodMatch — Blood Donation & Management Platform",
      description:
        "A production-ready platform for connecting blood donors, seekers, and health institutions in real-time. Features role-based dashboards, geospatial matching, and verified institution validation. Built with a focused MERN architecture to streamline life-saving blood donations and inventory management.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Vite", "Tailwind CSS"],
      github: "https://github.com/kailashkunwar45/BLOODMATCH",
      live: "https://bloodmatch-0.onrender.com",
      featured: true,
      image: "/bloodmatch.png",
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
