'use client';
import Link from "next/link";
import Image from 'next/image';
import coffee4 from "./images/coffee4.jpg";

import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-blue-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-lg font-bold text-yellow-2000">Day coffee</h1>
        <div className="flex space-x-6 text-blue-1000">
          <Link href="/">Home</Link><br/>
          <Link href="/Category">Munu</Link><br/>
          <Link href="/Table">Table</Link><br/>
          <Link href="/product">Seles history</Link><br/>
          <Link href="/components">Cart</Link><br/>
          

        </div>
        <button
          className="px-4 py-2 text-pink-700 bg-pink-200 rounded-full hover:bg-pink-300"
          onClick={() => router.push('/login')}
        >
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center p-6">
        <div className="overflow-hidden rounded-3xl shadow-lg w-full max-w-4xl">
          <Image src={coffee4} alt="Image picture"
            width={200}
            height={200}
           
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
