import React from 'react'

export default class Input extends React.Component {
    state = {
        inputBuffer: ''
    }

    onChangeHandler = (e) => this.setState({inputBuffer: e.target.value})
    onclickHandler = (e) => {
        this.props.okButtonHandler(this.state.inputBuffer)
        this.setState({inputBuffer: ''})
    }

    render() {        
        return (
            <div>
                <input onChange={this.onChangeHandler} type="text" name="text" value={this.state.inputBuffer} placeholder="Введите сообщение ..." />
                &nbsp;
                {this.state.inputBuffer && <span><button onClick={this.onclickHandler}>OK</button></span>}
            </div>
        )
    }
}