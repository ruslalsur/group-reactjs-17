export const CHATS_LOAD_REQUEST = 'CHATS_LOAD_REQUEST'
export const CHATS_LOAD_SUCCESS = 'CHATS_LOAD_SUCCESS'
export const CHATS_LOAD_FAILURE = 'CHATS_LOAD_FAILURE'

export const CHATS_ADD = 'CHATS_ADD'
export const CHATS_DEL = 'CHATS_DEL'
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND'
export const SET_CHAT_READED_STATE = 'SET_CHAT_READED_STATE'

// получение данных с json-сервера с использованием 'redux-thunk' middleware
export const chatsLoadRequestAction = () => ({
    type: CHATS_LOAD_REQUEST,
})

export const chatsLoadSuccessAction = (data) => ({
    type: CHATS_LOAD_SUCCESS,
    payload: data,
})

export const chatsLoadFailureAction = (error) => ({
    type: CHATS_LOAD_FAILURE,
    payload: error,
})

export const chatsLoadAction = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsLoadRequestAction())
            const result = await fetch('http://localhost:3000/chats?_embed=messages')
            dispatch(chatsLoadSuccessAction(await result.json()))
        } catch(error) {
            dispatch(chatsLoadFailureAction(error))
        }
    }
}

// добавление нового чата
export const chatsAddAction = (id, title, readed) => ({
    type: CHATS_ADD,
    id,
    title,
    readed
})

// удаление старого чата
export const chatsDelAction = (id) => ({
    type: CHATS_DEL,
    id
})

// отправка сообщения
export const chatsMessageSendAction = (message) => ({
    type: CHATS_MESSAGE_SEND,
    message
})

// установка статуса прочитанности чата
export const setChatReadedState = (chatId, readed) => ({
    type:  SET_CHAT_READED_STATE,
    chatId,
    readed
})
