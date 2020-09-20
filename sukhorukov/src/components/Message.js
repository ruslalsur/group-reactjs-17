import React from 'react'

const Message = ({text, author}) => {
    return (
    <div>
        <p>{text} <b>({author})</b></p>
    </div>
    )
}

export default Message