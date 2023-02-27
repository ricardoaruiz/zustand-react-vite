import classNames from 'classnames/bind'

import { useCounterActions, useCounterIsTurnedOn } from '../../store'
import styles from './CounterSwitcher.module.scss'

const cx = classNames.bind(styles)

export const CounterSwitcher = () => {
  const isTurnedOn = useCounterIsTurnedOn()
  const { turnOnOff } = useCounterActions()

  return (
    <div className={styles.wrapper}>

      <h2>&lt;CounterSwitcher /&gt;</h2>

      <button onClick={turnOnOff}
        className={
          cx({
            on: isTurnedOn,
            off: !isTurnedOn
          })
        }
      >
        {isTurnedOn ? 'On' : 'Off'}
      </button>
    </div >
  )
}
