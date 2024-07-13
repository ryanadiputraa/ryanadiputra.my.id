import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/button";

export default function Home() {
    return (
        <main>
            <section id="about" className="flex flex-col gap-12">
                <div className="flex flex-col-reverse sm:flex-row justify-between items-center sm:items-start gap-4 sm:gap-0">
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl font-bold">Ryan Adi Putra</h1>
                        <p>Software Engineer</p>
                    </div>
                    <Image
                        src="/assets/img/ryanadiputra.png"
                        alt="Ryan Adi Putra"
                        width={80}
                        height={80}
                        className="border-solid border-2 border-white rounded-full"
                    />
                </div>
                <div className="flex flex-col items-start">
                    <SubHeader text="Work" />
                    <p className="indent-4 text-justify">
                        Software Engineer based in Indonesia, passionate about solving problems with
                        software solutions and continuously eager to learn new things. Enjoys
                        exploring new technologies and improving coding skills. When not online,
                        loves to play music 🎸.
                    </p>
                    <Link href={"/projects"} className="mt-4 self-center">
                        <Button>My Portfolio</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}

function SubHeader({ text }: { text: string }): React.ReactNode {
    return (
        <h4 className="border-solid border-b-4 border-blue-400 text-lg font-semibold mb-2">
            {text}
        </h4>
    );
}
