// export interface Project {
//   id: string;
//   title: string;
//   subtitle: string;
//   description: string;
//   longDescription: string;
//   techStack: string[];
//   category: string;
//   github?: string;
//   liveUrl?: string;
//   images: string[];
//   features: string[];
//   year: string;
//   status: "live" | "in-development" | "archived";
// }

export const PROJECTS = [
  {
    id: "ecogreenu",
    title: "EcoGreenU",
    subtitle: "Platform for crowdfunding projects",
    description: "",
    longDescription: "",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/ecogreenu",
    images: [],
    features: [
      "User account management",
      "CRUD operations on projects",
      "Profile dashboard",
      "Account operations (rename, delete, password change)",
      "Image upload handling"
    ],
    year: "2025",
    status: "archived",
  },
];
