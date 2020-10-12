import update from 'react-addons-update'
import {APP_NAME} from '../config/config.js'
import {
   CHATS_LOAD_REQUEST,
   CHATS_LOAD_SUCCESS,
   CHATS_LOAD_FAILURE,
   CHATS_ADD,
   CHATS_DEL,
   SET_CHAT_READED_STATE,
   CHATS_MESSAGE_SEND} from '../actions/chatsActions'

const initialState = {
   loading: false,
   error: false,
   chats: []
}

export const chatsReducer = (state = initialState, action) => {
   switch (action.type) {

      // получение списка чатов c json-сервера
      case CHATS_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

      case CHATS_LOAD_SUCCESS:
        return {
            ...state,
            loading: false,
            chats: action.payload
        }

      case CHATS_LOAD_FAILURE:
         return {
             ...state,
             loading: false,
             error: true
         }

      // переключение бейджика непрочитанности сообщений
      case SET_CHAT_READED_STATE:
         if (state.chats.length) {
            return update(state, {
               chats: {
                  [action.chatId]: {
                     readed: {$set: action.readed}
                  }
               }
            })
         }

         return state

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

         return update(state, {chats: {$set: chats}})

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
