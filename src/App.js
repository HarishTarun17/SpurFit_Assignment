// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import BlockContainer from './components/BlockContainer';
import './index.css'; // Ensure Tailwind styles are included

function App() {
  const [blocks, setBlocks] = useState([]);

  const addBlock = (type, color, distance) => {
    const newBlock = {
      id: `block-${blocks.length + 1}`,
      name: type,
      color: color,
      distance: distance,
    };
    setBlocks([...blocks, newBlock]);
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-200 p-4">
      <div className="flex max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <Sidebar addBlock={addBlock} />
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Workout Planner</h1>
          <BlockContainer blocks={blocks} setBlocks={setBlocks} />
        </div>
      </div>
    </div>
  );
}

export default App;
