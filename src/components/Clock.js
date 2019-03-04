import React from 'react'
import './Clock.css'

const pad = value => (value < 10 ? '0' : '') + value

const Clock = ({ time }) => (
    <div className="Clock-clock">
        <span className="Clock-time">{time.getHours()}</span>
        <span className="Clock-separator">:</span>
        <span className="Clock-time">{pad(time.getMinutes())}</span>
        <span className="Clock-separator">:</span>
        <span className="Clock-time">{pad(time.getSeconds())}</span>
    </div>
)

export default Clock
