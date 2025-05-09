import React from "react";
import ChatBot from "react-chatbot-kit";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const config = {
  botName: "DreamBot",
  initialMessages: [
    {
      message: "Hi! I'm here to assist you. Ask me about your passions or dreams!",
      sender: "bot",
    },
  ],
  state: {},
  customComponents: {},
  customStyles: {},
  messageParser: MessageParser,
  actionProvider: ActionProvider,
};

function App() {
  return <ChatBot config={config} />;
}

export default App;

 

 
