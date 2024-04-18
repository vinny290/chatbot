import React, { useState } from 'react'
import Scenary2 from './scenary2/Scenary2'

export const Stage = () => {
	const [problem, setProblem] = useState('')
	const [showWidget, setShowWidget] = useState(false)

	const displayProblems = e => {
		setProblem(e)
		if (e === 'Запуск Robin Studio') {
			setShowWidget(true)
		} else {
			setShowWidget(false)
		}
	}

	return (
		<div id='problem-div'>
			<div>
				<button
					id='problem1'
					className='btn'
					onClick={() => displayProblems('Подключение к ВМ')}
				>
					Подключение к ВМ
				</button>
				<button
					id='problem1'
					className='btn'
					onClick={() => displayProblems('Запуск Robin Studio')}
				>
					Запуск Robin Studio
				</button>
				<button
					id='problem1'
					className='btn'
					onClick={() => displayProblems('При запуске Robin Player')}
				>
					При запуске Robin Player
				</button>
				<button
					id='problem1'
					className='btn'
					onClick={() => displayProblems('Сразу после запуска робота')}
				>
					Сразу после запуска робота
				</button>
				<button
					id='problem1'
					className='btn'
					onClick={() =>
						displayProblems('Через некоторое время после запуска робота')
					}
				>
					Через некоторое время после запуска робота
				</button>
			</div>

			{showWidget && <Scenary2 />}
		</div>
	)
}
