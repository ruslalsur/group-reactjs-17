import React from 'react'
import {Link} from 'react-router-dom'
import {Paper, Box, IconButton, Button} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

import './header.sass'

export class Header extends React.Component {
   render() {
      const {author, isLoading, isError, getProfile} = this.props

      let authorPlaceHolder  =
      <Link className="header-profile" to={'/profile'}>
         <IconButton edge="start" color="inherit" aria-label="profile">
            <PersonIcon color="action" />
         </IconButton>
         <Box>
            {author}
         </Box>
      </Link>

      if (isLoading) {
         authorPlaceHolder = 'Подождите ...'
      } else if (isError) {
         authorPlaceHolder = <Button variant="contained" color="primary" size="small" onClick={getProfile}>Повторить</Button>
      }

      return (
         <>
            {/* заголовок (header)*/}
            <Paper className="header" elevation={3}>
               <Link className="header-app-name" to={'/'}>
                  geekMessenger
               </Link>
               {authorPlaceHolder}
            </Paper>
         </>
      )
   }
}
