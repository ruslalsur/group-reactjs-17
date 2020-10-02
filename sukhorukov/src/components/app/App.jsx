import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Typography, Grid, Paper, Box, IconButton} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
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

   addChat = (title) => {
      const {chats} = this.state
      const {match} = this.props
      const newId = chats.list.length
      const newChat = {
         id: newId,
         title: title,
         messages: [
            {
               id: 0,
               author: "robot",
               text: `${chats.currentAuthor}, Вы создали новый чат с названием "${title}"`
           }
         ]
     }
      chats.list.push(newChat)
      this.setState({chats})
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
               <Box>
                  <Typography variant="body1">
                     <Link to={`/profile/${chats.currentAuthor}`}>
                        <IconButton edge="start" color="inherit" aria-label="profile">
                           <PersonIcon color="action" />   
                        </IconButton>
                     </Link>
                  </Typography>
               </Box>
            </Paper>
         
            <Grid container alignItems="stretch" spacing={2}>
               
               {/* чаты */}
               <Grid item xs={3}>
                  <Chats 
                     chats={chats}
                     currentChatId={match.params.id}
                     addChatDisable={match.path === "/" ? true : false}
                     accessToAppState={(title) => this.addChat(title)}/>
               </Grid>

               {/* сообщения */}
               <Grid item xs={9}>
                  <Paper id="scroll" className="messages" elevation={3}>
                     {match.params.id 
                     ? <Messages messages={chats.list[match.params.id].messages} /> 
                     : <Alert variant="filled" severity="info">Выберите чат слева</Alert>} 
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