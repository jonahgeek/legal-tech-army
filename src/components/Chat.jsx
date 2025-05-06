import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import JuriBotImg from "../assets/juribot.png";
import { Send } from "react-feather";

function Chat({ agentType, initialMessage, directQuestion }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [processedQuestions, setProcessedQuestions] = useState([]);
  const messagesEndRef = useRef(null);

  const API_BASE_URL =
    "https://258f-2c0f-3d00-63d-7e00-1d94-c024-c1e3-c6b0.ngrok-free.app";

  const scrollToBottom = () =>
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

  const handleSendMessage = useCallback(
    async (override = null) => {
      const msg = override || input;
      if (!msg.trim()) return;

      const userMessage = { content: msg, isUser: true };
      setMessages((prev) => [...prev, userMessage]);
      if (!override) setInput("");
      setIsLoading(true);

      try {
        const res = await axios.post(
          `${API_BASE_URL}/api/${agentType}`,
          {
            message: msg,
          },
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
              "Content-Type": "application/json",
            },
          }
        );
        const response =
          res.data?.response || "⚠️ No response received from Major Clause.";
        setMessages((prev) => [...prev, { content: response, isUser: false }]);
      } catch (err) {
        console.error("Chat error:", err);
        setMessages((prev) => [
          ...prev,
          {
            content:
              "🚨 Connection to LTA HQ failed. Check backend server at 127.0.0.1:5001.",
            isUser: false,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, agentType]
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  useEffect(() => {
    if (initialMessage) {
      setMessages([{ content: initialMessage, isUser: false }]);
    }
  }, [initialMessage]);

  useEffect(() => {
    if (messages.length === 0) return;
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage.isUser) scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (directQuestion && !processedQuestions.includes(directQuestion)) {
      const cleaned = directQuestion.replace(/\s*\[\d+\]\s*$/, "");
      setInput(cleaned);
      handleSendMessage(cleaned);
      setProcessedQuestions((prev) => [...prev, directQuestion]);
    }
  }, [directQuestion, processedQuestions, handleSendMessage]);

  const formatMarkdown = (content) => {
    return {
      __html: content
        .replace(/#{1,6} (.*)/g, "<strong>$1</strong>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(
          /\[(.*?)\]\((.*?)\)/g,
          '<a href="$2" target="_blank" class="underline text-blue-400 hover:text-blue-600">$1</a>'
        )
        .replace(/\n/g, "<br/>"),
    };
  };

  return (
    <>
      {/* Overlay */}
      {isFocused && (
        <div className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm transition-opacity duration-300"></div>
      )}

      {/* Chat Box */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isFocused
            ? "fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl shadow-2xl scale-100 opacity-100"
            : "relative w-full max-w-full scale-95 opacity-90"
        }`}
      >
        <div className="cyber-chat bg-[#0e1726] border border-[#24344d] rounded-xl overflow-hidden shadow-xl">
          <div className="chat-header bg-[#121c30] text-amber-400 px-4 py-2 flex items-center justify-between border-b border-[#24344d]">
            <span className="font-bold text-lg tracking-wider">
              Legal Tech
            </span>
            <span className="text-sm text-gray-400">
              Agent - {agentType.toUpperCase()}
            </span>
          </div>

          <div className="chat-body min-h-[300px] max-h-[400px] overflow-y-auto p-4 space-y-4 bg-[#0a101a]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!msg.isUser && (
                  <div className="mr-2 flex items-start">
                    <div className="h-8 w-8 bg-amber-500 text-black rounded-full flex items-center justify-center font-bold">
                      <img
                        src={JuriBotImg}
                        alt="Agent"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
                    msg.isUser
                      ? "bg-[#1e2c4c] text-white"
                      : "bg-[#162336] text-amber-100"
                  }`}
                  dangerouslySetInnerHTML={formatMarkdown(msg.content)}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 text-amber-300">
                <span className="text-sm animate-pulse">
                  Major Clause is typing...
                </span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-footer border-t border-[#24344d] bg-[#121c30] p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                placeholder="Type your legal inquiry here..."
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-2 bg-[#0a101a] text-white border border-[#2e3c54] rounded-md focus:outline-none focus:ring focus:ring-amber-500"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md font-semibold"
              >
                Send <Send className="inline" />
              </button>
            </div>
            {isFocused && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setIsFocused(false)}
                  className="text-amber-300 hover:text-amber-500 text-sm underline transition-colors"
                >
                  ✖️ End Session with Agent
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
