import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Container, Typography, Grid, Paper, Box, Button, IconButton,
   Backdrop, CircularProgress} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import {Chats} from '../chats'
import {Messages} from '../messages'
import {Sender} from '../sender'
import {Header} from '../header'
import './messenger.sass'

export class Messenger extends React.Component {
   componentDidUpdate() {
      const blockForScroll = document.getElementById("scroll")
      if (blockForScroll) {blockForScroll.scrollTop = blockForScroll.scrollHeight}
   }

   render() {
      const {
         getChats, isLoading, isError, chatId, chats, addChat, delChat,
         redirect, messages, sendMessage } = this.props

         if (isLoading) {
            return (
               <Backdrop open={isLoading} invisible >
                  <CircularProgress size={25} />
                  <span>
                     <Box ml={2}>
                        <Typography variant="h5" color="primary">Подождите ...</Typography>
                     </Box>
                  </span>
               </Backdrop>
            )
         } else if (isError) {
            return (
               <Typography variant="h5" color="primary">
                  Проблемы на сервере, повторите запрос позднее (кнопка в заголовке) ...
               </Typography>
            )
         } else {
            return (
               <Grid container spacing={2} alignItems="stretch" className="container">
                  <Grid item xs={3}>
                     <Paper className="chats" elevation={3}>
                        <Chats
                           chats={chats}
                           chatId={chatId}
                           addChat={addChat}
                           delChat={delChat}
                           redirect={redirect} />
                     </Paper>
                  </Grid>
                  <Grid item xs={9}>
                     <Grid container spacing={2} className="messages-container">
                        <Grid item xs={12}>
                           <Paper id="scroll" className="messages" elevation={3}>
                              <Messages messages={messages} />
                           </Paper>
                        </Grid>
                     </Grid>
                     <Grid container spacing={2} className="message-sender">
                        <Grid item xs={12}>
                           <Sender sendMessage={sendMessage} />
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            )
         }
      }
}
