import React from 'react'
import {Message} from '../Message'

export class Messages extends React.Component {
    render() {        
        return this.props.messages.map((message, index) => <Message key={index} author={message.author} text={message.text}/>)
    }
}