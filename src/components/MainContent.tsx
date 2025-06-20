
import React from 'react';
import { useConversation } from '../contexts/ConversationContext';
import PromptSelector from './PromptSelector';
import ChatInterface from './ChatInterface';
import WelcomeScreen from './WelcomeScreen';

const MainContent = () => {
  const { showPromptSelector, currentConversation } = useConversation();

  return (
    <div className="flex-1 flex flex-col">
      {showPromptSelector ? (
        <PromptSelector />
      ) : currentConversation ? (
        <ChatInterface />
      ) : (
        <WelcomeScreen />
      )}
    </div>
  );
};

export default MainContent;
