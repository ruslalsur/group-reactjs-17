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
         currentChatId,
         author,
         chats,
         messages,
         handleMessageSend,
         handleChatAdd
      } = this.props

      return (
         <Container className="container"  maxWidth="md">
            {/* заголовок (header)*/}
            <Header author={author} />

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
         </Container>
      )
   }
}
