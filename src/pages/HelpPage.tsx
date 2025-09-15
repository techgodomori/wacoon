import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ChevronRight, MessageCircle, Mail, Phone } from 'lucide-react';

const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: '1',
      question: 'How do I create my first promotion?',
      answer: 'Creating a promotion is simple! Click the "Create Promotion" button, fill out the form with your title, description, category, and images. Add your WhatsApp number so people can contact you directly.'
    },
    {
      id: '2',
      question: 'How does WhatsApp integration work?',
      answer: 'When someone clicks "Contact on WhatsApp" on your promotion, it opens their WhatsApp app with a pre-filled message. They can then send it directly to you or modify it before sending.'
    },
    {
      id: '3',
      question: 'Is Wacontacts free to use?',
      answer: 'Yes! Wacontacts offers a free plan that allows you to create up to 2 active promotions. We also offer Pro and Business plans with additional features and unlimited promotions.'
    },
    {
      id: '4',
      question: 'How do I get my account verified?',
      answer: 'Account verification helps build trust with other users. You can request verification by providing additional information about yourself or your business through your account settings.'
    },
    {
      id: '5',
      question: 'Can I edit my promotion after publishing?',
      answer: 'Yes, you can edit your promotions anytime from your dashboard. Changes will be reflected immediately on the platform.'
    },
    {
      id: '6',
      question: 'How long do promotions last?',
      answer: 'Promotion duration depends on your plan. Free users get 30 days, Pro users get 90 days, and Business users can set unlimited duration.'
    },
    {
      id: '7',
      question: 'What types of content are allowed?',
      answer: 'We welcome all legitimate businesses, services, products, and communities. Content must be appropriate, non-discriminatory, and comply with our community guidelines.'
    },
    {
      id: '8',
      question: 'How do I report inappropriate content?',
      answer: 'You can report content by clicking the flag icon on any promotion. Our moderation team reviews all reports within 24 hours.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Create your free account with email or phone number'
    },
    {
      number: '2',
      title: 'Create Profile',
      description: 'Add your information and WhatsApp number'
    },
    {
      number: '3',
      title: 'Post Promotion',
      description: 'Share what you want to promote with images and details'
    },
    {
      number: '4',
      title: 'Get Discovered',
      description: 'People find you through search and categories'
    },
    {
      number: '5',
      title: 'Connect',
      description: 'Receive direct WhatsApp messages from interested users'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Wacontacts{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help, learn how to use the platform, and discover tips for success
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2 w-8">
                    <ChevronRight className="h-6 w-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>

            {/* Search */}
            <div className="relative mb-8 max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* FAQ List */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${
                      expandedFaq === faq.id ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Support */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl opacity-90 mb-8">
            Our support team is here to help you succeed on Wacontacts
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm opacity-80 mb-4">Chat with our team in real-time</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Start Chat
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm opacity-80 mb-4">Get detailed help via email</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Send Email
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm opacity-80 mb-4">Speak directly with our team</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                Call Now
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HelpPage;