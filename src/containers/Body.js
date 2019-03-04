import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import ClockContainer from './Clock'
import MessageContainer from './Message'

const BodyContainer = ({ setText, text }) => (
    <div>
        <ClockContainer />
        Message: <input type="text" onBlur={setText} />
        <button>Update</button>
        <MessageContainer text={text} />
    </div>
)

const enhance = compose(
    withStateHandlers(
        { text: '' },
        {
            setText: () => event => ({ text: event.target.value })
        }
    )
)

export default enhance(BodyContainer)
