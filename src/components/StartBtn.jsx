import { useEffect, useState } from 'react'

const StartBtn = props => {
	const [gotItDone, setGotItDone] = useState(false)
	const initialAction = () => {
		props.actions.initialAction()
		document.getElementById('startbtn').style.display = 'none'
		setGotItDone(true)
	}
	const afterGotIt = () => {
		props.actions.afterGotIt()
	}
	useEffect(() => {
		if (gotItDone === true) {
			afterGotIt()
		}
	}, [gotItDone])
	return (
		<button id='startbtn' className='btn' onClick={() => initialAction()}>
			Старт
		</button>
	)
}

export default StartBtn
