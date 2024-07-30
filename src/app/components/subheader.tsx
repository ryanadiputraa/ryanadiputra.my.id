export function SubHeader({ text }: { text: string }): React.ReactNode {
    return (
        <h4 className="text-lg dark:text-white font-semibold mb-2">
            {text}
            <div className="h-1 w-full bg-blue-400 rounded-md" />
        </h4>
    );
}
