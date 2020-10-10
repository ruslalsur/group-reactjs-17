import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {push} from 'connected-react-router'
import {Messenger} from '../components/messenger'
import {chatsGetAction, chatsAddAction, chatsDelAction, setChatAsReaded, chatsMessageSendAction} from '../actions/chatsActions'
import {profileGetAction} from '../actions/profileActions'

class MessengerContainerClass extends React.Component {
   componentDidMount() {
      const {author, chats, redirect} = this.props

      if (author === undefined) {
         this.props.getProfile()
      }

      if (!chats.length) {
         this.props.getChats()
      }

      redirect(0)
   }

   sendMessage = (message) => {
      const {messages, author, sendMessageToStore} = this.props

      if (messages) {
         message.id = nanoid()
         message.author = author
         message.chatId = this.props.chatId
         sendMessageToStore(message)
      } else alert('Не выбран чат для этого сообщения')
   }

   render() {
      const {author, messages} = this.props

      return (
         <Messenger
            author={author}
            messages={messages}
            sendMessage={this.sendMessage} />
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {chats} = state.chatsReducer
   const {profile} = state.profileReducer
   const {match} = ownProps

   let messages = null
   if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages
   }

   return {
      author: profile.name,
      chats,
      messages,
      chatId: match
         ? match.params.id
         : null
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profileGetAction()),
      getChats: () => dispatch(chatsGetAction()),
      sendMessageToStore: (message) => dispatch(chatsMessageSendAction(message)),
      redirect: (chatId) => dispatch(push(`/chat/${chatId}`))
   }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)
