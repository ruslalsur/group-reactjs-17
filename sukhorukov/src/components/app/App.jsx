import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Avatar, Typography, Grid, Paper, Box, IconButton} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import chats from '../chats/chatsSampleData.js'
import {Chats} from '../chats'
import {Messages} from '../messages'
import {Sender} from '../sender'
import './app.sass'

export class App extends React.Component {
   state = {
      chats,
      robotCanAnswer: true
   }

   componentDidUpdate() {
      const {chats} = this.state
      const {match} = this.props

      const author = chats.list[match.params.id].messages[chats.list[match.params.id].messages.length - 1].author
      const {robotCanAnswer} = this.state

      if (author !== 'robot' && robotCanAnswer) {
         setTimeout(() => {
            if (author !== 'robot') {
               this.addMessage({author: 'robot', text: `Спасибо тебе, ${author}, за информацию`})
               this.setState({robotCanAnswer: true})
            }
         }, 3000)

         this.setState({robotCanAnswer: false})
      }

      const blockToScroll = document.getElementById("scroll")
      blockToScroll.scrollTop = blockToScroll.scrollHeight
   }

   addMessage = (message) => {
      const {chats} = this.state
      const {match} = this.props
      message.id = nanoid()
      chats.list[match.params.id].messages.push(message)
      this.setState({chats})
   }

   render() {
      const {chats} = this.state
      const {match} = this.props

      return (
         <div className="layout">  

            {/* заголовок */}
            <Paper className="header"  elevation={3}>
               <Box className="header-app-name">geekMessenger</Box>
               {/* <Box>
                  <Typography variant="body1">
                     <Link to={`/profile/${chats.list[chats.current].messages[0].author}`}>
                        <IconButton edge="start" color="inherit" aria-label="profile">
                           <PersonIcon color="action" />   
                        </IconButton>
                     </Link>
                  </Typography>
               </Box> */}
            </Paper>
         
            <Grid container alignItems="stretch" spacing={2}>
               
               {/* чаты */}
               <Grid item xs={3}>
                  <Chats chats={chats}/>
               </Grid>

               {/* сообщения */}
               <Grid item xs={9}>
                  <Paper id="scroll" className="messages" elevation={3}>
                     <Messages messages={chats.list[match.params.id].messages} />
                  </Paper>
                  
                  {/* посылатель */}
                  <Paper className="sender" elevation={3}>
                     <Sender accessToAppState={this.addMessage} />
                  </Paper>
               </Grid>
            </Grid> 
         </div>
      )
   }
}