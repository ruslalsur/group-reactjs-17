import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {PROFILE_GET} from '../actions/profileActions'
import {defaultProfile} from '../helpers/defaultProfileData'

const initialState = {
   profile: {}
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {

      // запрос профиля из redux
      case PROFILE_GET:
         return {
            ...state,
            profile: defaultProfile
         }

      default:
         return state
   }
}
