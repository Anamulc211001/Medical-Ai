import React, { useState } from 'react';
import { Search, Filter, Star, Clock, MapPin, Video, MessageCircle, Calendar, Award, Globe } from 'lucide-react';

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const specialties = [
    'All Specialties',
    'General Medicine',
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Pediatrics',
    'Psychiatry',
    'Orthopedics',
    'Gynecology',
    'Dentistry'
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      rating: 4.9,
      reviews: 156,
      location: 'New York, USA',
      languages: ['English', 'Mandarin'],
      experience: '15 years',
      consultationFee: 150,
      nextAvailable: '2:30 PM Today',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      onlineConsultation: true
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      specialty: 'General Medicine',
      rating: 4.8,
      reviews: 203,
      location: 'London, UK',
      languages: ['English', 'French'],
      experience: '12 years',
      consultationFee: 120,
      nextAvailable: '4:00 PM Today',
      image: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      onlineConsultation: true
    },
    {
      id: 3,
      name: 'Dr. Priya Sharma',
      specialty: 'Dermatology',
      rating: 4.9,
      reviews: 189,
      location: 'Mumbai, India',
      languages: ['English', 'Hindi', 'Gujarati'],
      experience: '10 years',
      consultationFee: 80,
      nextAvailable: '6:00 PM Today',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      onlineConsultation: true
    },
    {
      id: 4,
      name: 'Dr. Ahmed Hassan',
      specialty: 'Neurology',
      rating: 4.7,
      reviews: 134,
      location: 'Dubai, UAE',
      languages: ['English', 'Arabic'],
      experience: '18 years',
      consultationFee: 200,
      nextAvailable: 'Tomorrow 10:00 AM',
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      onlineConsultation: true
    },
    {
      id: 5,
      name: 'Dr. Maria Rodriguez',
      specialty: 'Pediatrics',
      rating: 4.8,
      reviews: 167,
      location: 'Barcelona, Spain',
      languages: ['English', 'Spanish', 'Catalan'],
      experience: '14 years',
      consultationFee: 110,
      nextAvailable: 'Tomorrow 2:00 PM',
      image: 'https://images.pexels.com/photos/5452207/pexels-photo-5452207.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      onlineConsultation: true
    },
    {
      id: 6,
      name: 'Dr. James Park',
      specialty: 'Psychiatry',
      rating: 4.9,
      reviews: 221,
      location: 'Seoul, South Korea',
      languages: ['English', 'Korean'],
      experience: '16 years',
      consultationFee: 160,
      nextAvailable: 'Tomorrow 11:30 AM',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true,
      onlineConsultation: true
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === 'All Specialties' || 
                            doctor.specialty === selectedSpecialty;
    const matchesLocation = !selectedLocation || doctor.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Doctor</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with certified healthcare professionals worldwide. Book video consultations with top-rated doctors in your preferred language.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search doctors or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Specialty Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Location..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Search Doctors
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctors {searchTerm && `for "${searchTerm}"`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex items-start space-x-4">
                {/* Doctor Image */}
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  {doctor.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>

                {/* Doctor Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
                      <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                        <span className="text-sm text-gray-500">({doctor.reviews})</span>
                      </div>
                      <p className="text-lg font-bold text-gray-900">${doctor.consultationFee}</p>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {doctor.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="w-4 h-4 mr-2" />
                      {doctor.languages.join(', ')}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {doctor.experience} experience
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center text-green-800">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Next available: {doctor.nextAvailable}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Video className="w-4 h-4 mr-2" />
                      Book Video Call
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                      <Calendar className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all available doctors.</p>
          </div>
        )}

        {/* Emergency Banner */}
        <div className="mt-12 bg-red-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Immediate Medical Attention?</h3>
          <p className="text-red-100 mb-6">Our emergency service connects you instantly with available doctors for urgent consultations.</p>
          <button className="px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Emergency Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;