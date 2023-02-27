import { mountStoreDevtool } from 'simple-zustand-devtools';

import { useCounterStore } from './useCounterStore'
import { useOtherStore } from './useOtherStore'

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('CounterStore', useCounterStore);
  mountStoreDevtool('OtherStore', useOtherStore);
}

export * from './useCounterStore'
export * from './useOtherStore'