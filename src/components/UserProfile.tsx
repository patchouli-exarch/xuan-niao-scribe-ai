
import React from 'react';
import { X, CreditCard, Crown, Wallet, Star, Gift } from 'lucide-react';

interface UserProfileProps {
  onClose: () => void;
}

const UserProfile = ({ onClose }: UserProfileProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">用</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">用户中心</h2>
              <p className="text-blue-100">管理您的账户信息</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Balance */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Wallet className="w-5 h-5 text-green-600" />
                <span className="font-medium text-gray-900">账户余额</span>
              </div>
              <span className="text-2xl font-bold text-green-600">¥128.50</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
              <CreditCard className="w-4 h-4" />
              <span>立即充值</span>
            </button>
          </div>

          {/* Membership */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-gray-900">会员订阅</span>
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                VIP会员
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">订阅状态</span>
                <span className="text-purple-600 font-medium">已激活</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">到期时间</span>
                <span className="text-gray-900">2024-07-20</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">剩余额度</span>
                <span className="text-gray-900">892 次</span>
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-purple-200">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center space-x-2">
                <Star className="w-4 h-4" />
                <span>续费会员</span>
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900 flex items-center space-x-2">
              <Gift className="w-5 h-5 text-orange-500" />
              <span>会员特权</span>
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">无限次数使用所有模板</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">优先体验新功能</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">专属客服支持</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
