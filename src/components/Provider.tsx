// import libs
import React, { useState, useEffect } from "react"

// import components
import { Context } from "./Context"

export const Provider = ({ children }) => {
  
  const [darkMode, setDarkMode] = useState(false)
  const [toggle, setToggle] = useState(false)

  // get initial dark mode
  useEffect(() => {
    const dm: string | null = localStorage.getItem("dark-mode")

    if (dm === null && typeof window !== `undefined`) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return setDarkMode(true)
      } else {
        return setDarkMode(false)
      }
    }

    const isDarkMode: boolean = dm === "true"
    return setDarkMode(isDarkMode)
  }, [])

  // update local storage
  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode ? "true" : "false")
  }, [darkMode])

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        toggle,
        setToggle,
      }}
    >
      {children}
    </Context.Provider>
  )
}
