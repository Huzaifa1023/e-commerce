import React from "react"
import Navbar from "../Navbar"
type proppType = {
  children: JSX.Element[] | JSX.Element
}
const Layout = ({ children }: proppType) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
