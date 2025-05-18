import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useCart from '@/hooks/use-cart';
import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import Markdown from 'react-markdown';

const Show = ({ product }: { product: Product }) => {
    const [quantity, setQuantity] = useState(1);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <>
            <Head title={`Producto: ${product.name}`} />
            <div className="h-screen">
                <Header />
                <div className="sm:px-20">
                    <div className="p-0 sm:flex sm:p-4">
                        <img src={`/storage/${product.image}`} alt={product.name} className="size-80 justify-self-center" />
                        <div className="flex flex-col p-4 py-4 sm:py-0">
                            <h1 className="text-3xl font-semibold">{product.name}</h1>

                            <p className="text-accent-foreground my-2 text-2xl font-semibold">${product.price.toFixed(2)}</p>

                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <button
                                        className={cn('absolute top-1/2 left-0 -translate-y-1/2 px-2 sm:px-4', {
                                            'opacity-40': quantity === 1,
                                        })}
                                        onClick={() => setQuantity(quantity - 1)}
                                        disabled={quantity === 1}
                                    >
                                        -
                                    </button>
                                    <Input
                                        min={1}
                                        className="max-w-[150px] px-2 text-center sm:px-0"
                                        value={quantity}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            if (isNaN(value)) return;

                                            if (value < 1) {
                                                setQuantity(1);
                                            } else {
                                                setQuantity(value);
                                            }
                                        }}
                                    />
                                    <button
                                        className="absolute top-1/2 right-0 -translate-y-1/2 px-2 sm:px-4"
                                        onClick={() => setQuantity(quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <Button className="w-full font-bold" onClick={handleAddToCart}>
                                    Añadir al carrito
                                </Button>
                            </div>

                            <div className="prose prose-h1:text-4xl prose-h1:font-bold prose-h2:text-2xl prose-h3:text-xl mt-4 sm:mt-auto">
                                <Markdown>{product.description}</Markdown>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold">Especificaciones / Instrucciones</h2>
                        <div className="prose prose-h1:text-4xl prose-h1:font-bold prose-h2:text-2xl prose-h3:text-xl">
                            <Markdown>{product.large_description}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Show;
