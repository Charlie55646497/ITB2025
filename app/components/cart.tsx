"use client";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

type CartProps = {
    cartItems: CartItem[];
    onRemoveFromCart: (id: number) => void;
};

export default function Cart({ cartItems, onRemoveFromCart }: CartProps) {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">No item in cart</p>
            ) : (
                <>
                    <ul className="mt-4 space-y-2">
                        {cartItems.map((item) => (
                            <li key={item.id} className="flex justify-between items-center p-2 border-b">
                                <span>
                                    {item.name} - Kip{item.price.toFixed(2)} x {item.quantity}
                                </span>
                                <button
                                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md"
                                    onClick={() => onRemoveFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t">
                        <p className="text-lg font-semibold">
                            Total: kip{totalAmount.toFixed(2)}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}