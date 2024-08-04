interface Props
    extends React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    > {}

export function ExternalLink(props: Props): React.ReactNode {
    return (
        <a {...props} className={`text-neutral-50 font-normal ${props.className}`}>
            {props.children}
        </a>
    );
}
