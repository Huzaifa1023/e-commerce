import React, { useEffect, useContext, useState, useCallback } from "react"
import { NextPage } from "next"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { getSinlgeProduct } from "../../api"

import HighlightBadge from "../../components/Shared/HighlightBadge"
import Loader from "../../components/Shared/Loader"
import Rating from "../../components/Shared/Rating"
import Button from "../../components/Shared/Button"
import { CartContext } from "../../Context/CartContext"

const ProductDetails: NextPage = () => {
  const route = useRouter()
  const prodId = route.query?.id
  const { carts, addToCart } = useContext(CartContext)
  const [alreadyAdded, setAlreadyAdded] = useState(false)

  const { data, isLoading } = useQuery(
    [`product${prodId}`],
    () => getSinlgeProduct(prodId),
    {
      enabled: !!prodId,
    }
  )

  const handleAddtoCart = useCallback(() => {
    if (data) addToCart(data)
  }, [addToCart, data])

  useEffect(() => {
    if (carts.length == 0) {
      setAlreadyAdded(false)
    }
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id == data?.id) {
        setAlreadyAdded(true)
      }
    }
  }, [carts, carts.length, data?.id])

  if (isLoading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader />
      </div>
    )
  return (
    <div className="flex items-center flex-col py-8">
      <div className="w-3/4 md:w-1/2 lg:w-1/3">
        <div className="shadow-md rounded-md px-4 py-4 dark:bg-secondaryDark">
          <div className="flex justify-center py-2">
            <Image src={data?.image || ""} alt="" width={200} height={200} />
          </div>
          <p className="mt-2 font-bold text-lg text-slate-800">{data?.title}</p>
          <p className="my-2 text-gray-400">{data?.description}</p>
          <div className="flex justify-between pt-2 items-center">
            <HighlightBadge title={`$${data?.price || ""}`} />
            <Rating rating={data?.rating.rate || 0} />
          </div>
        </div>
        <div>
          <Button
            onClick={handleAddtoCart}
            text={alreadyAdded ? "Already Added" : "Add To Cart"}
            className="w-full mt-4"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
