import { Link } from '@inertiajs/react';

const Header = () => {
    return (
        <header className="border-sidebar-border/50 flex items-center border-b bg-white p-2">
            <Link href={route('home')}>
                <img src="/favicon.svg" alt="Logo" className="size-20" />
            </Link>
        </header>
    );
};

export default Header;
