import React from "react"
import { MdCancel } from "react-icons/md"

type propType = {
  show: boolean
  hideCart: () => void
}
const Cart = ({ show = false, hideCart }: propType) => {
  return (
    <div
      className={`min-h-screen shadow-lg w-1/4 fixed transition-all top-0 z-10 bg-white ${
        show ? "right-0" : "left-full"
      }`}
    >
      <div className="py-4 px-4 flex justify-between items-center">
        <MdCancel
          className="text-primary cursor-pointer"
          size={30}
          onClick={hideCart}
        />
        <h3 className="text-2xl text-primary">Cart</h3>
      </div>
    </div>
  )
}

export default React.memo(Cart)
