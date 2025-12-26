// src/data/experience.js

export const experience = [
  {
    id: "ttm-2024",
    company: "The Two Migrations",
    title: "Full-Stack Developer",
    employmentType: "Full-time",
    location: "United States",
    locationType: "On-Site", // LinkedIn shows United States (not Remote/Hybrid). Change if needed.

    start: { month: "Sep", year: 2024 },
    end: null,

    summary: `"Once you migrate, You'll never wanna go back!"`,
    highlights: [
      "Built and shipped end-to-end features across the frontend and backend.",
      "Collaborated on UI/UX decisions and improved overall user experience.",
      "Worked with GitHub workflows for version control and collaboration.",
    ],

    tech: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "GitHub",
    ],

    links: {
      company: "", // optional
      project: "", // optional
    },

    logo: "", // optional
  },

  {
    id: "upwork-2024",
    company: "Upwork",
    title: "Frontend Developer",
    employmentType: "Freelance",
    location: "Remote",
    locationType: "Remote",

    start: { month: "Mar", year: 2024 },
    end: null,

    summary:
      "Build websites and web apps for clients—portfolio/resume sites, forms, and custom UI work.",
    highlights: [
      "Delivered responsive, accessible UIs tailored to client requirements.",
      "Implemented clean component architecture and reusable UI patterns.",
      "Worked with clients to translate designs/ideas into polished experiences.",
    ],

    tech: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "HTML",
      "CSS",
    ],

    links: {
      company: "", // optional
      project: "", // optional
    },

    logo: "", // optional
  },

  {
    id: "nvf-2025",
    company: "New Vision Foundation",
    title: "Coding Instructor Intern",
    employmentType: "Internship",
    location: "Minnesota, United States",
    locationType: "Hybrid",

    start: { month: "Apr", year: 2025 },
    end: { month: "Jun", year: 2025 },

    summary: "Intern instructor teaching elementary kids how to code.",
    highlights: [
      "Led beginner-friendly coding lessons for elementary-age students.",
      "Supported students with hands-on exercises and guided problem-solving.",
      "Helped maintain a positive, engaging learning environment.",
    ],

    tech: ["Programming", "HTML", "Teaching", "Communication"],

    links: {
      company: "", // optional
      project: "", // optional
    },

    logo: "", // optional
  },
];
