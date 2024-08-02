import { StaticImageData } from "next/image";

export interface Project {
    name: string;
    image: StaticImageData;
    description: string;
    url: string;
    source: string;
    stack: string[];
}
