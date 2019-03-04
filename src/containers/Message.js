import { compose, lifecycle, mapProps, withState } from 'recompose'
import Message from '../components/Message'

const MESSAGE_DELAY = 3000

const enhance = compose(
    withState('visible', 'setVisible', false),
    lifecycle({
        componentWillReceiveProps({ setVisible, text }) {
            if (text && text !== this.props.text) {
                setVisible(true)
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    setVisible(false)
                }, MESSAGE_DELAY)
            }
        },
        componentWillUnmount() {
            clearTimeout(this.timer)
        }
    }),
    mapProps(({ setVisible, ...otherProps }) => otherProps)
)

export default enhance(Message)
