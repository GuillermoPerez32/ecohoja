import { CartProduct } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartState {
    cart: CartProduct[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (id: number) => void;
    decreaseQuantity: (id: number, quantity: number) => void;
    increaseQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => {
                const existingProduct = get().cart.find((p) => p.id === product.id);
                if (existingProduct) {
                    set({
                        cart: get().cart.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p)),
                    });
                } else {
                    set({ cart: [...get().cart, product] });
                }
            },
            removeFromCart: (id) => set({ cart: get().cart.filter((p) => p.id !== id) }),
            decreaseQuantity: (id, quantity) => {
                const existingProduct = get().cart.find((p) => p.id === id);
                if (existingProduct) {
                    set({
                        cart: get().cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity - quantity } : p)),
                    });
                }
            },
            increaseQuantity: (id, quantity) => {
                const existingProduct = get().cart.find((p) => p.id === id);
                if (existingProduct) {
                    set({
                        cart: get().cart.map((p) => (p.id === id ? { ...p, quantity: p.quantity + quantity } : p)),
                    });
                }
            },
            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        },
    ),
);

export default useCart;
