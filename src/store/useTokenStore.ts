import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TokenTransaction {
  id: string;
  type: 'earned' | 'spent';
  amount: number;
  description: string;
  timestamp: string;
}

interface TokenState {
  balance: number;
  transactions: TokenTransaction[];
  earnTokens: (amount: number, description: string) => void;
  spendTokens: (amount: number, description: string) => boolean;
}

export const useTokenStore = create<TokenState>()(
  persist(
    (set) => ({
      balance: 470.20,
      transactions: [
        {
          id: '1',
          type: 'earned',
          amount: 50,
          description: 'Trash collection reward',
          timestamp: '2024-03-10 14:30',
        },
        {
          id: '2',
          type: 'spent',
          amount: 150,
          description: 'Festival ticket purchase',
          timestamp: '2024-03-09 16:45',
        },
      ],
      earnTokens: (amount: number, description: string) =>
        set((state) => ({
          balance: state.balance + amount,
          transactions: [
            {
              id: Date.now().toString(),
              type: 'earned',
              amount,
              description,
              timestamp: new Date().toLocaleString(),
            },
            ...state.transactions,
          ],
        })),
      spendTokens: (amount: number, description: string) =>
        set((state) => {
          if (state.balance < amount) return false;
          return {
            balance: state.balance - amount,
            transactions: [
              {
                id: Date.now().toString(),
                type: 'spent',
                amount,
                description,
                timestamp: new Date().toLocaleString(),
              },
              ...state.transactions,
            ],
          };
        }),
    }),
    {
      name: 'token-storage',
    }
  )
);