import { useQuery } from "@tanstack/react-query"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { getAllProducts } from "../api"
import ProductCard from "../components/ProductCard"
import Loader from "../components/Shared/Loader"
import Modal from "../components/Shared/Modal"
import helper from "../utils/helper"
const Home: NextPage = () => {
  const {getLocalStorage} = helper
  const authenticated = getLocalStorage("auth");
  const router = useRouter()
  const { data, isLoading } = useQuery(["products"], getAllProducts)

  useEffect(() => {
    if (!authenticated) {
      router.push('/login')
    }
  },[authenticated,router])
  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    )

  return (
    <main className="min-h-screen ">
      <div className="flex flex-wrap justify-between py-4">
        {data &&
          data.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
      </div>
    </main>
  )
}

export default Home
