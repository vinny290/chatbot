import React from 'react'

export const StartRobinStudioButtonsNo2 = props => {
	const options = [
		{
			text: 'Нет2',
			handler: props.actionProvider.handleStartRobinStudioButtonsNo2_1,
			id: 7,
		},
		{
			text: 'Да2',
			handler: props.actionProvider.handleStartRobinStudioButtonsYes2_1,
			id: 8,
		},
	]

	const optionsMarkup = options.map(option => (
		<button className='btn' key={option.id} onClick={option.handler}>
			{option.text}
		</button>
	))

	return <div className='learning-options-container'>{optionsMarkup}</div>
}
