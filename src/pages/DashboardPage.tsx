import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, Eye, MessageCircle, TrendingUp, Calendar, 
  Edit3, Pause, Play, Trash2, MoreHorizontal, Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockPromotions, mockAnalytics } from '../utils/mockData';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'promotions', label: 'My Promotions' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage your promotions and track performance</p>
            </div>
            <Link
              to="/create-promotion"
              className="mt-4 sm:mt-0 inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              <Plus className="h-5 w-5" />
              <span>Create Promotion</span>
            </Link>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg mb-8"
        >
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Eye className="h-8 w-8" />
                      <span className="text-2xl font-bold">{mockAnalytics.totalViews}</span>
                    </div>
                    <h3 className="font-semibold mb-1">Total Views</h3>
                    <p className="text-purple-100 text-sm">+12% from last month</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <MessageCircle className="h-8 w-8" />
                      <span className="text-2xl font-bold">{mockAnalytics.totalContacts}</span>
                    </div>
                    <h3 className="font-semibold mb-1">Total Contacts</h3>
                    <p className="text-green-100 text-sm">+8% from last month</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <Calendar className="h-8 w-8" />
                      <span className="text-2xl font-bold">{mockAnalytics.totalPromotions}</span>
                    </div>
                    <h3 className="font-semibold mb-1">Active Promotions</h3>
                    <p className="text-blue-100 text-sm">2 expiring soon</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <TrendingUp className="h-8 w-8" />
                      <span className="text-2xl font-bold">{mockAnalytics.growthRate}%</span>
                    </div>
                    <h3 className="font-semibold mb-1">Growth Rate</h3>
                    <p className="text-orange-100 text-sm">Monthly growth</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {mockAnalytics.recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <MessageCircle className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-900 font-medium">{activity.description}</p>
                          <p className="text-gray-500 text-sm">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Promotions Tab */}
            {activeTab === 'promotions' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">My Promotions</h3>
                  <Link
                    to="/create-promotion"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Create New
                  </Link>
                </div>

                <div className="space-y-4">
                  {mockPromotions.map((promotion) => (
                    <div key={promotion.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <img
                          src={promotion.images[0]}
                          alt={promotion.title}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{promotion.title}</h4>
                            <div className="flex items-center space-x-2">
                              <button className="p-2 text-gray-500 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                                <Edit3 className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors">
                                <Pause className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                            <span 
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{ 
                                backgroundColor: `${promotion.category.color}20`,
                                color: promotion.category.color
                              }}
                            >
                              {promotion.category.name}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{promotion.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{promotion.contacts}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              promotion.status === 'active' ? 'bg-green-100 text-green-700' :
                              promotion.status === 'expired' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {promotion.status}
                            </span>
                          </div>

                          <p className="text-gray-600 text-sm line-clamp-2">
                            {promotion.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900">Analytics Overview</h3>
                
                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Analytics Coming Soon</h4>
                  <p className="text-gray-500">Detailed analytics and insights will be available here</p>
                </div>

                {/* Performance Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Top Performing</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-1">{mockAnalytics.topPerformingPromotion}</p>
                    <p className="text-gray-500 text-sm">Most viewed promotion</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Avg. Response Time</h4>
                    <p className="text-2xl font-bold text-green-600 mb-1">2.5 hours</p>
                    <p className="text-gray-500 text-sm">WhatsApp response time</p>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Conversion Rate</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-1">7.2%</p>
                    <p className="text-gray-500 text-sm">Views to contacts</p>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900">Account Settings</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Profile Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" defaultValue="Sarah Johnson" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" defaultValue="sarah@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number</label>
                        <input type="tel" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" defaultValue="+1234567890" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">User Type</label>
                        <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <option value="individual">Individual</option>
                          <option value="business">Business</option>
                          <option value="community">Community</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea 
                        rows={3} 
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                        defaultValue="Digital marketing expert helping small businesses grow online"
                      />
                    </div>
                    <button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                      Save Changes
                    </button>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Notification Preferences</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive updates about your promotions</p>
                        </div>
                        <div className="relative">
                          <input type="checkbox" defaultChecked className="sr-only" />
                          <div className="w-10 h-6 bg-purple-600 rounded-full shadow-inner"></div>
                          <div className="absolute w-4 h-4 bg-white rounded-full shadow right-1 top-1"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">WhatsApp Notifications</p>
                          <p className="text-sm text-gray-500">Get notified when someone contacts you</p>
                        </div>
                        <div className="relative">
                          <input type="checkbox" defaultChecked className="sr-only" />
                          <div className="w-10 h-6 bg-purple-600 rounded-full shadow-inner"></div>
                          <div className="absolute w-4 h-4 bg-white rounded-full shadow right-1 top-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Promotions Management */}
            {activeTab === 'promotions' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">Manage Promotions</h3>
                  <div className="flex space-x-2">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Paused</option>
                      <option>Expired</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockPromotions.map((promotion) => (
                    <div key={promotion.id} className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={promotion.images[0]}
                          alt={promotion.title}
                          className="w-16 h-16 rounded-xl object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{promotion.title}</h4>
                            <div className="flex items-center space-x-1">
                              <button className="p-1 text-gray-500 hover:text-purple-600 rounded transition-colors">
                                <Edit3 className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-500 hover:text-yellow-600 rounded transition-colors">
                                <Pause className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-500 hover:text-red-600 rounded transition-colors">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                            <span 
                              className="px-2 py-1 rounded-full text-xs font-medium"
                              style={{ 
                                backgroundColor: `${promotion.category.color}20`,
                                color: promotion.category.color
                              }}
                            >
                              {promotion.category.name}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Eye className="h-3 w-3" />
                              <span>{promotion.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-3 w-3" />
                              <span>{promotion.contacts}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              promotion.status === 'active' ? 'bg-green-100 text-green-700' :
                              promotion.status === 'expired' ? 'bg-red-100 text-red-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {promotion.status}
                            </span>
                            <span className="text-xs text-gray-500">Expires in 5 days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Tab Content */}
            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900">Performance Analytics</h3>
                
                {/* Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                    <h4 className="font-semibold text-purple-900 mb-2">Engagement Rate</h4>
                    <p className="text-3xl font-bold text-purple-600 mb-1">12.5%</p>
                    <p className="text-purple-700 text-sm">Views to contacts ratio</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                    <h4 className="font-semibold text-green-900 mb-2">Best Performing Day</h4>
                    <p className="text-3xl font-bold text-green-600 mb-1">Tuesday</p>
                    <p className="text-green-700 text-sm">Highest contact rate</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Avg. Response Time</h4>
                    <p className="text-3xl font-bold text-blue-600 mb-1">1.2h</p>
                    <p className="text-blue-700 text-sm">Your WhatsApp response</p>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Detailed Charts Coming Soon</h4>
                  <p className="text-gray-500">Advanced analytics and performance charts will be available here</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;