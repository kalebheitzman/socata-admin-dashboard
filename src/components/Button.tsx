// import libs
import React from "react"

// import styles
import styled from "@emotion/styled"

type ButtonProps = {
  url: string,
  children: any,
  target: string
}

export const ButtonComponent = ({ url, children, target="self" }: ButtonProps) => {
  return <Button href={url} target={target}>{children}</Button>
}

// button component
const Button = styled.a`
  background: var(--button-background);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 85ms ease-out;

  &:hover {
    background: var(--logo-background);
    color: var(--logo-color);
    text-decoration: none;
  }
`
