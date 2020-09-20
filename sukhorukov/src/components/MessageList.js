import React from 'react'
import Message from './Message'

const MessageList = ({items}) => {
    return items.map((item, index) => <Message text={item} author="WebDev" key={index} />)
}

export default MessageList