import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TopNav } from '../components/TopNav';
import { TokenActionModal } from '../components/TokenActions';
import { useTokenStore } from '../store/useTokenStore';
import { Wallet, MapPin, Calendar, Ticket } from 'lucide-react';

const upcomingFestivals = [
  {
    id: 1,
    name: 'Sonic Bloom Festival',
    date: 'June 15-18, 2024',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
    attendees: '15K+',
    price: '250 ECT',
  },
  {
    id: 2,
    name: 'Electric Forest',
    date: 'July 8-11, 2024',
    location: 'Munich, Germany',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    attendees: '25K+',
    price: '350 ECT',
  },
];

const quickActions = [
  { icon: Ticket, label: 'Buy Tickets', color: 'bg-purple-500', action: 'tickets' },
  { icon: MapPin, label: 'FindMyTent', color: 'bg-green-500', action: 'findmytent' },
  { icon: Calendar, label: 'My Events', color: 'bg-blue-500', action: 'events' },
  { icon: Wallet, label: 'Earn Tokens', color: 'bg-red-500', action: 'earn' },
];

export function Home() {
  const navigate = useNavigate();
  const { balance } = useTokenStore();
  const [showEarnModal, setShowEarnModal] = useState(false);
  const [showUseModal, setShowUseModal] = useState(false);

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'earn':
        setShowEarnModal(true);
        break;
      case 'tickets':
        navigate('/tickets');
        break;
      case 'findmytent':
        navigate('/findmytent');
        break;
      case 'events':
        navigate('/events');
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 pt-6">
      <TopNav showBack={false} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#FF3D00] text-xl font-bold mb-1">EVENTCONNECT</h1>
        <h2 className="text-3xl font-bold mb-2">HEY!</h2>
        <p className="text-3xl font-bold flex items-center gap-2">
          Welcome Back <span className="text-2xl">👋</span>
        </p>
      </div>

      {/* Token Balance */}
      <div className="token-pill mb-8">
        <Wallet className="w-5 h-5" />
        <span>Tokens: {balance.toFixed(2)} ECT</span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setShowEarnModal(true)}
          className="flex-1 bg-white/10 rounded-full py-3 font-medium"
        >
          Festivals
        </button>
        <button
          onClick={() => setShowUseModal(true)}
          className="flex-1 bg-white/10 rounded-full py-3 font-medium"
        >
          Use Tokens
        </button>
        <button
          onClick={() => navigate('/wallet')}
          className="flex-1 bg-white/10 rounded-full py-3 font-medium"
        >
          Get Tokens
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {quickActions.map((action) => (
          <button
            key={action.label}
            onClick={() => handleQuickAction(action.action)}
            className={`${action.color} rounded-2xl p-4 text-white flex flex-col items-start gap-2`}
          >
            <action.icon className="w-6 h-6" />
            <span className="font-medium">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Upcoming Festivals */}
      <div>
        <h3 className="text-xl font-bold mb-4">Upcoming Festivals</h3>
        <div className="space-y-4">
          {upcomingFestivals.map((festival) => (
            <div
              key={festival.id}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group"
            >
              <img
                src={festival.image}
                alt={festival.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-1">{festival.name}</h3>
                <div className="flex items-center gap-4 text-white/80">
                  <p className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {festival.date}
                  </p>
                  <p className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {festival.location}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">{festival.price}</span>
                  <button 
                    onClick={() => navigate('/tickets')}
                    className="action-button"
                  >
                    Buy Ticket
                  </button>
                </div>
              </div>
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