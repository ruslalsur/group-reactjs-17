import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {CHATS_GET, CHATS_ADD, CHATS_MESSAGE_SEND} from '../actions/chatsActions'
import {defaultChats} from '../helpers/defaultChatsData'

const initialState = {
   chats: []
}

export const chatsReducer = (state = initialState, action) => {
   switch (action.type) {

      // запрос списка чатов из redux
      case CHATS_GET:
         return {
            ...state,
            chats: defaultChats
         }

      // добавление нового чата в redux
      case CHATS_ADD:
         const id = state.chats.length

         return update(state, {
            chats: {
               $push: [{
                  id,
                  title: action.title,
                  messages: [{
                     id: nanoid(),
                     text: 'Создан новый чат!',
                     author: "geekMessenger"
                  }]
               }]
            }
         })

      // добавление нового сообщения в чат в redux
      case CHATS_MESSAGE_SEND:
         return update(state, {
            chats: {
               [action.message.currentChatId]: {
                  messages: {
                     $push: [{
                        id: action.message.id,
                        text: action.message.text,
                        author: action.message.author
                     }]
                  },
               },
            },
         })

      default:
         return state
   }
}