import Image from "next/image";

import { type Experience } from "@/types";

interface Props {
    experience: Experience;
    border?: boolean;
}

export function Experience({ experience, border }: Props): React.ReactNode {
    return (
        <div
            className={`flex flex-col gap-4 border-gray-700 ${border ? "pb-8 border-b-[1px]" : ""}`}
        >
            <div className="flex justify-between items-center">
                <div className="flex gap-2 sm:gap-4">
                    <div className="rounded-full overflow-hidden w-10 sm:w-16 h-10 sm:h-16 p-2 border-[1px] border-gray-400">
                        <Image
                            src={experience.companyLogo}
                            alt={experience.company}
                            placeholder="blur"
                            className={`w-full ${experience.invertLogoColor ? "invert" : ""}`}
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h4 className="text-base sm:text-2xl font-semibold">
                            {experience.company}
                        </h4>
                        <span className="text-sm sm:text-base text-gray-400">
                            {experience.position}
                        </span>
                    </div>
                </div>
                <span className="text-xs sm:text-base text-right text-gray-400 font-semibold">
                    {experience.date}
                </span>
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.skills.map(skill => (
                    <span
                        key={skill}
                        className="text-xs sm:text-sm bg-neutral-800 py-1 px-3 rounded-full border-[1px] border-gray-700"
                    >
                        {skill}
                    </span>
                ))}
            </div>
            <ul className="list-disc ps-4 text-gray-400">
                {experience.jobs.map(job => (
                    <li key={job}>{job}</li>
                ))}
            </ul>
        </div>
    );
}
