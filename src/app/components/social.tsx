export function Social({
    link,
    children
}: {
    link: string;
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <a
            href={link}
            target="_blank"
            className="flex items-center gap-2 py-2 px-4 rounded-md text-blue-400 font-semibold hover:bg-blue-200/75 dark:hover:bg-blue-800/75"
        >
            {children}
        </a>
    );
}
