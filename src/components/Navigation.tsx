// import libs
import React from "react"

// import components
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faLocationArrow,
  faPlane,
  // faPlaneDeparture,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"

// import styles
import styled from "@emotion/styled"
import mq from "../utils/media"

export const NavigationComponent = () => {
  const links = [
    {
      title: "Home",
      to: "/",
      icon: faHome,
      partiallyActive: false,
    },
    {
      title: "Tours",
      to: "/tours/",
      icon: faLocationArrow,
      partiallyActive: true,
    },
    // {
    //   title: "Flights",
    //   to: "/flights/",
    //   icon: faPlaneDeparture,
    //   partiallyActive: true,
    // },
    {
      title: "TBM9",
      to: "/tbm9/",
      icon: faPlane,
      partiallyActive: true,
    },
    {
      title: "About",
      to: "/about/",
      icon: faInfoCircle,
      partiallyActive: true,
    },
  ]

  return (
    <Navigation>
      <nav>
        <ul>
          {links.map(link => {
            return <NavLink link={link} key={link.to} />
          })}
        </ul>
      </nav>
    </Navigation>
  )
}

// navlink component
const NavLink = ({ link }) => (
  <li>
    <a
      href={link.to}
      // activeClassName="active"
      // partiallyActive={link.partiallyActive}
    >
      <FontAwesomeIcon
        icon={link.icon}
        fixedWidth
        aria-hidden="true"
        title={link.title}
      />
      <div className="label">{link.title}</div>
    </a>
  </li>
)

// navigation component
const Navigation = styled.div`
  grid-area: navigation;
  background: var(--background-color);

  nav {
    width: 100%;
    height: 80px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 80px;

    li {
      margin: 0;
      padding: 0;
      font-size: 1.2rem;
      flex-grow: 0;
      flex-basis: 0;
      flex-basis: 25%;
      text-align: center;

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: var(--nav-anchor-color);
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        height: 80px;
        box-sizing: border-box;
        transition: all 85ms ease-out;

        &.active,
        &:hover {
          color: var(--anchor-active);
          border-top: 3px solid var(--anchor-active);
        }
      }

      .label {
        margin-top: 4px;
        font-size: 10px;
        text-transform: uppercase;
        display: block;
      }
    }
  }

  ${mq("tablet_up")} {
    border-right: 1px solid var(--border-color);
    margin-right: -1px;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    text-align: center;

    ul {
      width: 100%;
      display: block;
      height: auto;
      margin-top: 1rem;
      border-top: 0;

      li {
        margin: 0;

        a {
          border-right: 3px solid transparent;
          border-left: 3px solid transparent;
          border-top: none;
          bordor-bottom: none;
          height: auto;
          padding: 0.5rem 0;
          margin: 2px 0;

          &.active,
          &:hover {
            color: var(--anchor-active);
            border-right: 3px solid var(--anchor-active);
            border-top: 0;
          }
        }
      }
    }
  }
`
