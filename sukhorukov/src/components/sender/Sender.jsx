import React from 'react'
import Type from 'prop-types'
import {Button, TextField, Box, Fab, Typography, Tooltip, Paper} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import './sender.sass'

export class Sender extends React.Component {
    state = {
      author: 'Вася',
      text: ''
    }

    static propTypes = {
      parentMethod: Type.func.isRequired
    };

    inputEventHandler = (e) => {
      const stateKey = e.target.name
      this.setState({[stateKey]: e.target.value})
    }

    messageSendHandler = (e) => {
      const {parentMethod} = this.props

      if (e.keyCode===13 && e.ctrlKey || e.type === 'click') {
         parentMethod(this.state)
         this.setState({text: ''})
      }
    }

    render() {
      const {text, author} = this.state

      return (
         <>

            {/*поле для ввода сообщения*/}
            <Paper elevation={3}>
               <Box className="sender">
                  <Box className="sender-text">
                     <Tooltip title="текст сообщения" aria-label="Teкст">
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
                     </Tooltip>
                  </Box>

                  {/*кнопка отправки сообщения*/}
                  {text &&
                  <Box ml={2}>
                     <Fab
                        onClick={this.messageSendHandler}
                        variant="round"
                        color="primary"
                        size="small"
                        title="Отправить сообщения">
                           <CheckIcon />
                     </Fab>
                  </Box>}
               </Box>
            </Paper>
         </>
      )
    }
}
