import Header from '@/components/Header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';

const Index = ({ products }: { products: Product[] }) => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-2 space-y-4 space-x-4 p-4 lg:grid-cols-4">
                {products.map((product) => (
                    <Link href={route('products.show', product.id)}>
                        <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
                            <div className="p-2">
                                <AspectRatio ratio={1 / 1} className="bg-muted overflow-hidden rounded-md">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </AspectRatio>
                            </div>
                            <CardContent className="p-4 pt-2">
                                <h3 className="line-clamp-2 text-lg font-medium">{product.name}</h3>
                                <div className="mt-1 text-lg font-semibold">${product.price.toFixed(2)}</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Index;
