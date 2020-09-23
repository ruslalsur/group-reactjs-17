import React from 'react'
import Messages from './Messages'
import Input from './Input'

export default class App extends React.Component {
    state = {
        messages: [
            {author: 'robot', text: 'Я робот ...'},
            {author: 'Вася', text: 'Я Вася ...'}
        ]
    }

    okButtonHandler = (inputBuffer) => {
        this.setState({messages: this.state.messages.concat({author: 'Вася', text: inputBuffer})})
    }

    componentDidUpdate() {
        const {author, text} = this.state.messages[this.state.messages.length - 1]
        
        if (author != 'robot') {
            setTimeout(
                () => this.setState({messages: this.state.messages
                    .concat({
                        author: 'robot',
                        text: `Спасибо тебе ${author} за твое сообщение про " ... ${text} ..."`
                    })}), 1000)
        }
    }

    render() {
        const {messages} = this.state
        
        return (
            <>
                <Messages messages={messages} />
                <Input okButtonHandler={this.okButtonHandler}/>
            </>
        )
    }
}