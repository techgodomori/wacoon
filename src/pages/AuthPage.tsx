import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, MessageCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'user' | 'vendor'>('user');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'individual',
    whatsappNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center space-x-2">
              <div className="bg-white p-3 rounded-2xl">
                <MessageCircle className="h-8 w-8 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-white">Wacontacts</span>
            </Link>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-white/10 rounded-2xl p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                isLogin 
                  ? 'bg-white text-purple-600 shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
                !isLogin 
                  ? 'bg-white text-purple-600 shadow-lg' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* User Type Toggle for Sign Up */}
          {!isLogin && (
            <div className="flex bg-white/10 rounded-2xl p-1 mb-6">
              <button
                onClick={() => setUserType('user')}
                className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
                  userType === 'user' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Sign up as User
              </button>
              <button
                onClick={() => setUserType('vendor')}
                className={`flex-1 py-2 px-4 rounded-xl font-medium transition-all duration-200 ${
                  userType === 'vendor' 
                    ? 'bg-white text-purple-600 shadow-lg' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Sign up as Vendor
              </button>
            </div>
          )}

          {/* Form */}
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-white text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">WhatsApp Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleInputChange}
                    placeholder="+1234567890"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">Account Type</label>
                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                >
                  {userType === 'user' ? (
                    <>
                      <option value="individual" className="text-gray-900">Individual</option>
                      <option value="community" className="text-gray-900">Community</option>
                    </>
                  ) : (
                    <>
                      <option value="business" className="text-gray-900">Business</option>
                      <option value="freelancer" className="text-gray-900">Freelancer</option>
                      <option value="service_provider" className="text-gray-900">Service Provider</option>
                    </>
                  )}
                </select>
              </div>
            )}

            <div>
              <label className="block text-white text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded text-purple-600 focus:ring-purple-500" />
                  <span className="ml-2 text-white text-sm">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-white/80 hover:text-white text-sm">
                  Forgot password?
                </Link>
              </div>
            )}

            <Link
              to={userType === 'vendor' ? '/vendor-dashboard' : '/dashboard'}
              className="w-full bg-white text-purple-600 py-4 px-6 rounded-xl font-bold text-center hover:shadow-lg hover:scale-105 transition-all duration-200 block"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Link>

            {isLogin && (
              <div className="text-center">
                <p className="text-white/80 text-sm">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-white underline hover:no-underline font-semibold"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            )}

            {!isLogin && (
              <p className="text-white/80 text-sm text-center">
                By signing up, you agree to our{' '}
                <Link to="/terms" className="text-white underline hover:no-underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-white underline hover:no-underline">
                  Privacy Policy
                </Link>
              </p>
            )}
          </form>

          {/* Social Login */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <button className="w-full bg-white/10 border border-white/20 text-white py-3 px-6 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
              Continue with Google
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;