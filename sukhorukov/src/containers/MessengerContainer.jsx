import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {push} from 'connected-react-router'
import {Messenger} from '../components/messenger'
import {chatsLoadAction, chatsAddAction, chatsDelAction,
   setChatAsReaded, chatsMessageSendAction} from '../actions/chatsActions'

class MessengerContainerClass extends React.Component {
   componentDidMount() {
      const {chats, getChats, redirect} = this.props

      if (!chats.length) {
         getChats()
      }

      // redirect(0)
   }

   addChat = (title) => {
      const {chats, addChatToStore, redirect} = this.props
      const id = chats[chats.length - 1].id + 1

      addChatToStore(id, title)
      redirect(id)
   }

   delChat = (id) => {
      const {delChatFromStore, redirect} = this.props
      redirect(0)

      delChatFromStore(id)
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
      const {isLoading, isError, chats, chatId, getChats,
         messages, redirect, delChat} = this.props

      return (
         <Messenger
            isLoading={isLoading}
            isError={isError}
            getChats={getChats}
            chats={chats}
            chatId={chatId}
            addChat={this.addChat}
            delChat={this.delChat}
            redirect={redirect}
            messages={messages}
            sendMessage={this.sendMessage} />
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {chats, loading, error} = state.chatsReducer
   const {profile} = state.profilesReducer
   const {match} = ownProps

   const chatsArray = []
   for (let key in chats) {
      if (chats.hasOwnProperty(key)) {
         chatsArray.push({
            id: chats[key].id,
            title: chats[key].title,
            readed: chats[key].readed
         })
      }
   }

   let messages = null
   if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages
   }

   return {
      isLoading: loading,
      isError: error,
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
      getProfile: () => dispatch(profilesGetAction()),
      getChats: () => dispatch(chatsLoadAction()),
      addChatToStore: (id, title) => dispatch(chatsAddAction(id, title)),
      delChatFromStore: (id) => dispatch(chatsDelAction(id)),
      sendMessageToStore: (message) => dispatch(chatsMessageSendAction(message)),
      redirect: (chatId) => dispatch(push(`/chat/${chatId}`))
   }
}

export const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(MessengerContainerClass)
