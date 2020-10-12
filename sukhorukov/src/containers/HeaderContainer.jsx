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
      const {author, isLoading, isError, getProfile} = this.props
      return <Header author={author} isLoading={isLoading} isError={isError} getProfile={getProfile} />
   }
}

function mapStateToProps(state, ownProps) {
   const {profile, loading, error} = state.profilesReducer

   return {
      author: profile.name,
      isLoading: loading,
      isError: error
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getProfile: () => dispatch(profilesGetAction())
   }
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerClass)
