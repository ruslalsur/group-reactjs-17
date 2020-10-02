import React from 'react'
import Type from 'prop-types'
import {Button, TextField, Box, Fab, Typography, Tooltip} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import './sender.sass'

export class Sender extends React.Component {
    state = {
      author: 'Вася',
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

   //  authorChangeHandler = () => {
   //      const {text} = this.state
   //      text && this.setState({author: text, text: ''}) 
   //  }

    render() {   
      const {text, author} = this.state
           
      return (
         <>
            <Tooltip title="текст сообщения" aria-label="Teкст">
               <Box className="text-input" ml={2} mr={2}>
                  <TextField
                     onChange={this.inputEventHandler}
                     onKeyDown={this.messageSendHandler}
                     id="text"
                     name="text"
                     value={text}
                     label={author}
                     fullWidth
                     rows={1}
                     rowsMax={2}
                     size="small"
                     variant="outlined"
                     multiline
                     autoFocus />
               </Box> 
            </Tooltip>
            
            {text &&
            <Box mr={2}>
               <Fab 
                  onClick={this.messageSendHandler}
                  variant="round"
                  color="primary"
                  size="small"
                  title="Отправить сообщения">
                     <CheckIcon />
               </Fab>
            </Box>}
         </>
      )
    }
}