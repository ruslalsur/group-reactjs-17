import React from 'react'
import {connect} from 'react-redux'
import {Profile} from '../components/profile'
import {profilesUpdateAction} from '../actions/profilesActions'

class ProfileContainerClass extends React.Component {
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
      profileUpdate: (name) => dispatch(profilesUpdateAction(name))
   }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)
