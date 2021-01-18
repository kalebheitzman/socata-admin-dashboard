// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

// types
type Children = {
  children: any
}

export const SidebarComponent = ({ children }: Children) => {
  return <Sidebar>{children}</Sidebar>
}

// sidebar component
const Sidebar = styled.div`
  grid-area: sidebar;
  padding: 1rem;

  ${mq("tablet_up")} {
    padding: 2rem;
    border-top: 1px solid var(--border-color);
  }

  ${mq("tablet_side")} {
    height: calc(100vh - 80px);
    overflow-y: scroll;
    border-top: none;
    border-right: 1px solid var(--border-color);
  }
`
