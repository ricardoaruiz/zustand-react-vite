import { useOtherActions, useOtherCount, useOtherStore } from '../../store'
import styles from './OtherComponent.module.scss'

export const OtherComponent = () => {
  const counter = useOtherCount()
  const { increment } = useOtherActions()

  return (
    <div className={styles.wrapper}>
      <h2>&lt;OtherComponent /&gt;</h2>

      <button onClick={increment}>Increment</button>

      <p>{counter}</p>
    </div>
  )
}
