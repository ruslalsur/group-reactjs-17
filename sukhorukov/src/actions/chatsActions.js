export const CHATS_GET = 'CHATS_GET'
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_DEL = 'CHATS_DEL'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const SET_CHAT_READED_STATE = 'SET_CHAT_READED_STATE'

export const chatsGetAction = () => ({
    type: CHATS_GET
})

export const chatsAddAction = (id, title, readed) => ({
    type: CHATS_ADD,
    id,
    title,
    readed
})

export const chatsDelAction = (id) => ({
    type: CHATS_DEL,
    id
})

export const chatsMessageSendAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    message
})

export const setChatReadedState = (chatId, readed) => ({
    type:  SET_CHAT_READED_STATE,
    chatId,
    readed
})
