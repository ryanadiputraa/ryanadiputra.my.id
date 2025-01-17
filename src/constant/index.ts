import ggen from "@/assets/img/ggen.png";
import spotwave from "@/assets/img/spotwave.png";
import unclatter from "@/assets/img/unclatter.png";
import whispr from "@/assets/img/whispr.png";

export const GITHUB_URL = "https://github.com/ryanadiputraa/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ryanadiputraa";
export const X_URL = "https://x.com/ryanadiputra_";
export const INSTAGRAM_URL = "https://instagram.com/ryanaputra_";

export const experiences = [
  {
    company: "Garena Indonesia",
    role: "Frontend Engineer",
    date: "Sep 2022 - Present",
    description:
      "Work with regional and cross-regional teams to develop in-game web events to increase user engagement and revenue. Create and maintain micro frontend components to reduce common bugs/issues and shorten the development cycle for each web event.",
  },
  {
    company: "Dicoding Academy",
    role: "Multi-Platform and Backend",
    date: "Feb - Aug 2022",
    description:
      "Developed a multi-platform mobile app using to help shopping items on physical stores by scanning QR Code that generated from backend service. Improve soft and hard skills as a software engineer by learning from Tech and Soft Skills sessions held by the Dicoding Academy team",
  },
  {
    company: "Glints Academy",
    role: "International Internship Student",
    date: "Sep 2021 - Feb 2022",
    description:
      "Developed a web application to learn to work in a team and improve code quality by being involved in code review with a mentor, improved soft and hard skills as a software engineer by exploring various technologies and its best practices during one-on-one sessions with a mentor and Career Preparation series from Glints Academy",
  },
];

export const projects = [
  {
    name: "ggen",
    description: "CLI for generating Go HTTP server project.",
    tech: ["Go", "AWS S3", "Bash"],
    github: "https://github.com/ryanadiputraa/ggen",
    preview: ggen,
  },
  {
    name: "Spotwave",
    description:
      "Web application to download your Spotify playlist using Spotify Web API.",
    tech: ["Go", "ReactJS", "Tailwind CSS"],
    github: "https://github.com/ryanadiputraa/spotwave",
    preview: spotwave,
  },
  {
    name: "unClatter",
    description:
      "Article bookmarking tool that also removes distractions like ads and popups.",
    tech: ["Go", "PostgreSQL", "AWS ECS", "NextJS", "Tailwind CSS"],
    github: "https://github.com/ryanadiputraa/unclatter",
    preview: unclatter,
  },
  {
    name: "Whispr",
    description: "Silent meet web application.",
    tech: ["NestJS", "MySQL", "NextJS", "Tailwind CSS"],
    github: "https://github.com/ryanadiputraa/whispr",
    preview: whispr,
  },
];
