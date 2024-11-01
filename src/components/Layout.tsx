import React from 'react';
import { Home, Wallet, Ticket, Calendar, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#', active: true },
  { icon: Wallet, label: 'Wallet', href: '#' },
  { icon: Ticket, label: 'Tickets', href: '#' },
  { icon: Calendar, label: 'Events', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pb-20">{children}</main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-white/10">
        <div className="max-w-md mx-auto px-6">
          <ul className="flex justify-between items-center py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`flex flex-col items-center gap-1 ${
                    item.active ? 'text-red-500' : 'text-white/60'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <div className={`w-1 h-1 rounded-full ${
                    item.active ? 'bg-red-500' : 'bg-transparent'
                  }`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}