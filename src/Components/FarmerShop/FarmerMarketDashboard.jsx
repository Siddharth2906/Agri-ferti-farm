import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from 'lucide-react';

// Mock data - replace with actual API in production
const CROP_PRICES = [
  {
    name: 'Wheat',
    currentPrice: 6.75,
    unit: 'bushel',
    change: 0.25,
    icon: '🌾',
    historicalData: [6.50, 6.60, 6.70, 6.75, 6.80]
  },
  {
    name: 'Corn',
    currentPrice: 4.90,
    unit: 'bushel',
    change: -0.15,
    icon: '🌽',
    historicalData: [5.05, 4.95, 4.90, 4.85, 4.80]
  },
  {
    name: 'Soybeans',
    currentPrice: 13.25,
    unit: 'bushel',
    change: 0.50,
    icon: '🫘',
    historicalData: [12.75, 13.00, 13.10, 13.25, 13.40]
  }
];

const LIVESTOCK_PRICES = [
  {
    name: 'Cattle',
    currentPrice: 1.65,
    unit: 'lb',
    change: 0.10,
    icon: '🐄',
    historicalData: [1.55, 1.60, 1.62, 1.65, 1.70]
  },
  {
    name: 'Pigs',
    currentPrice: 0.85,
    unit: 'lb',
    change: -0.05,
    icon: '🐖',
    historicalData: [0.90, 0.88, 0.86, 0.85, 0.83]
  }
];

const FarmMarketDashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update date every minute

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className=" bg-gradient-to-br from-green-100 to-green-200 p-6">
      <div className="container mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-green-800 flex items-center">
            🌾 Farmer's Market Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            {formatDate(currentDate)} - Real-time Agricultural Market Prices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Crop Prices Section */}
          <Card className="bg-white/70 backdrop-blur-sm border-green-200">
            <CardHeader className="bg-green-50 border-b border-green-200">
              <CardTitle className="text-2xl text-green-800 flex items-center">
                🌾 Crop Prices
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {CROP_PRICES.map((crop) => (
                <div 
                  key={crop.name} 
                  className="flex items-center justify-between p-3 border-b border-green-100 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{crop.icon}</span>
                    <div>
                      <h3 className="font-semibold text-green-900">{crop.name}</h3>
                      <p className="text-sm text-gray-600">per {crop.unit}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-800">${crop.currentPrice.toFixed(2)}</p>
                    <div className="flex items-center">
                      {crop.change >= 0 ? (
                        <span className="text-green-600 mr-1">▲</span>
                      ) : (
                        <span className="text-red-600 mr-1">▼</span>
                      )}
                      <span className={`text-sm ${crop.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${Math.abs(crop.change).toFixed(2)} ({(crop.change / crop.currentPrice * 100).toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Livestock Prices Section */}
          <Card className="bg-white/70 backdrop-blur-sm border-green-200">
            <CardHeader className="bg-green-50 border-b border-green-200">
              <CardTitle className="text-2xl text-green-800 flex items-center">
                🐄 Livestock Prices
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {LIVESTOCK_PRICES.map((livestock) => (
                <div 
                  key={livestock.name} 
                  className="flex items-center justify-between p-3 border-b border-green-100 hover:bg-green-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{livestock.icon}</span>
                    <div>
                      <h3 className="font-semibold text-green-900">{livestock.name}</h3>
                      <p className="text-sm text-gray-600">per {livestock.unit}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-800">${livestock.currentPrice.toFixed(2)}</p>
                    <div className="flex items-center">
                      {livestock.change >= 0 ? (
                        <span className="text-green-600 mr-1">▲</span>
                      ) : (
                        <span className="text-red-600 mr-1">▼</span>
                      )}
                      <span className={`text-sm ${livestock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        ${Math.abs(livestock.change).toFixed(2)} ({(livestock.change / livestock.currentPrice * 100).toFixed(2)}%)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Market Insights */}
        <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Market Insights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Seasonal Trends</h3>
              <p className="text-sm text-gray-700">Current prices reflect seasonal agricultural patterns.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Price Volatility</h3>
              <p className="text-sm text-gray-700">Monitor daily fluctuations for informed decisions.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Regional Updates</h3>
              <p className="text-sm text-gray-700">Prices may vary by local market conditions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmMarketDashboard;