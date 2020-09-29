import React from 'react'
import Type from 'prop-types'
import {Avatar, Button, TextField, Box} from '@material-ui/core'

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
                  variant="outlined"
                  title="Кнопка нажимается после ввода имени сообщателя">
                     {author}
               </Button>
               </Box>

            <Box mr={3}>
               <TextField
                  onChange={this.inputEventHandler}
                  onKeyDown={this.messageSendHandler}
                  variant="outlined"
                  id="text"
                  name="text"
                  value={text}
                  title="Имя сообщателя или текст сообщения"
                  label="сообщатель или сообщение" />
            </Box> 
            
            {text &&
               <Box>
                  <Button 
                     onClick={this.messageSendHandler}
                     variant="contained"
                     color="primary"
                     size="large"
                     title="Отправить сообщения">
                        Сообщить
                  </Button>
               </Box>}
         </>
      )
    }
}