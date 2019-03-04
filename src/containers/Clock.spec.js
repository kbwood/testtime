import React from 'react'
import { mount } from 'enzyme'
import Clock from '../components/Clock'
import { getDateTime } from '../utils/DateTime'
import ClockContainer from './Clock'

jest.mock('../utils/DateTime')

const TIMER_DELAY = 1000

describe('(Container) Clock', () => {
    let currentTime

    beforeAll(() => {
        getDateTime.mockImplementation(() => currentTime)
        jest.useFakeTimers()
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    beforeEach(() => {
        currentTime = new Date(2019, 1-1, 2, 3, 4, 5)
    })

    it('should update the clock as time passes', () => {
        const container = mount(<ClockContainer />)
        const clock = container.find(Clock)

        expect(clock.prop('time')).toEqual(new Date(2019, 1-1, 2, 3, 4, 5))

        currentTime.setTime(currentTime.getTime() + TIMER_DELAY)
        jest.advanceTimersByTime(TIMER_DELAY)

        expect(clock.prop('time')).toEqual(new Date(2019, 1-1, 2, 3, 4, 6))

        currentTime.setTime(currentTime.getTime() + 5 * TIMER_DELAY)
        jest.advanceTimersByTime(5 * TIMER_DELAY)

        expect(clock.prop('time')).toEqual(new Date(2019, 1-1, 2, 3, 4, 11))
    })

    it('should update the clock every second', () => {
        const container = mount(<ClockContainer />)
        const clock = container.find(Clock)

        expect(clock.prop('time')).toEqual(new Date(2019, 1-1, 2, 3, 4, 5))

        currentTime.setTime(currentTime.getTime() + TIMER_DELAY)
        jest.runOnlyPendingTimers()

        expect(clock.prop('time')).toEqual(new Date(2019, 1-1, 2, 3, 4, 6))

        currentTime.setTime(currentTime.getTime() + TIMER_DELAY)
        jest.runOnlyPendingTimers()

        expect(clock.prop('time')).toEqual(new Date(2019, 1-1, 2, 3, 4, 7))
    })
})
