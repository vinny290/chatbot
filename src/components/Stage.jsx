import React, { useState } from 'react'

export const Stage = () => {
	const [problem, setProblem] = useState('')
	const displayProblems = e => {
		setProblem(e)
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
		</div>
	)
}
