import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {CHATS_GET, CHATS_ADD, CHATS_MESSAGE_SEND} from '../actions/chatsActions'
import {chats} from '../helpers/defaultChatsData'
import {APP_NAME} from '../config/config.js'

const initialState = {
   chats: []
}

export const chatsReducer = (state = initialState, action) => {
   switch (action.type) {

      // запрос списка чатов
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
                  messages: [{
                     id: nanoid(),
                     text: `${APP_NAME}: Создан новый чат: "${action.title}"`,
                     author: APP_NAME
                  }]
               }]
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
                  },
               },
            },
         })

      default:
         return state
   }
}
