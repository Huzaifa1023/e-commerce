import React from "react"

const HighlightBadge = ({ title }: { title: string | number }) => {
  return (
    <span className="bg-primaryLight text-primary p-1.5 px-3 rounded-2xl">
      {title}
    </span>
  )
}

export default React.memo(HighlightBadge)
