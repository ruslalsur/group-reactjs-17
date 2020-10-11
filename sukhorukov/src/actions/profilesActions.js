import {createAction} from 'redux-api-middleware'
// export const PROFILES_GET = 'PROFILES_GET'
export const PROFILES_GET_REQUEST = 'PROFILES_GET_REQUEST'
export const PROFILES_GET_SUCCESS = 'PROFILES_GET_SUCCESS'
export const PROFILES_GET_FAILURE = 'PROFILES_GET_FAILURE'

export const PROFILES_UPDATE = 'PROFILES_UPDATE'

export const profilesGetAction = () => createAction({
    endpoint: 'http://localhost:3000/profiles',
    method: 'GET',
    // body: JSON.stringify({}) // при POST-запросе
    headers: {'Content-Type': 'application/json'},
    types: [
        PROFILES_GET_REQUEST,
        PROFILES_GET_SUCCESS,
        PROFILES_GET_FAILURE
    ]
})

// export const profileGetAction = () => ({
//     type: PROFILES_GET
// })

export const profilesUpdateAction = (name) => ({
    type: PROFILES_UPDATE,
    name
})
