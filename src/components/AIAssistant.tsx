import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Mic, MicOff, Volume2, VolumeX, Brain, User, Loader } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI health assistant. I can help analyze symptoms, provide health advice, recommend doctors, and assist with medical questions. What's on your mind today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const quickResponses = [
    "I have a headache",
    "Feeling tired and dizzy",
    "Chest pain concerns",
    "Need a doctor recommendation",
    "Prescription help",
    "Mental health support"
  ];

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('headache') || lowerMessage.includes('head pain')) {
      return "I understand you're experiencing a headache. This could be due to several factors like stress, dehydration, or tension. Here are some immediate steps:\n\n• Drink plenty of water\n• Rest in a quiet, dark room\n• Apply a cold compress to your forehead\n• Try gentle neck stretches\n\nIf the headache is severe, persistent, or accompanied by fever, vision changes, or nausea, please seek immediate medical attention. Would you like me to find a nearby doctor or emergency service?";
    }
    
    if (lowerMessage.includes('tired') || lowerMessage.includes('fatigue') || lowerMessage.includes('dizzy')) {
      return "Fatigue and dizziness can have various causes. Common reasons include:\n\n• Dehydration\n• Low blood sugar\n• Lack of sleep\n• Stress or anxiety\n• Iron deficiency\n\nImmediate steps to try:\n• Sit or lie down safely\n• Drink water slowly\n• Have a light snack if you haven't eaten\n• Take deep breaths\n\nIf symptoms persist or worsen, especially if accompanied by chest pain, shortness of breath, or confusion, please seek medical attention immediately. Shall I help you find a healthcare provider?";
    }
    
    if (lowerMessage.includes('chest pain') || lowerMessage.includes('heart') || lowerMessage.includes('breathing')) {
      return "⚠️ Chest pain requires immediate attention. Please consider the following:\n\n**SEEK EMERGENCY CARE IF:**\n• Severe or crushing chest pain\n• Pain spreading to arm, jaw, or back\n• Shortness of breath\n• Sweating or nausea\n• Dizziness or fainting\n\n**Call 911 immediately or go to the nearest emergency room.**\n\nFor mild discomfort that may be muscle-related:\n• Rest and avoid physical activity\n• Apply heat or cold therapy\n• Monitor symptoms closely\n\nWould you like me to help you find the nearest emergency room or call emergency services?";
    }
    
    if (lowerMessage.includes('doctor') || lowerMessage.includes('specialist') || lowerMessage.includes('appointment')) {
      return "I'd be happy to help you find the right healthcare professional! To provide the best recommendations, could you tell me:\n\n• What type of specialist do you need?\n• Your location or preferred area\n• Any specific concerns or conditions\n• Insurance preferences\n• Preferred appointment timing\n\nOur network includes:\n• General practitioners\n• Specialists (cardiology, dermatology, etc.)\n• Mental health professionals\n• International consultation options\n\nWould you like to start with a general practitioner or do you need a specific specialist?";
    }
    
    if (lowerMessage.includes('prescription') || lowerMessage.includes('medicine') || lowerMessage.includes('medication')) {
      return "I can help with prescription-related questions! Our AI can:\n\n• Read and interpret prescription images\n• Explain medication information\n• Set up medication reminders\n• Check for potential interactions\n• Connect you with our online pharmacy\n\n**Important:** Never stop or start medications without consulting your doctor. \n\nWhat specific help do you need with your prescription? You can also upload a photo of your prescription for AI analysis.";
    }
    
    if (lowerMessage.includes('mental health') || lowerMessage.includes('anxiety') || lowerMessage.includes('depression') || lowerMessage.includes('stress')) {
      return "I'm here to support your mental health. It's brave of you to reach out. 💙\n\n**Immediate support:**\n• Take slow, deep breaths\n• Ground yourself: name 5 things you can see, 4 you can hear, 3 you can touch\n• Remember: you're not alone\n\n**Available resources:**\n• AI mental health counselor (available 24/7)\n• Licensed therapists and counselors\n• Support groups and community forums\n• Meditation and wellness tools\n\n**Crisis support:** If you're having thoughts of self-harm, please contact:\n• National Suicide Prevention Lifeline: 988\n• Crisis Text Line: Text HOME to 741741\n\nWould you like to speak with our AI counselor or connect with a mental health professional?";
    }
    
    // Default response
    return "Thank you for sharing that with me. I'm here to help with any health-related questions or concerns you might have. \n\nI can assist you with:\n• Symptom analysis and advice\n• Finding the right healthcare providers\n• Prescription and medication support\n• Mental health resources\n• Emergency assistance\n• Health education and tips\n\nCould you provide more details about what's concerning you, or let me know how else I can help today?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    // Text-to-speech would be implemented here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-teal-50 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AI Health Assistant</h3>
              <p className="text-sm text-gray-600">Online • Ready to help</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleSpeaking}
              className={`p-2 rounded-lg transition-colors ${
                isSpeaking ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isSpeaking ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.type === 'ai' 
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500' 
                  : 'bg-gray-300'
              }`}>
                {message.type === 'ai' ? (
                  <Brain className="w-4 h-4 text-white" />
                ) : (
                  <User className="w-4 h-4 text-gray-600" />
                )}
              </div>
              
              <div className={`max-w-[70%] ${
                message.type === 'user' ? 'text-right' : ''
              }`}>
                <div className={`inline-block p-4 rounded-2xl ${
                  message.type === 'ai'
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-blue-600 text-white'
                }`}>
                  <p className="whitespace-pre-line text-sm leading-relaxed">{message.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl p-4">
                <div className="flex items-center space-x-2">
                  <Loader className="w-4 h-4 animate-spin text-gray-600" />
                  <span className="text-sm text-gray-600">AI is analyzing...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Responses */}
        <div className="px-6 py-2 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <button
                key={index}
                onClick={() => handleQuickResponse(response)}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {response}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your health question or concern..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
              />
            </div>
            
            <button
              onClick={toggleListening}
              className={`p-3 rounded-xl transition-colors ${
                isListening 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>
            
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            This AI assistant provides general health information and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;