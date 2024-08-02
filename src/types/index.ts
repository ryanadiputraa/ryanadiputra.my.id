import { StaticImageData } from "next/image";

export interface Experience {
    company: string;
    companyLogo: StaticImageData;
    invertLogoColor?: boolean;
    position: string;
    date: string;
    skills: string[];
    jobs: string[];
}

export interface Project {
    name: string;
    image: StaticImageData;
    description: string;
    url: string;
    source: string;
    stack: string[];
}
