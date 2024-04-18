import React from 'react'

export const StartRobinStudioButtons = props => {
	const options = [
		{
			text: 'Нет, соединение отсутствует',
			handler: props.actionProvider.handleStartRobinStudioButtonsNo1,
			id: 1,
		},
		{
			text: 'Да, соединение стабильно',
			handler: props.actionProvider.handleStartRobinStudioButtonsYes1,
			id: 2,
		},
	]

	const optionsMarkup = options.map(option => (
		<button className='btn' key={option.id} onClick={option.handler}>
			{option.text}
		</button>
	))

	return <div className='learning-options-container'>{optionsMarkup}</div>
}
