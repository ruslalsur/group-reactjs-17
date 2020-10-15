import update from 'react-addons-update'
import {PROFILES_GET_REQUEST, PROFILES_GET_SUCCESS, PROFILES_GET_FAILURE,
   PROFILES_UPDATE_REQUEST, PROFILES_UPDATE_SUCCESS, PROFILES_UPDATE_FAILURE,}
   from '../actions/profilesActions'

const initialState = {
   loading: false,
   error: false,
   profile: {}
}

export const profilesReducer = (state = initialState, action) => {
   switch (action.type) {

      // запрос профиля из redux
      case PROFILES_GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

      case PROFILES_GET_SUCCESS:
        return {
            ...state,
            loading: false,
            profile: action.payload
        }

      case PROFILES_GET_FAILURE:
         return {
             ...state,
             loading: false,
             error: true
         }

      // обновление профиля
      case PROFILES_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }

      case PROFILES_UPDATE_SUCCESS:
        return {
            ...state,
            loading: false,
            profile: action.payload
        }

      case PROFILES_UPDATE_FAILURE:
         return {
             ...state,
             loading: false,
             error: true
         }

      default:
         return state
   }
}
