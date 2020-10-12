import {CHATS_MESSAGE_SEND, setChatReadedState} from '../actions/chatsActions'

export const chatsBadgingMiddleware = store => next => action => {
   switch (action.type) {
      case CHATS_MESSAGE_SEND:
         const {chatId} = action.message

         if (chatId !== store.getState().router.location.pathname.split('/').pop())
            store.dispatch(setChatReadedState(chatId, false))
            
         break

      case '@@router/LOCATION_CHANGE':
         if (action.payload.location.pathname.indexOf('chat') > 0) {
            const chatId = action.payload.location.pathname.split('/').pop()
            store.dispatch(setChatReadedState(chatId, true))
         }
   }

    return next(action)
}
