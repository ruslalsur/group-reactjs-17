import {createAction} from 'redux-api-middleware'

export const PROFILES_GET_REQUEST = 'PROFILES_GET_REQUEST'
export const PROFILES_GET_SUCCESS = 'PROFILES_GET_SUCCESS'
export const PROFILES_GET_FAILURE = 'PROFILES_GET_FAILURE'

export const PROFILES_UPDATE_REQUEST = 'PROFILES_UPDATE_REQUEST'
export const PROFILES_UPDATE_SUCCESS = 'PROFILES_UPDATE_SUCCESS'
export const PROFILES_UPDATE_FAILURE = 'PROFILES_UPDATE_FAILURE'

// получение данных с json-сервера с использованием 'redux-api-middleware'
export const profilesGetAction = () => createAction({
    endpoint: 'http://localhost:3000/profiles/0',
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    types: [
        PROFILES_GET_REQUEST,
        PROFILES_GET_SUCCESS,
        PROFILES_GET_FAILURE
    ]
})

// обновление данных на json-сервере с использованием 'redux-api-middleware'
export const profilesUpdateAction = (name) => createAction({
    endpoint: 'http://localhost:3000/profiles/0',
    method: 'PATCH',
    body: JSON.stringify({name: name}),
    headers: {'Content-Type': 'application/json'},
    types: [
        PROFILES_UPDATE_REQUEST,
        PROFILES_UPDATE_SUCCESS,
        PROFILES_UPDATE_FAILURE
    ]
})
