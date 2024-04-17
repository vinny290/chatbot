import React from 'react'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ReactDOM from 'react-dom/client'
import ActionProvider from '../ActionProvider.jsx'
import MessageParser from '../MessageParser.jsx'
import config from '../config.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Chatbot
			config={config}
			messageParser={MessageParser}
			actionProvider={ActionProvider}
		/>
	</React.StrictMode>
)
