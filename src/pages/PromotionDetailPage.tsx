import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Star, MapPin, Clock, Eye, MessageCircle, Share2, 
  Heart, Flag, Calendar, Tag, User, Building2, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { mockPromotions } from '../utils/mockData';

const PromotionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // In a real app, you'd fetch this data based on the ID
  const promotion = mockPromotions.find(p => p.id === id) || mockPromotions[0];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === promotion.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? promotion.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/explore"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Explore</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-96 bg-gray-100">
                <img
                  src={promotion.images[currentImageIndex]}
                  alt={promotion.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {promotion.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  {promotion.featured && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                  {promotion.verified && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-2 rounded-full transition-colors ${
                      isLiked ? 'bg-red-500 text-white' : 'bg-black/50 text-white hover:bg-black/70'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                    <Flag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Image Thumbnails */}
              {promotion.images.length > 1 && (
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {promotion.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-purple-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${promotion.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Promotion Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <span 
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ 
                    backgroundColor: `${promotion.category.color}20`,
                    color: promotion.category.color
                  }}
                >
                  {promotion.category.name}
                </span>
                {promotion.price && (
                  <span className="text-3xl font-bold text-green-600">
                    ${promotion.price}
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {promotion.title}
              </h1>

              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{promotion.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{promotion.contacts} contacts</span>
                </div>
                {promotion.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{promotion.location}</span>
                  </div>
                )}
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>5 days left</span>
                </div>
              </div>

              <div className="prose prose-gray max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {promotion.description}
                </p>
              </div>

              {/* Tags */}
              {promotion.tags && promotion.tags.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {promotion.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Meta Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Posted</span>
                    <div className="font-medium text-gray-900">Feb 1, 2024</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Expires</span>
                    <div className="font-medium text-gray-900">Mar 15, 2024</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Category</span>
                    <div className="font-medium text-gray-900">{promotion.category.name}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Status</span>
                    <div className="font-medium text-green-600 capitalize">{promotion.status}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              {/* User Profile */}
              <div className="text-center mb-6">
                <img
                  src={promotion.user.avatar}
                  alt={promotion.user.name}
                  className="h-20 w-20 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900">{promotion.user.name}</h3>
                <p className="text-gray-600 capitalize">{promotion.user.userType}</p>
                {promotion.user.verified && (
                  <div className="flex items-center justify-center space-x-1 mt-2">
                    <Star className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-blue-500 font-medium">Verified</span>
                  </div>
                )}
              </div>

              {promotion.user.bio && (
                <p className="text-gray-600 text-sm text-center mb-6">
                  {promotion.user.bio}
                </p>
              )}

              {/* User Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{promotion.user.totalPromotions}</div>
                  <div className="text-xs text-gray-500">Promotions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{promotion.user.totalViews}</div>
                  <div className="text-xs text-gray-500">Total Views</div>
                </div>
              </div>

              {/* Contact Button */}
              <a
                href={`https://wa.me/${promotion.whatsappNumber}?text=Hi! I saw your promotion on Wacontacts about "${promotion.title}"`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 mb-4"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contact on WhatsApp</span>
              </a>

              <Link
                to={`/profile/${promotion.user.id}`}
                className="w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
              >
                <User className="h-4 w-4" />
                <span>View Profile</span>
              </Link>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Member since</span>
                    <span className="font-medium text-gray-900">Jan 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Response time</span>
                    <span className="font-medium text-green-600">Usually within 1 hour</span>
                  </div>
                  {promotion.location && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Location</span>
                      <span className="font-medium text-gray-900">{promotion.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Safety Tips */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-blue-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Safety Tips</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Meet in public places for in-person exchanges</li>
                <li>• Verify the person's identity before making payments</li>
                <li>• Use secure payment methods</li>
                <li>• Report suspicious activity</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Related Promotions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPromotions.slice(0, 3).map((relatedPromotion, index) => (
              <div
                key={relatedPromotion.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedPromotion.images[0]}
                    alt={relatedPromotion.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {relatedPromotion.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedPromotion.description}
                  </p>
                  <div className="flex space-x-2">
                    <Link
                      to={`/promotion/${relatedPromotion.id}`}
                      className="flex-1 bg-gray-100 text-gray-900 py-2 px-3 rounded-lg text-sm font-medium text-center hover:bg-gray-200 transition-colors"
                    >
                      View
                    </Link>
                    <a
                      href={`https://wa.me/${relatedPromotion.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white py-2 px-3 rounded-lg text-sm font-medium text-center hover:bg-green-600 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromotionDetailPage;