import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {push} from 'connected-react-router'
import {Messenger} from '../components/messenger'
import {chatsGetAction, chatsAddAction, chatsDelAction, setChatAsReaded, chatsMessageSendAction} from '../actions/chatsActions'
import {profileGetAction} from '../actions/profileActions'

class MessengerContainerClass extends React.Component {
   componentDidMount() {
      const {author, chats} = this.props

      if (author === undefined) {
         this.props.getProfile()
      }

      if (!chats.length) {
         this.props.getChats()
      }
   }

   handleChatAdd = (title) => {
      const {chats, addChat, redirect} = this.props
      const lastId = chats.length

      addChat(lastId, title)
      redirect(lastId)
   }

   handleMessageSend = (message) => {
      const {messages, author} = this.props

      if (messages) {
         message.id = nanoid()
         message.author = author
         message.chatId = this.props.chatId
         this.props.sendMessage(message)
      } else alert('Не выбран чат для этого сообщения')
   }

   render() {
      const {author, chats, messages, chatId, redirect, setChatAsReaded, delChat} = this.props

      return (
         <Messenger
            author={author}
            chats={chats}
            chatId={chatId}
            messages={messages}
            handleMessageSend={this.handleMessageSend}
            handleChatAdd={this.handleChatAdd}
            redirect={redirect}
            delChat={delChat}
            setChatAsReaded={setChatAsReaded} />
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
            readed: chats[key].readed,
         })
      }
   }

   return {
      author: profile.name,
      chats: chatsArray,
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
      addChat: (id, title) => dispatch(chatsAddAction(id, title)),
      delChat: (id) => dispatch(chatsDelAction(id)),
      setChatAsReaded: (id) => dispatch(setChatAsReaded(id)),
      sendMessage: (message) => dispatch(chatsMessageSendAction(message)),
      redirect: (chatId) => dispatch(push(`/chat/${chatId}`))
   }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)
