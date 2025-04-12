import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Yadav",
  initials: "DV",
  url: "https://yashyadav.info",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer. I love building things and helping people. Very active on Twitter.",
  summary:
    "📍Based in India \n \n I'm a fullstack developer with 4+ years of experience in building scalable fast web apps, fine-tuned AI automations and Agentic workflows. \n \n For quick connect just drop me a Hey! on X, I'm pretty active there.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Python",
    "MongoDB",
    "Express",
    "Git",
    "Github",
    "Docker",
    "AWS",
    "CI/CD",
    "LangChain",
    "LangGraph",
    "MCP",
    "Prisma",
    "Firebase",
    "Supabase",
    "Pinecone",
    "Postman",
    "Jira",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/altairyash",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yash-yadav14/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/atomicphoenix14/",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:connect@yashyadav.info",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Deloitte",
      href: "https://deloitte.com",
      badges: [],
      location: "Hyderabad, India",
      title: "Full Stack Developer",
      logoUrl: "/deloitte.png",
      start: "Jul 2023",
      end: "Present",
      description:
        "As a fullstack developer at Deloitte, I am responsible for building and maintaining web applications using React, Next.js, Node.js, Postgres and Typescript. I took on Gen AI projects and automations using OpenAI APIs and RAG implementation. I also assisted in organizing hackathons and workshops for the team.",
    },
    {
      company: "Deloitte",
      href: "https://deloitte.com",
      badges: [],
      location: "Hyderabad, India",
      title: "React Developer Intern",
      logoUrl: "/deloitte.png",
      start: "Jan 2023",
      end: "Jul 2023",
      description:
        "As a react developer intern at Deloitte, I was responsible for developing reusable components and libraries for a B2B pharmaceutical using React, Redux, Typescript. I also worked on API integrations, creating adobe analytics triggers and captures and writing unit tests using Jest and Enzyme."
    },
    {
      company: "Freelancer",
      href: "https://freelancer.com/",
      badges: [],
      location: "Remote",
      title: "React Developer & UX Designer",
      logoUrl: "/freelancer.png",
      start: "Jan 2020",
      end: "Jan 2023",
      description:
        "As a freelance react developer and UX designer, I worked on various projects for clients across the globe. I primarily worked on designing and developing web applications. I mostly utilized pre-built UI libraries like Material UI, Tailwind CSS and Shadcn UI. For prototyping, I used Figma and Adobe XD. \n [See profile ](https://www.freelancer.in/u/yash140498) &nbsp; ⭐⭐⭐⭐⭐",
    },
  ],
  projects: [
    {
      title: "Lexi AI",
      href: "https://chatcollect.com",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "ChatGPT often gave inaccurate or outdated code examples for new tools like [Tailwind V4](https://google.com) and TanStack.\n **Lexi AI solves this.**\n It’s a ChatGPT-powered assistant that delivers **hallucination-free** code examples for setting up modern tech stacks—built specifically for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "Github API",
        "Prisma",
        "TailwindCSS",
        "Pinecone",
        "Vector Databases",
        "OpenAI",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://lexidocs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/altairyash/lexiAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      logo: "/logo_lexi.png",
    },
    {
      title: "VibeDraw",
      href: "https://draw2dev.vercel.app/",
      dates: "Feb 2025 - March 2025",
      active: true,
      description:
      "Turn rough UI sketches into production-ready code with ease. It uses **Gemini** and **DeepSeek** to generate accurate, modern components while **Firebase** powers secure auth and image storage. Upload your sketch, and VibeDraw converts it into clean code you can use right away.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase Storage",
        "Firebase Auth",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://draw2dev.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/altairyash/draw2dev",
          icon: <Icons.github className="size-3" />,
        },
      ],
      logo: "/vibedraw.png",
    },
    {
      title: "PlugGit",
      href: "https://draw2dev.vercel.app/",
      dates: "March 2025 - Working",
      active: true,
      description:
      "Coming soon... \n AI powered GitHub repository manager. It will help you manage your repositories, issues, pull requests and more using AI.",
      technologies: [
      ],
      links: [
      ],
      logo: "/pluggit.png",
    },
  ],
} as const;
