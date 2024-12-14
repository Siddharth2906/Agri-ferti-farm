import React, { useState, useEffect } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, Wind } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

// Utility function to get weather icon
const getWeatherIcon = (condition) => {
  const iconMap = {
    Clear: <Sun className="w-12 h-12 text-yellow-500" />,
    Cloudy: <Cloud className="w-12 h-12 text-gray-500" />,
    Rain: <CloudRain className="w-12 h-12 text-blue-500" />,
    PartlyCloudy : <CloudSnow className="w-12 h-12 text-white" />,
    Sunny: <Wind className="w-12 h-12 text-gray-400" />,
  };
  return iconMap[condition] || <Sun className="w-12 h-12 text-yellow-500" />;
};

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [location, setLocation] = useState("");
  const [inputLocation, setInputLocation] = useState("London"); // Separate input field
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      const apiKey = "4a596f205d504d5b836100215241412";
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputLocation}&days=5&aqi=yes&alerts=no`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data. Check the location name.");
      }

      const data = await response.json();

      // Update current weather
      setCurrentWeather({
        temperature: data.current.temp_c, // Celsius temperature
        condition: data.current.condition.text,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph, // Wind speed in kph
        location: data.location.name,
      });

      // Update 5-day forecast
      const forecastData = data.forecast.forecastday.map((day) => ({
        date: day.date,
        temperature: day.day.avgtemp_c,
        condition: day.day.condition.text,
      }));

      setForecast(forecastData);
      setLocation(inputLocation); // Update the location displayed
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Unable to fetch weather for the entered location.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(); // Initial fetch for "London"
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 flex flex-col items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="bg-white/20 backdrop-blur-md">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {currentWeather ? `${currentWeather.location} Weather` : "Weather"}
              </CardTitle>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
                placeholder="Enter location"
                className="px-2 py-1 border rounded text-sm flex-grow"
              />
              <button
                onClick={fetchWeather}
                className="px-4 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Search
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </CardHeader>
        {loading ? (
          <CardContent className="flex justify-center items-center p-6">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
          </CardContent>
        ) : (
          currentWeather && (
            <CardContent className="space-y-6 p-6">
              {/* Current Weather */}
              <div className="flex items-center justify-between">
                <div>{getWeatherIcon(currentWeather.condition)}</div>
                <div className="text-right">
                  <h2 className="text-5xl font-bold">{currentWeather.temperature}°C</h2>
                  <p className="text-gray-600">{currentWeather.condition}</p>
                </div>
              </div>

              {/* Weather Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/30 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-700">Humidity</p>
                  <p className="font-bold">{currentWeather.humidity}%</p>
                </div>
                <div className="bg-white/30 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-700">Wind Speed</p>
                  <p className="font-bold">{currentWeather.windSpeed} kph</p>
                </div>
              </div>

              {/* 5-Day Weather Forecast */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-3">5-Day Forecast</h3>
                <div className="grid grid-cols-1 gap-4">
                  {forecast.map((day, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/30 p-3 rounded-lg"
                    >
                      <p className="text-sm font-medium">{day.date}</p>
                      <div>{getWeatherIcon(day.condition)}</div>
                      <p className="text-sm">{day.temperature}°C</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          )
        )}
      </Card>
    </div>
  );
};

export default Weather;
