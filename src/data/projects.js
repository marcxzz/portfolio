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
    id: "neural-dashboard",
    title: "Neural Dashboard",
    subtitle: "AI-powered analytics platform",
    description: "A real-time analytics dashboard leveraging machine learning to surface insights from complex datasets. Built for data teams who need speed and clarity.",
    longDescription: "Neural Dashboard is a comprehensive analytics platform that processes millions of data points in real-time. It features customizable widgets, automated anomaly detection, and natural language querying. The system was built to replace legacy BI tools with a modern, developer-friendly interface that teams actually want to use.",
    techStack: ["React", "TypeScript", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    category: "Full Stack",
    github: "https://github.com/username/neural-dashboard",
    liveUrl: "https://neural-dash.demo.dev",
    images: [],
    features: [
      "Real-time data processing pipeline",
      "Natural language query interface",
      "Customizable widget system",
      "Automated anomaly detection",
      "Team collaboration features",
      "Export to PDF/CSV/API"
    ],
    year: "2025",
    status: "live",
  },
  {
    id: "cryptoflow",
    title: "CryptoFlow",
    subtitle: "DeFi portfolio tracker",
    description: "Cross-chain DeFi portfolio manager with real-time price feeds, yield tracking, and gas optimization recommendations.",
    longDescription: "CryptoFlow aggregates data across multiple blockchains to give users a unified view of their DeFi positions. It connects to over 50 protocols and provides actionable insights on yield optimization, impermanent loss tracking, and gas cost analysis. The frontend is built with React and integrates with Web3 wallets seamlessly.",
    techStack: ["React", "Next.js", "Solidity", "ethers.js", "Node.js", "MongoDB", "WebSocket"],
    category: "Web3",
    github: "https://github.com/username/cryptoflow",
    images: [],
    features: [
      "Multi-chain portfolio aggregation",
      "Real-time price feeds via WebSocket",
      "Yield farming analytics",
      "Gas optimization engine",
      "Wallet connect integration",
      "Historical PnL tracking"
    ],
    year: "2024",
    status: "live",
  },
  {
    id: "devterm",
    title: "DevTerm",
    subtitle: "Browser-based terminal IDE",
    description: "A lightweight, browser-based terminal and code editor with Git integration, extensible via plugins, built for rapid prototyping.",
    longDescription: "DevTerm brings the power of a full development environment to the browser. It features a terminal emulator, Monaco-based code editor, file tree, and integrated Git workflows. The plugin system allows developers to extend functionality with custom commands and UI panels. It's designed to be fast, minimal, and keyboard-driven.",
    techStack: ["TypeScript", "Rust", "WebAssembly", "Monaco Editor", "xterm.js", "Express", "SQLite"],
    category: "Developer Tools",
    github: "https://github.com/username/devterm",
    liveUrl: "https://devterm.io",
    images: [],
    features: [
      "Full terminal emulator in-browser",
      "Monaco-based code editor",
      "Git integration (clone, commit, push)",
      "Plugin architecture",
      "Keyboard-first navigation",
      "Collaborative editing (beta)"
    ],
    year: "2025",
    status: "in-development",
  },
  {
    id: "pulse-cms",
    title: "Pulse CMS",
    subtitle: "Headless content management",
    description: "A headless CMS with a beautiful editing experience, GraphQL API, and automatic image optimization. Built for modern JAMstack sites.",
    longDescription: "Pulse CMS rethinks content management by providing a clean, distraction-free writing experience paired with a powerful GraphQL API. It handles image optimization, content versioning, and multi-language support out of the box. The admin panel is built with React and features a block-based editor inspired by Notion.",
    techStack: ["React", "GraphQL", "Node.js", "PostgreSQL", "AWS S3", "Tailwind CSS", "Docker"],
    category: "Full Stack",
    github: "https://github.com/username/pulse-cms",
    images: [],
    features: [
      "Block-based content editor",
      "GraphQL API with auto-generated docs",
      "Automatic image optimization",
      "Content versioning & drafts",
      "Multi-language support",
      "Webhook-based deployment triggers"
    ],
    year: "2024",
    status: "live",
  },
  {
    id: "synthwave-audio",
    title: "Synthwave Audio",
    subtitle: "Web audio visualizer",
    description: "An interactive audio visualizer using the Web Audio API and WebGL. Creates stunning real-time visual experiences synced to music.",
    longDescription: "Synthwave Audio transforms music into mesmerizing visual experiences. Using the Web Audio API for frequency analysis and Three.js for 3D rendering, it creates responsive visualizations that react to every beat and frequency. Users can choose from multiple visual presets, upload their own music, or connect to streaming services.",
    techStack: ["TypeScript", "Three.js", "Web Audio API", "WebGL", "GLSL", "Vite"],
    category: "Creative",
    github: "https://github.com/username/synthwave-audio",
    liveUrl: "https://synthwave.demo.dev",
    images: [],
    features: [
      "Real-time frequency analysis",
      "Multiple visualization presets",
      "Custom shader support (GLSL)",
      "Audio file upload & streaming",
      "Fullscreen immersive mode",
      "Screenshot & recording export"
    ],
    year: "2024",
    status: "live",
  },
  {
    id: "microlink",
    title: "Microlink",
    subtitle: "API gateway & monitoring",
    description: "A lightweight API gateway with built-in rate limiting, caching, and real-time monitoring. Designed for microservice architectures.",
    longDescription: "Microlink simplifies microservice communication by providing a single entry point with intelligent routing, rate limiting, and response caching. The dashboard offers real-time metrics, request tracing, and alerting. It's built in Go for maximum performance and can handle thousands of requests per second with minimal latency.",
    techStack: ["Go", "React", "gRPC", "Redis", "Prometheus", "Grafana", "Kubernetes"],
    category: "Backend",
    github: "https://github.com/username/microlink",
    images: [],
    features: [
      "Intelligent request routing",
      "Rate limiting & throttling",
      "Response caching layer",
      "Real-time metrics dashboard",
      "Distributed tracing",
      "Alerting & notifications"
    ],
    year: "2023",
    status: "archived",
  },
];
