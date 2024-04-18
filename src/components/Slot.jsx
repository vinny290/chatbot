import React, { useState } from 'react'

export const Slot = props => {
	const [company, setCompany] = useState('')
	const [name, setName] = useState('')

	const displayNamings = e => {
		setCompany(e)
	}
	const namingMessage = name => {
		setName(name)
		props.actions.namingMessage({ company, name })
		document.getElementById('name-div').style.display = 'none'
	}

	const renderCompanyInfo = () => {
		switch (company) {
			case 'ФГК':
				return (
					<div className='name-container'>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-03')}>
							ПР-ТС-03
						</button>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-02')}>
							ПР-ТС-02
						</button>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-28')}>
							ПР-ТС-28
						</button>
					</div>
				)
			case 'ФПК':
				return (
					<div className='name-container'>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-№№')}>
							ПР-ТС-№№
						</button>
					</div>
				)
			case 'ЖДУ':
				return (
					<div className='name-container'>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-06')}>
							ПР-ТС-06
						</button>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-12')}>
							ПР-ТС-12
						</button>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-17')}>
							ПР-ТС-17
						</button>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-27')}>
							ПР-ТС-27
						</button>
					</div>
				)
			case 'РЖД-ТС':
				return (
					<div className='name-container'>
						<button className='btn' onClick={() => namingMessage('ПР-ТС-№№')}>
							ПР-ТС-№№
						</button>
					</div>
				)
			default:
				return null
		}
	}

	return (
		<div id='name-div'>
			<div>
				<button
					id='company1'
					className='btn'
					onClick={() => displayNamings('ФГК')}
				>
					ФГК
				</button>
				<button
					id='company2'
					className='btn'
					onClick={() => displayNamings('ФПК')}
				>
					ФПК
				</button>
				<button
					id='company3'
					className='btn'
					onClick={() => displayNamings('ЖДУ')}
				>
					ЖДУ
				</button>
				<button
					id='company4'
					className='btn'
					onClick={() => displayNamings('РЖД-ТС')}
				>
					РЖД-ТС
				</button>
			</div>
			{renderCompanyInfo()}
		</div>
	)
}
