import {nanoid} from 'nanoid'
import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chatsActions'
import {APP_NAME} from '../config/config.js'

export const appAnswerMiddleware = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND) {
      const {chatId, author} = action.message

      const messagesLengthSync = store.getState().chatsReducer.chats[chatId].messages.length
      if (author !== APP_NAME) {
         setTimeout(() => {
            const messagesLengthAsync = store.getState().chatsReducer.chats[chatId].messages.length - 1
            if (messagesLengthSync !== messagesLengthAsync)  return false

            store.dispatch(chatsMessageSendAction(
               {
                  id: nanoid(),
                  chatId,
                  text: `Спасибо тебе, ${author}, за информацию`,
                  author: APP_NAME
               }
            ))
         }, 3000)
      }
    }

    return next(action)
}
