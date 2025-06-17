import React, { useState } from 'react';
import { MessageCircle, Video, Pill, Shield, Phone, Brain, Heart, Clock, Users, Award, ArrowRight, Play, Mic, Send } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

const HomePage = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'AI Health Assistant',
      description: 'Smart AI analyzes symptoms and provides personalized health recommendations 24/7',
      color: 'bg-blue-500'
    },
    {
      icon: Video,
      title: 'Virtual Consultations',
      description: 'Connect with certified doctors worldwide through secure video consultations',
      color: 'bg-teal-500'
    },
    {
      icon: Pill,
      title: 'Smart Pharmacy',
      description: 'AI-powered prescription reading and medicine delivery to your doorstep',
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: 'Health Records',
      description: 'Secure, blockchain-protected electronic health records accessible anywhere',
      color: 'bg-purple-500'
    },
    {
      icon: Phone,
      title: '24/7 Emergency',
      description: 'Instant emergency response with location sharing and ambulance booking',
      color: 'bg-red-500'
    },
    {
      icon: Heart,
      title: 'Mental Health',
      description: 'Dedicated AI counselor for emotional support and mental wellness',
      color: 'bg-pink-500'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Active Users' },
    { number: '10K+', label: 'Certified Doctors' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Trusted by 500K+ Users Worldwide
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                    {' '}Healthcare
                  </span>
                  {' '}Companion
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get instant medical support, connect with world-class doctors, and manage your health with advanced AI technology. Available 24/7 in multiple languages.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setShowChatbot(true)}
                  className="flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start AI Consultation
                </button>
                <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-green-500" />
                  24/7 Available
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-blue-500" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2 text-purple-500" />
                  AI Certified
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">AI Health Assistant</h3>
                      <p className="text-sm text-gray-600">Online • Ready to help</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Hi! I'm your AI health assistant. How can I help you today?</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 ml-6">
                      <p className="text-sm text-gray-700">I have a headache and feel tired</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600">Based on your symptoms, this could be due to dehydration or stress. Let me ask a few questions to better understand...</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 pt-4">
                    <input 
                      type="text" 
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Mic className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered diagnostics to emergency services, we provide comprehensive healthcare support powered by cutting-edge technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 text-white mr-3" />
            <h2 className="text-3xl font-bold text-white">Need Emergency Help?</h2>
          </div>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our 24/7 emergency response team is ready to help. Get instant ambulance booking and emergency medical assistance.
          </p>
          <button className="px-8 py-4 bg-white text-red-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg">
            Emergency Services
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust HealthAI for their medical needs. Start your health journey today.
          </p>
          <button 
            onClick={() => setShowChatbot(true)}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* AI Assistant Modal */}
      {showChatbot && (
        <AIAssistant onClose={() => setShowChatbot(false)} />
      )}
    </div>
  );
};

export default HomePage;