import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const FarmerProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const farmerData = {
    name: 'John Thompson',
    age: 45,
    location: 'Cedar Grove Farms, Iowa',
    profileImage: '/api/placeholder/300/300',
    farmImages: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ],
    crops: [
      { name: 'Corn', acres: 250, yield: '180 bushels/acre' },
      { name: 'Soybeans', acres: 180, yield: '55 bushels/acre' },
      { name: 'Wheat', acres: 100, yield: '70 bushels/acre' }
    ],
    farmDetails: {
      totalAcres: 530,
      yearsOfExperience: 25,
      farmType: 'Family-Owned Sustainable Farm'
    },
    bio: 'Fourth-generation farmer dedicated to sustainable agriculture and innovative farming techniques. Committed to preserving family farming traditions while embracing modern agricultural technologies.',
    contact: {
      email: 'john.thompson@cedargrovefarms.com',
      phone: '(555) 123-4567'
    },
    socialMedia: {
      facebook: '#',
      instagram: '#',
      twitter: '#'
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">Farm Overview</h3>
                <p className="text-gray-700">{farmerData.bio}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-900 mb-3">Farm Statistics</h3>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-green-800">Total Acres:</strong> {farmerData.farmDetails.totalAcres}
                  </li>
                  <li>
                    <strong className="text-green-800">Experience:</strong> {farmerData.farmDetails.yearsOfExperience} Years
                  </li>
                  <li>
                    <strong className="text-green-800">Farm Type:</strong> {farmerData.farmDetails.farmType}
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-green-900 mb-4">Current Crop Production</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {farmerData.crops.map((crop, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-green-200 p-4 rounded-lg hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-green-800 mb-2">{crop.name}</h4>
                    <div className="space-y-1">
                      <p>Acres: {crop.acres}</p>
                      <p>Yield: {crop.yield}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="grid md:grid-cols-3 gap-4">
            {farmerData.farmImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Farm view ${index + 1}`} 
                className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
              />
            ))}
          </div>
        );
      case 'contact':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div>
                  <strong className="text-green-800">Email:</strong>
                  <p>{farmerData.contact.email}</p>
                </div>
                <div>
                  <strong className="text-green-800">Phone:</strong>
                  <p>{farmerData.contact.phone}</p>
                </div>
                <div>
                  <strong className="text-green-800">Location:</strong>
                  <p>{farmerData.location}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-2 border rounded-md"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-2 border rounded-md"
                />
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-2 border rounded-md h-32"
                ></textarea>
                <button 
                  className="w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 p-6">
      <div className="container mx-auto">
        {/* Profile Header */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <img 
              src={farmerData.profileImage} 
              alt={farmerData.name}
              className="w-48 h-48 rounded-full object-cover border-4 border-green-500"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-green-800">{farmerData.name}</h1>
              <p className="text-gray-600 mt-2">
                {farmerData.age} Years Old | {farmerData.location}
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {Object.entries(farmerData.socialMedia).map(([platform, link]) => (
                  <a 
                    key={platform} 
                    href={link} 
                    className="text-green-700 hover:text-green-900 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 flex space-x-2">
            {['overview', 'gallery', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeTab === tab 
                    ? 'bg-green-700 text-white' 
                    : 'text-green-800 hover:bg-green-100'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default FarmerProfile;