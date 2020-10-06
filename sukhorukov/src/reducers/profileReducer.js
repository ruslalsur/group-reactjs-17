import update from 'react-addons-update'
import {nanoid} from 'nanoid'
import {PROFILE_GET, PROFILE_CHANGE} from '../actions/profileActions'
import {profile} from '../helpers/defaultProfileData'

const initialState = {
   profile: {}
}

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {

      // запрос профиля из redux
      case PROFILE_GET:
         return {
            ...state,
            profile
         }

      case PROFILE_CHANGE:
         return update(state, {profile: {name: {$set: action.name}}})

      default:
         return state
   }
}
