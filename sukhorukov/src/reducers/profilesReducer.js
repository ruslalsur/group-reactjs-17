import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {PROFILES_GET_REQUEST, PROFILES_GET_SUCCESS, PROFILES_GET_FAILURE,
   PROFILES_UPDATE} from '../actions/profilesActions'
// import {profile} from '../helpers/defaultProfileData'

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
            profile: action.payload[0]
        }

      case PROFILES_GET_FAILURE:
         return {
             ...state,
             loading: false,
             error: true
         }

      // обновление профиля
      case PROFILES_UPDATE:
         return update(state, {profile: {name: {$set: action.name}}})

      default:
         return state
   }
}
