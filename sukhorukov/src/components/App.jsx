import React from 'react'
export default class App extends React.Component {
    state = {
        messages: [
            {author: 'robot', text: 'Я робот ...'},
            {author: 'Вася', text: 'Я Вася ...'}
        ]
    }

    render() {
        const {messages} = this.state
        const Messages = messages.map((message, index) => <h4 key={index}>{message.text}</h4>)
        
        return (
            <>
                <div>App component</div>
                {Messages}
            </>
        )
    }
}