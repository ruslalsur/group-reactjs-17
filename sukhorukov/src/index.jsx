import React from 'react'
import ReactDom from 'react-dom'
import App from 'components/App'

// согласно логике fb, файл, в котором присутствует код jsx должен иметь расширение .jsx
// хоть я от этого и не в восторге, но вот пришлось переименовать и этот ...
ReactDom.render(
    <>
        <App />
    </>, 
    document.getElementById('root')
)