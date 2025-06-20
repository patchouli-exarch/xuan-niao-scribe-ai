
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  lastUsed: Date;
  promptStyle: string;
}

interface ConversationContextType {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  showPromptSelector: boolean;
  setShowPromptSelector: (show: boolean) => void;
  createNewConversation: (promptStyle: string) => void;
  selectConversation: (conversation: Conversation) => void;
  addMessage: (content: string, isUser: boolean) => void;
}

const ConversationContext = createContext<ConversationContextType | undefined>(undefined);

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error('useConversation must be used within a ConversationProvider');
  }
  return context;
};

export const ConversationProvider = ({ children }: { children: ReactNode }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [showPromptSelector, setShowPromptSelector] = useState(false);

  const createNewConversation = (promptStyle: string) => {
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: `${promptStyle}对话`,
      messages: [],
      lastUsed: new Date(),
      promptStyle
    };
    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversation(newConversation);
    setShowPromptSelector(false);
  };

  const selectConversation = (conversation: Conversation) => {
    setCurrentConversation(conversation);
    setShowPromptSelector(false);
    // 更新最后使用时间
    setConversations(prev => 
      prev.map(conv => 
        conv.id === conversation.id 
          ? { ...conv, lastUsed: new Date() }
          : conv
      ).sort((a, b) => b.lastUsed.getTime() - a.lastUsed.getTime())
    );
  };

  const addMessage = (content: string, isUser: boolean) => {
    if (!currentConversation) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date()
    };

    setCurrentConversation(prev => 
      prev ? { ...prev, messages: [...prev.messages, newMessage] } : null
    );

    setConversations(prev =>
      prev.map(conv =>
        conv.id === currentConversation.id
          ? { ...conv, messages: [...conv.messages, newMessage], lastUsed: new Date() }
          : conv
      ).sort((a, b) => b.lastUsed.getTime() - a.lastUsed.getTime())
    );
  };

  return (
    <ConversationContext.Provider value={{
      conversations,
      currentConversation,
      showPromptSelector,
      setShowPromptSelector,
      createNewConversation,
      selectConversation,
      addMessage
    }}>
      {children}
    </ConversationContext.Provider>
  );
};
