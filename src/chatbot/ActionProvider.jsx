import React from 'react'
import { createClientMessage } from 'react-chatbot-kit'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
	const initialAction = () => {
		const message = createClientMessage('Старт')
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
		handleConnectList()
	}

	const handleConnectList = () => {
		const message = createChatBotMessage(
			'Обратитесь к сотруднику,который настроит вам подключение'
		)
		updateState(message)
	}

	const handleStartRobinStudio = () => {
		const message = createChatBotMessage(
			'Стабильно ли подключение к интернету и внутренней сети?',
			{
				widget: 'startRobinStudioButtons',
			}
		)
		updateState(message)
	}
	const handleStartRobinStudioButtonsNo1 = () => {
		const message = createChatBotMessage(
			'Обратитесь к Вашему системному администратору и повторите процесс запуска Robin Studio после восстановления соединения'
		)
		updateState(message)
	}

	const handleStartRobinStudioButtonsYes1 = () => {
		const message = createChatBotMessage(
			'Для корректной работы программы необходимо запустить ярлык "Запуск Robin" и после этого запустить Robin Studio. Вы запускали данный ярлык перед запуском студии',
			{
				widget: 'startRobinStudioButtonsYes1',
			}
		)
		updateState(message)
	}

	const handleStartRobinStudioButtonsYes2 = () => {
		const message = createChatBotMessage(
			'При запуске студии возникает предупреждение "Не удалось пройти проверку подлинности" ?',
			{
				widget: 'startRobinStudioButtonsYes2',
			}
		)
		updateState(message)
	}

	const handleStartRobinStudioButtonsYes2_1 = () => {
		const message = createChatBotMessage('Рад был помочь!')
		updateState(message)
	}

	const handleStartRobinStudioButtonsNo2 = () => {
		const message = createChatBotMessage(
			'Для корректной работы программы необходимо запустить ярлык "Запуск Robin" и после этого запустить Robin Studio. При необходимости закройте ранне открытый экземпляр студии. Данные рекомендации помогли устранить проблему?',
			{
				widget: 'startRobinStudioButtonsNo2',
			}
		)
		updateState(message)
	}

	const handleStartRobinStudioButtonsNo2_1 = () => {
		const message = createChatBotMessage(
			'При запуске студии возникает предупреждение "Не удалось пройти проверку подлинности" ?',
			{
				widget: 'startRobinStudioButtonsYes2',
			}
		)
		updateState(message)
	}

	const handleStartRobinStudioButtonsYes3 = () => {
		const message = createChatBotMessage(
			'Обратитесь к разработчику робота по почте. В письме опишите на каком этапе возникает ошибка и приложите к письму скриншот экрана в момент возникновения ошибки. Также вложите в письмо журналы работы платформы.'
		)
		updateState(message)
	}

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
						handleConnectList,
						handleStartRobinStudio,
						handleStartRobinStudioButtonsNo1,
						handleStartRobinStudioButtonsYes1,
						handleStartRobinStudioButtonsYes2,
						handleStartRobinStudioButtonsYes2_1,
						handleStartRobinStudioButtonsNo2,
						handleStartRobinStudioButtonsYes3,
						// handleYes,
						// handleNo,
					},
				})
			})}
		</div>
	)
}

export default ActionProvider
