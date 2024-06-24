// src/components/AddSaleModal.js
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function AddSaleModal({ isOpen, onRequestClose, onSave }) {
  const [customer, setCustomer] = useState('');
  const [plainCarpets, setPlainCarpets] = useState(0);
  const [patternedCarpets, setPatternedCarpets] = useState(0);
  const [plainCarpetPrice, setPlainCarpetPrice] = useState(0);
  const [patternedCarpetPrice, setPatternedCarpetPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    const total = (plainCarpets * plainCarpetPrice) + (patternedCarpets * patternedCarpetPrice);
    setTotalPrice(total.toFixed(2));
  }, [plainCarpets, patternedCarpets, plainCarpetPrice, patternedCarpetPrice]);

  const handleSave = () => {
    const newSale = {
      customer,
      plainCarpets: parseInt(plainCarpets),
      patternedCarpets: parseInt(patternedCarpets),
      totalPrice: `R$${totalPrice}`,
      date,
    };
    onSave(newSale);
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <h2 className="text-2xl font-bold mb-4">Adicionar Venda</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nome do Cliente</label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Tapetes Lisos</label>
            <input
              type="number"
              value={plainCarpets}
              onChange={(e) => setPlainCarpets(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Preço do Tapete Liso</label>
            <input
              type="number"
              value={plainCarpetPrice}
              onChange={(e) => setPlainCarpetPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Tapetes Estampados</label>
            <input
              type="number"
              value={patternedCarpets}
              onChange={(e) => setPatternedCarpets(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Preço do Tapete Estampado</label>
            <input
              type="number"
              value={patternedCarpetPrice}
              onChange={(e) => setPatternedCarpetPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Data da Venda</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Preço Total</label>
            <input
              type="text"
              value={`R$${totalPrice}`}
              readOnly
              className="w-full p-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onRequestClose}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddSaleModal;
