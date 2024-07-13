import { AiOutlineLink } from "react-icons/ai";

export function URL({
    href,
    children
}: {
    href: string;
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <a
            href={href}
            target="_blank"
            className="font-semibold text-blue-400 dark:text-orange-300 inline-flex items-center gap-1 hover:underline underline-offset-4"
        >
            {children}
            <AiOutlineLink />
        </a>
    );
}
