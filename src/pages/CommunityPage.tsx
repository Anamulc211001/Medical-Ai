import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Users, BookOpen, Calendar, Award, TrendingUp, Search, Filter, Plus } from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('forum');

  const forumPosts = [
    {
      id: 1,
      title: 'Managing Type 2 Diabetes - My Journey and Tips',
      author: 'Sarah M.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50',
      category: 'Diabetes Care',
      likes: 34,
      replies: 12,
      time: '2 hours ago',
      content: 'I was diagnosed with Type 2 diabetes 3 years ago and wanted to share what has worked for me in managing my condition...',
      tags: ['diabetes', 'diet', 'exercise']
    },
    {
      id: 2,
      title: 'Mental Health Support During Stressful Times',
      author: 'Dr. Michael Chen',
      avatar: 'https://images.pexels.com/photos/612608/pexels-photo-612608.jpeg?auto=compress&cs=tinysrgb&w=50',
      category: 'Mental Health',
      likes: 67,
      replies: 23,
      time: '4 hours ago',
      content: 'As a mental health professional, I want to share some evidence-based strategies for managing stress and anxiety...',
      tags: ['mental-health', 'stress', 'anxiety'],
      verified: true
    },
    {
      id: 3,
      title: 'Heart-Healthy Recipes That Actually Taste Good',
      author: 'Chef Maria R.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50',
      category: 'Nutrition',
      likes: 89,
      replies: 31,
      time: '6 hours ago',
      content: 'Managing heart health doesn\'t mean sacrificing flavor! Here are some of my favorite heart-healthy recipes...',
      tags: ['nutrition', 'heart-health', 'recipes']
    },
    {
      id: 4,
      title: 'Questions About My Recent Lab Results',
      author: 'John D.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50',
      category: 'Lab Results',
      likes: 15,
      replies: 8,
      time: '1 day ago',
      content: 'I just received my blood work results and have some questions about what the numbers mean...',
      tags: ['lab-results', 'blood-work', 'questions']
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: What Patients Should Know',
      author: 'HealthAI Editorial Team',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300',
      excerpt: 'Explore how artificial intelligence is transforming healthcare delivery and what it means for patient care.',
      readTime: '5 min read',
      category: 'Technology',
      publishDate: '2024-01-15'
    },
    {
      id: 2,
      title: '10 Warning Signs You Should Never Ignore',
      author: 'Dr. Sarah Wilson',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=300',
      excerpt: 'Learn about important symptoms that require immediate medical attention.',
      readTime: '7 min read',
      category: 'Health Tips',
      publishDate: '2024-01-12'
    },
    {
      id: 3,
      title: 'Building Immunity Naturally: Science-Based Approaches',
      author: 'Dr. James Park',
      image: 'https://images.pexels.com/photos/1346155/pexels-photo-1346155.jpeg?auto=compress&cs=tinysrgb&w=300',
      excerpt: 'Discover evidence-based methods to strengthen your immune system naturally.',
      readTime: '6 min read',
      category: 'Wellness',
      publishDate: '2024-01-10'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Heart Health Webinar',
      date: 'Jan 25, 2024',
      time: '7:00 PM EST',
      speaker: 'Dr. Emily Rodriguez',
      attendees: 234,
      type: 'Webinar'
    },
    {
      id: 2,
      title: 'Diabetes Support Group Meeting',
      date: 'Jan 27, 2024',
      time: '6:00 PM EST',
      speaker: 'Support Group Leaders',
      attendees: 45,
      type: 'Support Group'
    },
    {
      id: 3,
      title: 'Mental Health Awareness Workshop',
      date: 'Feb 2, 2024',
      time: '2:00 PM EST',
      speaker: 'Dr. Michael Chen',
      attendees: 156,
      type: 'Workshop'
    }
  ];

  const categories = [
    'All Categories', 'General Health', 'Mental Health', 'Diabetes Care', 
    'Heart Health', 'Nutrition', 'Exercise', 'Lab Results', 'Medications'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with others on similar health journeys, share experiences, and learn from healthcare professionals and AI-curated content.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">25,000+</div>
            <div className="text-gray-600">Active Members</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">1,200+</div>
            <div className="text-gray-600">Daily Discussions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Verified Experts</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <BookOpen className="w-8 h-8 text-teal-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">2,000+</div>
            <div className="text-gray-600">Health Articles</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('forum')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'forum' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Community Forum
            </button>
            <button
              onClick={() => setActiveTab('blog')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'blog' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Health Blog
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'events' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Events & Webinars
            </button>
          </div>

          {/* Forum Tab */}
          {activeTab === 'forum' && (
            <div className="p-6">
              {/* Search and Actions */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  New Post
                </button>
              </div>

              {/* Forum Posts */}
              <div className="space-y-6">
                {forumPosts.map(post => (
                  <div key={post.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <img
                        src={post.avatar}
                        alt={post.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                            {post.title}
                          </h3>
                          {post.verified && (
                            <Award className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="font-medium">{post.author}</span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {post.category}
                          </span>
                          <span>{post.time}</span>
                        </div>
                        
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.replies}</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                              <Share2 className="w-4 h-4" />
                              <span>Share</span>
                            </button>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Tab */}
          {activeTab === 'blog' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Latest Health Articles</h3>
                <p className="text-gray-600">AI-curated content from healthcare professionals and experts</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map(post => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span>{post.publishDate}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-8">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upcoming Health Events</h3>
                <p className="text-gray-600">Join webinars, workshops, and support groups led by healthcare professionals</p>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {event.attendees} registered
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-2">
                          {event.type}
                        </span>
                        <p className="text-sm text-gray-600">by {event.speaker}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Register Now
                      </button>
                      <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Community Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Community Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <h4 className="font-medium mb-2">Be Respectful</h4>
              <p className="text-sm">Treat all community members with kindness and respect, regardless of their health conditions or backgrounds.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Share Responsibly</h4>
              <p className="text-sm">Share your experiences and insights, but remember that everyone's health journey is unique.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Protect Privacy</h4>
              <p className="text-sm">Never share personal medical information or ask others to share theirs publicly.</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Seek Professional Help</h4>
              <p className="text-sm">Community advice is not a substitute for professional medical care. Always consult healthcare providers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;