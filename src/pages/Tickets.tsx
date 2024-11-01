import React from 'react';
import { TopNav } from '../components/TopNav';
import { Ticket, Calendar, MapPin } from 'lucide-react';

const tickets = [
  {
    id: 1,
    eventName: 'Sonic Bloom Festival',
    ticketType: 'VIP Pass',
    date: 'June 15-18, 2024',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80',
    nftId: '#8234',
  },
  {
    id: 2,
    eventName: 'Electric Forest',
    ticketType: 'Regular Pass',
    date: 'July 8-11, 2024',
    location: 'Munich, Germany',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80',
    nftId: '#9156',
  },
];

export function Tickets() {
  return (
    <div className="max-w-md mx-auto px-6 pt-6">
      <TopNav title="NFT Tickets" />

      <div className="space-y-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white/5 rounded-3xl overflow-hidden backdrop-blur-lg"
          >
            <img
              src={ticket.image}
              alt={ticket.eventName}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{ticket.eventName}</h3>
                <span className="text-sm text-white/60">NFT {ticket.nftId}</span>
              </div>
              <div className="flex items-center gap-4 text-white/80 mb-4">
                <p className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {ticket.date}
                </p>
                <p className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {ticket.location}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm">
                  {ticket.ticketType}
                </span>
                <button className="action-button flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  View Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}