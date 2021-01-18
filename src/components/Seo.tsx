// import libs
import React from "react"

// import components
import { Helmet } from "react-helmet-async"

export const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Socata.io</title>
    </Helmet>
  )
}
