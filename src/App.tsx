import { Counter } from './components/Counter'
import { CounterSwitcher } from './components/CounterSwitcher'
import { CounterStatus } from './components/CounterStatus'
import { OtherComponent } from './components/OtherComponent'
import { useOnMount } from './hooks/useOnMount'

import styles from './App.module.scss'
import { useCounter } from './store'

function App() {
  const counter = useCounter()

  // Essa rotina será executada somente no carregamento inicial do componente
  // as próximas renderizações não terão efeito colateral aqui
  useOnMount(() => {
    console.log(`O contador no íncio era: ${counter}`)
  })

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
