import { Project } from "@/types";
import { GITHUB_URL } from "./url";

import ggenPreview from "@/assets/img/ggen.png";
import unClatterPreview from "@/assets/img/unclatter.png";
import whisprPreview from "@/assets/img/whispr.png";
import spotwavePreview from "@/assets/img/spotwave.png";

export const projects: { [slug: string]: Project } = {
    ggen: {
        name: "ggen",
        image: ggenPreview,
        description:
            "ggen is a CLI for generating go project, it helps automate the process of creating a new Go project with a predefined directory structure, configuration files, and third party library/package.",
        url: `${GITHUB_URL}/ggen/`,
        source: `${GITHUB_URL}/ggen`,
        stack: ["Go", "AWS S3"]
    },
    unclatter: {
        name: "unClatter",
        image: unClatterPreview,
        description:
            "unClatter is a web content scrapping and bookmarking tool, allowing users to manage essential content without distraction.",
        url: "https://unclatter.devzy.my.id",
        source: `${GITHUB_URL}/unclatter`,
        stack: [
            "Go",
            "PostgreSQL",
            "NextJS",
            "Docker",
            "AWS ECS",
            "Oauth2",
            "Typescript",
            "Tailwind CSS"
        ]
    },
    wishpr: {
        name: "Wishpr",
        image: whisprPreview,
        description:
            "Whispr is a Silent Meet application, a real-time idea-sharing application for collaborative brainstorming.",
        url: "https://whispr.devzy.my.id",
        source: `${GITHUB_URL}/whispr`,
        stack: ["NestJS", "socket.io", "MySQL", "NextJS", "Typescript", "Tailwind CSS"]
    },
    spotwave: {
        name: "Spotwave",
        image: spotwavePreview,
        description:
            "Spotwave is a Spotify playlist downloader using Spotify, Youtube, and MP3 converter API. It fetch user Spotify playlist, search song on Youtube, then convert and download the MP3.",
        url: "https://spotwave.devzy.my.id",
        source: `${GITHUB_URL}/spotwave`,
        stack: [
            "Go",
            "ReactJS",
            "Spotify API",
            "Youtube API",
            "Oauth2",
            "MP3 Rapid API",
            "Typescript",
            "Tailwind CSS"
        ]
    }
};
