export function Timeline({
    year,
    children
}: {
    year: number;
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <div className="flex justify-between w-full">
            <span className="dark:text-white font-semibold flex-1">{year}</span>
            <p className="flex-[5] sm:flex-[12]">{children}</p>
        </div>
    );
}
