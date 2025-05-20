import { router, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useCart from '@/hooks/use-cart';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import Heading from './heading';

export default function CheckoutForm() {
    const form = useRef<HTMLFormElement>(null);
    const { cart, clearCart } = useCart();
    const { data, setData, post, processing, errors } = useForm<{
        email?: string;
        phone?: string;
        address?: string;
        products?: {
            quantity: number;
            id: number;
        }[];
    }>({
        email: '',
        phone: '',
        address: '',
        products: cart.map((cart_product) => ({
            id: cart_product.id,
            quantity: cart_product.quantity,
        })),
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        if (form.current) {
            post(route('orders.store'), {
                onSuccess: () => {
                    form.current?.reset();
                    toast.success('Pedido realizado correctamente');
                    clearCart();
                    router.visit(route('home'));
                },
            });
        }
    };

    return (
        <form ref={form} onSubmit={submit}>
            <Heading title="Realizar pedido" />
            <div className="space-y-6">
                <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} />
                </div>

                <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                        type="tel"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('phone', e.target.value)}
                    />
                    <InputError message={errors.phone} />
                </div>

                <div>
                    <Label htmlFor="address">Dirección</Label>
                    <Textarea
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('address', e.target.value)}
                    />
                    <InputError message={errors.address} />
                </div>
            </div>

            <InputError message={errors.products} />

            <div className="mt-6">
                <Button type="submit" className="w-full" disabled={processing}>
                    {processing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Realizar pedido'}
                </Button>
            </div>
        </form>
    );
}
