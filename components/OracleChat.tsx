import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles, Bot } from 'lucide-react';
import { sendMessageToOracle } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Content } from "@google/genai";

const OracleChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings, traveler. I am the Oracle. Query me about Clark\'s skills or the lore of this realm.', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isThinking) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history: Content[] = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToOracle(history, userMsg.text);
      
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { role: 'model', text: 'Connection severed. Try again later.', timestamp: Date.now() };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-md h-[600px] glass-card rounded-2xl flex flex-col overflow-hidden transform origin-bottom-right animate-in fade-in zoom-in duration-300 shadow-2xl border border-white/70">
          
          {/* Header */}
          <div className="bg-white/40 backdrop-blur-md p-4 border-b border-white/50 flex justify-between items-center relative z-10">
            <div className="flex items-center space-x-2 text-nature-400">
              <div className="bg-nature-100 p-1.5 rounded-lg shadow-inner-light">
                <Sparkles size={18} />
              </div>
              <div>
                  <span className="font-fantasy font-bold tracking-wide block leading-none text-lg">THE ORACLE</span>
                  <span className="text-xs font-mono text-slate-500 block leading-none mt-1">AI CONSTRUCT v2.5</span>
              </div>
            </div>
            <button onClick={toggleChat} className="text-slate-400 hover:text-slate-800 transition-colors p-1 hover:bg-white/50 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-gradient-to-b from-white/30 to-white/10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 fade-in duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl font-sans text-base leading-relaxed shadow-sm backdrop-blur-sm ${
                  msg.role === 'user' 
                    ? 'bg-nature-400/90 text-white rounded-br-sm shadow-md' 
                    : 'bg-white/70 text-slate-700 border border-white/60 rounded-bl-sm shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start animate-in fade-in">
                 <div className="bg-white/60 p-4 rounded-2xl rounded-bl-sm border border-white/60 flex items-center space-x-2 shadow-sm backdrop-blur-sm">
                   <div className="w-2 h-2 bg-nature-300 rounded-full animate-bounce" />
                   <div className="w-2 h-2 bg-nature-300 rounded-full animate-bounce delay-100" />
                   <div className="w-2 h-2 bg-nature-300 rounded-full animate-bounce delay-200" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white/40 backdrop-blur-md border-t border-white/50">
            <div className="flex space-x-2 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask the Oracle..."
                className="flex-1 bg-white/60 border border-white/60 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-nature-300 focus:ring-2 focus:ring-nature-300/20 transition-all font-mono text-base placeholder-slate-400 shadow-inner-light"
              />
              <button 
                onClick={handleSend}
                disabled={isThinking}
                className="bg-nature-400 text-white p-3 rounded-xl hover:bg-nature-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-nature-400/20 active:scale-95"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group ${isOpen ? 'bg-slate-200 rotate-90 scale-90' : 'bg-gradient-to-br from-nature-300 to-nature-400 hover:scale-110'}`}
      >
        {isOpen ? (
            <X className="text-slate-600" />
        ) : (
            <Bot className="text-white animate-pulse drop-shadow-md" size={32} />
        )}
      </button>
    </div>
  );
};

export default OracleChat;