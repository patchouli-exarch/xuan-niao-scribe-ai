
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User as UserIcon, Sparkles } from 'lucide-react';
import { useConversation } from '../contexts/ConversationContext';

const ChatInterface = () => {
  const { currentConversation, addMessage } = useConversation();
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentConversation?.messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    addMessage(userMessage, true);
    setIsLoading(true);

    // 模拟AI响应
    setTimeout(() => {
      const aiResponse = `基于${currentConversation?.promptStyle}的风格，我为您生成了以下内容：\n\n${generateMockResponse(userMessage, currentConversation?.promptStyle || '')}`;
      addMessage(aiResponse, false);
      setIsLoading(false);
    }, 1500);
  };

  const generateMockResponse = (message: string, style: string) => {
    const responses = {
      '小红书种草文案': `🔥【必入款！这款${message}真的绝了】\n\n姐妹们！我又发现宝藏了！\n最近入手了这款${message}，真的太好用了叭！\n\n✨ 颜值爆表，拍照超出片\n💫 质量超好，用了一个月零瑕疵\n🌟 性价比绝绝子，比代购便宜一半\n\n真的强烈推荐给大家！\n谁用谁知道，不买后悔系列～\n\n#${message} #种草笔记 #好物推荐`,
      
      '商业计划书': `# ${message}商业计划书\n\n## 项目概述\n${message}是一个具有巨大市场潜力的项目，针对当前市场痛点提供创新解决方案。\n\n## 市场分析\n- 目标市场规模：预计达到XX亿元\n- 竞争优势：技术领先、成本控制\n- 客户群体：主要面向年轻消费群体\n\n## 财务预测\n预计第一年实现营收XX万元，第三年达到盈亏平衡。`,
      
      default: `根据您选择的${style}风格，为您的"${message}"主题创作了专业内容。内容结合了该风格的特点，确保既符合目标受众的喜好，又能有效传达您想要表达的信息。`
    };

    return responses[style as keyof typeof responses] || responses.default;
  };

  if (!currentConversation) return null;

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="p-6 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{currentConversation.title}</h2>
            <p className="text-sm text-gray-500">基于 {currentConversation.promptStyle} 风格</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {currentConversation.messages.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">准备开始创作</h3>
            <p className="text-gray-600">请告诉我您想要创作的内容主题，我将为您生成专业的{currentConversation.promptStyle}风格文案。</p>
          </div>
        ) : (
          currentConversation.messages.map(message => (
            <div key={message.id} className={`flex space-x-4 ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                message.isUser 
                  ? 'bg-gradient-to-r from-green-500 to-blue-500' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
              }`}>
                {message.isUser ? (
                  <UserIcon className="w-5 h-5 text-white" />
                ) : (
                  <Bot className="w-5 h-5 text-white" />
                )}
              </div>
              
              <div className={`flex-1 max-w-3xl ${message.isUser ? 'text-right' : ''}`}>
                <div className={`inline-block p-4 rounded-2xl ${
                  message.isUser 
                    ? 'bg-blue-600 text-white rounded-tr-md' 
                    : 'bg-white shadow-sm border border-gray-200 rounded-tl-md'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                </div>
                <div className={`text-xs text-gray-500 mt-2 ${message.isUser ? 'text-right' : ''}`}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))
        )}
        
        {isLoading && (
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white shadow-sm border border-gray-200 rounded-2xl rounded-tl-md p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
        <div className="flex space-x-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="请输入您想要创作的内容主题..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
          >
            <Send className="w-5 h-5" />
            <span>发送</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
