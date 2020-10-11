import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {push} from 'connected-react-router'
import {Chats} from '../components/chats'
import {chatsLoadAction, chatsAddAction, chatsDelAction, setChatAsReaded, chatsMessageSendAction} from '../actions/chatsActions'
import {profileGetAction} from '../actions/profileActions'

class ChatsContainerClass extends React.Component {
   componentDidMount() {
      const {chats} = this.props

      if (!chats.length) {
         this.props.getChats()
      }
   }

   addChat = (title) => {
      const {chats, addChatToStore, redirect} = this.props
      const id = chats[chats.length - 1].id + 1

      addChatToStore(id, title)
      redirect(id)
   }

   render() {
      const {author, chats, messages, chatId, redirect, delChatFromStore} = this.props

      return (
         <Chats
            author={author}
            chats={chats}
            chatId={chatId}
            addChat={this.addChat}
            delChat={delChatFromStore}
            redirect={redirect} />
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {chats} = state.chatsReducer
   const {profile} = state.profileReducer

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

   return {
      author: profile.name,
      chats: chatsArray,
      chatId: state.router.location.pathname.split('/').pop()
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profileGetAction()),
      getChats: () => dispatch(chatsLoadAction()),
      addChatToStore: (id, title) => dispatch(chatsAddAction(id, title)),
      delChatFromStore: (id) => dispatch(chatsDelAction(id)),
      redirect: (chatId) => dispatch(push(`/chat/${chatId}`))
   }
}

export const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(ChatsContainerClass)
