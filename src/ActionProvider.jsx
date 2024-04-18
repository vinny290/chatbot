import React from 'react'
import { createClientMessage } from 'react-chatbot-kit'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
	const initialAction = () => {
		const message = createClientMessage('Стартуем')
		updateState(message)
	}

	const updateState = (message, checker = '') => {
		setState(prev => ({
			...prev,
			messages: [...prev.messages, message],
			checker,
		}))
	}

	const afterGotIt = () => {
		const message = createChatBotMessage('Из какой вы компании?', {
			widget: 'slots',
		})
		updateState(message)
	}

	const displayNamings = () => {
		const message = createChatBotMessage({
			widget: 'namings',
		})
		updateState(message)
	}
	const namingMessage = name => {
		const message = createClientMessage(
			`Компания: ${name.company}, Название: ${name.name}`
		)
		updateState(message)
		stageProblem()
	}

	const stageProblem = () => {
		const message = createChatBotMessage('На каком этапе возникает ошибка?', {
			widget: 'stage',
		})
		updateState(message)
	}

	const displayStages = () => {
		const message = createChatBotMessage({
			widget: 'stage-namings',
		})
		updateState(message)
	}
	const handleYes = () => {
		const message = createChatBotMessage(
			'Стабильно ли подключение к интернету и внутренней сети?',
			{
				widget: 'choose',
			}
		)
		updateState(message)
	}

	const handleNo = () => {
		const message = this.createChatBotMessage(
			'Обратитесь к Вашему системному администратору и повторите процесс запуска Robin Studio после восстановления соединения',
			{
				widget: 'choose',
			}
		)
		updateState(message)
	}

	// Put the handleHello and handleDog function in the actions object to pass to the MessageParser
	return (
		<div>
			{React.Children.map(children, child => {
				return React.cloneElement(child, {
					actions: {
						initialAction,
						afterGotIt,
						displayNamings,
						namingMessage,
						stageProblem,
						displayStages,
						handleYes,
						handleNo,
					},
				})
			})}
		</div>
	)
}

export default ActionProvider
