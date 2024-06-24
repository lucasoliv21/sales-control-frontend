// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            DASHBOARD
          </Link>
          <Link to="/estoque" className="hover:text-gray-400">
            ESTOQUE
          </Link>
          <Link to="/clientes" className="hover:text-gray-400">
            CLIENTES
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
