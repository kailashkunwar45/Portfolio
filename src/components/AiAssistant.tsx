"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircleIcon, 
  XIcon, 
  SendIcon, 
  SparklesIcon, 
  LoaderIcon 
} from "@/components/ui/SocialIcons";
import { User } from "lucide-react"; // Fallback if User isn't in SocialIcons yet, but better to move it too
import { portfolioConfig } from "@/data/config";
import { GlassCard } from "@/components/ui/GlassCard";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string; // Changed to string for hydration stability
};

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Initialize messages on client only
  useEffect(() => {
    setMessages([
      {
        id: "1",
        role: "assistant",
        content: `Hi! I'm ${portfolioConfig.name}'s AI assistant. Ask me anything about his projects, skills, or experience!`,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  }, []);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      const response = generateMockResponse(input);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const generateMockResponse = (query: string) => {
    const q = query.toLowerCase();
    if (q.includes("skill") || q.includes("tech") || q.includes("know")) {
      return `${portfolioConfig.name} is proficient in the MERN stack (MongoDB, Express, React, Node.js). He's also skilled in Next.js, Tailwind CSS, and professional correspondence.`;
    }
    if (q.includes("project") || q.includes("work")) {
      return `He has worked on several projects including an E-Commerce Web Application and a Real-Time Chat Application. You can see them in the Projects section!`;
    }
    if (q.includes("contact") || q.includes("email") || q.includes("hire")) {
      return `You can reach out to him at ${portfolioConfig.contact.email} or call him at ${portfolioConfig.contact.phone}. He's currently available for new opportunities!`;
    }
    if (q.includes("education") || q.includes("study") || q.includes("college")) {
      return `Kailash is currently a 4th-semester BCA student at Aadim National College, Tribhuvan University.`;
    }
    return `That's an interesting question! ${portfolioConfig.name} is a dedicated developer always looking to solve complex problems. Would you like to know more about his projects or skills?`;
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
      >
        {isOpen ? <XIcon size={24} /> : <MessageCircleIcon size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-[60] w-[min(calc(100vw-3rem),400px)] h-[500px]"
          >
            <GlassCard className="flex h-full flex-col overflow-hidden border-white/10 bg-zinc-950/80 p-0 shadow-2xl backdrop-blur-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 px-6 py-4 border-b border-white/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                  <SparklesIcon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight">V1.0 Online</span>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${
                        msg.role === "user" ? "bg-zinc-800" : "bg-cyan-600"
                      }`}>
                        {msg.role === "user" ? <User size={14} /> : <SparklesIcon size={14} />}
                      </div>
                      <div className={`rounded-2xl px-4 py-2.5 text-sm ${
                        msg.role === "user" 
                          ? "bg-zinc-800 text-white" 
                          : "bg-white/5 text-zinc-200 border border-white/5"
                      }`}>
                        {msg.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-white">
                        <SparklesIcon size={14} />
                      </div>
                      <div className="rounded-2xl bg-white/5 px-4 py-2.5 border border-white/5">
                        <LoaderIcon size={16} className="animate-spin text-cyan-400" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="p-4 bg-zinc-950/50 border-t border-white/5">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about projects..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-4 pr-12 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-cyan-500/50 transition-all"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-cyan-500/20 p-2 text-cyan-400 transition-all hover:bg-cyan-500 hover:text-white disabled:opacity-50"
                  >
                    <SendIcon size={16} />
                  </button>
                </form>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
