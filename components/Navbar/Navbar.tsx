/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { BsCart } from "react-icons/bs"
const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-8 bg-slate-200">
      <h1>E-Shop</h1>
      <ul className="flex justify-center flex-1 uppercase">
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

      <BsCart size={20} />
    </div>
  )
}

export default Navbar
