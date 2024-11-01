import React, { useState } from 'react';
import { TopNav } from '../components/TopNav';
import { MapPin, Navigation, Plus } from 'lucide-react';

const savedLocations = [
  {
    id: 1,
    name: 'My Tent',
    coordinates: '52.5200° N, 13.4050° E',
    timestamp: '2024-03-10 12:00',
  },
  {
    id: 2,
    name: 'Main Stage',
    coordinates: '52.5205° N, 13.4055° E',
    timestamp: '2024-03-10 14:30',
  },
];

export function FindMyTent() {
  const [showAddLocation, setShowAddLocation] = useState(false);

  return (
    <div className="max-w-md mx-auto px-6 pt-6">
      <TopNav title="FindMyTent" />

      {/* Map Placeholder */}
      <div className="relative bg-white/5 rounded-3xl h-[300px] mb-8 flex items-center justify-center">
        <p className="text-white/60">Interactive Map Coming Soon</p>
        <button className="absolute bottom-4 right-4 bg-purple-500 p-3 rounded-full">
          <Navigation className="w-6 h-6" />
        </button>
      </div>

      {/* Saved Locations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Saved Locations</h3>
          <button
            onClick={() => setShowAddLocation(!showAddLocation)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          {savedLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white/5 rounded-2xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-purple-500/20 text-purple-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{location.name}</p>
                  <p className="text-sm text-white/60">{location.coordinates}</p>
                </div>
              </div>
              <button className="action-button">Navigate</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}