import { StaticImageData } from "next/image";

export type Theme = "dark" | "light";
type ProjectPlatform = "Web" | "CLI" | "Android" | "iOS" | "Windows" | "macOS" | "Linux";

export interface Project {
    name: string;
    image: StaticImageData;
    description: string;
    shortDescription: string;
    url?: string;
    source: string;
    platform: ProjectPlatform;
    stack: string[];
}
