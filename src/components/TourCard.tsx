import React from 'react';

const TourCard: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      {/* İndirim Yüzdesi */}
      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
        30% OFF
      </div>

      {/* Tur Resmi */}
      <img
        src="https://fastly.picsum.photos/id/866/4704/3136.jpg?hmac=I55vcxY9Vt3jgVTWqY8GjooRixzyYFPojxuMdtpIy9k" // Tur resmi
        alt="Tour"
        className="w-full h-48 object-cover rounded"
      />

      {/* Puan ve Konum */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★</span>
          <span className="text-gray-700">4.3 (20)</span>
        </div>
        <span className="text-gray-900">Rassada Pier/Rassa...</span>
      </div>

      {/* Tur Adı */}
      <h3 className="text-xl text-gray-400 font-bold mt-2">Phi phi, khai islands tour with speedboat full day</h3>

      {/* Fiyat ve İndirimli Fiyat */}
      <div className="mt-2">
        <span className="text-gray-500 line-through">THB1,400</span>
        <span className="text-primary-500 font-bold ml-2">THB1,020</span>
      </div>

      {/* Detaylar Butonu */}
      <button className="mt-4 w-full bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">
        Detaylar
      </button>
    </div>
  );
};

export default TourCard;