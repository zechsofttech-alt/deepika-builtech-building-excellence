import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Bot, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: "bot" | "user";
  text: string;
  isLeadForm?: boolean;
}

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Industry 4.0 Standard Detected. I'm your Autonomous Engineering Assistant at Deepika Builtech. How can I streamline your structural project today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showAutoBubble, setShowAutoBubble] = useState(false);
  const [leadStage, setLeadStage] = useState<"none" | "name" | "contact" | "complete">("none");
  const [leadData, setLeadData] = useState({ name: "", contact: "", requirement: "" });
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-engage bubble after 5 seconds
    const timer = setTimeout(() => {
      if (!isOpen) setShowAutoBubble(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const quickActions = [
    { label: "Get PEB Tech-Quote", action: "I'd like a technical quote for a PEB structure." },
    { label: "Warehouse Expansion", action: "Inform me about warehouse optimization." },
    { label: "Schedule Engineering Call", action: "I want to schedule a call with your technical head." }
  ];

  const handleQuickAction = (action: string) => {
    handleSend(undefined, action);
  };

  const getProgress = () => {
    switch(leadStage) {
      case "name": return 33;
      case "contact": return 66;
      case "complete": return 90;
      default: return 10;
    }
  };

  const simulateBotResponse = (text: string, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: "bot",
        text
      }]);
    }, delay);
  };

  const handleSend = async (e?: React.FormEvent, customValue?: string) => {
    e?.preventDefault();
    const messageToSend = customValue || inputValue;
    if (!messageToSend.trim()) return;

    setMessages(prev => [...prev, { id: Date.now().toString(), type: "user", text: messageToSend }]);
    setInputValue("");
    setShowAutoBubble(false);

    // Logic for Lead Conversion (Consolidated Flow)
    if (leadStage === "none") {
      simulateBotResponse("Understood. I've initiated the Structural Discovery protocol. What is your full name to begin the technical file?");
      setLeadStage("name");
    } else if (leadStage === "name") {
      setLeadData(prev => ({ ...prev, name: messageToSend }));
      simulateBotResponse(`Acknowledged, Mr./Ms. ${messageToSend}. To send over the structural blueprints or quote, which email or WhatsApp number should I secure?`);
      setLeadStage("contact");
    } else if (leadStage === "contact") {
      setLeadData(prev => ({ ...prev, contact: messageToSend }));
      simulateBotResponse("Confirmed. Final check: What is the approximate Area (Sq.Ft) and Location for your project?");
      setLeadStage("complete");
    } else if (leadStage === "complete") {
      setLeadData(prev => ({ ...prev, requirement: messageToSend }));
      setIsTyping(true);
      
      const syncData = { ...leadData, requirement: messageToSend };
      console.log("SYNCING TO CRM:", syncData);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          type: "bot",
          text: "Discovery Complete. Your technical data has been successfully synchronized with our ERP. An Engineering Consultant will reach out within 60 minutes with your initial assessment."
        }]);
      }, 1500);
      setLeadStage("none");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[420px] max-w-[calc(100vw-32px)] h-[650px] bg-white rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-surface-mid"
          >
            {/* Discovery Progress Bar */}
            <div className="h-1.5 w-full bg-surface-subtle overflow-hidden">
              <motion.div 
                animate={{ width: `${getProgress()}%` }}
                className="h-full bg-amber shadow-[0_0_10px_rgba(242,166,0,0.5)] transition-all duration-1000"
              />
            </div>

            {/* Header */}
            <div className="bg-carbon p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber flex items-center justify-center text-carbon font-black shadow-lg">
                  <span className="text-xl">DB</span>
                </div>
                <div>
                  <h3 className="font-heading font-black text-lg leading-none mb-1 tracking-tight">Industrial AI</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none">Discovery Active</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white/60">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-surface-subtle/20"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex ${m.type === "bot" ? "justify-start" : "justify-end"}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl ${
                    m.type === "bot" 
                      ? "bg-white border border-surface-mid text-ink shadow-sm rounded-tl-none font-medium" 
                      : "bg-carbon text-white font-bold shadow-md rounded-tr-none"
                  }`}>
                    <p className="text-[13px] leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}

              {leadStage === "none" && !isTyping && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickActions.map(qa => (
                    <button
                      key={qa.label}
                      onClick={() => handleQuickAction(qa.action)}
                      className="px-4 py-2 bg-amber/10 border border-amber/30 text-amber text-[11px] font-black uppercase tracking-wider rounded-full hover:bg-amber hover:text-carbon transition-all"
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>
              )}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-surface-mid p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-amber" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted">AI Data Analysis</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-6 bg-white border-t border-surface-mid flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Secure project channel open..."
                className="flex-1 bg-surface-subtle border border-surface-mid px-6 py-4 rounded-2xl text-[13px] focus:outline-none focus:border-amber transition-colors"
              />
              <button 
                type="submit"
                className="w-14 h-14 rounded-2xl bg-carbon text-white flex items-center justify-center hover:bg-amber hover:text-carbon transition-all shadow-lg active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {showAutoBubble && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute bottom-20 right-0 w-64 bg-white p-5 rounded-2xl rounded-br-none shadow-2xl border border-surface-mid"
            >
              <p className="text-xs font-bold text-ink leading-relaxed">
                Industrial Standard Check: Need a <span className="text-amber">Tech-Quote</span> for a PEB structure?
              </p>
              <div className="absolute top-full right-4 w-4 h-4 bg-white border-r border-b border-surface-mid rotate-45 -translate-y-2" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowAutoBubble(false);
          }}
          className="w-16 h-16 rounded-2xl bg-carbon text-white flex items-center justify-center shadow-2xl hover:bg-amber hover:text-carbon transition-all duration-500 transform hover:rotate-6 active:scale-90 relative"
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber border-2 border-white rounded-full flex items-center justify-center text-[10px] font-black text-carbon animate-pulse">
              !
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default AIChatBot;
