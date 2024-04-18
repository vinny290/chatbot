import React from 'react'

export const StartRobinStudioButtonsYes2 = props => {
	const options = [
		{
			text: 'Да',
			handler: props.actionProvider.handleStartRobinStudioButtonsYes3,
			id: 1,
		},
		{
			text: 'Нет',
			handler: props.actionProvider.handleStartRobinStudioButtonsNo3,
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
