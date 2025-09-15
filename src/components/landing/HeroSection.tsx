import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">Trusted by 10,000+ users</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Buy & Sell{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Everything
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Nigeria's largest online marketplace. Buy and sell everything from electronics to fashion, 
              cars to property. Connect directly with sellers via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span>Start Shopping</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/auth"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Start Selling
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-white/80 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Sellers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1M+</div>
                <div className="text-white/80 text-sm">Happy Buyers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Sarah"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-white font-semibold">Sarah Johnson</div>
                    <div className="text-white/70 text-sm">Digital Marketing Expert</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  "Helped 100+ businesses grow their online presence!"
                </p>
                <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 hover:bg-green-600 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </button>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Tech Community</div>
                    <div className="text-white/70 text-sm">500+ Active Members</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  "Join our vibrant tech community for networking and learning!"
                </p>
                <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 hover:bg-green-600 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                  <span>Join Group</span>
                </button>
              </motion.div>

              {/* Main Hero Image */}
              <div className="mx-auto max-w-md">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="People connecting"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="relative">
        <svg
          className="absolute bottom-0 w-full h-24 text-white"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;