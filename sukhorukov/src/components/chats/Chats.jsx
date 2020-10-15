import React from 'react'
import {push} from 'connected-react-router'
import {Typography, Badge, Grid, IconButton, Paper} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChatIcon from '@material-ui/icons/Chat'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import './chats.sass'

export class Chats extends React.Component {
   choiseChatHandler = (id) => {
      const {redirect} = this.props
      redirect(id)
   }

   delChatHandler = (id) => {
      const {chats, redirect, delChat} = this.props
      if (chats.length > 1 && id) {
         delChat(id)
      }
   }

   addChatHandler = () => {
      const {addChat} = this.props

      const title = prompt('Введите название нового чата: ', 'Новый чат')
      title && addChat(title)
   }

   render() {
      const {chatId, chats} = this.props

      const chatList = chats.map((chat) => {
         return (
            <ListItem
               onClick={() => this.choiseChatHandler(chat.id)}
               className="list-item"
               selected={chatId == chat.id ? true : false}
               key={chat.id}
               button>
               <ListItemIcon>
                  <Badge color="error" badgeContent="1" invisible={chat.readed}>
                     <ChatIcon color={chatId == chat.id ? 'secondary' : 'primary'} />
                  </Badge>
               </ListItemIcon>
               <ListItemText>
                  <Typography variant="body1"  color={chatId == chat.id ? 'secondary' : 'primary'}>
                     {chat.title}
                  </Typography>
               </ListItemText>
            </ListItem>
         )
      })

      return (
         <Grid container className="chats">
            <Grid item xs={12} className="chats-list">
               <List component="nav" aria-label="chats-list">
                  {chatList}
               </List>
            </Grid>
            <Grid item xs={12}>
               <IconButton
                  onClick={this.addChatHandler}
                  variant="round"
                  color="primary">
                     <AddIcon />
               </IconButton>
               <IconButton
                  onClick={() => this.delChatHandler(chatId)}
                  variant="round"
                  color="secondary">
                     <RemoveIcon />
               </IconButton>
            </Grid>
         </Grid>
      )
   }
}
