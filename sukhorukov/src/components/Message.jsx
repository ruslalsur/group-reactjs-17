import React from 'react'

export default class Message extends React.Component {
    render() {   
        return (
            <>
                <div><strong>{this.props.author}: </strong><span>{this.props.text}</span></div>
            </>
        )
    }
}