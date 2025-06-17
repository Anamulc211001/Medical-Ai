import React, { useState } from 'react';
import { Search, Upload, Camera, ShoppingCart, Clock, Truck, Shield, Plus, Minus, Star } from 'lucide-react';

const PharmacyPage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [cartItems, setCartItems] = useState<Array<{id: number, name: string, price: number, quantity: number}>>([]);

  const categories = [
    'Pain Relief', 'Cold & Flu', 'Vitamins', 'Antibiotics', 
    'Heart Health', 'Diabetes Care', 'Mental Health', 'Skin Care'
  ];

  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      category: 'Pain Relief',
      price: 12.99,
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      description: '20 tablets for pain and fever relief',
      requiresPrescription: false
    },
    {
      id: 2,
      name: 'Vitamin D3 1000IU',
      category: 'Vitamins',
      price: 18.50,
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.7,
      reviews: 89,
      inStock: true,
      description: '60 capsules for bone health',
      requiresPrescription: false
    },
    {
      id: 3,
      name: 'Amoxicillin 250mg',
      category: 'Antibiotics',
      price: 24.75,
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.9,
      reviews: 156,
      inStock: true,
      description: '21 capsules antibiotic',
      requiresPrescription: true
    },
    {
      id: 4,
      name: 'Omega-3 Fish Oil',
      category: 'Heart Health',
      price: 32.00,
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.6,
      reviews: 203,
      inStock: true,
      description: '90 softgels for cardiovascular health',
      requiresPrescription: false
    },
    {
      id: 5,
      name: 'Loratadine 10mg',
      category: 'Cold & Flu',
      price: 15.25,
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.5,
      reviews: 78,
      inStock: false,
      description: '30 tablets for allergy relief',
      requiresPrescription: false
    },
    {
      id: 6,
      name: 'Metformin 500mg',
      category: 'Diabetes Care',
      price: 28.90,
      image: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 4.8,
      reviews: 167,
      inStock: true,
      description: '60 tablets for diabetes management',
      requiresPrescription: true
    }
  ];

  const addToCart = (medicine: any) => {
    const existingItem = cartItems.find(item => item.id === medicine.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === medicine.id 
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCartItems([...cartItems, {
        id: medicine.id,
        name: medicine.name,
        price: medicine.price,
        quantity: 1
      }]);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? {...item, quantity: newQuantity} : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Pharmacy</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload prescriptions for AI analysis, browse medicines, and get fast delivery to your doorstep with our smart pharmacy system.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'browse' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Browse Medicines
            </button>
            <button
              onClick={() => setActiveTab('prescription')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'prescription' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Upload Prescription
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors relative ${
                activeTab === 'cart' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>

          {/* Browse Tab */}
          {activeTab === 'browse' && (
            <div className="p-6">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search medicines, brands, or symptoms..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map(category => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors text-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Medicines Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {medicines.map(medicine => (
                  <div key={medicine.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="relative mb-4">
                      <img
                        src={medicine.image}
                        alt={medicine.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      {medicine.requiresPrescription && (
                        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                          Prescription Required
                        </div>
                      )}
                      {!medicine.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                          <span className="text-white font-medium">Out of Stock</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{medicine.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{medicine.description}</p>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{medicine.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({medicine.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">${medicine.price}</span>
                      <button
                        onClick={() => addToCart(medicine)}
                        disabled={!medicine.inStock}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prescription Tab */}
          {activeTab === 'prescription' && (
            <div className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Upload Your Prescription</h3>
                  <p className="text-gray-600">
                    Our AI will analyze your prescription and automatically add medicines to your cart with proper dosage information.
                  </p>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 transition-colors">
                  <div className="space-y-6">
                    <div className="flex justify-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Upload className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Camera className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Upload or Take Photo</h4>
                      <p className="text-gray-600 mb-4">
                        Drag and drop your prescription image, or click to browse
                      </p>
                      <p className="text-sm text-gray-500">
                        Supports JPG, PNG, PDF up to 10MB
                      </p>
                    </div>

                    <div className="flex justify-center space-x-4">
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Choose File
                      </button>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                        Take Photo
                      </button>
                    </div>
                  </div>
                </div>

                {/* AI Analysis Info */}
                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">AI Prescription Analysis</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Secure OCR technology extracts medicine names
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Automatic dosage and timing recognition
                    </li>
                    <li className="flex items-center">
                      <Truck className="w-4 h-4 mr-2" />
                      Instant medicine availability check
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Cart Tab */}
          {activeTab === 'cart' && (
            <div className="p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-6">Add some medicines to get started</p>
                  <button
                    onClick={() => setActiveTab('browse')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Browse Medicines
                  </button>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Cart ({cartItems.length} items)</h3>
                  
                  <div className="space-y-4 mb-8">
                    {cartItems.map(item => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-gray-600">${item.price} each</p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between text-xl font-semibold text-gray-900 mb-6">
                      <span>Total: ${totalAmount.toFixed(2)}</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Truck className="w-4 h-4" />
                        <span>Free delivery on orders over $50</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Shield className="w-4 h-4" />
                        <span>All medicines are verified and authentic</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>Same-day delivery available</span>
                      </div>
                    </div>

                    <button className="w-full mt-6 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacyPage;