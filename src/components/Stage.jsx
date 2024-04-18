import React from 'react'

export const Stage = props => {
	const options = [
		{
			text: 'Подключение к ВМ',
			handler: props.actionProvider.handleConnectList,
			id: 1,
		},
		{
			text: 'Запуск Robin Studio',
			handler: props.actionProvider.handleStartRobinStudio,
			id: 2,
		},
		{ text: 'При запуске Robin Player', handler: () => {}, id: 3 },
		{ text: 'Сразу после запуска робота', handler: () => {}, id: 4 },
		{
			text: 'Через некоторое время после запуска робота',
			handler: () => {},
			id: 5,
		},
	]

	const optionsMarkup = options.map(option => (
		<button className='btn' key={option.id} onClick={option.handler}>
			{option.text}
		</button>
	))

	return <div className='learning-options-container'>{optionsMarkup}</div>
}
