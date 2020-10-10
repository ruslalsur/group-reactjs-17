import React from 'react'
import {connect} from 'react-redux'
import {Header} from '../components/header'
import {profileGetAction} from '../actions/profileActions'

class HeaderContainerClass extends React.Component {
   componentDidMount() {
      const {name} = this.props

      if (name === undefined) {
         this.props.getProfile()
      }
   }

   render() {
      const {name} = this.props

      return (
         <Header name={name} />
      )
   }
}

function mapStateToProps(state, ownProps) {
   const {profile} = state.profileReducer

   return {
      name: profile.name
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profileGetAction()),
   }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)
