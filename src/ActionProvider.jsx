class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage
		this.setState = setStateFunc
	}

	handleOption1() {
		const message = this.createChatBotMessage('You clicked Option 1', {
			widget: 'buttonOptions',
		})

		this.updateChatbotState(message)
	}

	updateChatbotState(message) {
		this.setState(prevState => ({
			...prevState,
			messages: [...prevState.messages, message],
		}))
	}
}

export default ActionProvider
