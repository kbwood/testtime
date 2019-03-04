import React from 'react'
import { mount } from 'enzyme'
import ClockContainer from './Clock'
import MessageContainer from './Message'
import Body from './Body'

describe('(Container) Body', () => {
    it('should render the components', () => {
        const body = mount(<Body />)

        expect(body.find(ClockContainer)).toHaveLength(1)
        expect(body.find(MessageContainer)).toHaveLength(1)
    })

    it('should update the message text', () => {
        const body = mount(<Body />)
        const value = 'new value'
        body.find('input').simulate('blur', { target: { value } })

        expect(body.find(MessageContainer).prop('text')).toBe(value)
    })
})
