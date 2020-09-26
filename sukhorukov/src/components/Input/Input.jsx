import React from 'react'
import Type from 'prop-types';

export class Input extends React.Component {
    state = {
        inputAuthor: 'Сообщатель',
        inputText: 'Сообщение'
    }

    static propTypes = {
        sendHandler: Type.func.isRequired
    };

    onChangeHandler = (e) => {
        const stateKey = e.target.name
        this.setState({[stateKey]: e.target.value})
    }

    sendOnClickHandler = () => {
        this.props.sendHandler(this.state)
        this.setState({inputText: ''})
    }

    authorOnClickHandler = () => {
        const {inputText: input} = this.state
        input && this.setState({inputAuthor: input, inputText: ''}) 
    }

    render() {   
        const {inputText: input, inputAuthor: author} = this.state

        return (
            <>
                <span><button
                    onClick={this.authorOnClickHandler}
                    title="Нажать после ввода имени сообщателя">
                        {author}
                </button> </span>

                <span><input
                    onChange={this.onChangeHandler}
                    type="text"
                    name="inputText"
                    value={input}
                    title="Введите имя сообщателя или текст сообщения и нажмите соответствующую кнопку"
                    placeholder="Сообщатель или сообщение ..." />
                </span> 

                {input && <span> <button onClick={this.sendOnClickHandler}>Сообщить</button></span>}
            </>
        )
    }
}