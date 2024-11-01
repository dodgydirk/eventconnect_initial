import React from 'react';
import '/Users/Leon/Daten/Projekte/EventConnect/eventconnect_initial/src/components/SplashScreen.css'; // Importiere die CSS-Datei

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-[#00002C] flex flex-col items-center justify-between p-8 splash-screen">
      <div />
      <h1 className="logo-font text-4xl tracking-wider">
        EVENTCONNECT
      </h1>
      <div className="text-center text-white/60 space-y-2">
        <p>a very early alpha..</p>
        <p>© 2024 | by HDM MEDIA</p>
      </div>
    </div>
  );
}

export default SplashScreen;