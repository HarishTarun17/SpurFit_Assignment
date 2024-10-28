// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ addBlock }) => {
  const workouts = [
    { name: 'Warm Up', color: 'blue', distance: 3 },
    { name: 'Active', color: 'green', distance: 3 },
    { name: 'Cool Down', color: 'purple', distance: 3 },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Add Workouts</h2>
      {workouts.map((workout) => (
        <button
          key={workout.name}
          onClick={() => addBlock(workout.name, workout.color, workout.distance)}
          className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-md mb-2"
        >
          {workout.name}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
