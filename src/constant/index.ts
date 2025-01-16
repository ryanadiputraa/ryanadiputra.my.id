import ggen from "@/assets/img/ggen.png"
import unclatter from "@/assets/img/unclatter.png"
import whispr from "@/assets/img/whispr.png"
import spotwave from "@/assets/img/spotwave.png"

export const GITHUB_URL = "https://github.com/ryanadiputraa/"
export const LINKEDIN_URL = "https://www.linkedin.com/in/ryanadiputraa"
export const X_URL = "https://x.com/ryanadiputra_"
export const INSTAGRAM_URL = "https://instagram.com/ryanaputra_"

export const experiences = [
  {
    company: "Garena Indonesia",
    role: "Frontend Engineer",
    date: "Sep 2022 - Present",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and "
  },
  {
    company: "Garena Indonesia",
    role: "Frontend Engineer",
    date: "Sep 2021 - Sep 2022",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and "
  }
]

export const projects = [
  {
    name: "ggen",
    description: "CLI for generating Go HTTP server project, it helps automate the process of creating a new Go project with a predefined directory structure, configuration files, and minimal third party library/package.",
    tech: ["Go", "AWS S3", "Bash"],
    github: "https://github.com/ryanadiputraa/ggen",
    preview: ggen,
  },
  {
    name: "unClatter",
    description: "Article bookmarking tool that also removes distractions like ads and popups. It offers a clean reading experience, allowing users to focus solely on the essential content.",
    tech: ["Go", "PostgreSQL", "AWS ECS", "NextJS", "Tailwind CSS"],
    github: "https://github.com/ryanadiputraa/unclatter",
    url: "https://unclatter.devzy.my.id",
    preview: unclatter,
  },
  {
    name: "spotwave",
    description: "Web application to download your Spotify playlist using Spotify Web API.",
    tech: ["Go", "ReactJS", "Tailwind CSS"],
    github: "https://github.com/ryanadiputraa/spotwave",
    url: "https://spotwave.devzy.my.id",
    preview: spotwave,
  },
  {
    name: "Whispr",
    description: "Silent meet web application. Collaborate ideas in realtime during meeting session.",
    tech: ["NestJS", "MySQL", "NextJS", "Tailwind CSS"],
    github: "https://github.com/ryanadiputraa/whispr",
    url: "https://whispr.devzy.my.id",
    preview: whispr,
  },
]
