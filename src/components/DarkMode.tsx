// import libs
import React, { useContext } from "react"

// import components
import { Context } from "./Context"
import Switch from "react-switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

// import styles
import styled from "@emotion/styled"

// Sun component
const Sun = () => (
  <Icon>
    <FontAwesomeIcon icon={faSun} fixedWidth className="sun" />
  </Icon>
)

// Moon component
const Moon = () => (
  <Icon>
    <FontAwesomeIcon icon={faMoon} fixedWidth className="moon" />
  </Icon>
)

export const DarkMode = () => {
  const context = useContext(Context)

  const { darkMode, setDarkMode } = context

  const onColor: string = darkMode ? "#024c83" : "#024c83"
  const offColor: string = darkMode ? "#0088ec" : "#0088ec"

  return (
    <Container>
      <Switch
        aria-label="Dark Mode"
        handleDiameter={22}
        onChange={checked => setDarkMode(checked)}
        checked={darkMode}
        offColor={offColor}
        onColor={onColor}
        offHandleColor="#fff"
        onHandleColor="#fff"
        uncheckedIcon={<Sun />}
        checkedIcon={<Moon />}
      />
    </Container>
  )
}

// container component
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 75px;
`

// icon component
const Icon = styled.div`
  color: #fff;
  text-align: center;

  .fa-sun {
    vertical-align: -0.25rem;
  }

  .fa-moon {
    vertical-align: -0.25rem;
  }
`
