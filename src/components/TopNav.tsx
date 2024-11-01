import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TopNavProps {
  showBack?: boolean;
  title?: string;
}

export function TopNav({ showBack = true, title }: TopNavProps) {
  const navigate = useNavigate();

  return (
    <div className="nav-pill">
      {showBack && (
        <button className="p-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4" />
        </button>
      )}
      <button className="nav-item active">{title || 'Home'}</button>
      <button className="nav-item">Wallet</button>
      <button className="nav-item">Earn</button>
      <button className="nav-item">Swap</button>
    </div>
  );
}