const projects = [
   {
    id: 1,

    slug: "mapcut-barbershop",

    title: "Mapcut Barbershop",

    shortDescription:
      "Web application for barbershop management.",

    description:
      "Mapcut merupakan aplikasi manajemen barbershop yang dibangun menggunakan React dan Supabase. Sistem ini membantu mengelola transaksi, layanan, barber, inventori, laporan keuangan, hingga dashboard analytics secara real-time.",

    image: "/images/Dashboard Page.png",

    features: [
  "Dashboard ",
  "Authentication",
  "Inventory Management",
  "Finance Management",
  "Realtime Report",
],


    gallery: [
      "/images/Dashboard Page.png",
      "/images/Daily Sales Page.png",
      "/images/Expenses Page.png",
        "/images/Services Page.png",
         "/images/Reports Page.png",
          "/images/Services Page.png",
           "/images/Barbers Page.png",
            "/images/Settings Page.png",
             "/images/Login Page.png",
    ],
    

    tech: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "Vite",
    ],

    features: [
      "Dashboard Analytics",
      "Finance Management",
      "Barber Management",
      "Inventory Management",
      "Authentication",
    ],

    github:
      "https://github.com/benito1TIA/MAPSCUT-Kelompok10",

    demo:
      "https://mapscut-kelompok10.vercel.app/",

    featured: true,

  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using React, Framer Motion, and Tailwind CSS.",
    image: "/images/Fortopolio images website.png",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/username/portfolio",
    demo: "",
    featured: true,
  },
  {
    id: 3,
    title: "Dosen Killer 7 AM Rush",
    description:
      "Educational game developed using Unity with 3D assets created in Blender.",
    image: "/images/Game-Cover.png",
    tech: ["Unity", "C#", "Blender"],
    github: "",
    demo: "",
    featured: false,
  },
];

export default projects;