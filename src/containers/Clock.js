import { compose, lifecycle, mapProps, withState } from 'recompose'
import { getDateTime } from '../utils/DateTime'
import Clock from '../components/Clock'

const TIMER_DELAY = 1000

const enhance = compose(
    withState('time', 'setTime', () => getDateTime()),
    lifecycle({
        componentDidMount() {
            this.timer = setInterval(() => {
                this.props.setTime(getDateTime())
            }, TIMER_DELAY)
        },
        componentWillUnmount() {
            clearInterval(this.timer)
        }
    }),
    mapProps(({ setTime, ...otherProps }) => otherProps)
)

export default enhance(Clock)
