import { createContext, useReducer } from 'react'
import type { PropsWithChildren } from 'react'

export const ShiftsContext = createContext({})

type InitialStateType = {
  shifts: {
    shiftPlace: string
    shiftKind: string
    shiftHeadDoctor: string
    shiftStartTime: string
    shiftEndTime: string
    shiftDate: string
  }[]
}

const initialState: InitialStateType = {
  shifts: [],
}

const formDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_SHIFT':
      return {
        ...state,
        shifts: [...state.shifts, action.payload],
      }
    default:
      return state
  }
}

export const ShiftsContextProvider = (props: PropsWithChildren) => {
  const { children } = props
  const [formData, dispatch] = useReducer(formDataReducer, initialState)

  return (
    <ShiftsContext.Provider value={{ formData, dispatch }}>
      {children}
    </ShiftsContext.Provider>
  )
}
