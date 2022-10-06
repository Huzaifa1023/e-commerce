import React, { useState } from "react"
import { IoAddCircle } from "react-icons/io5"
import { AiFillMinusCircle } from "react-icons/ai"
const QtyBar = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center">
      <IoAddCircle size={30} />
      <span>{count}</span>
      <AiFillMinusCircle size={30} />
    </div>
  )
}

export default React.memo(QtyBar)
