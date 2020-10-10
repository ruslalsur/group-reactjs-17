import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {CHATS_GET, CHATS_ADD, CHATS_DEL, SET_CHAT_READED_STATE, CHATS_MESSAGE_SEND} from '../actions/chatsActions'
import {defaultChatsData} from '../helpers/defaultChatsData'
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
            chats: defaultChatsData
         }

      // добавление нового чата
      case CHATS_ADD:
         return update(state, {
            chats: {
               $push: [{
                  id: action.id,
                  title: action.title,
                  readed: true,
                  messages: []
               }]
            }
         })

      // удаление чата
      case CHATS_DEL:
         const {chats} = state

         chats.splice(action.id, 1)
         chats.filter((chat, index) => chat.id = index)

         return {chats}

      // переключение бейджика непрочитанности сообщений
      case SET_CHAT_READED_STATE:
         return update(state, {
            chats: {
               [action.chatId]: {
                  readed: {$set: action.readed}
               }
            }
         })

      // добавление нового сообщения в чат
      case CHATS_MESSAGE_SEND:
         return update(state, {
            chats: {
               [action.message.chatId]: {
                  messages: {
                     $push: [{
                        id: action.message.id,
                        text: action.message.text,
                        author: action.message.author
                     }]
                  }
               }
            }
         })

      default:
         return state
   }
}
