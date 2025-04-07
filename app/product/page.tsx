'use client';
import Link from 'next/link';
import React from 'react';

const salesData = [
  { table: 'Outdoor 1', date: '1 January 2025', time: '1:00 p.m.', amount: '100,000.00' },
  { table: 'Outdoor Outdoor1', date: '1 January 2025', time: '1:00 p.m.', amount: '100,000.00' },
  { table: 'Outdoor 1', date: '1 January 2025', time: '1:00 p.m.', amount: '100,000.00' },
  { table: 'Outdoor Outdoor1', date: '1 January 2025', time: '1:00 p.m.', amount: '100,000.00' },
  { table: 'Outdoor Outdoor1', date: '1 January 2025', time: '1:00 p.m.', amount: '100,000.00' },
  { table: 'Outdoor Outdoor1', date: '1 January 2025', time: '1:00 p.m.', amount: '100,000.00' },
];

export default function SalesHistory() {
  return (
    <div className="min-h-screen bg-blue-200 p-6">
      <div className="bg-blue-500 text-white p-4 text-lg font-bold rounded-t-md flex justify-between">
        <h1>Sales history</h1>
      
        <Link href="/">Home</Link><br/>
        <Link href="/Category">Munu</Link><br/>
        <Link href="/Table">Table</Link><br/>
        <Link href="/product">Seles history</Link><br/>
        <Link href="/foods">Cart</Link><br/>
      </div>
      <div className="bg-white shadow-md rounded-b-md overflow-hidden">
        {salesData.map((sale, index) => (
          <div key={index} className="border-b p-4 flex justify-between items-center">
            <div className="text-gray-800 font-medium">{sale.table}</div>
            <div className="text-gray-600 text-sm">
              <div>{sale.date}</div>
              <div>{sale.time}</div>
            </div>
            <div className="text-gray-800 font-semibold">{sale.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
