import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {Profile} from '../components/profile'
import {profilesGetAction, profilesUpdateAction} from '../actions/profilesActions'

class ProfileContainerClass extends React.Component {
   componentDidMount() {
      const {author, getProfile} = this.props

      if (author) {
         getProfile()
      }
   }

   handleProfileChange = (name) => {
      const {profileUpdate} = this.props
      profileUpdate(name)
   }

   render() {
      const {author, profileUpdate} = this.props

      return (
         <Profile author={author} profileUpdate={profileUpdate}/>
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {profile} = state.profilesReducer
   return {
      author: profile.name
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profilesGetAction()),
      profileUpdate: (name) => dispatch(profilesUpdateAction(name))
   }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)
