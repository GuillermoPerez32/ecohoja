import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import useCart from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { Head } from '@inertiajs/react';
import { Trash2Icon } from 'lucide-react';

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <>
            <Head title="Carrito" />
            <Header />
            <div className="h-screen">
                <div className="sm:px-20">
                    <div className="flex flex-col items-center p-4 py-4">
                        <h1 className="text-3xl font-semibold">Carrito</h1>
                        <div className="mt-4 space-y-4">
                            {cart.map((product) => (
                                <div key={product.id} className="flex justify-between gap-3 rounded-md border p-4">
                                    <img src={`/storage/${product.image}`} alt={product.name} className="size-20" />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <p className="text-accent-foreground font-bold">${product.price.toFixed(2)}</p>

                                        <div className="flex items-center gap-2 py-4">
                                            <div className="relative">
                                                <button
                                                    className={cn('absolute top-1/2 left-0 -translate-y-1/2 px-2 sm:px-4', {
                                                        'opacity-40': product.quantity === 1,
                                                    })}
                                                    onClick={() => decreaseQuantity(product.id, 1)}
                                                    disabled={product.quantity === 1}
                                                >
                                                    -
                                                </button>
                                                <Input
                                                    min={1}
                                                    className="max-w-[150px] px-2 text-center sm:px-0"
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
                                                    className="absolute top-1/2 right-0 -translate-y-1/2 px-2 sm:px-4"
                                                    onClick={() => increaseQuantity(product.id, 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex w-full">
                                            <button
                                                className="ml-auto"
                                                onClick={() => {
                                                    removeFromCart(product.id);
                                                }}
                                            >
                                                <Trash2Icon />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
