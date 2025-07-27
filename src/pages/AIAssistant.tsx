import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Brain, 
  Lightbulb, 
  BookOpen, 
  Target,
  Sparkles,
  MessageCircle,
  Zap
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type: 'text' | 'suggestion' | 'insight';
}

interface Suggestion {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  action: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI learning assistant. I can help you with course recommendations, study strategies, and answer questions about your learning progress. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Course Recommendations',
      description: 'Get personalized course suggestions based on your interests and progress',
      icon: BookOpen,
      action: 'Can you recommend courses based on my current progress?'
    },
    {
      id: 2,
      title: 'Study Strategies',
      description: 'Learn effective study techniques and time management tips',
      icon: Target,
      action: 'What are the best study strategies for improving my performance?'
    },
    {
      id: 3,
      title: 'Progress Analysis',
      description: 'Get insights into your learning patterns and areas for improvement',
      icon: Brain,
      action: 'Can you analyze my learning progress and suggest improvements?'
    },
    {
      id: 4,
      title: 'Learning Tips',
      description: 'Discover AI-powered tips to enhance your learning experience',
      icon: Lightbulb,
      action: 'What are some AI-powered learning tips you can share?'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('recommend') || input.includes('course')) {
      return "Based on your learning patterns, I recommend focusing on 'Data Science Essentials' and 'AI Fundamentals'. These courses align well with your interests and current skill level. Would you like me to create a personalized study plan for these courses?";
    }
    
    if (input.includes('study') || input.includes('strategy')) {
      return "Here are some effective study strategies: 1) Use spaced repetition for better retention, 2) Take regular breaks (Pomodoro technique), 3) Practice active recall through quizzes, 4) Join study groups for collaborative learning. I can help you implement these strategies in your daily routine.";
    }
    
    if (input.includes('progress') || input.includes('analysis')) {
      return "Your learning progress shows strong engagement in technical courses. You're performing 15% above average in programming courses. Areas for improvement: consider spending more time on practical exercises. I suggest dedicating 30 minutes daily to hands-on coding practice.";
    }
    
    if (input.includes('tip') || input.includes('help')) {
      return "Here are some AI-powered learning tips: 1) Use adaptive learning paths that adjust to your pace, 2) Leverage personalized content recommendations, 3) Take advantage of real-time feedback on assignments, 4) Engage with AI-generated practice questions. These features are designed to optimize your learning experience.";
    }
    
    return "I understand you're asking about '" + userInput + "'. Let me help you with that. Could you provide more specific details about what you'd like to know? I'm here to assist with course recommendations, study strategies, progress analysis, and learning tips.";
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    handleSendMessage(suggestion.action);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Assistant</h1>
          <p className="text-gray-600 mt-1">Your intelligent learning companion</p>
        </div>
        <div className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-blue-50 px-4 py-2 rounded-lg">
          <Sparkles className="w-5 h-5 text-primary-600" />
          <span className="text-sm font-medium text-primary-700">AI Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card h-[600px] flex flex-col"
          >
            {/* Chat Header */}
            <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Learning Assistant</h3>
                <p className="text-sm text-gray-500">Always here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-primary-600' 
                        : 'bg-gray-100'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className={`rounded-lg px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                  placeholder="Ask me anything about your learning..."
                  className="flex-1 input-field"
                />
                <button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim() || isTyping}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Suggestions Panel */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <suggestion.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{suggestion.title}</h4>
                      <p className="text-xs text-gray-600 mt-1">{suggestion.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* AI Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="w-5 h-5 text-primary-600" />
              <h3 className="font-semibold text-gray-900">AI Capabilities</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Personalized course recommendations</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Study strategy optimization</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Progress analysis & insights</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Real-time learning assistance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Adaptive content suggestions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant; 