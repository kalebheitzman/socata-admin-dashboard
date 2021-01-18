// import libs
import React, { useContext } from "react"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

// import components
import { Context } from "./Context"
import { Twirl as Hamburger } from "hamburger-react"

export const ToggleComponent = () => {
  const { toggle, setToggle, darkMode } = useContext(Context)

  const toggleColor = darkMode ? "#aaa" : "#333"

  return (
    <Toggle>
      <Hamburger
        color={toggleColor}
        easing="ease-out"
        label="Show Menu"
        hideOutline={true}
        direction="left"
        duration={0.2}
        size={28}
        toggled={toggle}
        toggle={() => setToggle(!toggle)}
      />
    </Toggle>
  )
}

// toggle component
const Toggle = styled.div`
  grid-area: toggle;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);

  ${mq("tablet_up")} {
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-top: 0;
  }
`
