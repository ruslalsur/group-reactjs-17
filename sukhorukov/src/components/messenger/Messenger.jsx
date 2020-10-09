import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Container, Typography, Grid, Paper, Box, IconButton} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import {Chats} from '../chats'
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
         handleMessageSend,
         handleChatAdd,
         redirect,
         setChatAsReaded
      } = this.props

      return (
         <Container className="container">
            <Header author={author} />

            <Grid container spacing={2} alignItems="stretch" className="container">
               <Grid item xs={3}>
                  <Paper className="chats" elevation={3}>
                     <Chats
                        chatId={chatId}
                        chats={chats}
                        parentMethod={handleChatAdd}
                        redirect={redirect}
                        setChatAsReaded={setChatAsReaded} />
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
                        <Sender author={author} parentMethod={handleMessageSend} />
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Container>
      )
   }
}
