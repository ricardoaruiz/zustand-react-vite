import classnames from 'classnames/bind'
import { useCounterIsTurnedOn, useCounterStatusMessage } from '../../store'

import styles from './CounterStatus.module.scss'

const cx = classnames.bind(styles)

export const CounterStatus = () => {
  const statusMessage = useCounterStatusMessage()
  const isTurnedOn = useCounterIsTurnedOn()

  return (
    <div className={cx(
      styles.wrapper, {
      on: isTurnedOn,
      off: !isTurnedOn
    }
    )}>
      <h2>&lt;CounterStatus /&gt;</h2>

      <p>{statusMessage}</p>
    </div>
  )
}
