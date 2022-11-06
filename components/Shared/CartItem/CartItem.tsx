import Image from "next/image"
import React, { useContext, useState } from "react"
import { Isproduct } from "../../../model/responseType"
import Counter from "../Counter"
import { AiTwotoneDelete } from "react-icons/ai"
import { CartContext } from "../../../Context/CartContext"

const CartItem = ({ cart }: { cart: Isproduct }) => {
  const { removeFromCart } = useContext(CartContext)
  const [count, setCount] = useState(1)

  const handleCount = (action: "inc" | "dec") => {
    if (action == "inc" && count < cart.rating.count)
      setCount((count) => count + 1)
    if (action == "dec" && count > 1) setCount((count) => count - 1)
  }

  return (
    <div className="px-4 my-2" key={cart.id}>
      <div className="shadow-sm p-4">
        <div className="flex">
          <Image src={cart.image} alt="" width={60} height={60} />
          <div className="ml-3 text-sm">
            <p className="tracking-wide line-clamp-1">{cart.title}</p>
            <p className="text-gray-400">${cart.price}</p>
          </div>
        </div>
        <div className="flex items-stretch justify-between">
          <Counter count={count} handleCount={handleCount} />
          <button
            className="p-2 bg-red-200 outline-none rounded-full"
            onClick={() => removeFromCart(cart.id)}
          >
            <AiTwotoneDelete className="text-red-800" size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(CartItem)
