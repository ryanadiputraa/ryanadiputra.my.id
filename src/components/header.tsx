import Link from "next/link";

export function Header(): React.ReactNode {
    return (
        <header className="fixed top-0 left-0 px-3 sm:px-6 py-2 w-full flex justify-between">
            <Link href={"/"} className="px-2">
                <h1 className="">Ryan Adi Putra</h1>
            </Link>
        </header>
    );
}
