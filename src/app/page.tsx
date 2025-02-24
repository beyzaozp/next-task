"use client";
import React, { useState } from "react";
import TourCard from "../components/TourCard";
import FilterPopup from "../components/FilterPopup";

const HomePage: React.FC = () => {
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Filtre Popup'u en üstte, diğer içeriklerin üstünde */}
      {isFilterPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start items-start p-4 z-50">
          <FilterPopup
            isOpen={isFilterPopupOpen}
            onClose={() => setFilterPopupOpen(false)}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>
      )}

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-primary-500 mb-6">Turlar</h1>
        <button
          onClick={() => setFilterPopupOpen(true)}
          className="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600 mb-4"
        >
          Filtreleri Aç
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TourCard />
          <TourCard />
          <TourCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
