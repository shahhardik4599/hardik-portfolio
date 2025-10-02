export const portfolioData = {
  featuredProjects: [
    {
      id: "legaldocparser",
      title: "LegalDocParser",
      subtitle: "AI-Powered Document Assistant",
      description:
        "Intelligent field detection & insertion assistant using React.js, LangChain, OpenAI API, and PyMuPDF. Reduces manual review by 80%.",
      imageUrl: "/legalDocParser.png",
      badge: "FEATURED",
      rating: 4.9,
      year: "2024",
      duration: "3 months",
      tags: ["React.js", "LangChain", "OpenAI", "Python"],
      href: "https://jazzy-flan-794253.netlify.app/",
      highlights: [
        "Ingestion pipeline for PDF/DOCX/TXT with OCR pre-processing.",
        "Chat-driven field completion that outputs ready-to-download DOCX/PDF.",
      ]
    },
    {
      id: "social-platform",
      title: "Decentralized Social Platform",
      subtitle: "NFT Integration",
      description:
        "Built decentralized social/NFT platform via Whisper Chain & NFTorNot with Lens Protocol and RainbowKit integration.",
      imageUrl: "/nftOrNot.png",
      badge: "WEB3",
      rating: 4.6,
      year: "2023",
      duration: "5 months",
      tags: ["Blockchain", "NFT", "React", "Web3"],
      href: "https://github.com/NFTorNOT",
      highlights: [
        "Daily AI-image themes with community voting; top pick highlighted as 'NFT of the day'.",
        "Lens Protocol sign-in and collection mechanics to support creators.",
        "Integrated Lens Protocol, Lens GraphQL, and wallet connectors (MetaMask, Coinbase).",
        "Collaborated across product/design to align token-gated UX.",
      ]
    },
    {
      id: "collaboration-tool",
      title: "Real-time Collaboration",
      subtitle: "Thursday.social",
      description:
        "Built real-time audio/video collaboration platform using AWS Chime with modular APIs and improved engagement by 25%.",
      imageUrl: "/thursdaySocial.png",
      badge: "REAL-TIME",
      rating: 4.5,
      year: "2023",
      duration: "6 months",
      tags: ["AWS Chime", "Node.js", "React"],
      href: "https://thursday.social",
      highlights: [
        "Modular user/meeting APIs; legacy refactor with unit tests for maintainability.",
        "9+ small-group mixers with randomized rounds (Charades, Trivia, Would You Rather, 2 Truths & a Lie, etc.)",
        "AI-enabled Doodle Race, where players draw while an on-screen model guesses sketches in real time."

      ]
    },
    {
      id: "api-assistant",
      title: "API Documentation Assistant",
      subtitle: "ADA Chatbot",
      description:
        "GPT-4 powered API documentation assistant with Webpack and EJS, improving developer productivity by 25%.",
      imageUrl: "/api-documentation-chatbot-interface.jpg",
      badge: "AI-POWERED",
      rating: 4.7,
      year: "2024",
      duration: "2 months",
      tags: ["GPT-4", "Webpack", "EJS", "LlamaCpp"],
      href: "https://github.com/shahhardik4599/api-doc-fe",
      highlights: [
        "Natural-language queries over API docs with retrieval and summarization.",
        "Privacy-first option using local models (GPT4All/LlamaCpp).",
        "Configurable indexing pipeline for new specs and changelogs."
      ]
    },
    {
      id: "task-scheduler",
      title: "Distributed Task Scheduler",
      subtitle: "Resource Manager",
      description:
        "Kubernetes-based distributed task scheduler across 10+ nodes, improving efficiency by 25% with Hadoop + Spark pipeline.",
      imageUrl: "/distributed-computing-dashboard-with-nodes-and-tas.jpg",
      badge: "SCALABLE",
      rating: 4.8,
      year: "2024",
      duration: "4 months",
      tags: ["Kubernetes", "Docker", "Hadoop", "Spark"],
      href: "",
      highlights: [
        "Queue-backed orchestration (e.g., RabbitMQ) for fair scheduling and back-pressure.",
        "Post-processing analytics in Spark reduced E2E latency by ~20% and boosted throughput ~30%.",
        "Health checks, autoscaling, and canary rollouts for safer deploys."
      ]
    },
    {
      id: "maticrobots-site",
      title: "Matic Robots Website",
      subtitle: "High-performance Frontend",
      description:
        "Shipped a fast, responsive marketing site using Next.js, React, TanStack Query, and Suspense; improved page-load by ~25% and release cadence by 80%.",
      imageUrl: "/maticRobot.png",
      badge: "FRONTEND",
      rating: 4.6,
      year: "2023",
      duration: "4 months",
      tags: ["Next.js", "React", "TypeScript", "Tailwind", "TanStack Query"],
      href: "https://maticrobots.com",
      highlights: [
        "Server-aware data fetching with Suspense and caching.",
        "Bundle and image optimizations; CLS/LCP tuning.",
        "Content workflow enabling rapid non-engineer updates."
      ]
    },
    {
      id: "truesparrow-site",
      title: "True Sparrow Website",
      subtitle: "Frontend Engineering",
      description:
        "Built and refactored features across the company site with modern React + Next.js patterns, unit tests, and CI/CD hardening.",
      imageUrl: "/trueSparrow.png",
      badge: "FRONTEND",
      rating: 4.6,
      year: "2023",
      duration: "6 months",
      tags: ["Next.js", "React", "Node.js", "CI/CD", "Testing"],
      href: "https://truesparrow.com",
      highlights: [
        "Added GraphQL/REST integrations and data-layer consistency checks.",
        "Hardened CI with GitHub Actions, Docker builds, and health probes.",
        "Improved maintainability via design-system components and tests."
      ]
    }
  ],

  workExperience: [
    {
      id: "applied-materials",
      title: "Applied Materials",
      subtitle: "Machine Learning Intern",
      description:
        "Engineered AI/ML models on purchase-history data, applied association-rule mining, and built RAG pipeline with 2x revenue impact.",
      imageUrl: "/applied-materials-semiconductor-manufacturing-faci.jpg",
      badge: "CURRENT",
      rating: 5.0,
      year: "2025",
      duration: "6 months",
      tags: ["Python", "ML", "RAG", "Tableau"],
      href: ""
    },
    {
      id: "scu-ta",
      title: "Santa Clara University",
      subtitle: "Teaching Assistant",
      description:
        "Supported 50+ students in Java OOP and AWS Cloud Computing labs, ensuring clean coding practices and modern workflows.",
      imageUrl: "/university-computer-science-classroom-with-student.jpg",
      badge: "EDUCATION",
      rating: 4.9,
      year: "2024",
      duration: "6 months",
      tags: ["Java", "AWS", "Teaching", "Cloud"],
      href: ""
    },
    {
      id: "true-sparrow",
      title: "True Sparrow",
      subtitle: "Software Engineer",
      description:
        "Shipped full-stack features using React, Next.js, Node.js. Built real-time collaboration tools and CI/CD pipelines.",
      imageUrl: "/modern-software-development-office-with-multiple-m.jpg",
      badge: "FULL-STACK",
      rating: 4.8,
      year: "2022-2023",
      duration: "2 years",
      tags: ["React", "Next.js", "Node.js", "AWS"],
      href: ""
    }
  ],

  technicalSkills: [
    {
      id: "programming",
      title: "Programming Languages",
      subtitle: "Core Development",
      description: "Expert in C/C++, Java, Python, JavaScript, TypeScript with 5+ years of hands-on experience.",
      imageUrl: "/programming-code-editor-with-multiple-languages.jpg",
      badge: "EXPERT",
      rating: 4.9,
      year: "2018-2025",
      duration: "7 years",
      tags: ["C/C++", "Java", "Python", "JavaScript"],
      href: ""
    },
    {
      id: "web-tech",
      title: "Web Technologies",
      subtitle: "Full-Stack Development",
      description:
        "Advanced skills in React, Next.js, Angular, Node.js, Express.js, Spring Boot, and modern web frameworks.",
      imageUrl: "/webDevelopment.jpg",
      badge: "ADVANCED",
      rating: 4.8,
      year: "2020-2025",
      duration: "5 years",
      tags: ["React", "Next.js", "Node.js", "GraphQL"],
      href: ""
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      subtitle: "Intelligent Systems",
      description: "Specialized in LLMs, LangChain, RAG, Vector Databases, scikit-learn, and prompt engineering.",
      imageUrl: "/ai-machine-learning-neural-network-visualization.jpg",
      badge: "SPECIALIST",
      rating: 4.9,
      year: "2023-2025",
      duration: "2 years",
      tags: ["LLMs", "LangChain", "RAG", "ML"],
      href: ""
    },
    {
      id: "cloud-infra",
      title: "Cloud & Infrastructure",
      subtitle: "DevOps & Deployment",
      description: "Proficient in GCP, AWS, Docker, Kubernetes, Terraform with hands-on deployment experience.",
      imageUrl: "/cloudImage.jpeg",
      badge: "DEVOPS",
      rating: 4.7,
      year: "2021-2025",
      duration: "4 years",
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      href: ""
    },
    {
      id: "databases",
      title: "Database Systems",
      subtitle: "Data Management",
      description: "Experience with SQL Server, MongoDB, MySQL, PostgreSQL for scalable data solutions.",
      imageUrl: "/dataBase.jpg",
      badge: "DATA",
      rating: 4.6,
      year: "2019-2025",
      duration: "6 years",
      tags: ["SQL", "MongoDB", "PostgreSQL", "MySQL"],
      href: ""
    }
  ],

  recentWork: [
    {
      id: "ml-models",
      title: "Purchase History ML Models",
      subtitle: "Applied Materials Project",
      description:
        "Built association-rule mining models with FP-Growth/Apriori algorithms for high-lift part pairings.",
      imageUrl: "/machine-learning-data-visualization-charts-and-gra.jpg",
      badge: "ML",
      rating: 5.0,
      year: "2025",
      duration: "Current",
      tags: ["Python", "ML", "Data Mining"],
      href: ""
    },
    {
      id: "rag-pipeline",
      title: "RAG Pipeline System",
      subtitle: "Semantic Query Engine",
      description: "Converted mined rules into natural-language facts with vector database and OpenAI API integration.",
      imageUrl: "/rag-pipeline-architecture-diagram-with-vector-data.jpg",
      badge: "AI",
      rating: 4.9,
      year: "2025",
      duration: "Current",
      tags: ["RAG", "OpenAI", "Vector DB"],
      href: ""
    },
    {
      id: "tableau-dashboards",
      title: "Analytics Dashboards",
      subtitle: "Business Intelligence",
      description: "Built Tableau and Python dashboards for inventory KPIs, reducing time-to-decision by 60%.",
      imageUrl: "/business-intelligence-dashboard-with-charts-and-kp.jpg",
      badge: "BI",
      rating: 4.8,
      year: "2025",
      duration: "Current",
      tags: ["Tableau", "Python", "Analytics"],
      href: ""
    },
    {
      id: "ci-cd-pipeline",
      title: "CI/CD Automation",
      subtitle: "DevOps Pipeline",
      description: "Implemented GitHub Actions CI/CD with Docker deployments to AWS, reducing release time by 60%.",
      imageUrl: "/CICDPipeline.png",
      badge: "DEVOPS",
      rating: 4.7,
      year: "2023",
      duration: "Completed",
      tags: ["GitHub Actions", "Docker", "AWS"],
      href: ""
    }
  ],

  education: [
    {
      id: "scu-ms",
      title: "Santa Clara University",
      subtitle: "Master of Science in Information Systems",
      description: "GPA: 3.857/4. Coursework in OOP, Cloud Computing, Data Analytics, DBMS, Deep Learning, NLP.",
      imageUrl: "/SantaClaraUniversityLogo.png",
      badge: "CURRENT",
      rating: "3.857/4",
      year: "2024-2025",
      duration: "2 years",
      tags: ["MS", "Information Systems", "AI/ML"],
      href: "/education"
    },
    {
      id: "gtu-be",
      title: "Gujarat Technological University",
      subtitle: "Bachelor of Engineering, Computer Science",
      description: "GPA: 3.97/4. Coursework in DSA, Software Engineering, Web Programming, Algorithms, OOP, ML.",
      imageUrl: "/GTULogo.png",
      badge: "COMPLETED",
      rating: "3.97/4",
      year: "2018-2022",
      duration: "4 years",
      tags: ["BE", "Computer Science", "Engineering"],
      href: "/education"
    }
  ],

  popularNow: [
    {
      id: "next-js-projects",
      title: "Next.js Applications",
      subtitle: "Modern Web Development",
      description: "Full-stack applications built with Next.js, featuring server-side rendering and API routes.",
      imageUrl: "/nextjs-application-development-interface.jpg",
      badge: "TRENDING",
      rating: 4.8,
      year: "2023-2025",
      duration: "Ongoing",
      tags: ["Next.js", "React", "TypeScript"],
      href: ""
    },
    {
      id: "python-automation",
      title: "Python Automation",
      subtitle: "Scripting & Data Processing",
      description: "Automated workflows and data processing scripts using Python with pandas and scikit-learn.",
      imageUrl: "/python-automation-scripts-and-data-processing.jpg",
      badge: "POPULAR",
      rating: 4.7,
      year: "2020-2025",
      duration: "5 years",
      tags: ["Python", "Automation", "Data"],
      href: ""
    },
    {
      id: "aws-services",
      title: "AWS Cloud Services",
      subtitle: "Cloud Architecture",
      description: "Hands-on experience with Lambda, S3, EC2, CloudWatch, EventBridge for scalable solutions.",
      imageUrl: "/aws-cloud-services-architecture-diagram.jpg",
      badge: "CLOUD",
      rating: 4.6,
      year: "2022-2025",
      duration: "3 years",
      tags: ["AWS", "Lambda", "S3", "EC2"],
      href: ""
    }
  ]
};
