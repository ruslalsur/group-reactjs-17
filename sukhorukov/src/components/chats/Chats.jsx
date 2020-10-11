import React from 'react'
import {push} from 'connected-react-router'
import {Badge, Grid, IconButton, Paper} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChatIcon from '@material-ui/icons/Chat'
import AddIcon from '@material-ui/icons/Add'
import ClearIcon from '@material-ui/icons/Clear'
import './chats.sass'

export class Chats extends React.Component {
   choiseChatHandler = (id) => {
      const {redirect} = this.props
      redirect(id)
   }

   delChatHandler = (id) => {
      const {chats, redirect, delChat} = this.props

      if (chats.length > 1) {
         delChat(id)
         redirect(0)
      }
   }

   addChatHandler = () => {
      const {addChat} = this.props

      const title = prompt('Введите название нового чата: ', 'Новый чат')
      title && addChat(title)
   }

   render() {
      const {chatId, chats} = this.props

      const chatList = chats.map((item) => {
         return (
            <div className="listItem" key={item.id}>
               <div onClick={() => this.choiseChatHandler(item.id)} className="link">
                  <ListItem button selected={chatId == item.id ? true : false}>
                     <ListItemIcon>
                        <Badge color="error" badgeContent="1" invisible={item.readed}>
                           <ChatIcon />
                        </Badge>
                     </ListItemIcon>
                        <ListItemText>
                           {item.title}
                        </ListItemText>
                        <IconButton onClick={() => this.delChatHandler(item.id)} color="secondary">
                           <ClearIcon fontSize="small"/>
                        </IconButton>
                  </ListItem>
               </div>
            </div>
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
            </Grid>
         </Grid>
      )
   }
}
