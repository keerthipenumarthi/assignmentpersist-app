class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handlePassion() {
    const message = this.createChatBotMessage(
      "Passion is the fuel that drives us! It's about pursuing what you truly love and are excited about."
    );
    this.updateChatbotState(message);
  }

  handleHobby() {
    const message = this.createChatBotMessage(
      "Hobbies are a great way to explore your passions. What is something you love doing in your free time?"
    );
    this.updateChatbotState(message);
  }

  handleDream() {
    const message = this.createChatBotMessage(
      "Dreams are the seeds of our future. What dreams are you nurturing today?"
    );
    this.updateChatbotState(message);
  }

  handleDefault() {
    const message = this.createChatBotMessage(
      "I'm here to help you with your passions and dreams. Ask me anything!"
    );
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
