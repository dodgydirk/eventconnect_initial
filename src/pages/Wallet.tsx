import React, { useState } from 'react';
import { TopNav } from '../components/TopNav';
import { TokenActionModal } from '../components/TokenActions';
import { useTokenStore } from '../store/useTokenStore';
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';

export function Wallet() {
  const { balance, transactions } = useTokenStore();
  const [showEarnModal, setShowEarnModal] = useState(false);
  const [showUseModal, setShowUseModal] = useState(false);

  return (
    <div className="max-w-md mx-auto px-6 pt-6">
      <TopNav title="Wallet" />

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-6 mb-8">
        <h2 className="text-lg font-medium mb-2">Total Balance</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">{balance.toFixed(2)}</span>
          <span className="text-xl">ECT</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button 
          onClick={() => setShowEarnModal(true)}
          className="action-button flex items-center justify-center gap-2"
        >
          <ArrowDownRight className="w-5 h-5" />
          Earn
        </button>
        <button 
          onClick={() => setShowUseModal(true)}
          className="action-button flex items-center justify-center gap-2"
        >
          <ArrowUpRight className="w-5 h-5" />
          Use
        </button>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-xl font-bold mb-4">Transaction History</h3>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-white/5 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${
                  tx.type === 'earned' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
                }`}>
                  {tx.type === 'earned' ? <ArrowDownRight className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-medium">{tx.description}</p>
                  <p className="text-sm text-white/60 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tx.timestamp}
                  </p>
                </div>
              </div>
              <span className={`font-bold ${
                tx.type === 'earned' ? 'text-green-500' : 'text-red-500'
              }`}>
                {tx.type === 'earned' ? '+' : '-'}{tx.amount} ECT
              </span>
            </div>
          ))}
        </div>
      </div>

      <TokenActionModal
        isOpen={showEarnModal}
        onClose={() => setShowEarnModal(false)}
        type="earn"
      />

      <TokenActionModal
        isOpen={showUseModal}
        onClose={() => setShowUseModal(false)}
        type="use"
      />
    </div>
  );
}