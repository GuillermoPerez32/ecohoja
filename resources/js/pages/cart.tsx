import CheckoutForm from '@/components/checkout-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCart from '@/hooks/use-cart';
import AppLayout from '@/layouts/app-layout';
import { cn } from '@/lib/utils';
import { Link, router } from '@inertiajs/react';
import { Trash2Icon } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <AppLayout title="Carrito">
            <div className="flex flex-col p-10 md:flex-row">
                <div className="mx-auto md:px-20">
                    <div className="flex flex-col items-center p-4 py-4">
                        <h1 className="text-3xl font-semibold">Carrito</h1>
                        {total ? (
                            <>
                                <p className="my-4 flex space-x-2 text-lg font-semibold">
                                    <span>Total:</span>
                                    <span className="text-accent-foreground font-bold">${total.toFixed(2)}</span>
                                </p>
                                <Button
                                    className="block w-full font-bold md:hidden"
                                    onClick={() => {
                                        router.visit(route('checkout'));
                                    }}
                                >
                                    Realizar pedido
                                </Button>
                                <div className="my-4 space-y-4">
                                    {cart.map((product) => (
                                        <div key={product.id} className="flex justify-between gap-3 rounded-md border p-4">
                                            <img src={`/storage/${product.image}`} alt={product.name} className="size-20" />
                                            <div className="flex-1">
                                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                                <p className="space-x-3">
                                                    <span className="mt-2 font-bold">${product.price.toFixed(2)}</span>
                                                    <span className="text-muted-foreground"> c/u</span>
                                                </p>

                                                <div className="flex items-center gap-2 py-4">
                                                    <div className="relative">
                                                        <button
                                                            className={cn('absolute top-1/2 left-0 -translate-y-1/2 px-2 md:px-4', {
                                                                'opacity-40': product.quantity === 1,
                                                            })}
                                                            onClick={() => decreaseQuantity(product.id, 1)}
                                                            disabled={product.quantity === 1}
                                                        >
                                                            -
                                                        </button>
                                                        <Input
                                                            min={1}
                                                            className="max-w-[150px] px-2 text-center md:px-0"
                                                            value={product.quantity}
                                                            disabled
                                                            onChange={(e) => {
                                                                const value = Number(e.target.value);
                                                                if (isNaN(value)) return;

                                                                if (value < 1) {
                                                                    decreaseQuantity(product.id, 1);
                                                                } else {
                                                                    increaseQuantity(product.id, value);
                                                                }
                                                            }}
                                                        />
                                                        <button
                                                            className="absolute top-1/2 right-0 -translate-y-1/2 px-2 md:px-4"
                                                            onClick={() => increaseQuantity(product.id, 1)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="space-x-2">
                                                    <span className="text-muted-foreground font-semibold">Total:</span>
                                                    <span className="text-accent-foreground font-bold">
                                                        ${(product.price * product.quantity).toFixed(2)}
                                                    </span>
                                                </p>
                                                <div className="flex w-full">
                                                    <button
                                                        className="ml-auto"
                                                        onClick={() => {
                                                            removeFromCart(product.id);
                                                        }}
                                                    >
                                                        <Trash2Icon className="text-muted-foreground size-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <p className="text-muted-foreground mt-10 text-center">
                                Tu carrito está vacío. <br />
                                <Link href={route('home')} className="text-accent-foreground font-bold hover:underline">
                                    Ver productos
                                </Link>
                            </p>
                        )}
                    </div>
                </div>
                <div className="ml-auto hidden border-l p-20 md:block">
                    <CheckoutForm />
                </div>
            </div>
        </AppLayout>
    );
};

export default Cart;
