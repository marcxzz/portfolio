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
    description: "Fictional crowdfunding platform for eco-sustainable initiatives, developed as a school assignment (without real payments). Users can create projects, donate funds, and view the progress made so far.",
    longDescription: "EcoGreenU is a fictional crowdfunding platform (inspired by GoFundMe) that allows users to create an account, create and manage projects, and donate funds to other ecological initiatives. EcoGreenU is the result of a school assignment given to learn how to manage database connections and query data from our web-based applications.",
    techStack: ["HTML", "CSS", "PHP", "JavaScript", "MySQL", "XAMPP", "Bootstrap 5"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/EcoGreenU",
    images: [
      { name: "Home (hero section)", filename: "home_1.png" },
      { name: "Home (featured projects)", filename: "home_2.png" },
      
      { name: "Projects page (dark theme)", filename: "projects_1_dark.png" },
      { name: "Projects page (searching)", filename: "projects_2.jpg" },
      { name: "Projects page (light theme)", filename: "projects_1_light.png" },
      { name: "Project details", filename: "project_dark.jpg" },
      { name: "Project details", filename: "project_light.jpg" },
      
      { name: "Signup", filename: "signup.jpg" },
      { name: "Login", filename: "login_dark.jpg" },
      { name: "Login", filename: "login_light.jpg" },
      { name: "Profile", filename: "profile.jpg" },
      { name: "Create project", filename: "create_project.jpg" },
      { name: "Project details (logged in)", filename: "project_logged.jpg" },
      { name: "Donate to a project", filename: "donate.jpg" },
      { name: "Edit project", filename: "edit_project.jpg" },

      { name: "Edit profile", filename: "edit_profile.jpg" },
      { name: "Change password", filename: "change_password.jpg" },
      { name: "Delete_account", filename: "delete_account.jpg" },

      { name: "About us", filename: "about.jpg" },
    ],
    features: [
      "Fully responsive",
      "Theme switch",
      "User account management",
      "CRUD operations on projects and users",
      "Sign up & log in",
      "Password hashing",
      "Account actions (change password, delete account)",
    ],
    year: "2025",
    status: "archived",
  },
  {
    id: "liftwise",
    title: "LiftWise",
    subtitle: "Personal fitness life tracking web-app",
    description: "Web-app to help you manage your fitness life such as gym subscriptions, reservations and gym access via QR code scanning (as a future feature that never arrived).",
    longDescription: "LiftWise is a web-app that started as a school group project to learn project management. The idea was to create a single environment to manage your fitness life, such as gym memberships and reservations. I designed the entire UI, then we developed a first version of the web-app with .NET Blazor Server, with the idea of later migrating to .NET MAUI to create a true native app (the project was abandoned when we graduated).",
    techStack: ["C#", ".NET Blazor Server", "HTML", "CSS", "SQLite", "Figma"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/LiftWise",
    images: [
      { name: "Log in (mobile)", filename: "login_portrait.png", },
      { name: "Log in (desktop)", filename: "login_landscape.png", },
      { name: "Sign up (mobile)", filename: "signup_portrait.png", },
      { name: "Sign up (desktop)", filename: "signup_landscape.png", },
      { name: "Home (mobile)", filename: "home_portrait.png", },
      { name: "Home (desktop)", filename: "home_landscape.png", },
    ],
    features: [
      "Signup & login",
      "Responsive and intuitive UI",
      "Mobile-first interface",
      "Password hashing"
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
    techStack: ["React JS", "Next.js", "Tailwind CSS", "Vercel", "NeonDB", "PostgreSQL", "Figma", "Hero Icons"],
    category: "Full Stack",
    github: "https://github.com/marcxzz/wordiary",
    images: [
      { name: "Home", filename: "home.png", },
      { name: "New term page", filename: "new_term.png", },
      { name: "Search terms", filename: "search_words.png", },
      { name: "Term details", filename: "term_details.png", },
      { name: "Settings", filename: "settings.png", },
      { name: "Wordiary logo", filename: "logo.png", },
    ],
    features: [
      "Clean & intuitive interface",
      "Mobile-first UI",
      "CRUD operations on terms",
      "Password-protected"
    ],
    year: "2025",
    status: "live",
  },
];
