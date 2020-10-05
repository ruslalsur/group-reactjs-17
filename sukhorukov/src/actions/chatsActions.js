export const CHATS_GET = 'CHATS_GET'
export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'

export const chatsGetAction = () => ({
    type: CHATS_GET
})

export const chatsAddAction = (title) => ({
    type: CHATS_ADD,
    title
})

export const chatsMessageSendAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    message
})
