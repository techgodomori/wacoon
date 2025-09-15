import React, { useState } from 'react';
import { Search, Filter, Grid3X3, List, MapPin, Clock, Eye, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { mockPromotions, mockCategories } from '../utils/mockData';
import { Link } from 'react-router-dom';

const ExplorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  const filteredPromotions = mockPromotions.filter(promotion => {
    const matchesSearch = promotion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         promotion.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           promotion.category.name.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Explore{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Marketplace
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing people, products, services, and communities
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm border p-4 mb-6"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <select className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white min-w-[140px]">
              <option value="all">All Locations</option>
              <option value="lagos">Lagos</option>
              <option value="abuja">Abuja</option>
              <option value="kano">Kano</option>
              <option value="ibadan">Ibadan</option>
              <option value="port-harcourt">Port Harcourt</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white min-w-[140px]"
            >
              <option value="all">All Categories</option>
              {mockCategories.map(category => (
                <option key={category.id} value={category.name.toLowerCase()}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white min-w-[120px]"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="contacts">Most Contacted</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>

            {/* View Mode */}
            <div className="flex items-center bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm text-orange-600' : 'text-gray-500'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Category Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {mockCategories.slice(0, 8).map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name.toLowerCase() ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{filteredPromotions.length}</span> promotions
          </p>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors">
            <Filter className="h-4 w-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Promotions Grid/List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-6'
          }
        >
          {filteredPromotions.map((promotion, index) => (
            <motion.div
              key={promotion.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-lg border hover:shadow-lg transition-all duration-300 overflow-hidden group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-48 h-36' : 'h-40'
              }`}>
                <img
                  src={promotion.images[0]}
                  alt={promotion.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex space-x-2">
                  {promotion.featured && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  )}
                  {promotion.verified && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>
                
                {promotion.price && (
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-bold">
                      ₦{promotion.price.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: `${promotion.category.color}20`,
                      color: promotion.category.color
                    }}
                  >
                    {promotion.category.name}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                  {promotion.title}
                </h3>

                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {promotion.description}
                </p>

                {/* Location and Time */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  {promotion.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{promotion.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>2 days ago</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-1">
                  <Link
                    to={`/promotion/${promotion.id}`}
                    className="flex-1 bg-gray-100 text-gray-900 py-2 px-3 rounded text-xs font-medium text-center hover:bg-gray-200 transition-colors"
                  >
                    View
                  </Link>
                  <a
                    href={`https://wa.me/${promotion.whatsappNumber}?text=Hi! I saw your promotion on Wacontacts about "${promotion.title}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white py-2 px-3 rounded text-xs font-medium text-center hover:bg-green-600 transition-colors flex items-center justify-center space-x-1"
                  >
                    <MessageCircle className="h-3 w-3" />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Load More Promotions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;