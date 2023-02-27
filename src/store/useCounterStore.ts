import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type CounterActions = {
  increment: () => void
  turnOnOff: () => void
}

type CounterStore = {
  counter: number
  isTurnedOn: boolean
  statusMessage: string

  actions: CounterActions
}

const TURNED_ON_MESSAGE = 'The counter is on'
const TURNED_OFF_MESSAGE = 'The counter is off'

export const useCounterStore = create<CounterStore>()(
  persist(
    immer(
      (set) => ({
        counter: 0,
        isTurnedOn: false,
        statusMessage: TURNED_OFF_MESSAGE,

        actions: {
          increment: () => set((state) => { state.counter += 1 }),
          turnOnOff: () => {
            set((state) => { state.isTurnedOn = !state.isTurnedOn })
            set((state) => {
              state.statusMessage = state.isTurnedOn ? TURNED_ON_MESSAGE : TURNED_OFF_MESSAGE
            })
          }
        }
      })
    ),
    {
      name: 'counter-storage',
      partialize: (state) => ({
        counter: state.counter,
        isTurnedOn: state.isTurnedOn,
        statusMessage: state.statusMessage
      })
    }
  )
)

export const useCounter = () => useCounterStore<number>((state) => state.counter)
export const useCounterIsTurnedOn = () => useCounterStore<boolean>((state) => state.isTurnedOn)
export const useCounterStatusMessage = () => useCounterStore<string>((state) => state.statusMessage)
export const useCounterActions = () => useCounterStore<CounterActions>((state) => state.actions)