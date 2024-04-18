const Scenary2 = props => {
	const options = [
		{
			text: 'Нет, соединение отсутствует',
			handler: props.actionProvider.handleNo,
			id: 1,
		},
		{
			text: 'Да, соединение стабильно',
			handler: props.actionProvider.handleYes,
			id: 2,
		},
	]

	const buttonsMarkup = options.map(option => (
		<button key={option.id} onClick={option.handler} className='option-button'>
			{option.text}
		</button>
	))

	return <div className='options-container'>{buttonsMarkup}</div>
}

export default Scenary2
