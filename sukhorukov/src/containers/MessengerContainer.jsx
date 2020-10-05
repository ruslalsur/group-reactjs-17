import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {Messenger} from '../components/messenger'
import {chatsGetAction, chatsAddAction, chatsMessageSendAction} from '../actions/chatsActions'
import {profileGetAction} from '../actions/profileActions'

class MessengerContainerClass extends React.Component {
   componentDidMount() {
      this.props.getChats()
      this.props.getProfile()
   }

   handleChatAdd = (title) => {
      this.props.addChat(title)
   }

   handleMessageSend = (message) => {
      const {messages} = this.props

      if (messages) {
         message.id = nanoid()
         message.currentChatId = this.props.currentChatId
         this.props.sendMessage(message)
      } else alert('Не выбран чат для этого сообщения')
   }

   render() {
      const {author, chats, messages, currentChatId} = this.props

      return (
         <Messenger
            author={author}
            chats={chats}
            currentChatId={currentChatId}
            messages={messages}
            handleMessageSend={this.handleMessageSend}
            handleChatAdd={this.handleChatAdd} />
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

   const chatsArray = []
   for (let key in chats) {
      if (chats.hasOwnProperty(key)) {
         chatsArray.push({
            id: chats[key].id,
            title: chats[key].title,
            currentChatMessagesCount: chats[key].messages.length
         })
      }
   }

   return {
      author: profile.name,
      chats: chatsArray,
      messages,
      currentChatId: match
         ? match.params.id
         : null
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profileGetAction()),
      getChats: () => dispatch(chatsGetAction()),
      addChat: (title) => dispatch(chatsAddAction(title)),
      sendMessage: (message) => dispatch(chatsMessageSendAction(message))
   }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)
