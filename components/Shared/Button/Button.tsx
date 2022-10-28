import React from "react"

type propType = {
  text: string
  onClick?: () => void
  style?: React.CSSProperties
  className?: string,
  disabled?:boolean,
}
const Button = ({ text, onClick, style, className ,disabled=false}: propType) => {
  return (
    <button
      disabled={disabled}
      style={style}
      className={`${className} px-4 py-2 ${disabled ? 'bg-slate-200 text-slate-500' :'bg-primaryLight text-primary'} rounded-md shadow-md outline-none active:scale-95 transition-all`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default React.memo(Button)
