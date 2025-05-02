import React, { useState, createContext, useMemo, ReactNode } from "react"

interface ModalContextType {
  state: {
    modalName: string
    message: string
    caption: string
    redirect?: string
    id: number | null
    data: object
    redirectTime?: number
  }
  setState: React.Dispatch<React.SetStateAction<ModalContextType["state"]>>
}

export const ModalContext = createContext<ModalContextType | null>(null)

function ModalContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalContextType["state"]>({
    modalName: "",
    message: "",
    caption: "",
    redirect: "",
    id: null,
    data: {},
    redirectTime: 4000,
  })

  const value = useMemo(() => ({ state, setState }), [state])

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export default ModalContextProvider
