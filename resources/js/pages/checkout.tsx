import CheckoutForm from '@/components/checkout-form';
import useCart from '@/hooks/use-cart';
import AppLayout from '@/layouts/app-layout';
import { router } from '@inertiajs/react';
import { toast } from 'sonner';

export default function Checkout() {
    const { cart } = useCart();

    if (!cart.length) {
        toast.info('Tu carrito está vacío');
        router.visit(route('home'));
    }

    return (
        <AppLayout title="Pedido">
            <div className="mx-auto max-w-[400px]">
                <CheckoutForm />
            </div>
        </AppLayout>
    );
}
