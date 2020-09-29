import React from 'react'
import {Message} from '../message'

export class Messages extends React.Component {
    render() { 
       return this.props.messages.map((message) =>
            <Message key={message.id} message={message} />
       )
   }
}