import React from 'react'
import Type from 'prop-types'
import {Button, TextField, Box, Fab} from '@material-ui/core'
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded'

export class Sender extends React.Component {
    state = {
      author: 'Сообщатель',
      text: ''
    }

    static propTypes = {
      accessToAppState: Type.func.isRequired
    };

    inputEventHandler = (e) => {
      const stateKey = e.target.name
      this.setState({[stateKey]: e.target.value})
    }

    messageSendHandler = (e) => {
      if (e.keyCode===13 && e.ctrlKey || e.type === 'click') {
         this.props.accessToAppState(this.state)
         this.setState({text: ''})
      }
    }

    authorChangeHandler = () => {
        const {text} = this.state
        text && this.setState({author: text, text: ''}) 
    }

    render() {   
      const {text, author} = this.state
           
      return (
         <>
            <Box mr={3}>
               <Button
                  onClick={this.authorChangeHandler}
                  color="primary"
                  title="Это нажимается после ввода имени сообщателя">
                     {author}:
               </Button>
            </Box>

            <Box mr={3}>
               <TextField
                  onChange={this.inputEventHandler}
                  onKeyDown={this.messageSendHandler}
                  id="text"
                  name="text"
                  value={text}
                  title="Имя сообщателя или текст сообщения"
                  label="сообщатель или сообщение"
                  multiline
                  autoFocus />
            </Box> 
            
            {text &&
            <Box>
               <Fab 
                  onClick={this.messageSendHandler}
                  variant="round"
                  color="primary"
                  size="small"
                  title="Отправить сообщения">
                     <MailOutlineRoundedIcon />
               </Fab>
            </Box>}
         </>
      )
    }
}