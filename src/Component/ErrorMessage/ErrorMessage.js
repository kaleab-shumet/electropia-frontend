import React from 'react'
import './errormessage.css'

function ErrorMessage() {
    return (
        <div className='errormessage'>
            <h3>Something goes wrong! Please reload the page</h3>
            <p>Click to reload <a href='/'>Reload</a></p>
        </div>
    )
}

export default ErrorMessage
