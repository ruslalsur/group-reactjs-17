import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {
   CHATS_GET, CHATS_ADD,
   SET_CHAT_AS_READED,
   CHATS_MESSAGE_SEND} from '../actions/chatsActions'
import {chats} from '../helpers/defaultChatsData'
import {APP_NAME} from '../config/config.js'

const initialState = {
   chats: []
}

export const chatsReducer = (state = initialState, action) => {
   switch (action.type) {

      // получение списка чатов по-умолчанию
      case CHATS_GET:
         return {
            ...state,
            chats
         }

      // добавление нового чата
      case CHATS_ADD:
         return update(state, {
            chats: {
               $push: [{
                  id: action.id,
                  title: action.title,
                  readed: true,
                  messages: [{
                     id: nanoid(),
                     text: `${APP_NAME}: Создан новый чат: "${action.title}"`,
                     author: APP_NAME
                  }]
               }]
            }
         })

      // переключение бейджика непрочитанности сообщений
      case SET_CHAT_AS_READED:
         // const {readed} = state.chats[action.id]

         return update(state, {
            chats: {
               [action.id]: {
                  readed: {$set: true}
               }
            }
         })

      // добавление нового сообщения в чат
      case CHATS_MESSAGE_SEND:
         const status = action.message.author === APP_NAME ? false : true
         
         return update(state, {
            chats: {
               [action.message.chatId]: {
                  readed: {$set: status},
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
