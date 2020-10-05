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
   // state = {
   //    chats,
   //    robotCanAnswer: true
   // }

   componentDidUpdate() {
      // const {chats} = this.state
      // const {match} = this.props

      // const author = chats.list[match.params.id].messages[chats.list[match.params.id].messages.length - 1].author
      // const {robotCanAnswer} = this.state

      // if (author !== 'robot' && robotCanAnswer) {
      //    setTimeout(() => {
      //       if (author !== 'robot') {
      //          this.addMessage({author: 'robot', text: `Спасибо тебе, ${author}, за информацию`})
      //          this.setState({robotCanAnswer: true})
      //       }
      //    }, 3000)

      //    this.setState({robotCanAnswer: false})
      // }

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
         <div className="layout">

            {/* заголовок (header)*/}
            <Paper className="header"  elevation={3}>
               <Box className="header-app-name">geekMessenger</Box>
               <Box>
                  <Link to={`/profile`}>
                     <IconButton edge="start" color="inherit" aria-label="profile">
                        <PersonIcon color="action" />
                     </IconButton>
                     <Typography variant="body1">{author}</Typography>
                  </Link>
               </Box>
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
