import React from 'react'
import {Messages} from '../Messages'
import {Input} from '../Input'

export class App extends React.Component {
    state = {
        messages: [
            {author: 'robot', text: 'Можно ввести имя сообщателя и изменить его кнопкой слева'},
            {author: 'robot', text: 'Можно ввести сообщение и отправить его кнопкой справа'}
        ]
    }

    componentDidUpdate() {
        const {author, text} = this.state.messages[this.state.messages.length - 1]

        if (author != 'robot') {
            setTimeout(() => this.setState(
                {messages: 
                    [
                        ...this.state.messages, 
                        {
                            author: 'robot',
                            text: `Спасибо тебе, ${author}, за твое сообщение про "${text}"`
                        }
                    ]
                }
            ), 1000)
        }
    }

    sendHandler = (input) => {
        const {inputText: text, inputAuthor: author} = input
        this.setState({messages: [...this.state.messages, {author: author, text: text}]})
    }

    render() {
        const {messages} = this.state
        
        return (
            <>
                <Messages messages={messages} />
                <hr/>
                <Input sendHandler={this.sendHandler} />
            </>
        )
    }
}