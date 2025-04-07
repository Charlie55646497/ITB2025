"use client";
import Link from "next/link";
import { useState } from "react";
import Cart from "../components/cart";
import Food from "../components/food";

type FoodItem = {
    id: number;
    name: string;
    price: number;
};

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

const Foods: FoodItem[] = [
    { id: 1, name: " Ice Espresso", price: 45000 },
    { id: 2, name: "Macchiato", price: 40000 },
    { id: 3, name: "Americano", price: 45000 },
    { id: 4, name: "Hot Espresso", price: 45000 },
    { id: 5, name: "Flat White", price: 45000 },
    { id: 6, name: "Latte", price: 35000 },
    { id: 7, name: "Soda", price: 35000 },
    { id: 8, name: "Croissant", price: 50000 },

];



export default function AllFood() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAddToCart = (food: FoodItem) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === food.id);
            if (existingItem) {
                return prev.map((item) =>
                    item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...food, quantity: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-blue-100 p-4">
            <header className="bg-blue-300 p-4 flex justify-between items-center">

                <Link href="/">Home</Link><br/>
                <Link href="/Category">Munu</Link><br/>
                <Link href="/Table">Table</Link><br/>
                <Link href="/product">Seles history</Link><br/>
                <Link href="/components">Cart</Link><br/>
            </header>
            <div className="flex gap-8 p-8">
                <div className="w-4/3">
                    <h1 className="text-2xl font-bold mb-4"></h1>
                    <div className="grid grid-cols-4 gap-4 text-center md:grid-cols-4 sm:grid-cols-8">
                        {Foods.map((food) => (
                            <Food key={food.id} food={food} onAddToCart={handleAddToCart}/>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 text-center">
                    <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
                </div>
            </div>
        </div>
    );
}