import { Project } from "@/types";
import { GITHUB_URL } from "./url";

export const projects: { [slug: string]: Project } = {
    ggen: {
        name: "ggen",
        image: "/assets/img/ggen.png",
        shortDescription:
            "A CLI for generating go project with clean predefined project structure.",
        description:
            "ggen is a CLI for generating go project, it helps automate the process of creating a new Go project with a predefined directory structure, configuration files, and third party library/package.",
        source: `${GITHUB_URL}/ggen`,
        platform: "CLI",
        stack: ["Go", "Cobra", "Bash"]
    },
    unclatter: {
        name: "unClatter",
        image: "/assets/img/unclatter.png",
        shortDescription: "Web content scrapping and bookmarking tool.",
        description:
            "unClatter is a web content scrapping and bookmarking tool, allowing users to manage essential content without distraction.",
        url: "https://unclatter.devzy.my.id",
        source: `${GITHUB_URL}/unclatter`,
        platform: "Web",
        stack: [
            "Go",
            "PostgreSQL",
            "NextJS",
            "Docker",
            "AWS ECS",
            "Oauth2",
            "Colly",
            "Gorm",
            "Typescript",
            "Tailwind CSS"
        ]
    },
    wishpr: {
        name: "Wishpr",
        image: "/assets/img/whispr.png",
        shortDescription:
            "Silent Meet application, real-time idea-sharing for collaborative brainstorming.",
        description:
            "Whispr is a Silent Meet application, a real-time idea-sharing application for collaborative brainstorming.",
        url: "https://whispr.devzy.my.id",
        source: `${GITHUB_URL}/whispr`,
        platform: "Web",
        stack: ["NestJS", "socket.io", "PostgreSQL", "NextJS", "Typescript", "Tailwind CSS"]
    },
    spotwave: {
        name: "Spotwave",
        image: "/assets/img/spotwave.png",
        shortDescription:
            "Spotify playlist downloader using Spotify, Youtube, and MP3 converter API.",
        description:
            "Spotwave is a Spotify playlist downloader using Spotify, Youtube, and MP3 converter API. It fetch user Spotify playlist, search song on Youtube, then convert and download the MP3.",
        url: "https://spotwave.devzy.my.id",
        source: `${GITHUB_URL}/spotwave`,
        platform: "Web",
        stack: [
            "Go",
            "ReactJS",
            "Fiber",
            "Spotify API",
            "Youtube API",
            "Oauth2",
            "MP3 Rapid API",
            "Typescript",
            "Tailwind CSS"
        ]
    }
};
