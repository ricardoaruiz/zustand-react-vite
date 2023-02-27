import { Counter } from './components/Counter'
import { CounterSwitcher } from './components/CounterSwitcher'
import { CounterStatus } from './components/CounterStatus'
import { OtherComponent } from './components/OtherComponent'

import styles from './App.module.scss'

function App() {

  return (
    <div className={styles.app}>
      <div className={styles['counter-container']}>
        <Counter />
        <CounterSwitcher />
        <CounterStatus />
      </div>

      <div className={styles['other-container']}>
        <OtherComponent />
      </div>
    </div>
  )
}

export default App
