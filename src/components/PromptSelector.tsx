
import React from 'react';
import { Sparkles, Crown, FileText, Briefcase, Heart, Zap, Gift } from 'lucide-react';
import { useConversation } from '../contexts/ConversationContext';

const PromptSelector = () => {
  const { createNewConversation } = useConversation();

  const prompts = [
    {
      id: 'xiaohongshu',
      title: '小红书种草文案',
      description: '打造吸引眼球的种草内容，提升产品曝光度',
      icon: Heart,
      color: 'from-pink-500 to-red-500',
      category: 'social'
    },
    {
      id: 'business',
      title: '商业计划书',
      description: '专业的商业计划书撰写，助力创业成功',
      icon: Briefcase,
      color: 'from-blue-500 to-indigo-600',
      category: 'business'
    },
    {
      id: 'news',
      title: '新闻稿件',
      description: '专业新闻稿件撰写，传播品牌价值',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      category: 'media'
    },
    {
      id: 'marketing',
      title: '营销文案',
      description: '高转化率的营销文案，提升销售业绩',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      category: 'marketing'
    },
    {
      id: 'weibo',
      title: '微博热点',
      description: '抓住热点话题，创造病毒式传播',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      category: 'social'
    },
    {
      id: 'product',
      title: '产品介绍',
      description: '专业产品说明文案，突出产品优势',
      icon: Crown,
      color: 'from-indigo-500 to-purple-600',
      category: 'business'
    }
  ];

  const todayFreePrompt = prompts[0]; // 今日免费提示词

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">选择您的创作风格</h2>
          <p className="text-lg text-gray-600">从多种专业模板中选择，开始您的AI撰稿之旅</p>
        </div>

        {/* 今日免费提示词 */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Gift className="w-6 h-6 text-pink-500" />
            <h3 className="text-xl font-semibold text-gray-900">今日免费提示词</h3>
          </div>
          
          <div
            onClick={() => createNewConversation(todayFreePrompt.title)}
            className="relative p-6 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white cursor-pointer hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <todayFreePrompt.icon className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2">{todayFreePrompt.title}</h4>
                <p className="text-pink-100 text-lg">{todayFreePrompt.description}</p>
                <div className="mt-3 inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>免费体验</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 所有提示词 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">全部风格模板</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {prompts.map(prompt => (
            <div
              key={prompt.id}
              onClick={() => createNewConversation(prompt.title)}
              className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${prompt.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <prompt.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {prompt.title}
                  </h4>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {prompt.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {prompt.category}
                </span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Sparkles className="w-4 h-4 text-gray-500 group-hover:text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromptSelector;
