import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageSquare, TrendingUp, AlertTriangle, 
  Shield, Eye, Ban, CheckCircle, X, MoreHorizontal,
  Search, Filter, Download, UserCheck, Flag
} from 'lucide-react';
import { mockPromotions, mockUsers } from '../utils/mockData';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const adminStats = {
    totalUsers: 10547,
    totalPromotions: 2834,
    activePromotions: 1892,
    reportedContent: 12,
    pendingApprovals: 8,
    revenue: 15420.50
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'promotions', label: 'Promotions' },
    { id: 'reports', label: 'Reports' },
    { id: 'analytics', label: 'Analytics' }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin{' '}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-gray-600">Manage platform operations, users, and content moderation</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 text-white">
            <Users className="h-6 w-6 mb-2" />
            <div className="text-2xl font-bold">{adminStats.totalUsers.toLocaleString()}</div>
            <div className="text-blue-100 text-sm">Total Users</div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 text-white">
            <MessageSquare className="h-6 w-6 mb-2" />
            <div className="text-2xl font-bold">{adminStats.totalPromotions.toLocaleString()}</div>
            <div className="text-green-100 text-sm">Total Promotions</div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
            <TrendingUp className="h-6 w-6 mb-2" />
            <div className="text-2xl font-bold">{adminStats.activePromotions.toLocaleString()}</div>
            <div className="text-purple-100 text-sm">Active Promotions</div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-4 text-white">
            <AlertTriangle className="h-6 w-6 mb-2" />
            <div className="text-2xl font-bold">{adminStats.pendingApprovals}</div>
            <div className="text-yellow-100 text-sm">Pending Approvals</div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 text-white">
            <Flag className="h-6 w-6 mb-2" />
            <div className="text-2xl font-bold">{adminStats.reportedContent}</div>
            <div className="text-red-100 text-sm">Reported Content</div>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
            <TrendingUp className="h-6 w-6 mb-2" />
            <div className="text-2xl font-bold">${adminStats.revenue.toLocaleString()}</div>
            <div className="text-orange-100 text-sm">Monthly Revenue</div>
          </div>
        </motion.div>

        {/* Main Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg"
        >
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <UserCheck className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">New user registered</p>
                          <p className="text-xs text-gray-500">2 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Promotion approved</p>
                          <p className="text-xs text-gray-500">5 minutes ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Flag className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Content reported</p>
                          <p className="text-xs text-gray-500">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Platform Health */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Health</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">System Status</span>
                        <span className="flex items-center space-x-2 text-green-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="font-semibold">Operational</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Server Response Time</span>
                        <span className="font-semibold text-gray-900">145ms</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Uptime</span>
                        <span className="font-semibold text-gray-900">99.9%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Daily Active Users</span>
                        <span className="font-semibold text-gray-900">2,847</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Users Tab */}
            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">User Management</h3>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                      Export
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Promotions</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {mockUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-3">
                              <img
                                src={user.avatar}
                                alt={user.name}
                                className="h-10 w-10 rounded-full object-cover"
                              />
                              <div>
                                <div className="font-semibold text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 capitalize">
                              {user.userType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.totalPromotions}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.verified ? 'Verified' : 'Pending'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-800">
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Ban className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-800">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Promotions Tab */}
            {activeTab === 'promotions' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-xl font-semibold text-gray-900">Promotion Management</h3>
                  <div className="flex space-x-3">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Pending Review</option>
                      <option>Reported</option>
                    </select>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                      Export
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockPromotions.map((promotion) => (
                    <div key={promotion.id} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={promotion.images[0]}
                          alt={promotion.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{promotion.title}</h4>
                            <div className="flex space-x-1">
                              <button className="p-1 text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-green-600 hover:text-green-800">
                                <CheckCircle className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-red-600 hover:text-red-800">
                                <X className="h-4 w-4" />
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
                            <span>By {promotion.user.name}</span>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              promotion.status === 'active' ? 'bg-green-100 text-green-700' :
                              promotion.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {promotion.status}
                            </span>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <span>{promotion.views} views</span>
                              <span>{promotion.contacts} contacts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Content Moderation</h3>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                    <h4 className="text-lg font-semibold text-red-900">Urgent: {adminStats.reportedContent} Reports Pending</h4>
                  </div>
                  <p className="text-red-800 mb-4">Content reports require immediate attention to maintain platform safety.</p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Review Reports
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
                    <div className="text-gray-600 text-sm">Pending Reviews</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">145</div>
                    <div className="text-gray-600 text-sm">Approved Today</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Ban className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
                    <div className="text-gray-600 text-sm">Rejected Today</div>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-8">
                <h3 className="text-xl font-semibold text-gray-900">Platform Analytics</h3>
                
                {/* Chart Placeholders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">User Growth</h4>
                    <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                        <p className="text-gray-600">User growth chart</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Revenue Trends</h4>
                    <div className="h-48 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-2" />
                        <p className="text-gray-600">Revenue trends chart</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">12.5%</div>
                    <div className="text-gray-600">Platform Growth</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">8.2%</div>
                    <div className="text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">4.7</div>
                    <div className="text-gray-600">Avg Rating</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">2.3h</div>
                    <div className="text-gray-600">Avg Session</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;