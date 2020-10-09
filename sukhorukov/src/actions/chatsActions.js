export const CHATS_GET = 'CHATS_GET'
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const SET_CHAT_AS_READED = ' SET_CHAT_AS_READED'

export const chatsGetAction = () => ({
    type: CHATS_GET
})

export const chatsAddAction = (id, title) => ({
    type: CHATS_ADD,
    id,
    title
})

export const chatsMessageSendAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    message
})

export const setChatAsReaded = (id) => ({
    type:  SET_CHAT_AS_READED,
    id
})
