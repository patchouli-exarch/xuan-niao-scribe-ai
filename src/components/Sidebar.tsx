
import React, { useState } from 'react';
import { Plus, MessageCircle, User, Clock, Sparkles } from 'lucide-react';
import { useConversation } from '../contexts/ConversationContext';
import UserProfile from './UserProfile';

const Sidebar = () => {
  const { conversations, setShowPromptSelector, selectConversation, currentConversation } = useConversation();
  const [showProfile, setShowProfile] = useState(false);

  const handleNewConversation = () => {
    setShowPromptSelector(true);
  };

  return (
    <>
      <div className="w-80 bg-white/80 backdrop-blur-sm border-r border-gray-200/50 flex flex-col h-screen">
        {/* Header */}
        <div className="p-6 border-b border-gray-200/50">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">玄鸟爆款助手</h1>
              <p className="text-sm text-gray-500">AI智能撰稿工具</p>
            </div>
          </div>
          
          <button
            onClick={handleNewConversation}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
            <span>创建新对话</span>
          </button>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {conversations.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>暂无对话记录</p>
                <p className="text-sm">点击"创建新对话"开始</p>
              </div>
            ) : (
              conversations.map(conversation => (
                <div
                  key={conversation.id}
                  onClick={() => selectConversation(conversation)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 group ${
                    currentConversation?.id === conversation.id ? 'bg-blue-100 border-2 border-blue-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{conversation.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{conversation.promptStyle}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-400">
                          {conversation.lastUsed.toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200/50">
          <button
            onClick={() => setShowProfile(true)}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-medium text-gray-900">个人中心</p>
              <p className="text-sm text-gray-500">查看余额和会员</p>
            </div>
          </button>
        </div>
      </div>

      {showProfile && <UserProfile onClose={() => setShowProfile(false)} />}
    </>
  );
};

export default Sidebar;
