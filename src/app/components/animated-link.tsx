import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  label: string;
  href: string;
  className?: string;
}

export function AnimatedLink({ label, href, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`self-start flex items-center gap-4 pr-8 ${className}`}
    >
      {label} <FaArrowRight className="size-6 animate-move-right-return" />
    </Link>
  );
}
