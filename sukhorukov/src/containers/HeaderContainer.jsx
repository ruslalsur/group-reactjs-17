import React from 'react'
import {connect} from 'react-redux'
import {Header} from '../components/header'
import {profilesGetAction} from '../actions/profilesActions'

class HeaderContainerClass extends React.Component {
   componentDidMount() {
      const {author, getProfile} = this.props

      if (author === undefined) {
         getProfile()
      }
   }

   render() {
      const {author} = this.props
      return <Header author={author} />
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
      getProfile: () => dispatch(profilesGetAction())
   }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)
