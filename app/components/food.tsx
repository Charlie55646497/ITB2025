"use client";
import Link from "next/link";
type FoodProps = {
  food: { id: number; name: string; price: number };
  onAddToCart: (food: { id: number; name: string; price: number }) => void;
};

export default function Food({ food, onAddToCart }: FoodProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{food.name}</h2>
      <p className="text-gray-600">Kip{food.price.toFixed(2)}</p>
      <button
        className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-md"
        onClick={() => onAddToCart(food)}
      >
        Add to Cart
      </button>
    </div>
  );
}