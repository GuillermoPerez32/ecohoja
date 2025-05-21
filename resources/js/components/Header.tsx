import { Link } from '@inertiajs/react';
import CartButton from './cart-button';

const Header = () => {
    return (
        <header className="flex items-center p-4 shadow">
            <Link href={route('home')} className="flex items-center gap-2">
                <img loading="lazy" src="/favicon.png" alt="Logo" className="size-10" />
                <h1 className="text-lg font-semibold">EcoHoja</h1>
            </Link>

            <div className="ml-auto flex items-center gap-2">
                <CartButton />
            </div>
        </header>
    );
};

export default Header;
