import { useQuery } from "@tanstack/react-query"
import type { NextPage } from "next"
import { getAllProducts } from "../api"
import ProductCard from "../components/ProductCard"
import Loader from "../components/Shared/Loader"

const Home: NextPage = () => {
  const { data, isLoading } = useQuery(["products"], getAllProducts)
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
