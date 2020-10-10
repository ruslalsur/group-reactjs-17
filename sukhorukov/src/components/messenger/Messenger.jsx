import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Container, Typography, Grid, Paper, Box, IconButton} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import {ChatsContainer} from '../../containers/ChatsContainer'
import {Messages} from '../messages'
import {Sender} from '../sender'
import {Header} from '../header'
import './messenger.sass'

export class Messenger extends React.Component {
   componentDidUpdate() {
      const blockForScroll = document.getElementById("scroll")
      blockForScroll.scrollTop = blockForScroll.scrollHeight
   }

   render() {
      const {
         author,
         chatId,
         chats,
         messages,
         sendMessage
      } = this.props

      return (
         <Grid container spacing={2} alignItems="stretch" className="container">
            <Grid item xs={3}>
               <Paper className="chats" elevation={3}>
                  <ChatsContainer />
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
                     <Sender author={author} sendMessage={sendMessage} />
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      )
   }
}
