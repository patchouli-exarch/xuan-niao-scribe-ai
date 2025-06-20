
import React from 'react';
import { Sparkles, Zap, Crown, Heart } from 'lucide-react';
import { useConversation } from '../contexts/ConversationContext';

const WelcomeScreen = () => {
  const { setShowPromptSelector } = useConversation();

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center animate-pulse">
            <Crown className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            欢迎使用
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              玄鸟爆款助手
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            专业的AI撰稿工具，为您提供多种风格的创作模板
            <br />
            让每一篇文案都成为爆款
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">多种风格</h3>
            <p className="text-sm text-gray-600">小红书、微博、商业文案等多种专业模板</p>
          </div>
          
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">AI驱动</h3>
            <p className="text-sm text-gray-600">先进的AI技术，生成高质量原创内容</p>
          </div>
          
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:bg-white/80 transition-all duration-200">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">简单易用</h3>
            <p className="text-sm text-gray-600">直观的界面设计，轻松创作专业文案</p>
          </div>
        </div>

        <button
          onClick={() => setShowPromptSelector(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          开始创作 ✨
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
