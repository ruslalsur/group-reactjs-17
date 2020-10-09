import {CHATS_UNREADED, CHATS_READED, chatUnreaded, chatReaded} from '../actions/chatsActions'

export const chatsBadgingMiddleware = store => next => action => {
    // if (action.type === CHATS_READED) {
      // console.log(store.getState());
      // }

    return next(action)
}
