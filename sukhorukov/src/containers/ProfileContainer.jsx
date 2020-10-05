import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {Profile} from '../components/profile'
import {profileGetAction, profileChangeAction} from '../actions/profileActions'

class ProfileContainerClass extends React.Component {
   componentDidMount() {
      this.props.getProfile()
   }

   handleProfileChange = (title) => {
      const {profileChange} = this.props
      profileChange(title)
   }

   render() {
      const {id, name, handleProfileChange} = this.props

      return (
         <Profile id={id} name={name} handleProfileChange={this.handleProfileChange}/>
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {profile} = state.profileReducer

   return {
      id: profile.id,
      name: profile.name
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profileGetAction()),
      profileChange: (name) => dispatch(profileChangeAction(name))
   }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)
