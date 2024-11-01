import React from 'react';
import { TopNav } from '../components/TopNav';
import { useAuthStore } from '../store/useAuthStore';
import {
  User,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight
} from 'lucide-react';

const settingsGroups = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Profile Settings', href: '#' },
      { icon: Bell, label: 'Notifications', href: '#' },
      { icon: Shield, label: 'Privacy & Security', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', href: '#' },
    ],
  },
];

export function Settings() {
  const { logout } = useAuthStore();

  return (
    <div className="max-w-md mx-auto px-6 pt-6">
      <TopNav title="Settings" />

      {/* Settings Groups */}
      <div className="space-y-8">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg font-bold mb-4">{group.title}</h3>
            <div className="space-y-2">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-white/5 rounded-2xl p-4 flex items-center justify-between group hover:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-white/10 text-white">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/60" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="w-full mt-8 p-4 rounded-2xl bg-red-500/10 text-red-500 font-medium flex items-center justify-center gap-2 hover:bg-red-500/20"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>

      {/* App Info */}
      <div className="mt-8 text-center text-white/40 text-sm">
        <p>EventConnect v0.1.0</p>
        <p>© 2024 HDM MEDIA</p>
      </div>
    </div>
  );
}