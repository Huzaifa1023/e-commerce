import React, { createContext, useCallback, useState } from "react"
import { Isproduct } from "../../model/responseType"

export type contextType = {
  carts: Isproduct[] | []
  addToCart: (item: Isproduct) => void
  removeFromCart: (id: number) => void
}

export const CartContext = createContext<contextType>({
  carts: [],
  addToCart: (item: Isproduct) => {},
  removeFromCart: (id: number) => {},
})

type proptype = {
  children: JSX.Element | JSX.Element[]
}

const CartProvider = ({ children }: proptype) => {
  const [carts, dispatch] = useState<Isproduct[] | []>([])

  const addToCart = useCallback(
    (item: Isproduct) => {
      if (carts.length == 0) return dispatch([...carts, item])
      carts.forEach((cart) => {
        if (cart.id !== item.id) {
          dispatch([...carts, item])
        }
      })
    },
    [carts]
  )

  const removeFromCart = useCallback((id: number) => {
    dispatch((carts) => carts.filter((cart) => cart.id !== id))
  }, [])

  return (
    <CartContext.Provider value={{ carts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
