// components/Chat.js
// src/components/Chat.js
import React, { useState } from "react";


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot thinking delay
    setTimeout(() => {
      const botReply = generateBotReply(userInput);
      const botMessage = { sender: "bot", text: botReply };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setUserInput("");
  };
 const handleClear = () => {
    setMessages([]); // Clear all messages
  };

  const generateBotReply = (message) => {
    const lower = message.toLowerCase();
    if (lower.includes("hi") || lower.includes("hello")) return "Hey there! 👋";
    if (lower.includes("how are you")) return "I'm just a bot, but I'm doing great!";
    return "I'm still learning... try saying 'hello'!";
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.sender === "user" ? "🧑" : "🤖"} {msg.text}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
<button onClick={handleClear} className="clear-btn">Clear</button>
      </div>
    </div>
  );
};

export default Chat;




