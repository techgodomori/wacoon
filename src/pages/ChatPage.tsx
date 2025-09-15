import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Send, Paperclip, Image, Smile, MoreVertical,
  Phone, Video, Info, Star, MapPin 
} from 'lucide-react';
import { mockPromotions } from '../utils/mockData';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'file';
  isOwn: boolean;
}

const ChatPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: '2',
      senderName: 'Sarah Johnson',
      content: 'Hi! Thanks for your interest in my logo design service. How can I help you today?',
      timestamp: new Date(Date.now() - 3600000),
      type: 'text',
      isOwn: false
    },
    {
      id: '2',
      senderId: '1',
      senderName: 'You',
      content: 'Hello! I saw your promotion and I\'m interested in getting a logo designed for my new business.',
      timestamp: new Date(Date.now() - 3000000),
      type: 'text',
      isOwn: true
    },
    {
      id: '3',
      senderId: '2',
      senderName: 'Sarah Johnson',
      content: 'That\'s great! I\'d love to help you with that. Could you tell me a bit more about your business and what kind of style you\'re looking for?',
      timestamp: new Date(Date.now() - 2400000),
      type: 'text',
      isOwn: false
    },
    {
      id: '4',
      senderId: '1',
      senderName: 'You',
      content: 'It\'s a tech startup focused on mobile apps. I\'m looking for something modern and clean.',
      timestamp: new Date(Date.now() - 1800000),
      type: 'text',
      isOwn: true
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const promotion = mockPromotions.find(p => p.id === id) || mockPromotions[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        senderId: '1',
        senderName: 'You',
        content: message,
        timestamp: new Date(),
        type: 'text',
        isOwn: true
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate response after 2 seconds
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          senderId: '2',
          senderName: promotion.user.name,
          content: 'Thanks for the details! I can definitely help you with that. Let me prepare some initial concepts for you.',
          timestamp: new Date(),
          type: 'text',
          isOwn: false
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b border-gray-200 px-4 py-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/explore"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            
            <div className="flex items-center space-x-3">
              <img
                src={promotion.user.avatar}
                alt={promotion.user.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold text-gray-900">{promotion.user.name}</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Phone className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Video className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Info className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="flex-1 flex max-w-6xl mx-auto w-full">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Promotion Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 border-b border-blue-200 p-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={promotion.images[0]}
                alt={promotion.title}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{promotion.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  {promotion.price && (
                    <span className="font-semibold text-green-600">${promotion.price}</span>
                  )}
                  {promotion.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{promotion.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <Link
                to={`/promotion/${promotion.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </motion.div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md ${msg.isOwn ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      msg.isOwn
                        ? 'bg-purple-600 text-white rounded-br-md'
                        : 'bg-white border border-gray-200 text-gray-900 rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${msg.isOwn ? 'text-right' : 'text-left'}`}>
                    {formatTime(msg.timestamp)}
                  </p>
                </div>
                
                {!msg.isOwn && (
                  <img
                    src={promotion.user.avatar}
                    alt={msg.senderName}
                    className="h-8 w-8 rounded-full object-cover order-1 mr-2"
                  />
                )}
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border-t border-gray-200 p-4"
          >
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Paperclip className="h-5 w-5 text-gray-600" />
              </button>
              
              <button
                type="button"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Image className="h-5 w-5 text-gray-600" />
              </button>

              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Smile className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-purple-600 text-white p-3 rounded-2xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-80 bg-white border-l border-gray-200 p-6 hidden lg:block"
        >
          <div className="space-y-6">
            {/* User Info */}
            <div className="text-center">
              <img
                src={promotion.user.avatar}
                alt={promotion.user.name}
                className="h-20 w-20 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">{promotion.user.name}</h3>
              <p className="text-gray-600 capitalize">{promotion.user.userType}</p>
              {promotion.user.verified && (
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-500 font-medium">Verified</span>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Link
                to={`/profile/${promotion.user.id}`}
                className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-xl font-medium text-center hover:bg-gray-200 transition-colors block"
              >
                View Profile
              </Link>
              <button className="w-full bg-red-100 text-red-700 py-3 px-4 rounded-xl font-medium hover:bg-red-200 transition-colors">
                Block User
              </button>
              <button className="w-full bg-yellow-100 text-yellow-700 py-3 px-4 rounded-xl font-medium hover:bg-yellow-200 transition-colors">
                Report Chat
              </button>
            </div>

            {/* Chat Info */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Chat Information</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Started:</span>
                    <span>Today</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Messages:</span>
                    <span>{messages.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response time:</span>
                    <span className="text-green-600">Usually within 1 hour</span>
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

export default ChatPage;