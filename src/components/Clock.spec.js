import React from 'react'
import { shallow } from 'enzyme'
import Clock from './Clock'

describe('Component) Clock', () => {
    it('should display the given time', () => {
        const comp = shallow(<Clock time={new Date(2019, 1-1, 2, 3, 4, 55)} />)

        expect(comp.text()).toEqual('3:04:55')
    })
})
