import React, { useState, useRef, useEffect } from "react";

const Chat = ({
  welcomeTitle = "Welcome 👋",
  welcomeSubtitle = "Ask anything about passions, hobbies, or goals.",
  welcomeInstructions = 'Ask about your passion, career, hobbies, or dream goals.',
  enableVoice = true,
  persistHistory = true,
  userDetails = { name: "John Doe", profilePic: "/path/to/profile.jpg" },
}) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showChatBot, setShowChatBot] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const voiceRecognizerRef = useRef(null);

  // Load chat history if enabled
  useEffect(() => {
    if (persistHistory) {
      const saved = JSON.parse(localStorage.getItem("chatHistory"));
      if (saved) setMessages(saved);
    }
  }, []);

  // Save chat history if enabled
  useEffect(() => {
    if (persistHistory) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
    if (messages.length > 0 && !showChatBot) setShowChatBot(true);
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    const input = userInput.toLowerCase();

    // Show chatbot if input looks like help
    if (!showChatBot && /help|support|how/i.test(input)) {
      setShowUserDetails(false);
      setShowChatBot(true);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Hi! I'm here to assist you. What would you like to know about passions?" },
      ]);
      setUserInput("");
      return;
    }

    if (!showChatBot) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Type 'help' if you want to interact with the assistant." },
      ]);
      setUserInput("");
      return;
    }

    // Simulate typing indicator with a delay
    setIsTyping(true);

    // Handle passion-based bot responses based on user input
    const botReply = getPassionBotReply(userInput);

    // Adding a delay for the bot's reply to simulate typing
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
      setUserInput("");
    }, 1000); // Simulate a 1-second delay for typing
  };

  const getPassionBotReply = (input) => {
    // Predefined passion-related responses based on user input
    const responses = {
      passion: "Passion is the fuel that drives us! It's about pursuing what you truly love and are excited about.",
      hobby: "Hobbies are a great way to explore your passions. What is something you love doing in your free time?",
      goal: "A goal is a passion in action! What's one of your major goals in life?",
      "career advice": "Following your passion can lead to a fulfilling career! What career path excites you?",
      "dream job": "A dream job is where your passion meets your skills. What's your dream job?",
      "how to find my passion": "Finding your passion is about exploring things you enjoy and are curious about. Have you tried new activities or taken a career assessment test?",
      "follow your dreams": "Yes! Always follow your dreams. Passion is a key part of achieving your goals!",
      "what is passion": "Passion is an intense emotion or strong enthusiasm for something. It's what drives people to pursue their interests.",
      "why follow your passion": "Following your passion makes life more fulfilling, and it can lead to success and happiness!",
    };

    // Check if input matches any of the predefined questions or words related to passion
    for (const key in responses) {
      if (input.includes(key)) {
        return responses[key];
      }
    }

    // Default response if no match is found
    return "Sorry, I didn't quite understand. You can ask about passions, hobbies, career, or dreams!";
  };

  const toggleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    // Cancel if already listening
    if (isListening && voiceRecognizerRef.current) {
      voiceRecognizerRef.current.abort();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    voiceRecognizerRef.current = recognition;

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);

    recognition.onend = () => {
      setIsListening(false);
      voiceRecognizerRef.current = null;
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript);
    };

    recognition.start();
  };

  const handleClearChat = () => {
    setMessages([]);
    if (persistHistory) localStorage.removeItem("chatHistory");
    setShowChatBot(false);
  };

  const handleHelpClick = () => {
    setShowUserDetails(true);
    setShowChatBot(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4">
      {/* Welcome Message Section */}
      {!showChatBot && !showUserDetails && (
        <div className="text-black space-y-4 text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold">{welcomeTitle}</h1>
          <p className="text-lg">{welcomeSubtitle}</p>
          <p className="text-md">{welcomeInstructions}</p>
        </div>
      )}

      {/* User Details Section */}
      {showUserDetails && (
        <div className="text-black space-y-4 text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold">User Details</h2>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={userDetails.profilePic}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <p className="text-xl">{userDetails.name}</p>
          </div>
          <button
            onClick={() => setShowUserDetails(false)}
            className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            Start Chat
          </button>
        </div>
      )}

      {/* Chat Box */}
      <div className="mt-6 w-full max-w-2xl">
        {messages.length > 0 && showChatBot && (
          <div
            role="log"
            aria-live="polite"
            className="w-full h-[400px] bg-white bg-opacity-20 rounded-lg overflow-y-auto p-4 space-y-4 text-black shadow-inner"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-xs ${
                    msg.sender === "user" ? "bg-blue-500" : "bg-green-500"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-lg bg-gray-400 animate-pulse max-w-xs text-black">
                  Bot is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about passions, hobbies, goals, or dreams..."
              className="flex-1 px-4 py-2 rounded-lg bg-white bg-opacity-80 text-black focus:outline-none"
              aria-label="Your message"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-black rounded-lg"
            >
              Send
            </button>
            {enableVoice && (
              <button
                onClick={toggleVoiceInput}
                title={isListening ? "Cancel voice input" : "Start voice input"}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isListening ? "bg-red-600 hover:bg-red-700" : "bg-yellow-500 hover:bg-yellow-600"
                } text-black`}
              >
                {isListening ? "⛔ Cancel" : "🎤 Speak"}
              </button>
            )}
          </div>

          {/* Clear Chat Button */}
          <button
            onClick={handleClearChat}
            className="text-sm text-black hover:underline self-end mt-1"
          >
            Clear Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;











