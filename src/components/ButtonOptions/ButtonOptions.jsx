const ButtonOptions = props => {
	const options = [
		{ text: 'Option 1', handler: () => {}, id: 1 },
		{ text: 'Option 2', handler: () => {}, id: 2 },
	]

	const buttonsMarkup = options.map(option => (
		<button key={option.id} onClick={option.handler} className='button-option'>
			{option.text}
		</button>
	))

	return <div className='button-options-container'>{buttonsMarkup}</div>
}

export default ButtonOptions
