import React from "react"
import { BsCart } from "react-icons/bs"

const Navbar = ({ showCart }: { showCart: () => void }) => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-primaryLight">
      <h1 className="text-lg text-primary">E-Shop</h1>
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
        className="bg-primary p-2 rounded-full cursor-pointer"
        onClick={showCart}
      >
        <BsCart size={20} className="text-primaryLight" />
      </div>
    </div>
  )
}

export default React.memo(Navbar)
