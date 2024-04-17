import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from './src/components/BotAvatar/BotAvatar'

const config = {
	initialMessages: [createChatBotMessage(`Putin top`)],
	botName: 'support Chat-bot',
	customComponents: {
		botAvatar: props => <BotAvatar {...props} />,
	},
}

export default config
