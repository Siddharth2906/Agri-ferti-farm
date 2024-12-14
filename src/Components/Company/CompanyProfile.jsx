import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const companyInfo = {
    name: 'GreenHarvest Solutions',
    tagline: 'Sustainable Agriculture, Innovative Farming',
    founded: 2005,
    employees: 250,
    locations: ['Midwest, USA', 'California', 'Texas'],
    contact: {
      email: 'info@greenharvestsolutions.com',
      phone: '+1 (555) 123-4567',
      address: '1234 Farmland Drive, Agricultural Center, IA 52246'
    },
    socialMedia: {
      linkedin: '#',
      twitter: '#',
      facebook: '#'
    }
  };

  const services = [
    {
      title: 'Precision Agriculture',
      description: 'Cutting-edge technologies for optimized crop management',
      icon: '🛰️'
    },
    {
      title: 'Sustainable Farming',
      description: 'Eco-friendly agricultural practices and solutions',
      icon: '🌱'
    },
    {
      title: 'Crop Consulting',
      description: 'Expert guidance for maximizing agricultural yield',
      icon: '🌾'
    }
  ];

  const team = [
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Agricultural Officer',
      bio: 'PhD in Agricultural Sciences with 15 years of research experience',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Innovation',
      bio: 'Leading technology integration in modern farming',
      image: '/api/placeholder/200/200'
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              GreenHarvest Solutions is a pioneering agricultural technology company 
              dedicated to transforming farming through innovative, sustainable practices. 
              Our mission is to empower farmers with cutting-edge solutions that enhance 
              productivity while preserving environmental integrity.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-green-50 p-4 rounded-lg hover:shadow-md transition-all"
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-green-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="bg-white/70 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all"
              >
                <CardContent className="flex items-center p-4 space-x-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-green-900">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-700">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
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
                  <p>{companyInfo.contact.email}</p>
                </div>
                <div>
                  <strong className="text-green-800">Phone:</strong>
                  <p>{companyInfo.contact.phone}</p>
                </div>
                <div>
                  <strong className="text-green-800">Address:</strong>
                  <p>{companyInfo.contact.address}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-green-900 mb-4">Send Us a Message</h3>
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
        {/* Header Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-green-800 flex items-center">
                🌿 {companyInfo.name}
              </h1>
              <p className="text-gray-600 mt-2">{companyInfo.tagline}</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {Object.entries(companyInfo.socialMedia).map(([platform, link]) => (
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

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 flex space-x-2">
            {['about', 'team', 'contact'].map((tab) => (
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

        {/* Company Stats */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-800">{companyInfo.founded}</h3>
            <p className="text-gray-600">Year Founded</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-800">{companyInfo.employees}</h3>
            <p className="text-gray-600">Employees</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-green-800">{companyInfo.locations.length}</h3>
            <p className="text-gray-600">Locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;