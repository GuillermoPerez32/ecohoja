import Header from '@/components/Header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types';
import { Head, Link } from '@inertiajs/react';

const Index = ({ products }: { products: Product[] }) => {
    return (
        <>
            <Head title="Productos" />
            <Header />
            <div className="grid grid-cols-2 space-y-4 space-x-4 p-4 lg:grid-cols-4">
                {products.map((product) => (
                    <Link href={route('products.show', product.slug)} key={product.id}>
                        <Card className="group overflow-hidden py-0 transition-all duration-300 hover:shadow-md">
                            <AspectRatio ratio={1 / 1} className="bg-muted overflow-hidden">
                                <div className="w-full">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt={product.name}
                                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </AspectRatio>
                            <CardContent className="px-2 pb-6">
                                <h3 className="line-clamp-2 text-lg font-semibold">{product.name}</h3>
                                <p className="text-muted-foreground line-clamp-2 text-sm">{product.description}</p>
                                <div className="text-accent-foreground mt-1 text-lg font-semibold">${product.price.toFixed(2)}</div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Index;
