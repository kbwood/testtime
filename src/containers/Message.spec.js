import React from 'react'
import { mount } from 'enzyme'
import Message from '../components/Message'
import MessageContainer from './Message'

const MESSAGE_DELAY = 3000

describe('(Container) Message', () => {
    beforeAll(() => {
        jest.useFakeTimers()
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    it('should display a new message for a specific period', () => {
        const container = mount(<MessageContainer text="" />)

        expect(container.find(Message).prop('visible')).toBe(false)

        container.setProps({ text: 'message' })
        container.update()

        expect(container.find(Message).prop('visible')).toBe(true)

        jest.advanceTimersByTime(MESSAGE_DELAY - 1)
        container.update()

        expect(container.find(Message).prop('visible')).toBe(true)

        jest.advanceTimersByTime(1)
        container.update()

        expect(container.find(Message).prop('visible')).toBe(false)
    })

    it('should display a new message for a short time', () => {
        const container = mount(<MessageContainer text="" />)

        expect(container.find(Message).prop('visible')).toBe(false)

        container.setProps({ text: 'message' })
        container.update()

        expect(container.find(Message).prop('visible')).toBe(true)

        jest.runAllTimers()
        container.update()

        expect(container.find(Message).prop('visible')).toBe(false)
    })
})
