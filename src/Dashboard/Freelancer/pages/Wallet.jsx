import React, { useState } from "react";
import { Wallet2, Hourglass, Banknote, Search, Filter, CheckCircle, Clock } from "lucide-react";

const transactions = [
  { id: 1, date: "2025-03-20", type: "Deposit", amount: "100,000 FCFA", status: "Completed" },
  { id: 2, date: "2025-03-22", type: "Withdrawal", amount: "50,000 FCFA", status: "Pending" },
  { id: 3, date: "2025-03-23", type: "Deposit", amount: "200,000 FCFA", status: "Completed" },
  { id: 4, date: "2025-03-24", type: "Withdrawal", amount: "70,000 FCFA", status: "Completed" },
];

const Wallet = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredTransactions = transactions.filter(
    (txn) =>
      (filter === "All" || txn.type === filter) &&
      txn.amount.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-[95%] mx-auto pb-12">
      {/* Wallet Balance Section */}
      <div className="rounded-b-4xl text-white bg-primary p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Wallet2 size={50} className="text-primary-2 mb-2" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-1">200,000 FCFA</h1>
            <span className="text-lg text-primary-2">Total Balance</span>
          </div>
          <div className="flex flex-col items-center">
            <Hourglass size={50} className="text-primary-2 mb-2" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-1">100,000 FCFA</h1>
            <span className="text-lg text-primary-2">Pending Money</span>
          </div>
          <div className="flex flex-col items-center">
            <Banknote size={50} className="text-primary-2 mb-2" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-1">700,000 FCFA</h1>
            <span className="text-lg text-primary-2">Withdrawn</span>
          </div>
        </div>

        {/* Wallet Branding */}
        <div className="flex justify-center items-center mt-10 text-3xl sm:text-4xl font-semibold">
          <h1>Afri</h1>
          <h1 className="text-primary-2">Task</h1>
          <h1>Wallet</h1>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="mt-10 p-6 sm:mx-52">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary-2"
            />
          </div>

          <div className="relative w-full sm:w-1/3 ">
            <Filter className="absolute left-4 top-4 text-gray-400" size={20} />
            <select
              className="w-full pl-12 pr-4 py-3 border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-primary-2"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Transactions</option>
              <option value="Deposit">Deposits</option>
              <option value="Withdrawal">Withdrawals</option>
            </select>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto text-sm ">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-primary text-white text-left">
              <tr className="border-b">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b last:border-none hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-6 py-4">{txn.date}</td>
                  <td className="px-6 py-4">{txn.type}</td>
                  <td className="px-6 py-4">{txn.amount}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`flex items-center w-fit gap-2 px-4 py-2 rounded-full text-white font-semibold ${
                        txn.status === "Completed"
                          ? "bg-green-500"
                          : "bg-orange-500"
                      }`}
                    >
                      {txn.status === "Completed" ? <CheckCircle size={16} /> : <Clock size={16} />}
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredTransactions.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No transactions found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
