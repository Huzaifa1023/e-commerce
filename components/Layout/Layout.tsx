import React, { useCallback, useState } from "react"
import { Cart } from "../Cart"
import Navbar from "../Navbar"
type proppType = {
  children: JSX.Element[] | JSX.Element
}
const Layout = ({ children }: proppType) => {
  const [showCart, setShowCart] = useState(false)

  const onShowCart = useCallback(() => {
    setShowCart(true)
  }, [])

  const onHideCart = useCallback(() => {
    setShowCart(false)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar showCart={onShowCart} />
      <Cart show={showCart} hideCart={onHideCart} />
      {children}
    </div>
  )
}

export default Layout
