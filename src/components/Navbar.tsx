"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const categories = ['Tours', 'Tickets', 'Rent', 'Transfer'];

const Navbar: React.FC = () => {
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleFilterPopup = () => {
    setFilterPopupOpen(!isFilterPopupOpen);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <nav className="bg-primary-500 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Sol Taraf: Hamburger Menü ve Kullanıcı Bilgisi */}
        <div className="flex items-center space-x-4">
          <button className="text-white lg:hidden" onClick={toggleFilterPopup}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex items-center space-x-2">
            <img src="/user-avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
            <span className="text-white">Kullanıcı Adı</span>
          </div>
        </div>

        {/* Sağ Taraf: Favorites, Cart, Login */}
        <div className="flex items-center space-x-4">
          <Link href="/favorites" className="text-white hover:text-primary-400">Favorites</Link>
          <Link href="/cart" className="text-white hover:text-primary-400">Cart</Link>
          <Link href="/login" className="text-white hover:text-primary-400">Login</Link>
        </div>
      </div>

      {/* Filtre Popup */}
      {isFilterPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start items-start p-4 z-50">
          <div className="bg-white w-80 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Kategoriler</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleCategorySelect(category)}
                    className={`text-left w-full p-2 hover:bg-gray-100 ${selectedCategory === category ? 'bg-gray-200' : ''}`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            {selectedCategory && (
              <div>
                <h3 className="text-lg font-semibold mt-4">Filtreler</h3>
                <div className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fiyat Aralığı</label>
                    <input type="range" min="0" max="1000" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tarih</label>
                    <input type="date" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Süre</label>
                    <select className="w-full p-2 border rounded">
                      <option>1 Gün</option>
                      <option>2 Gün</option>
                      <option>3 Gün</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={toggleFilterPopup}
              className="mt-4 w-full bg-primary-500 text-white p-2 rounded hover:bg-primary-600"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;