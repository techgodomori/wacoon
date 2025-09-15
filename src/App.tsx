import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LandingPage from './pages/LandingPage';
import ExplorePage from './pages/ExplorePage';
import PromotionDetailPage from './pages/PromotionDetailPage';
import DashboardPage from './pages/DashboardPage';
import CreatePromotionPage from './pages/CreatePromotionPage';
import AuthPage from './pages/AuthPage';
import PricingPage from './pages/PricingPage';
import PaymentPage from './pages/PaymentPage';
import VendorDashboard from './pages/VendorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import ChatPage from './pages/ChatPage';
import AboutPage from './pages/AboutPage';
import HelpPage from './pages/HelpPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/promotion/:id" element={<PromotionDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/create-promotion" element={<CreatePromotionPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;