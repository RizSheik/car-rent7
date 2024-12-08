"use client";

import Image from "next/image";

const transactions = [
  {
    id: 1,
    car: "Nissan GT-R",
    type: "Sport Car",
    date: "20 July",
    amount: 80.0,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    car: "Koenigsegg",
    type: "Sport Car",
    date: "19 July",
    amount: 99.0,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    car: "Rolls-Royce",
    type: "Sport Car",
    date: "18 July",
    amount: 96.0,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    car: "CR-V",
    type: "SUV",
    date: "17 July",
    amount: 80.0,
    image: "/placeholder.svg",
  },
];

export function RecentTransactions() {
  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >
            <div className="flex items-center gap-4">
              <Image
                src={transaction.image}
                alt={transaction.car}
                width={64}
                height={64}
                className="rounded-lg"
              />
              <div>
                <div className="font-semibold text-gray-800">{transaction.car}</div>
                <div className="text-sm text-gray-500">{transaction.type}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-800">${transaction.amount.toFixed(2)}</div>
              <div className="text-sm text-gray-500">{transaction.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
