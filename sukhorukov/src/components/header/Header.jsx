import React from 'react'
import {Link} from 'react-router-dom'
import {Paper, Box, IconButton} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

import './header.sass'

export class Header extends React.Component {
   render() {
      const {name} = this.props

      return (
         <>
            {/* заголовок (header)*/}
            <Paper className="header" elevation={3}>
               <Link className="header-app-name" to={'/'}>
                  geekMessenger
               </Link>

               <Link className="header-profile" to={'/profile'}>
                  <IconButton edge="start" color="inherit" aria-label="profile">
                     <PersonIcon color="action" />
                  </IconButton>
                  <Box>{name}</Box>
               </Link>
            </Paper>
         </>
      )
   }
}
