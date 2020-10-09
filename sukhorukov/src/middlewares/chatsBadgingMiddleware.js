import {CHATS_MESSAGE_SEND, setChatAsReaded, chatsMessageSendAction} from '../actions/chatsActions'
import {APP_NAME} from '../config/config.js'

export const chatsBadgingMiddleware = store => next => action => {
    // перетащить логику из редьюсера не успел, поздно заметил,
    // что в задании она должна быть именно в посреднике ()она пока тут см. chatsReduser)

    return next(action)
}
