export function Footer(): React.ReactNode {
    const now = new Date().getFullYear();
    return (
        <footer className="p-4 text-center text-sm text-gray-400">
            © {now} Ryan Adi Putra. All Rights Reserved.
        </footer>
    );
}
