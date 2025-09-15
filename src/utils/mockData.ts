import { User, Promotion, Category, AnalyticsData, PaymentPlan, Transaction } from '../types';

export const mockCategories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'Smartphone', color: '#3B82F6', description: 'Phones, laptops, gadgets & accessories', promotionCount: 1234 },
  { id: '2', name: 'Fashion', icon: 'Shirt', color: '#EC4899', description: 'Clothing, shoes, bags & accessories', promotionCount: 856 },
  { id: '3', name: 'Home & Garden', icon: 'Home', color: '#10B981', description: 'Furniture, appliances & home decor', promotionCount: 567 },
  { id: '4', name: 'Vehicles', icon: 'Car', color: '#F59E0B', description: 'Cars, motorcycles & vehicle parts', promotionCount: 423 },
  { id: '5', name: 'Property', icon: 'Building2', color: '#8B5CF6', description: 'Houses, land & commercial property', promotionCount: 289 },
  { id: '6', name: 'Jobs', icon: 'Briefcase', color: '#EF4444', description: 'Job opportunities & career services', promotionCount: 345 },
  { id: '7', name: 'Services', icon: 'Wrench', color: '#06B6D4', description: 'Professional & personal services', promotionCount: 678 },
  { id: '8', name: 'Health & Beauty', icon: 'Heart', color: '#F97316', description: 'Healthcare, cosmetics & wellness', promotionCount: 234 },
  { id: '9', name: 'Sports & Hobbies', icon: 'Trophy', color: '#84CC16', description: 'Sports equipment & hobby items', promotionCount: 156 },
  { id: '10', name: 'Baby & Kids', icon: 'Baby', color: '#A855F7', description: 'Baby products, toys & kids items', promotionCount: 198 },
  { id: '11', name: 'Animals & Pets', icon: 'Dog', color: '#059669', description: 'Pets, pet supplies & animal services', promotionCount: 123 },
  { id: '12', name: 'Food & Agriculture', icon: 'Apple', color: '#DC2626', description: 'Food products & agricultural items', promotionCount: 267 }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Digital marketing expert helping small businesses grow online',
    userType: 'business',
    whatsappNumber: '+1234567890',
    verified: true,
    joinedAt: '2024-01-15',
    totalPromotions: 8,
    totalViews: 1250
  },
  {
    id: '2',
    name: 'Tech Innovators Hub',
    email: 'contact@techhub.com',
    avatar: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Community of tech enthusiasts sharing knowledge and networking',
    userType: 'community',
    whatsappNumber: '+1234567891',
    verified: true,
    joinedAt: '2024-02-01',
    totalPromotions: 5,
    totalViews: 890
  }
];

export const mockPromotions: Promotion[] = [
  {
    id: '1',
    userId: '1',
    user: mockUsers[0],
    title: 'Professional Logo Design Service',
    description: 'Get a stunning, professional logo designed for your business. Quick turnaround, unlimited revisions, and affordable pricing.',
    category: mockCategories[1],
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3004909/pexels-photo-3004909.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '+1234567890',
    price: 99,
    currency: 'USD',
    location: 'New York, NY',
    tags: ['design', 'branding', 'logo', 'business'],
    featured: true,
    verified: true,
    views: 342,
    contacts: 23,
    expiresAt: '2024-03-15',
    createdAt: '2024-01-20',
    status: 'active'
  },
  {
    id: '2',
    userId: '2',
    user: mockUsers[1],
    title: 'Join Our Tech Community - 500+ Members',
    description: 'Connect with like-minded tech professionals, share knowledge, find mentors, and discover job opportunities in our active WhatsApp community.',
    category: mockCategories[2],
    images: [
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    whatsappNumber: '+1234567891',
    location: 'Online',
    tags: ['technology', 'community', 'networking', 'programming'],
    featured: true,
    verified: true,
    views: 156,
    contacts: 45,
    expiresAt: '2024-04-01',
    createdAt: '2024-02-01',
    status: 'active'
  }
];

export const mockAnalytics: AnalyticsData = {
  totalViews: 1250,
  totalContacts: 89,
  totalPromotions: 12,
  growthRate: 23.5,
  topPerformingPromotion: 'Professional Logo Design Service',
  recentActivity: [
    { id: '1', type: 'contact', description: 'Someone contacted you about Logo Design Service', timestamp: '2024-02-10T10:30:00Z', promotionId: '1' },
    { id: '2', type: 'view', description: 'Your Tech Community promotion was viewed', timestamp: '2024-02-10T09:15:00Z', promotionId: '2' },
    { id: '3', type: 'promotion_created', description: 'New promotion "Web Development Course" was created', timestamp: '2024-02-09T14:20:00Z' }
  ]
};

export const mockPaymentPlans: PaymentPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0,
    currency: 'USD',
    duration: 'monthly',
    features: ['2 Active Promotions', 'Basic Analytics', 'Standard Support', '30-day Promotion Duration']
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    currency: 'USD',
    duration: 'monthly',
    features: ['10 Active Promotions', 'Advanced Analytics', 'Priority Support', '90-day Promotion Duration', 'Featured Listings', 'WhatsApp Integration'],
    recommended: true
  },
  {
    id: 'business',
    name: 'Business',
    price: 29.99,
    currency: 'USD',
    duration: 'monthly',
    features: ['Unlimited Promotions', 'Premium Analytics', '24/7 Support', 'Unlimited Duration', 'Top Featured Listings', 'Advanced WhatsApp Tools', 'Custom Branding']
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    userId: '1',
    planId: 'pro',
    amount: 9.99,
    currency: 'USD',
    status: 'completed',
    createdAt: '2024-02-01T00:00:00Z',
    description: 'Pro Plan - Monthly Subscription'
  },
  {
    id: '2',
    userId: '1',
    planId: 'business',
    amount: 29.99,
    currency: 'USD',
    status: 'pending',
    createdAt: '2024-02-10T00:00:00Z',
    description: 'Business Plan Upgrade'
  }
];