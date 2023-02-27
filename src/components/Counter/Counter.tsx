import { useCounter, useCounterActions, useCounterIsTurnedOn } from '../../store'
import styles from './Counter.module.scss'

export const Counter = () => {
  const counter = useCounter()
  const isTurnedOn = useCounterIsTurnedOn()
  const { increment } = useCounterActions()

  return (
    <div className={styles.wrapper}>
      <h2>&lt;Counter /&gt;</h2>

      <button
        onClick={() => isTurnedOn ? increment() : null}
        disabled={!isTurnedOn}
      >
        Increment
      </button>

      <p>{counter}</p>
    </div>
  )
}
