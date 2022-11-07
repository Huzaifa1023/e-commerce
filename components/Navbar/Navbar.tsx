/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import React, { useContext } from "react"
import { BsCart } from "react-icons/bs"
import { CartContext, contextType } from "../../Context/CartContext"
import { authType } from "../../model/responseType"
import helper from "../../utils/helper"
import Avatar from "../Shared/Avatar"
import { MdDarkMode,MdOutlineLightMode } from 'react-icons/md';
import { useTheme } from "next-themes"

const Navbar = ({ showCart }: { showCart: () => void }) => {
  const { theme, setTheme } = useTheme();
  const { carts }: contextType = useContext(CartContext);
  const { getLocalStorage } = helper
  const user: authType["result"] | null = JSON.parse(getLocalStorage("auth") || "")
  
  const toggelTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  console.log(theme,'theme')
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-primaryLight">
      <Link href={"/"}>
        <h1 className="text-lg text-primary cursor-pointer">E-Shop</h1>
      </Link>
      <div className="flex flex-1 justify-end">
        <div
          className="bg-primary w-12 h-12 flex justify-center items-center rounded-full cursor-pointer relative"
          onClick={showCart}
        >
          <span className="absolute top-0 right-0 bg-white dark:bg-secondaryDark rounded-full flex justify-center items-center w-4 h-4">
            <p className="text-sm">{carts.length}</p>
          </span>
          <BsCart size={20} className="text-primaryLight" />
        </div>
        <div className="mx-3">
          <Avatar title={user?.name} />
        </div>
        <div>
          <Avatar onClick={toggelTheme} icon={theme === 'light' ? <MdDarkMode size={20} className="text-primaryLight" /> : <MdOutlineLightMode size={20} className="text-primaryLight"/>} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Navbar)
