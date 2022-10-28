import React from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((num) => {
        if (Math.round(rating) < num) {
          return <AiOutlineStar key={num} size={20} />
        } else {
          return <AiFillStar className="text-primary" key={num} size={20} />
        }
      })}
    </div>
  )
}
export default React.memo(Rating)
