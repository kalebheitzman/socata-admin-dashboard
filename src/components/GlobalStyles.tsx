// import libs
import React, { useContext } from "react"

// import components
import { Context } from "./Context"

// import styles
import { Global, css } from "@emotion/react"
import mq from "../utils/media"

// global styles
export const GlobalStyles = () => {
  const context = useContext(Context)

  const { darkMode } = context

  return (
    <Global
      styles={css`
        :root {
          // layout sizes
          --sidebar-width: 300px;

          // basic colors
          --text-color: ${darkMode ? "#eee" : "#333"};
          --background: ${darkMode ? "#3c4043" : "#fff"};
          --html-background: #222;
          --content-background: ${darkMode ? "#333" : "#f7f7f7"};
          --callout-background: ${darkMode ? "#2a2a2a" : "#fff"};

          // hero colors
          --hero-overlay: ${darkMode
            ? "rgba(0, 0, 0, 0.25)"
            : "rgba(255, 255, 255, 0.75)"};

          // logo colors
          --logo-background: ${darkMode ? "#0069b4" : "#0069b4"};
          --logo-color: ${darkMode ? "#fff" : "#fff"};

          // anchor colors
          --anchor-color: ${darkMode ? "#00a8ff" : "#0069b4"};
          --anchor-active: ${darkMode ? "#00a8ff" : "#0069b4"};
          --nav-anchor-color: ${darkMode ? "#888" : "#aaa"};

          // border-colors
          --border-color: ${darkMode ? "#373737" : "#efefef"};

          // button colors
          --button-background: ${darkMode ? "#373737" : "#efefef"};

          // overlay colors
          --overlay: ${darkMode ? "rgb(17,72,119)" : "rgb(17,72,119)"};
          --overlay-gradient: ${darkMode
            ? "linear-gradient(55deg, rgba(103,37,80,0.8) 0%, rgba(0, 0, 0, 0) 100%)"
            : "linear-gradient(55deg, rgba(145,37,107,0.8) 0%, rgba(0, 0, 0, 0) 100%)"};
          --overlay-hover: ${darkMode
            ? "linear-gradient(55deg, rgba(103,37,80,0.7) 0%, rgba(0, 0, 0, 0) 100%)"
            : "linear-gradient(55deg, rgba(145,37,107,0.7) 0%, rgba(0, 0, 0, 0) 100%)"};

          // form colors
          --placeholder-color: ${darkMode ? "#aaa" : "#333"};
          --form-background: ${darkMode ? "#2a2a2a" : "#efefef"};
          --form-disabled-color: ${darkMode ? "#444" : "#ccc"};
          --form-enabled-color: ${darkMode ? "#eee" : "#fff"};
          --form-button-background: ${darkMode ? "#009965" : "#009965"};
        }

        html {
          background: var(--html-background);
        }

        body {
          color: var(--text-color);
          background: var(--background);
          font-family: "Quattrocento Sans", sans-serif;

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: var(--text-color);
            font-family: "Work Sans", sans-serif;
          }

          a {
            color: var(--anchor-color);
            text-decoration: none;
            transition: all 85ms east-out;

            &:hover {
              text-decoration: underline;
            }
          }
        }

        input {
          color: var(--text-color);

          &::placeholder {
            color: var(--placeholder-color);
          }
        }

        table {
          border-radius: 4px;
          border-collapse: collapse;
          width: 100%;
          margin-bottom: 0;

          ${mq("tablet_up")} {
            background: var(--callout-background);
          }

          th {
            border-bottom: 0;
            vertical-align: bottom;
          }

          td {
            border-bottom: 0;
            vertical-align: top;
          }

          thead {
            background: var(--logo-background);
            color: var(--logo-color);

            th:first-of-type {
              border-top-left-radius: 4px;
            }

            th:last-of-type {
              border-top-right-radius: 4px;
            }
          }

          tbody {
            tr {
              &:nth-of-type(2n) {
                background: var(--form-background);
              }

              td:first-of-type {
                border-left: 1px solid var(--border-color);
              }

              td:last-of-type {
                border-right: 1px solid var(--border-color);
              }

              &:first-of-type {
                border-top: 1px solid var(--border-color);
              }

              &:last-of-type {
                td {
                  border-bottom: 1px solid var(--border-color);
                }

                td:first-of-type {
                  border-top-left-radius: 4px;
                }

                td:last-of-type {
                  border-top-right-radius: 4px;
                }
              }
            }
          }
          tfoot {

            td {
              background: var(--form-background);
              
              &:first-of-type {
                border-bottom-left-radius: 4px;
                font-weight: bold;
              }

              &:last-of-type {
                border-bottom-right-radius: 4px;
              }
            }
          }

          td,
          th {
            padding: 0.25rem 0.75rem !important;
            text-align: left;
          }

          @media screen and (max-width: 600px) {
            thead {
              display: none;
            }

            tbody {
              tr {
                border-bottom: 1px solid var(--border-color);

                &:nth-of-type(2n) {
                  background: transparent;
                }

                &:last-of-type {
                  td {
                    border-bottom: none;
                  }
                }
              }

              &.no-data-labels {
                tr {
                  td {
                    &::before {
                      content: none;
                    }
                  }
                }
              }
            }

            tr {
              display: block;
              border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px;
              margin-bottom: 1rem;
            }

            td {
              background: var(--callout-background);
              display: flex;
              border-left: 1px solid var(--border-color);
              border-right: 1px solid var(--border-color);

              &::before {
                content: attr(data-label);
                font-weight: bold;
                width: 120px;
                min-width: 120px;
              }

              &:first-of-type {
                background: var(--logo-background);
                color: var(--logo-color);
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;

                a {
                  color: var(--logo-color);
                }
              }

              &:last-of-type {
                border-bottom-right-radius: 4px;
                border-bottom-left-radius: 4px;
              }
            }
          }
        }
      `}
    />
  )
}
