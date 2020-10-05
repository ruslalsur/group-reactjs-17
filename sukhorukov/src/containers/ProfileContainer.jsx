import React from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {Profile} from '../components/profile'
import {profileGetAction} from '../actions/profileActions'

class ProfileContainerClass extends React.Component {
   componentDidMount() {
      this.props.getProfile()
   }

   render() {
      const {id, name} = this.props

      return (
         <Profile id={id} name={name} />
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {profile} = state.profileReducer
   console.log(profile);

   return {
      id: profile.id,
      name: profile.name
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profileGetAction())
   }
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass)
