import { Experience } from "@/types";
import { GARENA_URL } from "./url";

export const START_YEAR = 2022;

// TODO: exp description & link
export const experiences: Experience[] = [
    {
        company: "Garena Indonesia",
        position: "Frontend Engineer",
        from: "SEP 2022",
        to: "PRESENT",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non dui tortor. Suspendisse placerat efficitur felis. Sed maximus lorem nec ex ultrices sagittis. Pellentesque quis nibh eget massa tempus dapibus. Praesent sed tortor magna. Nulla mattis sollicitudin ante pretium luctus.",
        skills: ["ReactJS", "Micro Fronted", "Redux", "SCSS", "Javascript"],
        link: GARENA_URL
    },
    {
        company: "Dicoding (Kampus Merdeka)",
        position: "Backend & Mobile Dev",
        from: "FEB",
        to: "Aug 2022",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non dui tortor. Suspendisse placerat efficitur felis. Sed maximus lorem nec ex ultrices sagittis. Pellentesque quis nibh eget massa tempus dapibus. Praesent sed tortor magna. Nulla mattis sollicitudin ante pretium luctus.",
        skills: ["NodeJS", "Flutter", "MongoDB", "expressJS", "Typescript"],
        link: ""
    },
    {
        company: "Glints (Kampus Merdeka)",
        position: "International Internship Student",
        from: "2021",
        to: "2022",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non dui tortor. Suspendisse placerat efficitur felis. Sed maximus lorem nec ex ultrices sagittis. Pellentesque quis nibh eget massa tempus dapibus. Praesent sed tortor magna. Nulla mattis sollicitudin ante pretium luctus.",
        skills: ["ReactJS", "NextJS", "Styled-Components", "Material UI"],
        link: ""
    }
];
