import React, { useState } from "react";
import { Wallet2, Hourglass, Banknote, Search, Filter, CheckCircle, Clock } from "lucide-react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const transactions = [
  { id: 1, date: "2025-03-20", type: "Deposit", amount: "100,000 FCFA", status: "Completed" },
  { id: 2, date: "2025-03-22", type: "Withdrawal", amount: "50,000 FCFA", status: "Pending" },
  { id: 3, date: "2025-03-23", type: "Deposit", amount: "200,000 FCFA", status: "Completed" },
  { id: 4, date: "2025-03-24", type: "Withdrawal", amount: "70,000 FCFA", status: "Completed" },
];

const Wallet = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

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
        <div className="flex justify-center items-center mt-16 text-3xl sm:text-4xl font-semibold">
          <h1>Afri</h1>
          <h1 className="text-primary-2">Task</h1>
          <h1>Wallet</h1>
        </div>
      </div>

      {/* Deposit & Withdraw Buttons */}
      <div className="flex flex-row justify-center text-white mt-8 gap-8 sm:gap-16">
        <button
          className="py-4 px-8 sm:px-16 bg-primary hover:bg-primary-2 rounded-lg"
          onClick={() => setShowDeposit(true)}
        >
          Deposit
        </button>
        <button
          className="py-4 px-8 sm:px-16 bg-orange-500 hover:bg-orange-400 rounded-lg"
          onClick={() => setShowWithdraw(true)}
        >
          Withdraw
        </button>
      </div>

      {/* Transaction History Section */}
      <div className="mt-10 p-6 sm:mx-52 xl:mx-80">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>

        {/* Transactions Table */}
        <div className="overflow-x-auto text-sm">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow">
            <thead className="bg-primary text-white text-left">
              <tr className="border-b">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Type</th>
                <th className="px-6 py-4 text-center">Amount</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="border-b hover:bg-gray-100 transition">
                  <td className="px-6 py-4">{txn.date}</td>
                  <td className="px-6 py-4 text-center">{txn.type}</td>
                  <td className="px-6 py-4 text-center">{txn.amount}</td>
                  <td className="px-6 py-4 flex justify-end space-x-1">
                    <span className={`flex items-center px-4 py-2 rounded-full text-white font-semibold  ${txn.status === "Completed" ? "bg-green-500" : "bg-orange-500"}`}>
                      {txn.status === "Completed" ? <CheckCircle size={16} /> : <Clock size={16} />}
                        {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      <Deposit isOpen={showDeposit} onClose={() => setShowDeposit(false)} />
      <Withdraw isOpen={showWithdraw} onClose={() => setShowWithdraw(false)} />
    </div>
  );
};

export default Wallet;
