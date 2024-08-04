interface Props
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {}

export function ExternalLink(props: Props): React.ReactNode {
    return (
        <a
            target="_blank"
            {...props}
            className={`text-neutral-50 hover:text-primary font-normal ${props.className}`}
        >
            {props.children}
        </a>
    );
}
