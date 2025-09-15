import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, DollarSign, Users, MessageCircle, Calendar, 
  BarChart3, PieChart, Target, Clock, Star, Award 
} from 'lucide-react';
import { mockAnalytics, mockTransactions } from '../utils/mockData';

const VendorDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const vendorStats = {
    revenue: 2459.50,
    totalCustomers: 156,
    conversionRate: 12.5,
    avgOrderValue: 45.80,
    topProduct: 'Logo Design Service',
    customerSatisfaction: 4.8
  };

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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Vendor{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </h1>
              <p className="text-gray-600">Track your business performance and customer engagement</p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+15%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">${vendorStats.revenue}</h3>
            <p className="text-green-100 text-sm">Total Revenue</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+8%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{vendorStats.totalCustomers}</h3>
            <p className="text-blue-100 text-sm">Total Customers</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Target className="h-8 w-8" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+3%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{vendorStats.conversionRate}%</h3>
            <p className="text-purple-100 text-sm">Conversion Rate</p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-2xl font-bold mb-1">${vendorStats.avgOrderValue}</h3>
            <p className="text-orange-100 text-sm">Avg Order Value</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Revenue Overview</h3>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">Last 30 days</span>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">Revenue Chart</h4>
                  <p className="text-gray-500">Interactive charts coming soon</p>
                </div>
              </div>
            </motion.div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Transactions</h3>
              
              <div className="space-y-4">
                {mockTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(transaction.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">${transaction.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === 'completed' ? 'bg-green-100 text-green-700' :
                        transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-600" />
                    </div>
                    <span className="text-gray-700">Customer Rating</span>
                  </div>
                  <span className="font-bold text-gray-900">{vendorStats.customerSatisfaction}/5</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">Top Product</span>
                  </div>
                  <span className="font-medium text-gray-900 text-sm">{vendorStats.topProduct}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Avg Response</span>
                  </div>
                  <span className="font-bold text-gray-900">1.2h</span>
                </div>
              </div>
            </motion.div>

            {/* Customer Insights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Insights</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">New Customers</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Returning Customers</span>
                    <span className="font-semibold">35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full w-[35%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Mobile Users</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                  Create New Promotion
                </button>
                <button className="w-full bg-white border border-gray-200 text-gray-900 py-3 px-4 rounded-xl font-semibold hover:shadow-md transition-all duration-200">
                  Boost Existing Promotion
                </button>
                <button className="w-full bg-white border border-gray-200 text-gray-900 py-3 px-4 rounded-xl font-semibold hover:shadow-md transition-all duration-200">
                  Export Analytics
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-8"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendor Information</h3>
            
            {/* Commission Structure */}
            <div className="bg-white rounded-xl p-4 mb-4 border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-900 mb-2">Commission Structure</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Platform Fee:</span>
                  <span className="font-semibold text-red-600">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Earnings:</span>
                  <span className="font-semibold text-green-600">70%</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <p className="text-xs text-gray-500">
                    For every sale, Wacontacts takes 30% as platform fee. You keep 70% of the sale amount.
                  </p>
                </div>
              </div>
            </div>

            {/* Vendor Rules */}
            <div className="bg-white rounded-xl p-4 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Vendor Rules</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Respond to customer inquiries within 24 hours</li>
                <li>• Provide accurate product descriptions and images</li>
                <li>• Honor all advertised prices and promotions</li>
                <li>• Maintain professional communication</li>
                <li>• Report any issues or disputes promptly</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Top Categories */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Top Categories</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Services</span>
                    <span className="font-semibold text-purple-600">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Products</span>
                    <span className="font-semibold text-blue-600">30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Business</span>
                    <span className="font-semibold text-green-600">25%</span>
                  </div>
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Traffic Sources</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Direct</span>
                    <span className="font-semibold text-purple-600">52%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Search</span>
                    <span className="font-semibold text-blue-600">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Social</span>
                    <span className="font-semibold text-green-600">20%</span>
                  </div>
                </div>
              </div>

              {/* Peak Hours */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Peak Contact Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2:00 PM - 4:00 PM</span>
                    <span className="font-semibold text-purple-600">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">6:00 PM - 8:00 PM</span>
                    <span className="font-semibold text-blue-600">Medium</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                    <span className="font-semibold text-green-600">Medium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorDashboard;