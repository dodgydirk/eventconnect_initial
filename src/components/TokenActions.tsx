import React, { useState } from 'react';
import { useTokenStore } from '../store/useTokenStore';
import { X } from 'lucide-react';

interface TokenActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'earn' | 'use';
}

const earnActions = [
  { id: 1, description: 'Collect Trash', amount: 50 },
  { id: 2, description: 'Event Feedback', amount: 25 },
  { id: 3, description: 'Sustainable Transport', amount: 30 },
  { id: 4, description: 'Community Support', amount: 40 },
];

const useActions = [
  { id: 1, description: 'Beer Tokens', amount: 15 },
  { id: 2, description: 'Food Voucher', amount: 25 },
  { id: 3, description: 'VIP Upgrade', amount: 200 },
  { id: 4, description: 'Merchandise', amount: 50 },
];

export function TokenActionModal({ isOpen, onClose, type }: TokenActionModalProps) {
  const { earnTokens, spendTokens } = useTokenStore();
  const actions = type === 'earn' ? earnActions : useActions;

  if (!isOpen) return null;

  const handleAction = (amount: number, description: string) => {
    if (type === 'earn') {
      earnTokens(amount, description);
    } else {
      spendTokens(amount, description);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#121212] rounded-3xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            {type === 'earn' ? 'Earn Tokens' : 'Use Tokens'}
          </h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleAction(action.amount, action.description)}
              className="w-full bg-white/5 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10"
            >
              <span className="font-medium">{action.description}</span>
              <span className="text-emerald-400">+{action.amount} ECT</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}