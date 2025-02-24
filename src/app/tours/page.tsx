import React from 'react';

const ToursPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-primary-500 mb-4">TOURS</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Location</h2>
      <p className="text-gray-600 mb-8">Where you wanna visit? (Phi Phi Island, Chalong Temple.....)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Theme Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Theme</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">
              <strong>Island Tour (43)</strong>
              <ul className="pl-4">
                <li>Land Tour (43)</li>
              </ul>
            </li>
            <li className="text-gray-700">
              <strong>Safari (43)</strong>
            </li>
          </ul>
        </div>

        {/* Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Activity</h3>
          <p className="text-gray-600 mb-4">Select list. (setting listsaint layers create: da aspektri.)</p>
          <ul className="space-y-2">
            <li className="text-gray-700">
              <strong>Swimming (43)</strong>
              <ul className="pl-4">
                <li>Running (43)</li>
              </ul>
            </li>
            <li className="text-gray-700">
              <strong>Elephant Care (43)</strong>
              <ul className="pl-4">
                <li>Snorkelling (43)</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Price Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Price</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Start Time</h4>
              <p className="text-gray-600">00:00 - 23:59</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Group Size</h4>
              <p className="text-gray-600">17:00</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Vehicle</h4>
              <p className="text-gray-600">40</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Yacht (43)</h4>
              <ul className="pl-4">
                <li>Speedboat (43)</li>
                <li>Safari (43)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Catanaran (43)</h4>
              <ul className="pl-4">
                <li>Speedcatanaran (43)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Features</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">
              <strong>Transfer (43)</strong>
            </li>
            <li className="text-gray-700">
              <strong>Halal Food (43)</strong>
            </li>
            <li className="text-gray-700">
              <strong>Vegetarian Food (43)</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* Reset Search Button */}
      <div className="mt-8 text-center">
        <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
          RESET SEARCH
        </button>
      </div>
    </div>
  );
};

export default ToursPage;