import React from 'react';

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-6xl font-semibold text-amber-600">{value}</p>
    </div>
  );
}

export default Card;
