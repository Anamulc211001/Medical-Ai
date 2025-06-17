import React, { useState } from 'react';
import { Phone, MapPin, Clock, Heart, AlertTriangle, Ambulance, Navigation, Share2, User, MessageCircle } from 'lucide-react';

const EmergencyPage = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [location, setLocation] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  const emergencyTypes = [
    { id: 'cardiac', label: 'Heart Attack', icon: Heart, color: 'bg-red-500' },
    { id: 'accident', label: 'Accident/Injury', icon: AlertTriangle, color: 'bg-orange-500' },
    { id: 'stroke', label: 'Stroke', icon: Brain, color: 'bg-purple-500' },
    { id: 'breathing', label: 'Breathing Problem', icon: Lung, color: 'bg-blue-500' },
    { id: 'poisoning', label: 'Poisoning', icon: AlertTriangle, color: 'bg-yellow-500' },
    { id: 'other', label: 'Other Emergency', icon: Phone, color: 'bg-gray-500' }
  ];

  const nearbyHospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      distance: '0.8 miles',
      estimatedTime: '3 mins',
      emergencyWaitTime: '15 mins',
      phone: '+1-555-0123',
      specialty: 'Level 1 Trauma Center'
    },
    {
      id: 2,
      name: 'St. Mary\'s Medical Center',
      distance: '1.2 miles',
      estimatedTime: '5 mins',
      emergencyWaitTime: '8 mins',
      phone: '+1-555-0124',
      specialty: 'Cardiac Specialist'
    },
    {
      id: 3,
      name: 'Regional Emergency Hospital',
      distance: '2.1 miles',
      estimatedTime: '7 mins',
      emergencyWaitTime: '12 mins',
      phone: '+1-555-0125',
      specialty: 'Pediatric Emergency'
    }
  ];

  const getCurrentLocation = () => {
    setIsLocating(true);
    // Simulate getting location
    setTimeout(() => {
      setLocation('123 Main St, Anytown, State 12345');
      setIsLocating(false);
    }, 2000);
  };

  const callEmergency = () => {
    // In a real app, this would initiate an emergency call
    alert('Emergency services have been contacted. Help is on the way!');
  };

  const requestAmbulance = () => {
    // In a real app, this would request an ambulance
    alert('Ambulance has been dispatched to your location. ETA: 8 minutes.');
  };

  const shareLocation = () => {
    // In a real app, this would share location with emergency contacts
    alert('Your location has been shared with your emergency contacts.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Emergency Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Emergency Services</h1>
          <p className="text-xl text-gray-600">
            Get immediate help when you need it most. We're here 24/7.
          </p>
        </div>

        {/* Quick Emergency Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={callEmergency}
            className="bg-red-600 text-white p-6 rounded-xl hover:bg-red-700 transition-colors text-center"
          >
            <Phone className="w-8 h-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Call 911</div>
            <div className="text-sm opacity-90">Emergency Services</div>
          </button>
          
          <button
            onClick={requestAmbulance}
            className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition-colors text-center"
          >
            <Ambulance className="w-8 h-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Request Ambulance</div>
            <div className="text-sm opacity-90">Direct Dispatch</div>
          </button>
          
          <button
            onClick={shareLocation}
            className="bg-green-600 text-white p-6 rounded-xl hover:bg-green-700 transition-colors text-center"
          >
            <Share2 className="w-8 h-8 mx-auto mb-2" />
            <div className="text-lg font-semibold">Share Location</div>
            <div className="text-sm opacity-90">With Contacts</div>
          </button>
        </div>

        {/* Emergency Type Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">What's Your Emergency?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {emergencyTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setEmergencyType(type.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  emergencyType === type.id
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-gray-900">{type.label}</div>
              </button>
            ))}
          </div>

          {emergencyType && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-red-900 mb-2">Emergency Protocols Activated</h3>
                  <p className="text-red-800 text-sm">
                    Your emergency type has been registered. Follow the immediate care instructions below while help is on the way.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Location Services */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Location</h2>
          
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={getCurrentLocation}
              disabled={isLocating}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Navigation className="w-4 h-4 mr-2" />
              {isLocating ? 'Locating...' : 'Get Current Location'}
            </button>
            
            {location && (
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{location}</span>
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Or enter your address manually..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nearby Hospitals */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Nearest Emergency Facilities</h2>
          
          <div className="space-y-4">
            {nearbyHospitals.map(hospital => (
              <div key={hospital.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{hospital.name}</h3>
                    <p className="text-blue-600 font-medium">{hospital.specialty}</p>
                  </div>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {hospital.distance}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    ETA: {hospital.estimatedTime}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    Wait: {hospital.emergencyWaitTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Contacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Medical Emergency</h3>
              <p className="text-2xl font-bold text-red-600 mb-2">911</p>
              <p className="text-sm text-gray-600">Life-threatening emergencies</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Poison Control</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">1-800-222-1222</p>
              <p className="text-sm text-gray-600">Poisoning emergencies</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Crisis Helpline</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">988</p>
              <p className="text-sm text-gray-600">Mental health crisis</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">HealthAI Emergency</h3>
              <p className="text-2xl font-bold text-purple-600 mb-2">+1-555-HELP</p>
              <p className="text-sm text-gray-600">24/7 medical support</p>
            </div>
          </div>
        </div>

        {/* AI Emergency Assistant */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Guidance?</h2>
          <p className="text-red-100 mb-6">
            Our AI emergency assistant can provide real-time guidance for medical emergencies while you wait for help.
          </p>
          <button className="px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center mx-auto">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Emergency Chat
          </button>
        </div>
      </div>
    </div>
  );
};

// Additional icons for emergency types
const Brain = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.33 12.91c-.09-.06-.16-.18-.13-.3.07-.23.11-.47.11-.71 0-1.06-.64-2.01-1.65-2.38-.05-.02-.1-.05-.15-.08-.01-.01-.02-.02-.02-.03-.05-.05-.08-.11-.08-.18 0-.08.03-.15.08-.21.01-.01.02-.02.02-.03.05-.03.1-.06.15-.08C20.36 8.54 21 7.59 21 6.53c0-.24-.04-.48-.11-.71-.03-.12.04-.24.13-.3C21.75 5.14 22 4.39 22 3.61c0-1.89-1.54-3.43-3.43-3.43-.78 0-1.53.25-2.14.72-.06.04-.18.04-.3-.01-.23-.07-.47-.11-.71-.11-1.06 0-2.01.64-2.38 1.65-.02.05-.05.1-.08.15-.01.01-.02.02-.03.02-.05.05-.11.08-.18.08-.08 0-.15-.03-.21-.08-.01-.01-.02-.02-.03-.02-.03-.05-.06-.1-.08-.15C12.07 1.25 11.12.61 10.06.61c-.24 0-.48.04-.71.11-.12.03-.24-.04-.3-.13C8.67.25 7.92 0 7.14 0 5.25 0 3.71 1.54 3.71 3.43c0 .78.25 1.53.72 2.14.04.06.04.18-.01.3-.07.23-.11.47-.11.71 0 1.06.64 2.01 1.65 2.38.05.02.1.05.15.08.01.01.02.02.02.03.05.05.08.11.08.18 0 .08-.03.15-.08.21-.01.01-.02.02-.02.03-.05.03-.1.06-.15.08C4.64 10.92 4 11.87 4 12.93c0 .24.04.48.11.71.03.12-.04.24-.13.3C3.35 14.32 3.1 15.07 3.1 15.85c0 1.89 1.54 3.43 3.43 3.43.78 0 1.53-.25 2.14-.72.06-.04.18-.04.3.01.23.07.47.11.71.11 1.06 0 2.01-.64 2.38-1.65.02-.05.05-.1.08-.15.01-.01.02-.02.03-.02.05-.05.11-.08.18-.08.08 0 .15.03.21.08.01.01.02.02.03.02.03.05.06.1.08.15.37 1.01 1.32 1.65 2.38 1.65.24 0 .48-.04.71-.11.12-.03.24.04.3.13.38.34 1.13.59 1.91.59 1.89 0 3.43-1.54 3.43-3.43 0-.78-.25-1.53-.72-2.14z"/>
  </svg>
);

const Lung = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.69 2 6 4.69 6 8v8c0 2.21 1.79 4 4 4s4-1.79 4-4V8c0-3.31-2.69-6-6-6zm0 16c-.55 0-1-.45-1-1V8c0-1.66 1.34-3 3-3s3 1.34 3 3v9c0 .55-.45 1-1 1h-4z"/>
  </svg>
);

export default EmergencyPage;