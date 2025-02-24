"use client";
import React from "react";

interface FilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: keyof typeof filters | null;
  onCategorySelect: (category: string) => void;
}

const categories = ["Tours", "Tickets", "Rent", "Transfer"];

const filters = {
  Tours: ["Fiyat Aralığı", "Tarih", "Süre", "Kapasite"],
  Tickets: ["Fiyat Aralığı", "Etkinlik Türü", "Koltuk Konumu"],
  Rent: ["Araç Türü", "Yakıt Türü", "Vites Türü", "Fiyat Aralığı"],
  Transfer: ["Araç Türü", "Kapasite", "Fiyat Aralığı"],
};

const FilterPopup: React.FC<FilterPopupProps> = ({ isOpen, onClose, selectedCategory, onCategorySelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-700 bg-opacity-30 flex justify-start items-start p-4">
      <div className="bg-white w-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Kategoriler</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => onCategorySelect(category)}
                className={`text-left w-full p-2 hover:bg-gray-100 ${selectedCategory === category ? "bg-gray-200" : ""}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {selectedCategory && filters[selectedCategory] && (
          <div>
            <h3 className="text-lg font-bold text-gray-900 mt-4">Filtreler</h3>
            <div className="space-y-2">
              {filters[selectedCategory].map((filter) => (
                <div key={filter}>
                  <label className="block text-sm font-medium text-gray-900">{filter}</label>
                  {filter === "Fiyat Aralığı" ? (
                    <input type="range" min="0" max="1000" className="w-full" />
                  ) : filter === "Tarih" ? (
                    <input type="date" className="w-full p-2 border rounded" />
                  ) : filter === "Süre" ? (
                    <select className="w-full p-2 border rounded">
                      <option>1 Gün</option>
                      <option>2 Gün</option>
                      <option>3 Gün</option>
                    </select>
                  ) : (
                    <input type="text" className="w-full p-2 border rounded" placeholder={`Seçin: ${filter}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-primary-500 text-white p-2 rounded hover:bg-primary-600"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
