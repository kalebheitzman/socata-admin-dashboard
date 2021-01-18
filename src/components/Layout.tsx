// import libs
import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"

// import components
import { Provider } from "./Provider"
import { HelmetProvider } from "react-helmet-async"
import { Context } from "./Context"
import { Seo } from "./Seo"
import { GlobalStyles } from "./GlobalStyles"
import { ToggleComponent as Toggle } from "./Toggle"
import { LogoComponent as Logo } from "./Logo"
import { TopbarComponent as Topbar } from "./Topbar"
import { NavigationComponent as Navigation } from "./Navigation"

// import styles
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@fontsource/work-sans"
import "@fontsource/quattrocento-sans"
import styled from "@emotion/styled"
import mq from "../utils/media"

// fontawesome config
config.autoAddCss = false

export const LayoutComponent = ({ children, title }) => {

  return (
    <Provider>
      <HelmetProvider>
        <Context.Consumer>
          {context => {
            const { toggle } = context
            return(
              <Layout className={toggle ? "toggled" : "untoggled"}>
                <Seo title={title} />
                <GlobalStyles />
                <Toggle />
                <Logo />
                <Topbar />
                <Navigation />
                <Main>{children}</Main>
              </Layout>
            )
          }}
        </Context.Consumer>
      </HelmetProvider>
    </Provider>
  )
}

// layout component
const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "logo       logo       topbar"
    "main       main       main"
    "sidebar    sidebar    sidebar"
    "navigation navigation toggle";
  grid-template-columns: 80px 1fr 90px;
  grid-template-rows: 80px 1fr 0 80px;
  height: 100vh;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  max-height: 100vh;
  max-height: -webkit-fill-available;
  width: 100vw;

  &.toggled {
    grid-template-rows: 80px 1fr 1fr 80px;
  }

  ${mq("tablet_up")} {
    grid-template-areas:
      "toggle     logo    topbar"
      "navigation main    main";
    grid-template-columns: 100px var(--sidebar-width) 1fr;
    grid-template-rows: 80px 1fr;
  }
`

// main component
const Main = styled.main`
  grid-area: main;
  background: var(--content-background);
  height: calc(100vh - 160px);
  overflow: hidden;

  ${mq("tablet_up")} {
    height: calc(100vh - 80px);
  }
`
