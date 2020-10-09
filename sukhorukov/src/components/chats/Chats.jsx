import React from 'react'
import {Link} from 'react-router-dom'
import {Badge, Grid, IconButton, Paper} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined'
import AddIcon from '@material-ui/icons/Add'
import {push} from 'connected-react-router'
import './chats.sass'

export class Chats extends React.Component {
   choiseChatHandler = (id) => {
      const {redirect, setChatAsReaded} = this.props

      setChatAsReaded(id)
      redirect(id)
   }

   addChatHandler = () => {
      const {parentMethod} = this.props

      const title = prompt('Введите название нового чата: ', 'Новый чат')
      title && parentMethod(title)
   }

   render() {
      const {chatId, chats} = this.props
      console.log(this.props);

      const chatList = chats.map((item) => {
         return (
            <div onClick={() => this.choiseChatHandler(item.id)} key={item.id} className="link">
               <ListItem key={item.id} button selected={chatId == item.id ? true : false}>
                  <ListItemIcon>
                     <ForumOutlinedIcon />
                  </ListItemIcon>
                   <Badge color="error" badgeContent="new " invisible={chatId == item.id ? true : item.readed}>
                     <ListItemText>
                        {item.title}
                     </ListItemText>
                  </Badge>
               </ListItem>
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
