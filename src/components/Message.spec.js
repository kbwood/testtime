import React from 'react'
import { shallow } from 'enzyme'
import Message from './Message'

describe('(Component) Message', () => {
    const messageText = 'abcdef'

    it('should include the given message text', () => {
        const comp = shallow(<Message text={messageText} visible={true} />)

        expect(comp.find('p').text()).toContain(messageText)
    })

    it('should display the message when visible', () => {
        const comp = shallow(<Message text={messageText} visible={true} />)

        expect(comp.prop('className')).toContain('Message-visible')
    })

    it('should not display the message when not visible', () => {
        const comp = shallow(<Message text={messageText} visible={false} />)

        expect(comp.prop('className')).not.toContain('Message-visible')
    })
})
