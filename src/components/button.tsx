interface Props
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
}

export function Button({ children, ...props }: Props): React.ReactNode {
    return (
        <button
            {...props}
            className={`py-2 px-3 rounded-sm font-semibold border-[1px] bg-neutral-800 border-gray-700 border-solid hover:bg-black ${props.className}`}
        >
            {children}
        </button>
    );
}
