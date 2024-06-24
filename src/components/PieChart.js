// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

function PieChart({ plainPercentage, patternedPercentage }) {
  const data = {
    labels: ['Tapetes Lisos', 'Tapetes Estampados'],
    datasets: [
      {
        data: [plainPercentage, patternedPercentage],
        backgroundColor: ['#4caf50', '#ff9800'],
        hoverBackgroundColor: ['#66bb6a', '#ffa726'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg" style={{ width: '100%', height: '100%' }}>
      <h2 className="text-lg font-bold mb-2 text-gray-800">Vendas de Tapetes</h2>
      <div style={{ position: 'relative', height: '200px' }}>
        <Pie data={data} options={options} />
      </div>
      <div className="mt-2 text-center">
        <p className="text-base font-semibold">
          Total de Vendas: {plainPercentage + patternedPercentage}%
        </p>
      </div>
    </div>
  );
}

export default PieChart;
