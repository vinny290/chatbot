import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from './src/components/BotAvatar/BotAvatar'
import { Slot } from './src/components/Slot'
import { Stage } from './src/components/Stage'
import StartBtn from './src/components/StartBtn'
import Scenary2 from './src/components/scenary2/Scenary2'

const name = 'чат-бот тех. поддержки'
const config = {
	botName: name,
	customComponents: {
		botAvatar: props => <BotAvatar {...props} />,
	},
	initialMessages: [
		createChatBotMessage(
			`Здравствуйте, я ${name}! Давайте начнём. Из какой Вы компании?`,
			{
				widget: 'startBtn',
			}
		),
	],
	widgets: [
		{
			widgetName: 'startBtn',
			widgetFunc: props => <StartBtn {...props} />,
		},
		{
			widgetName: 'slots',
			widgetFunc: props => <Slot {...props} />,
		},
		{
			widgetName: 'namings',
			widgetFunc: props => <Slot {...props} />,
		},
		{
			widgetName: 'stage',
			widgetFunc: props => <Stage {...props} />,
		},
		{
			widgetName: 'stage-namings',
			widgetFunc: props => <Stage {...props} />,
		},
		{
			widgetName: 'choose',
			widgetFunc: props => <Scenary2 {...props} />,
		},
	],
}

export default config
