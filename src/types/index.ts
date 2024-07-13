export type Theme = "dark" | "light";

type ProjectPlatform = "Web" | "CLI" | "Android" | "iOS" | "Windows" | "macOS" | "Linux";

export interface Project {
    name: string;
    image: string;
    description: string;
    shortDescription: string;
    url?: string;
    source: string;
    platform: ProjectPlatform;
    stack: string[];
}
