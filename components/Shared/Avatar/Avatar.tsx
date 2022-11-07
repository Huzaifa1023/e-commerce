import Image from 'next/image'
import React from 'react'
import helper from '../../../utils/helper'

type propType = {
    img?: string,
    title?: string,
    icon?: any,
    onClick?:()=> void
}

const Avatar = ({img,title,icon,onClick}:propType) => {
    const {getNameLetters} = helper;

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
  return (
    <div
      onClick={onClick}
      className='w-12 h-12 cursor-pointer rounded-full bg-primary flex justify-center items-center text-primaryLight'>
          {renderAvatar()}
    </div>
  )
}

export default Avatar