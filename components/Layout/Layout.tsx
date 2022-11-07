import React, { useCallback, useState } from "react"
import helper from "../../utils/helper"
import { Cart } from "../Cart"
import Navbar from "../Navbar"
type proppType = {
  children: JSX.Element[] | JSX.Element
}
const Layout = ({ children }: proppType) => {
  const [showCart, setShowCart] = useState(false);
  const {getLocalStorage} = helper
  const login = getLocalStorage("auth");
  const onShowCart = useCallback(() => {
    setShowCart(true)
  }, [])

  const onHideCart = useCallback(() => {
    setShowCart(false)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-primaryDark">
      {
        login &&
        <>
          <Navbar showCart={onShowCart} />
          <Cart show={showCart} hideCart={onHideCart} />
        </>
      }

      {children}
    </div>
  )
}

export default Layout
