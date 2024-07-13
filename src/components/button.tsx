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
            className={`py-2 px-4 rounded-md font-semibold bg-blue-400 text-neutral-50 active:scale-95 active:brightness-95 ${props.className}`}
        >
            {children}
        </button>
    );
}
