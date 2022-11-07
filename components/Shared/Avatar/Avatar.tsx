import Image from 'next/image'
import React from 'react'
import helper from '../../../utils/helper'

type propType = {
    img?: string,
    title?: string,
    icon?: any,
    onClick?: () => void,
    className?: string,
    style?: React.CSSProperties,
    size?: "small"| "medium" | "large"
}

const Avatar = ({ img, title, icon, onClick,className,style,size}: propType) => {
  const { getNameLetters } = helper;

  const renderAvatar = () => {
    if (img) {
      return <Image layout='fill' src={img} alt="avatar" />
    }
    if (title) {
      return getNameLetters(title)
    } if (icon) {
      return icon
    }
  }
  const sizeClass = {
    "small": "w-8 h-8",
    "medium": "w-12 h-12",
    "large": "w-16 h-16"
  }
  return (
    <div
      onClick={onClick}
      className={`${className || ""} ${sizeClass[size ? size: "medium"]} cursor-pointer rounded-full bg-primary flex justify-center items-center text-primaryLight`
      }
      style={style}
    >
          {renderAvatar()}
    </div>
  )
}

export default Avatar