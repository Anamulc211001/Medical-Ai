import React, { useState } from 'react';
import { FileText, Upload, Eye, Download, Shield, Clock, User, Heart, Activity, Calendar, Plus, Search, Filter } from 'lucide-react';

const HealthRecordsPage = () => {
  const [activeTab, setActiveTab] = useState('records');
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const healthRecords = [
    {
      id: 1,
      type: 'Lab Results',
      title: 'Complete Blood Count',
      date: '2024-01-15',
      doctor: 'Dr. Sarah Chen',
      facility: 'City General Hospital',
      status: 'Normal',
      description: 'Annual checkup blood work results showing all values within normal range.',
      file: 'blood_test_results.pdf'
    },
    {
      id: 2,
      type: 'Prescription',
      title: 'Hypertension Medication',
      date: '2024-01-10',
      doctor: 'Dr. Michael Johnson',
      facility: 'Heart Clinic',
      status: 'Active',
      description: 'Prescribed medication for blood pressure management.',
      file: 'prescription_01_10_2024.pdf'
    },
    {
      id: 3,
      type: 'Imaging',
      title: 'Chest X-Ray',
      date: '2024-01-05',
      doctor: 'Dr. Emily Watson',
      facility: 'Radiology Center',
      status: 'Normal',
      description: 'Routine chest X-ray showing clear lungs and normal heart size.',
      file: 'chest_xray_01_05_2024.pdf'
    },
    {
      id: 4,
      type: 'Visit Summary',
      title: 'Annual Physical Exam',
      date: '2023-12-20',
      doctor: 'Dr. Sarah Chen',
      facility: 'City General Hospital',
      status: 'Completed',
      description: 'Comprehensive annual physical examination with recommendations.',
      file: 'annual_physical_2023.pdf'
    },
    {
      id: 5,
      type: 'Vaccination',
      title: 'COVID-19 Booster',
      date: '2023-11-15',
      doctor: 'Pharmacy Clinic',
      facility: 'HealthMart Pharmacy',
      status: 'Completed',
      description: 'COVID-19 booster vaccination administered.',
      file: 'covid_booster_11_15_2023.pdf'
    }
  ];

  const vitalSigns = [
    { metric: 'Blood Pressure', value: '120/80', unit: 'mmHg', status: 'Normal', trend: 'stable' },
    { metric: 'Heart Rate', value: '72', unit: 'bpm', status: 'Normal', trend: 'stable' },
    { metric: 'Temperature', value: '98.6', unit: '°F', status: 'Normal', trend: 'stable' },
    { metric: 'Weight', value: '165', unit: 'lbs', status: 'Normal', trend: 'down' },
    { metric: 'Height', value: '5\'8"', unit: '', status: 'Normal', trend: 'stable' },
    { metric: 'BMI', value: '25.1', unit: '', status: 'Normal', trend: 'down' }
  ];

  const medications = [
    {
      name: 'Lisinopril 10mg',
      dosage: 'Once daily',
      prescriber: 'Dr. Michael Johnson',
      startDate: '2024-01-10',
      status: 'Active',
      remaining: '25 days'
    },
    {
      name: 'Vitamin D3 1000IU',
      dosage: 'Once daily',
      prescriber: 'Dr. Sarah Chen',
      startDate: '2023-12-01',
      status: 'Active',
      remaining: '60 days'
    },
    {
      name: 'Omega-3 Fish Oil',
      dosage: 'Twice daily',
      prescriber: 'Dr. Sarah Chen',
      startDate: '2023-11-15',
      status: 'Active',
      remaining: '45 days'
    }
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return '↗️';
    if (trend === 'down') return '↘️';
    return '→';
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      case 'abnormal': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Records</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your complete medical history, securely stored and easily accessible. Blockchain-protected for maximum security and privacy.
          </p>
        </div>

        {/* Security Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-center space-x-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900">Blockchain-Secured Records</h3>
              <p className="text-blue-800">Your health data is encrypted and stored using blockchain technology, ensuring maximum security and giving you complete control over who can access your information.</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('records')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'records' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Medical Records
            </button>
            <button
              onClick={() => setActiveTab('vitals')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'vitals' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Vital Signs
            </button>
            <button
              onClick={() => setActiveTab('medications')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'medications' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Medications
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'upload' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Upload Records
            </button>
          </div>

          {/* Medical Records Tab */}
          {activeTab === 'records' && (
            <div className="p-6">
              {/* Search and Filter */}
              <div className="flex space-x-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search records..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
              </div>

              {/* Records List */}
              <div className="space-y-4">
                {healthRecords.map(record => (
                  <div key={record.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{record.title}</h3>
                          <p className="text-blue-600 font-medium">{record.type}</p>
                          <p className="text-gray-600 mt-1">{record.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(record.status)}`}>
                          {record.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {record.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {record.doctor}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {record.facility}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {record.file}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => setSelectedRecord(record)}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </button>
                      <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vital Signs Tab */}
          {activeTab === 'vitals' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Vital Signs</h3>
                <p className="text-gray-600">Recorded on January 15, 2024</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vitalSigns.map((vital, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">{vital.metric}</h4>
                      <span className="text-2xl">{getTrendIcon(vital.trend)}</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-gray-900">{vital.value}</span>
                      <span className="text-gray-600 ml-2">{vital.unit}</span>
                    </div>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(vital.status)}`}>
                      {vital.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 mb-2">Connect Your Wearable Device</h4>
                <p className="text-blue-800 mb-4">
                  Sync data from your smartwatch or fitness tracker to automatically track your vital signs and health metrics.
                </p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Connect Device
                </button>
              </div>
            </div>
          )}

          {/* Medications Tab */}
          {activeTab === 'medications' && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Current Medications</h3>
                <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Medication
                </button>
              </div>

              <div className="space-y-4">
                {medications.map((medication, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{medication.name}</h4>
                        <p className="text-gray-600">{medication.dosage}</p>
                      </div>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(medication.status)}`}>
                        {medication.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                      <div>
                        <span className="font-medium">Prescribed by:</span>
                        <br />
                        {medication.prescriber}
                      </div>
                      <div>
                        <span className="font-medium">Start Date:</span>
                        <br />
                        {medication.startDate}
                      </div>
                      <div>
                        <span className="font-medium">Supply Remaining:</span>
                        <br />
                        {medication.remaining}
                      </div>
                      <div>
                        <span className="font-medium">Status:</span>
                        <br />
                        {medication.status}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Refill Now
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                        Set Reminder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upload Health Records</h3>
                  <p className="text-gray-600">
                    Add your medical records, lab results, prescriptions, or any health-related documents to your secure health profile.
                  </p>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors mb-6">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Upload Medical Records</h4>
                      <p className="text-gray-600 mb-4">
                        Drag and drop your files, or click to browse
                      </p>
                      <p className="text-sm text-gray-500">
                        Supports PDF, JPG, PNG up to 10MB
                      </p>
                    </div>

                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Choose Files
                    </button>
                  </div>
                </div>

                {/* Record Type Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Record Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select record type...</option>
                    <option>Lab Results</option>
                    <option>Prescription</option>
                    <option>Imaging (X-ray, MRI, CT)</option>
                    <option>Visit Summary</option>
                    <option>Vaccination Record</option>
                    <option>Insurance Card</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Additional Information */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Brief description of the record..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Healthcare Provider</label>
                      <input
                        type="text"
                        placeholder="Doctor or facility name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Upload to Secure Health Records
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Record Detail Modal */}
        {selectedRecord && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{selectedRecord.title}</h3>
                  <button
                    onClick={() => setSelectedRecord(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <span className="sr-only">Close</span>
                    ✕
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Type:</span>
                      <p className="text-gray-600">{selectedRecord.type}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Date:</span>
                      <p className="text-gray-600">{selectedRecord.date}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Doctor:</span>
                      <p className="text-gray-600">{selectedRecord.doctor}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Facility:</span>
                      <p className="text-gray-600">{selectedRecord.facility}</p>
                    </div>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">Description:</span>
                    <p className="text-gray-600 mt-1">{selectedRecord.description}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      This is a preview of your medical record. The full document contains detailed medical information and test results.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Download Full Record
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRecordsPage;