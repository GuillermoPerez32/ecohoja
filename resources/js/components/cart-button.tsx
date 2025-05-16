import useCart from '@/hooks/use-cart';
import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';

const CartButton = () => {
    const { cart } = useCart();

    const count = cart.reduce((acc, product) => acc + product.quantity, 0);

    return (
        <Link href={route('cart')} className="relative">
            <ShoppingCart className="size-6" />
            <span className="bg-secondary absolute -top-3 -right-3 flex size-5 items-center justify-center rounded-full text-xs text-white">
                {count}
            </span>
        </Link>
    );
};

export default CartButton;
