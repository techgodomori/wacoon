export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  bio?: string;
  userType: 'individual' | 'business' | 'community';
  whatsappNumber: string;
  verified: boolean;
  joinedAt: string;
  totalPromotions: number;
  totalViews: number;
}

export interface Promotion {
  id: string;
  userId: string;
  user: User;
  title: string;
  description: string;
  category: Category;
  images: string[];
  whatsappNumber: string;
  price?: number;
  currency?: string;
  location?: string;
  tags: string[];
  featured: boolean;
  verified: boolean;
  views: number;
  contacts: number;
  expiresAt: string;
  createdAt: string;
  status: 'active' | 'expired' | 'paused' | 'pending';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  promotionCount: number;
}

export interface AnalyticsData {
  totalViews: number;
  totalContacts: number;
  totalPromotions: number;
  growthRate: number;
  topPerformingPromotion: string;
  recentActivity: ActivityItem[];
}

export interface ActivityItem {
  id: string;
  type: 'view' | 'contact' | 'promotion_created' | 'promotion_expired';
  description: string;
  timestamp: string;
  promotionId?: string;
}

export interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration: 'monthly' | 'yearly';
  features: string[];
  recommended?: boolean;
}

export interface Transaction {
  id: string;
  userId: string;
  planId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
  description: string;
}