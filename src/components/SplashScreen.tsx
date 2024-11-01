import React from 'react';

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-[#00002C] flex flex-col items-center justify-between p-8 splash-screen">
      <div />
      <h1 className="text-[#FF3D00] text-4xl font-bold tracking-wider">
        EVENTCONNECT
      </h1>
      <div className="text-center text-white/60 space-y-2">
        <p>a very early alpha..</p>
        <p>© 2024 | by HDM MEDIA</p>
      </div>
    </div>
  );
}