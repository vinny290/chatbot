import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from './src/components/BotAvatar/BotAvatar'
import ButtonOptions from './src/components/ButtonOptions/ButtonOptions'

const config = {
	initialMessages: [createChatBotMessage(`Putin top`)],
	botName: 'support Chat-bot',
	customComponents: {
		botAvatar: props => <BotAvatar {...props} />,
	},
	widgets: [
		{
			widgetName: 'buttonOptions',
			widgetFunc: props => <ButtonOptions {...props} />,
		},
	],
}

export default config
