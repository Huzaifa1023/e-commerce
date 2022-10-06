import React from "react"

type propType = {
  text: string
  onClick?: () => void
  style?: React.CSSProperties
  className?: string
}
const Button = ({ text, onClick, style, className }: propType) => {
  return (
    <button
      style={style}
      className={`${className} px-4 py-2 bg-primaryLight text-primary rounded-md shadow-md outline-none active:scale-95 transition-all`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
