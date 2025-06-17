import React, { useState } from 'react';
import { Calendar, Clock, Heart, Activity, Pill, FileText, Bell, Settings, TrendingUp, AlertCircle, CheckCircle, User } from 'lucide-react';

const DashboardPage = () => {
  const [activeMetric, setActiveMetric] = useState('heartRate');

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      date: '2024-01-25',
      time: '2:30 PM',
      type: 'Video Consultation',
      status: 'confirmed'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Johnson',
      specialty: 'General Medicine',
      date: '2024-02-02',
      time: '10:00 AM',
      type: 'In-Person Visit',
      status: 'pending'
    }
  ];

  const medications = [
    {
      name: 'Lisinopril 10mg',
      nextDose: '8:00 AM',
      remaining: '25 days',
      status: 'on-time'
    },
    {
      name: 'Vitamin D3',
      nextDose: '8:00 AM',
      remaining: '60 days',
      status: 'on-time'
    },
    {
      name: 'Omega-3',
      nextDose: 'Overdue',
      remaining: '45 days',
      status: 'overdue'
    }
  ];

  const healthMetrics = {
    heartRate: {
      current: 72,
      unit: 'bpm',
      trend: 'stable',
      data: [68, 70, 72, 71, 73, 72, 74],
      status: 'normal'
    },
    bloodPressure: {
      current: '120/80',
      unit: 'mmHg',
      trend: 'improving',
      data: [125, 122, 120, 118, 120, 119, 120],
      status: 'normal'
    },
    weight: {
      current: 165,
      unit: 'lbs',
      trend: 'decreasing',
      data: [168, 167, 166, 165, 165, 164, 165],
      status: 'normal'
    },
    steps: {
      current: 8542,
      unit: 'steps',
      trend: 'increasing',
      data: [7200, 8100, 8500, 8200, 8800, 9100, 8542],
      status: 'good'
    }
  };

  const recentActivity = [
    {
      id: 1,
      type: 'appointment',
      title: 'Completed video consultation with Dr. Sarah Chen',
      time: '2 hours ago',
      icon: Calendar
    },
    {
      id: 2,
      type: 'medication',
      title: 'Took morning medications',
      time: '6 hours ago',
      icon: Pill
    },
    {
      id: 3,
      type: 'health',
      title: 'Blood pressure reading recorded: 118/76',
      time: '1 day ago',
      icon: Heart
    },
    {
      id: 4,
      type: 'record',
      title: 'Lab results uploaded to health records',
      time: '2 days ago',
      icon: FileText
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'medication',
      message: 'Omega-3 dose is overdue',
      severity: 'high',
      time: '30 minutes ago'
    },
    {
      id: 2,
      type: 'appointment',
      message: 'Upcoming appointment with Dr. Chen in 2 days',
      severity: 'medium',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'health',
      message: 'Weekly health summary is ready',
      severity: 'low',
      time: '3 hours ago'
    }
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'increasing' || trend === 'improving') return '↗️';
    if (trend === 'decreasing') return '↘️';
    return '→';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': case 'good': case 'on-time': return 'text-green-600 bg-green-100';
      case 'overdue': case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Health Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's your health overview for today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(healthMetrics).map(([key, metric]) => (
            <div
              key={key}
              onClick={() => setActiveMetric(key)}
              className={`bg-white rounded-xl p-6 shadow-lg cursor-pointer transition-all hover:shadow-xl ${
                activeMetric === key ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-gray-900 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <span className="text-2xl">{getTrendIcon(metric.trend)}</span>
              </div>
              
              <div className="mb-3">
                <span className="text-3xl font-bold text-gray-900">{metric.current}</span>
                <span className="text-gray-600 ml-2">{metric.unit}</span>
              </div>
              
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(metric.status)}`}>
                {metric.status}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Health Trend Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeMetric.replace(/([A-Z])/g, ' $1').trim()} Trend
                </h2>
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                </select>
              </div>
              
              {/* Simple chart representation */}
              <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                {healthMetrics[activeMetric as keyof typeof healthMetrics].data.map((value, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 rounded-t w-8 transition-all hover:bg-blue-600"
                    style={{ height: `${(value / Math.max(...healthMetrics[activeMetric as keyof typeof healthMetrics].data)) * 200}px` }}
                  ></div>
                ))}
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>7 days ago</span>
                <span>Today</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <activity.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Alerts & Reminders</h2>
              
              <div className="space-y-4">
                {alerts.map(alert => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                    <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      alert.severity === 'high' ? 'text-red-500' :
                      alert.severity === 'medium' ? 'text-yellow-500' : 'text-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-600">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Appointments</h2>
              
              <div className="space-y-4">
                {upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{appointment.doctor}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 mb-2">{appointment.specialty}</p>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {appointment.time}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{appointment.type}</p>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                View All Appointments
              </button>
            </div>

            {/* Medication Reminders */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Medication Reminders</h2>
              
              <div className="space-y-4">
                {medications.map((medication, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{medication.name}</h3>
                      <p className="text-sm text-gray-600">Next: {medication.nextDose}</p>
                      <p className="text-xs text-gray-500">{medication.remaining} supply</p>
                    </div>
                    <div className="flex items-center">
                      {medication.status === 'on-time' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Manage Medications
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              <Calendar className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Book Appointment</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              <FileText className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">View Records</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              <Pill className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Order Refill</span>
            </button>
            <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              <Activity className="w-8 h-8 mb-2" />
              <span className="text-sm font-medium">Log Symptoms</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;