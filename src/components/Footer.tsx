import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">HealthAI</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted AI-powered healthcare companion, providing 24/7 medical support and connecting you with the best healthcare professionals worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Health Assistant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Doctor Consultations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Online Pharmacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Health Records</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mental Health Support</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-400">support@healthai.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Healthcare Ave, Medical District, NY 10001</span>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Emergency Hotline</h4>
              <p className="text-red-400 font-semibold text-lg">911 or +1 (555) 911-HELP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 HealthAI. All rights reserved. Licensed healthcare platform.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Available 24/7</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-500">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;