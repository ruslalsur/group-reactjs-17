import React from 'react'

const Button = ({children}) => {
    const handleClick = (event) => {
        console.log(event);    
    };

    return (
        <button onClick={handleClick}>{children}</button>
    );
};

export default Button