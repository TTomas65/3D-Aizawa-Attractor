import React from 'react';
import { Info } from 'lucide-react';
import AizawaAttractor from './components/AizawaAttractor';

function App() {
  return (
    <div className="relative w-full h-screen">
      <AizawaAttractor />
      
      {/* Info overlay */}
      <div className="absolute top-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-md backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-5 h-5" />
          <h1 className="text-xl font-bold">Aizawa Attractor</h1>
        </div>
        <p className="text-sm text-gray-300">
          The Aizawa attractor is a three-dimensional chaotic system discovered by Yoji Aizawa. 
          This visualization shows its complex trajectory using 100,000 points with dynamic coloring.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Drag to rotate • Scroll to zoom • Right-click to pan
        </p>
      </div>
    </div>
  );
}

export default App;