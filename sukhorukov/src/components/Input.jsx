import React from 'react'
import Type from 'prop-types';

export default class Input extends React.Component {
    state = {
        bufferAuthor: 'Вася',
        bufferText: ''
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
        this.setState({bufferText: ''})
    }

    authorOnClickHandler = () => {
        const {bufferText: buffer} = this.state
        buffer ? this.setState({bufferAuthor: buffer, bufferText: ''}) : this.setState({bufferText: 'Введите другое имя ...'})
    }

    render() {   
        const {bufferText: buffer, bufferAuthor: author} = this.state

        // поле ввода размещено между двумя кнопками: кнопкой с именем отправителя и скрытой, при пустом поле, кнопкой отправки
        // обе они используют одно и тоже поле ввода как для замены пользователя, так и для отправки
        return (
            <>
                <span><button
                    onClick={this.authorOnClickHandler}
                    title="Введите справа другое имя и нажмите тут, чтобы изменить сообщателя">
                        {author}
                </button> </span>

                <span><input
                    onChange={this.onChangeHandler}
                    type="text"
                    name="bufferText"
                    value={buffer}
                    title="Введите текст сообщения или другое имя сообщателя и нажмите соответствующую кнопку справа или слева"
                    placeholder="Новое имя или сообщение ..." />
                </span> 

                {buffer && <span> <button onClick={this.sendOnClickHandler}>Сообщить</button></span>}
            </>
        )
    }
}