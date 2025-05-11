import Header from '@/components/Header';
import { Product } from '@/types';

const Show = ({ product }: { product: Product }) => {
    return (
        <>
            <Header />
            <div className="p-4">
                <div className="flex gap-4">
                    <img src={`/storage/${product.image}`} alt={product.name} className="size-80" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">{product.name}</h1>
                        <p>{product.description}</p>
                        <p className="mt-auto text-lg font-semibold">${product.price}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Show;
