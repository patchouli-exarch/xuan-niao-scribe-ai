
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { ConversationProvider } from '../contexts/ConversationContext';

const Index = () => {
  return (
    <ConversationProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
        <Sidebar />
        <MainContent />
      </div>
    </ConversationProvider>
  );
};

export default Index;
