// src/pages/Dashboard.js
import React, { useState } from 'react';
import Card from '../components/Card';
import SalesTable from '../components/SalesTable';
import PieChart from '../components/PieChart';
import AddSaleModal from '../components/AddSaleModal';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sales, setSales] = useState([]);
  const plainPercentage = 37; // Exemplo de dados, você deve substituir isso pelos dados reais
  const patternedPercentage = 63; // Exemplo de dados, você deve substituir isso pelos dados reais

  const handleAddSale = (newSale) => {
    setSales([...sales, newSale]);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-1 col-span-5">
          <PieChart plainPercentage={plainPercentage} patternedPercentage={patternedPercentage} />
        </div>
        <div className="md:col-span-4 col-span-5 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card title="TOTAL DE VENDAS DO MÊS" value="R$8500,00" />
          <Card title="TAPETES LISOS VENDIDOS" value="1050" />
          <Card title="TAPETES ESTAMPADOS VENDIDOS" value="2500" />
          <Card title="TAPETES EM ESTOQUE" value="1200" />
        </div>
      </div>
      <div className="mt-8">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Adicionar Venda
        </button>
      </div>
      <SalesTable salesData={sales} />
      <AddSaleModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={handleAddSale}
      />
    </div>
  );
}

export default Dashboard;
