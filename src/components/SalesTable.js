// src/components/SalesTable.js
import React from 'react';

const salesData = [
  {
    id: 1,
    customer: 'João Silva',
    plainCarpets: 10,
    patternedCarpets: 5,
    totalPrice: 'R$150,00',
    date: '2024-06-20',
  },
  {
    id: 2,
    customer: 'Chico Costa',
    plainCarpets: 20,
    patternedCarpets: 15,
    totalPrice: 'R$450,00',
    date: '2024-06-21',
  },
  {
    id: 3,
    customer: 'Maria Eduarda',
    plainCarpets: 80,
    patternedCarpets: 15,
    totalPrice: 'R$950,00',
    date: '2024-06-01',
  },
];

function SalesTable() {
  return (
    <div className="mt-8">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-stone-300">
            <th className="py-2 px-4 border-b text-lg font-bold text-gray-700">Nome do Cliente</th>
            <th className="py-2 px-4 border-b text-lg font-bold text-gray-700">Tapetes Lisos</th>
            <th className="py-2 px-4 border-b text-lg font-bold text-gray-700">Tapetes Estampados</th>
            <th className="py-2 px-4 border-b text-lg font-bold text-gray-700">Preço da Venda</th>
            <th className="py-2 px-4 border-b text-lg font-bold text-gray-700">Data da Venda</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr
              key={sale.id}
              className={`transition ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-amber-200`}
            >
              <td className="py-2 px-4 border-b text-center text-black">{sale.customer}</td>
              <td className="py-2 px-4 border-b text-center text-black">{sale.plainCarpets}</td>
              <td className="py-2 px-4 border-b text-center text-black">{sale.patternedCarpets}</td>
              <td className="py-2 px-4 border-b text-center text-black">{sale.totalPrice}</td>
              <td className="py-2 px-4 border-b text-center text-black">{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesTable;
