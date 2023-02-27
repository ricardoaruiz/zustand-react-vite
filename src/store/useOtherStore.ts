import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type OtherActions = {
  increment: () => void
}

type OtherStore = {
  counter: number

  actions: OtherActions
}

export const useOtherStore = create<OtherStore>()(
  persist(
    immer(
      (set) => ({
        counter: 0,
        actions: {
          increment: () => set((state) => { state.counter += 1 })
        }
      }),
    ),
    {
      name: 'otherCount-storage',
      partialize: (state) => ({ counter: state.counter })
    }
  )
)

export const useOtherCount = () => useOtherStore((state) => state.counter)
export const useOtherActions = () => useOtherStore((state) => state.actions)
