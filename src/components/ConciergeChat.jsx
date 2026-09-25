import React, { useState, useRef, useEffect } from 'react';
import { CELEBRITY_DATA } from '../data/celebrityData';
import { MessageSquare, X, Send, Sparkles, CheckCheck, User, Bot, Mail, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ConciergeChat({ isOpen, onClose, onOpen }) {
  const { conciergeResponses, profile } = CELEBRITY_DATA;

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: conciergeResponses.welcome,
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleChipClick = (option) => {
    // Add user question
    const userMsg = {
      sender: 'user',
      text: option.query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const answer = conciergeResponses.answers[option.id] || "Thank you for reaching out. We have logged your request directly with the executive desk at info@noumanijaz.com.";
      
      const botMsg = {
        sender: 'bot',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);

      // If user selected booking or brand, launch small celebratory confetti
      if (option.id === 'opt-booking' || option.id === 'opt-brand') {
        confetti({
          particleCount: 20,
          spread: 40,
          origin: { x: 0.85, y: 0.7 },
          colors: ['#CFA738', '#E6C564', '#FFFFFF']
        });
      }
    }, 900);
  };

  const handleSendCustomMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    const userMsg = {
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const ticketId = 'NI-' + Math.floor(10000 + Math.random() * 90000);
      
      let botResponse = `Thank you for your message. Your inquiry has been prioritized with Ticket Reference #${ticketId} and routed to executive management at info@noumanijaz.com. Expect a formal response shortly.`;

      // Check if user is asking about Parizaad or Behroze
      if (userText.toLowerCase().includes('parizaad') || userText.toLowerCase().includes('behroze')) {
        botResponse = `“کمزور لوگ بدلہ لیتے ہیں، لیکن وقار خاموشی میں ہے۔” Behroze Karim remains one of Naumaan Sahab's closest characters to heart. Your inquiry #${ticketId} has been logged for management review!`;
      } else if (userText.toLowerCase().includes('fee') || userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost') || userText.toLowerCase().includes('book')) {
        botResponse = `Commercial rates and appearance availability for Naumaan Ijaz are customized based on event scale, city, and date. Please submit full details to info@noumanijaz.com or leave your phone/email here. Ticket #${ticketId}.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1100);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={onOpen}
            className="group relative flex items-center gap-3 p-3.5 pr-5 rounded-full bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-400/50 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* Glowing Ring Avatar */}
            <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-gold-400 to-amber-600">
              <img
                src={profile.portrait}
                alt="Naumaan Ijaz Concierge"
                className="w-full h-full rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black animate-pulse"></span>
            </div>

            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <span>Inquire With Naumaan</span>
                <Sparkles className="w-3 h-3 text-gold-400" />
              </div>
              <div className="text-[10px] text-gold-300/80 font-mono">
                Live Chat • info@noumanijaz.com
              </div>
            </div>

            {/* Ripple Pulse */}
            <span className="absolute -inset-1 rounded-full bg-gold-500/20 blur-sm pointer-events-none group-hover:bg-gold-500/30 transition-all"></span>
          </button>
        </div>
      )}

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[420px] h-[580px] max-h-[85vh] rounded-3xl overflow-hidden bg-obsidian-950 border border-gold-500/40 shadow-2xl flex flex-col justify-between animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-gold-400 to-amber-500">
                <img
                  src={profile.portrait}
                  alt="Naumaan Ijaz"
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black"></span>
              </div>
              <div>
                <div className="text-sm font-serif font-bold text-white flex items-center gap-1.5">
                  <span>Naumaan Ijaz Concierge</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-mono">Official</span>
                </div>
                <div className="text-[10px] text-neutral-400 flex items-center gap-1">
                  <span>Direct Desk:</span>
                  <a href="mailto:info@noumanijaz.com" className="text-gold-400 hover:underline">
                    info@noumanijaz.com
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-obsidian-950/80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-obsidian-950 font-medium rounded-tr-none shadow'
                      : 'bg-obsidian-900 border border-neutral-800 text-neutral-200 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <div
                    className={`text-[9px] font-mono mt-1.5 text-right ${
                      msg.sender === 'user' ? 'text-obsidian-900/70' : 'text-neutral-500'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="p-3 rounded-2xl bg-obsidian-900 border border-neutral-800 text-neutral-400 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[11px] font-mono text-neutral-400 ml-1">Desk responding...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips */}
          <div className="px-3 py-2 bg-obsidian-900/90 border-t border-neutral-800/80 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {conciergeResponses.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleChipClick(opt)}
                className="px-2.5 py-1.5 rounded-lg bg-obsidian-950 border border-neutral-800 hover:border-gold-500/40 text-[11px] text-neutral-300 hover:text-gold-200 whitespace-nowrap transition-all flex-shrink-0"
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={handleSendCustomMessage}
            className="p-3 bg-obsidian-900 border-t border-neutral-800 flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="Ask about bookings, scripts, or dialogue..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl bg-obsidian-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-gold-500 text-obsidian-950 disabled:opacity-40 hover:bg-gold-400 transition-all shadow"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
