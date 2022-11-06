/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import React, { useContext } from "react"
import { BsCart } from "react-icons/bs"
import { CartContext, contextType } from "../../Context/CartContext"

const Navbar = ({ showCart }: { showCart: () => void }) => {
  const { carts }: contextType = useContext(CartContext)
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-primaryLight">
      <Link href={"/"}>
        <h1 className="text-lg text-primary cursor-pointer">E-Shop</h1>
      </Link>
      <ul className="flex justify-center items-center flex-1 uppercase">
        <li className="mx-4 text-gray-500 hover:text-primary cursor-pointer">
          electronics
        </li>
        <li className="mx-4 text-gray-500 hover:text-primary cursor-pointer">
          jewelery
        </li>
        <li className="mx-4 text-gray-500 hover:text-primary cursor-pointer">
          men's clothing
        </li>
        <li className="mx-4 text-gray-500 hover:text-primary cursor-pointer">
          women's clothing
        </li>
      </ul>
      <div
        className="bg-primary p-2 rounded-full cursor-pointer relative"
        onClick={showCart}
      >
        <span className="absolute top-0 right-0 bg-white rounded-full flex justify-center items-center w-4 h-4">
          <p className="text-sm">{carts.length}</p>
        </span>
        <BsCart size={20} className="text-primaryLight" />
      </div>
    </div>
  )
}

export default React.memo(Navbar)
