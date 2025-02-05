import React, { useState, createContext, useMemo, ReactNode } from "react"

// Define a proper context type
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

// Create the context with the correct type
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
