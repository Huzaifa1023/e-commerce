import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import { Iproduct } from "../../model/responseType"
import HighlightBadge from "../Shared/HighlightBadge"

type propType = {
  product: Iproduct
}
const ProductCard = ({ product }: propType) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/products/${product.id}`)
  }
  return (
    <div
      onClick={handleClick}
      className="flex flex-col basis-1/5 pt-2 mx-8 my-4 justify-center bg-white shadow-md rounded-md overflow-hidden cursor-pointer active:scale-95 transition-all"
    >
      <div className="px-4 py-4 w-full">
        <Image
          src={product.image}
          alt=""
          width={"100%"}
          height={"100%"}
          layout="responsive"
        />
      </div>
      <div className="bg-slate-100 h-full py-2 px-4">
        <h3 className="my-2 text-sm font-medium tracking-wide line-clamp-2 h-10">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="mr-2 text-primary">${product.price}</span>
          <HighlightBadge title={product.category} />
        </div>
      </div>
    </div>
  )
}
export default React.memo(ProductCard)
