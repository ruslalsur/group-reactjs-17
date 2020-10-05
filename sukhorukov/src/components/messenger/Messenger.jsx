import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Typography, Grid, Paper, Box, IconButton} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import {Chats} from '../chats'
import {Messages} from '../messages'
import {Sender} from '../sender'
import './messenger.sass'

export class Messenger extends React.Component {
   componentDidUpdate() {
      const blockForScroll = document.getElementById("scroll")
      blockForScroll.scrollTop = blockForScroll.scrollHeight
   }

   render() {
      const {
         currentChatId,
         author,
         chats,
         messages,
         handleMessageSend,
         handleChatAdd
      } = this.props

      const chatTitle = chats[currentChatId] ? chats[currentChatId].title : ''

      return (
         <div className="layout">

            {/* заголовок (header)*/}
            <Paper className="header"  elevation={3}>
               <Box className="header-app-name">geekMessenger</Box>
               <Box className="header-chat-name">
                  {chatTitle}
               </Box>
               <Link className="header-profile" to={`/profile`}>
                  <IconButton edge="start" color="inherit" aria-label="profile">
                     <PersonIcon color="action" />
                  </IconButton>
                  <Box>{author}</Box>
               </Link>
            </Paper>

            <Grid container alignItems="stretch" spacing={2}>

               {/* список чатов */}
               <Grid item xs={3}>
                  <Chats
                     chats={chats}
                     currentChatId={currentChatId}
                     parentMethod={handleChatAdd} />
               </Grid>

               {/* список сообщений чата*/}
               <Grid item xs={9}>
                  <Paper id="scroll" className="messages" elevation={3}>
                     <Messages messages={messages} />
                  </Paper>

                  {/* форма отправки сообщений */}
                  <Sender parentMethod={handleMessageSend} />
               </Grid>
            </Grid>
         </div>
      )
   }
}
