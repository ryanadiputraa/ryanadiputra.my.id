import { StaticImageData } from "next/image";

export interface Experience {
    company: string;
    position: string;
    from: string;
    to: string;
    description: string;
    skills: string[];
    link: string;
}

export interface Project {
    name: string;
    image: StaticImageData;
    description: string;
    url: string;
    skills: string[];
}
