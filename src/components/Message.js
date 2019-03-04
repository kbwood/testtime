import React from 'react'
import './Message.css'

const Message = ({ text, visible }) => (
    <div className={`Message-message${visible ? ' Message-visible' : ''}`}>
        <p>Your message here: {text}</p>
    </div>
)

export default Message
