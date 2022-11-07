import React from "react"

const sizes = {
  "small": "w-6 h-6",
  "medium": "w-8 h-8",
  "large":"w-10 h-10"
}
type propType = {
  size?:"small" | "medium" | "large"
}
const Loader = ({size}:propType) => {
  return (
    <div className={`${sizes[size ? size : "medium"]} border-4 border-gray-100 border-t-4 border-t-primary rounded-full animate-spin`} />
  )
}

export default Loader
