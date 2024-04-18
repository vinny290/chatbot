import { createChatBotMessage } from 'react-chatbot-kit'
import BotAvatar from '../components/BotAvatar/BotAvatar'
import { Slot } from '../components/Slot'
import { Stage } from '../components/Stage'
import StartBtn from '../components/StartBtn'
import { StartRobinStudioButtons } from '../components/scenarys/scenary1/StartRobinStudioButtons'
import { StartRobinStudioButtonsYes1 } from '../components/scenarys/scenary1/StartRobinStudioButtonsYes1'
import { StartRobinStudioButtonsYes2 } from '../components/scenarys/scenary1/StartRobinStudioButtonsYes2'

const name = 'чат-бот тех. поддержки'
const config = {
	botName: name,
	customComponents: {
		botAvatar: props => <BotAvatar {...props} />,
	},
	initialMessages: [
		createChatBotMessage(`Здравствуйте, я ${name}!`, {
			widget: 'startBtn',
		}),
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
			widgetName: 'startRobinStudioButtons',
			widgetFunc: props => <StartRobinStudioButtons {...props} />,
		},
		{
			widgetName: 'startRobinStudioButtonsYes1',
			widgetFunc: props => <StartRobinStudioButtonsYes1 {...props} />,
		},
		{
			widgetName: 'startRobinStudioButtonsYes2',
			widgetFunc: props => <StartRobinStudioButtonsYes2 {...props} />,
		},
		{
			widgetName: 'startRobinStudioButtonsNo2',
			widgetFunc: props => <StartRobinStudioButtonsYes2 {...props} />,
		},
		// {
		// 	widgetName: 'choose1',
		// 	widgetFunc: props => <Scenary2 {...props} />,
		// },
	],
}

export default config
