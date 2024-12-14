import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Snowflake, Wind } from 'lucide-react';

const WeatherForecast = () => {
  const [forecast, setForecast] = useState([
    {
      day: 'Monday',
      date: '2024-03-18',
      icon: <Sun color="#FFC300" size={48} />,
      temperature: {
        high: 72,
        low: 55
      },
      precipitation: 10,
      windSpeed: 5,
      description: 'Sunny with light breeze'
    },
    {
      day: 'Tuesday',
      date: '2024-03-19',
      icon: <CloudRain color="#5D6D7E" size={48} />,
      temperature: {
        high: 65,
        low: 48
      },
      precipitation: 60,
      windSpeed: 12,
      description: 'Scattered showers'
    },
    {
      day: 'Wednesday',
      date: '2024-03-20',
      icon: <Cloud color="#85929E" size={48} />,
      temperature: {
        high: 68,
        low: 52
      },
      precipitation: 30,
      windSpeed: 8,
      description: 'Partly cloudy'
    },
    {
      day: 'Thursday',
      date: '2024-03-21',
      icon: <Snowflake color="#5DADE2" size={48} />,
      temperature: {
        high: 45,
        low: 35
      },
      precipitation: 40,
      windSpeed: 15,
      description: 'Cold with light snow'
    },
    {
      day: 'Friday',
      date: '2024-03-22',
      icon: <Wind color="#5D6D7E" size={48} />,
      temperature: {
        high: 58,
        low: 42
      },
      precipitation: 20,
      windSpeed: 20,
      description: 'Windy conditions'
    }
  ]);

  const [location, setLocation] = useState('San Francisco, CA');

  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-300 p-4 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Location Header */}
        <div className="bg-blue-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">{location}</h1>
          <p className="text-sm opacity-75">5-Day Weather Forecast</p>
        </div>

        {/* Forecast Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4">
          {forecast.map((day, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-lg p-4 text-center shadow-md hover:scale-105 transition-transform"
            >
              <h2 className="font-semibold text-lg">{day.day}</h2>
              <p className="text-sm text-gray-500 mb-2">{day.date}</p>
              
              <div className="flex justify-center mb-3">
                {day.icon}
              </div>
              
              <div className="mb-2">
                <p className="text-xl font-bold">
                  {day.temperature.high}°F / {day.temperature.low}°F
                </p>
                <p className="text-sm text-gray-600">{day.description}</p>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>
                  <CloudRain size={16} className="inline mr-1" />
                  {day.precipitation}%
                </span>
                <span>
                  <Wind size={16} className="inline mr-1" />
                  {day.windSpeed} mph
                </span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;