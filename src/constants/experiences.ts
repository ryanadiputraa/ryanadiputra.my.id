import { Experience } from "@/types";

import garenaLogo from "@/assets/img/garena.png";
import dicodingLogo from "@/assets/img/dicoding.png";
import glintsLogo from "@/assets/img/glints.png";

export const experiences: Experience[] = [
    {
        company: "Garena Indonesia",
        companyLogo: garenaLogo,
        position: "Frontend Engineer",
        date: "Sep 2022 - present",
        skills: ["ReactJS", "Micro Fronted", "Redux", "SCSS", "Javascript"],
        jobs: [
            "Developed multi-regional FreeFire, CODM, AoV in-game web events.",
            "Refactored and Maintained AoV Star League e-Sports Website.",
            "Integrate micro fronted components into new & existing code base."
        ]
    },
    {
        company: "Dicoding (Kampus Merdeka)",
        companyLogo: dicodingLogo,
        invertLogoColor: true,
        position: "Backend & Mobile Dev",
        date: "Feb - Aug 2022",
        skills: ["NodeJS", "Flutter", "MongoDB", "expressJS", "Typescript"],
        jobs: [
            "Built multi-platform (iOS & Android) mobile app to simplify shopping on offline stores by developing shop items catalog & management.",
            "Developed HTTP Server to handle stores data & generate unique QR Code for each store."
        ]
    },
    {
        company: "Glints (Kampus Merdeka)",
        companyLogo: glintsLogo,
        invertLogoColor: true,
        position: "International Internship Student",
        date: "Sep 2021 - Feb 2022",
        skills: ["ReactJS", "NextJS", "Styled-Components", "Material UI"],
        jobs: [
            "Developed stock management system as learning & collaborative project within a team & guided by a Senior Engineer Mentor.",
            "Improved code quality by involved in code reviews and One-on-One mentoring session."
        ]
    }
];
