import React from 'react'

export const StartRobinStudioButtonsYes1 = props => {
	const options = [
		{
			text: 'Да',
			handler: props.actionProvider.handleStartRobinStudioButtonsYes2,
			id: 1,
		},
		{
			text: 'Нет',
			handler: props.actionProvider.handleStartRobinStudioButtonsNo2,
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
