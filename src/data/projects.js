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
    subtitle: "Crowdfunding platform for green projects",
    description: "Fictional crowdfunding platform for eco-sustainable initiatives, developed as a school project (without real payments). Users can create projects, donate funds, and view the progress made so far.",
    longDescription: "EcoGreenU is a fictional crowdfunding platform (inspired by GoFundMe) that allows users to create an account, create and manage projects, and donate funds to other ecological initiatives. EcoGreenU is the result of a school project assigned to learn how to manage database connections and query data from our web-based applications.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "XAMPP"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/EcoGreenU",
    images: [],
    features: [
      "User account management",
      "CRUD operations on projects and users",
      "User profile dashboard",
      "Sign up & log in",
      "Password hashing",
      "Account actions (deletion, password change)",
      "Image uploading",
    ],
    year: "2025",
    status: "archived",
  },
  {
    id: "liftwise",
    title: "LiftWise",
    subtitle: "Personal fitness life tracking web-app",
    description: "Web-app to help you manage your fitness life such as gym subscriptions, reservations and gym access via QR code scanning (as a future feature that never arrived).",
    longDescription: "LiftWise is a web-app that started as a school group project to learn project management. The idea was to create a single environment to manage your fitness life, such as gym memberships and reservations. We first developed a web-app version with .NET Blazor Server, with the idea of later migrating to .NET MAUI to create a true native app (the project died when we graduated).",
    techStack: ["C#", ".NET Blazor Server", "HTML", "CSS", "SQLite", "Figma"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/LiftWise",
    images: [],
    features: [
      "Signup & login",
      "Responsive and intuitive UI",
    ],
    year: "2025",
    status: "archived",
  },
  {
    id: "wordiary",
    title: "Wordiary",
    subtitle: "Tracker of newly learned foreign words",
    description: "A simple tracker of newly learned terms from foreign languages. You can add a new term along with its translation, and challenge yourself with random flashcards.",
    longDescription: "Wordiary was born from a very specific need: to keep track of new terms learned in a foreign language. With this simple tool, you can add the term you just learned along with its translation into your own language, and then challenge your knowledge with random flashcards to improve your learning and make it more playful. However, this service is not available to anyone except me.",
    techStack: ["React JS", "Next.js", "Tailwind CSS", "Vercel", "NeonDB", "PostgreSQL", "Hero Icons", "Figma"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/wordiary",
    images: [
      "home.png",
      "new_term.png",
      "search_words.png",
      "term_details.png",
      "settings.png",
    ],
    features: [
      "Clean, modern & intuitive UI",
      "Mobile-first design",
    ],
    year: "2025",
    status: "live",
  },
];
