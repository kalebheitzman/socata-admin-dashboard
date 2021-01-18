// import libs
import { createContext } from "react"

interface InitialState {
  darkMode: boolean
  setDarkMode: any
  toggle: boolean
  setToggle: any
}

const initialState: InitialState = {
  darkMode: false,
  setDarkMode: null,
  toggle: false,
  setToggle: null,
}

export const Context = createContext(initialState)
