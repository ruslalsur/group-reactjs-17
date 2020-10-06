import React from 'react'
import Type from 'prop-types'
import {IconButton, TextField, Box, Typography} from '@material-ui/core'
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
            <Box className="sender">
               <Box className="sender-text">
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
                     multiline
                     autoFocus />
               </Box>

               {/*кнопка отправки сообщения*/}
               {text &&
               <Box ml={1}>
                  <IconButton
                     onClick={this.messageSendHandler}
                     color="primary"
                     size="medium"
                     title="Отправить сообщения"
                     aria-label="send">
                        <CheckIcon />
                  </IconButton>
               </Box>}
            </Box>
         </>
      )
    }
}
