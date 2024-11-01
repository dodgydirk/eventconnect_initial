import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Wallet, Ticket, MapPin, Settings } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Wallet, label: 'Wallet', path: '/wallet' },
  { icon: Ticket, label: 'Tickets', path: '/tickets' },
  { icon: MapPin, label: 'FindMyTent', path: '/findmytent' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/5 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-md mx-auto px-6">
        <ul className="flex justify-between items-center py-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex flex-col items-center gap-1 ${
                    isActive ? 'text-red-500' : 'text-white/60'
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <div className={`w-1 h-1 rounded-full ${
                    isActive ? 'bg-red-500' : 'bg-transparent'
                  }`} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}