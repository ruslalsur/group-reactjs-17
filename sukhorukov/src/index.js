import React from 'react'
import ReactDom from 'react-dom'
import MessageList from './components/MessageList'
import Button from './components/Button'

const messagesData = ['Hi', 'Hello', 'Test message']

ReactDom.render(
    <>
        <MessageList items={messagesData} />
        <Button>Нормально</Button>
    </>, 
    document.getElementById('root')
)