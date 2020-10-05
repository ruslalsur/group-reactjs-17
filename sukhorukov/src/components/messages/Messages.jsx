import React from 'react'
import {Alert} from '@material-ui/lab'
import {Message} from '../message'

export class Messages extends React.Component {
   render() {
      const {messages} = this.props

      if (messages) {
         return messages.map((message) => <Message key={message.id} message={message} />)
      }

      return <Alert variant="filled" severity="info">Выберите или создайте чат слева</Alert>
   }
}
