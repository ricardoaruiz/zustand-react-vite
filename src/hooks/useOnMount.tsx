import { EffectCallback, useEffect, useRef } from "react";

export const useOnMount = (effect: EffectCallback) => {
  const initialized = useRef<boolean>(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      effect()
    }
  }, [])
}