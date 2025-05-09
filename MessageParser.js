class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("passion")) {
      this.actionProvider.handlePassion();
    } else if (lowerCaseMessage.includes("hobby")) {
      this.actionProvider.handleHobby();
    } else if (lowerCaseMessage.includes("dream")) {
      this.actionProvider.handleDream();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
