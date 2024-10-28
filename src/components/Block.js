// src/components/Block.js
import React, { useState } from 'react';
import { Resizable } from 're-resizable';

// Define color mapping for workouts
const colorMapping = {
  'Warm Up': 'bg-blue-500',
  'Active': 'bg-orange-500',
  'Cool Down': 'bg-purple-500',
};

const Block = ({ block }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  const startButtonColor = 'bg-green-500 hover:bg-green-600'; // Color for Start button
  const stopButtonColor = 'bg-red-500 hover:bg-red-600'; // Color for Stop button
  const buttonColor = isActive ? stopButtonColor : startButtonColor; // Toggle between start and stop colors
  const buttonText = isActive ? 'Stop' : 'Start';
  
  // Change the active block color to a new color (e.g., Dark Blue)
  const activeBlockColor = isActive ? 'bg-blue-700' : colorMapping[block.name] || 'bg-gray-500';

  return (
    <Resizable
      defaultSize={{
        width: '100%',
        height: Math.max(block.distance * 20 + 50, 70), // Adjust height for content and button
      }}
      minHeight={70} // Minimum height to prevent overlap
      maxHeight={300}
      className={`${activeBlockColor} text-white p-4 rounded-md shadow-md mb-4 flex flex-col`}
    >
      <div className="flex-grow flex flex-col justify-between">
        <div className="text-center flex-grow">
          <strong className="block truncate text-lg">{block.name}</strong>
          <span className="block text-sm">{block.distance} km</span>
        </div>
        <button
          onClick={toggleActive}
          className={`${buttonColor} text-white font-bold py-1 px-3 rounded mt-2`}
        >
          {buttonText}
        </button>
      </div>
    </Resizable>
  );
};

export default Block;
