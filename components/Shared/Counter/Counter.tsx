import React, { useState } from "react"

type propType = {
  count: number
  handleCount: (action: "inc" | "dec") => void
}
const Counter = ({ count, handleCount }: propType) => {
  return (
    <div className="mt-3">
      <button
        className="px-2 py-0 bg-primaryLight text-primary outline-none"
        onClick={() => handleCount("inc")}
      >
        +
      </button>
      <span className="px-2">{count}</span>
      <button
        className="px-2 py-0 bg-primaryLight text-primary outline-none"
        onClick={() => handleCount("dec")}
      >
        -
      </button>
    </div>
  )
}

export default Counter
