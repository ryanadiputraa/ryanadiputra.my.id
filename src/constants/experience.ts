import { Experience } from "@/types";
import { DICODING_URL, GARENA_URL, GLINTS_URL } from "./url";

export const START_YEAR = 2022;

export const experiences: Experience[] = [
    {
        company: "Garena Indonesia",
        position: "Frontend Engineer",
        from: "SEP 2022",
        to: "PRESENT",
        description:
            "Developed multi-regional FreeFire, CODM, and AoV in-game web events, including E-Sports landing and information pages. Worked closely with Game Operation teams, including Backend, Designers, and Project Managers, to improve user engagement and in-game purchases.",
        skills: ["ReactJS", "Micro Fronted", "Redux", "SCSS", "Javascript"],
        link: GARENA_URL
    },
    {
        company: "Dicoding (Kampus Merdeka)",
        position: "Backend & Mobile Dev",
        from: "FEB",
        to: "Aug 2022",
        description:
            "Built a multi-platform (iOS and Android) mobile app to simplify shopping in offline stores by developing a shop items catalog and management system. Developed an HTTP server to handle store data and generate unique QR codes for each store.",
        skills: ["NodeJS", "Flutter", "MongoDB", "ExpressJS", "Typescript"],
        link: DICODING_URL
    },
    {
        company: "Glints (Kampus Merdeka)",
        position: "International Internship Student",
        from: "2021",
        to: "2022",
        description:
            "Developed a stock management system as a learning and collaborative project within a team, guided by a Senior Engineer Mentor. Improved code quality by participating in code reviews and one-on-one mentoring sessions.",
        skills: ["ReactJS", "NextJS", "Styled-Components", "Material UI"],
        link: GLINTS_URL
    }
];
