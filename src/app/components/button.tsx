interface Props
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export function Button(props: Props) {
    return (
        <button
            {...props}
            className={`py-2 px-3 border-px border-neutral-50 rounded-sm hover:bg-base-light active:scale-95 active:brightness-95 ${props.className}`}
        >
            {props.children}
        </button>
    );
}
