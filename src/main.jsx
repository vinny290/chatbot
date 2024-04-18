import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ReactDOM from 'react-dom/client'
import ActionProvider from './chatbot/ActionProvider'
import MessageParser from './chatbot/MessageParser'
import config from './chatbot/config'
import './index.css'
import './normalize.css'

// Создайте свой собственный компонент ChatInput
function MyChatInput(props) {
	return <input type='text' readOnly={true} {...props} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Chatbot
			config={config}
			messageParser={MessageParser}
			actionProvider={ActionProvider}
			// Используйте свой компонент ChatInput
			customComponents={{
				userInput: MyChatInput,
			}}
		/>
		{/* <ButtonOptions /> */}
	</React.StrictMode>
)
