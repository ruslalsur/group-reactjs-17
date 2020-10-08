import {nanoid} from 'nanoid'
import {CHATS_MESSAGE_SEND, chatsMessageSendAction} from '../actions/chatsActions'
import {APP_NAME} from '../config/config.js'

export const appAnswerMiddleware = store => next => action => {
    if (action.type === CHATS_MESSAGE_SEND) {
      const {chatId, author} = action.message

      if (author !== APP_NAME) {
         setTimeout(() => {
            if (author !== APP_NAME) {
               store.dispatch(chatsMessageSendAction(
                  {
                     id: nanoid(),
                     chatId,
                     text: `Спасибо тебе, ${author}, за информацию`,
                     author: APP_NAME
                  }
               ))
            }
         }, 4000)
      }
    }

    return next(action)
}
