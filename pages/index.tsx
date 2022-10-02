import { useQuery } from "@tanstack/react-query"
import type { NextPage } from "next"
import Head from "next/head"
import { getAllProducts } from "../api"
import ProductCard from "../components/ProductCard"

const Home: NextPage = () => {
  const { data, isLoading } = useQuery(["products"], getAllProducts)
  if (isLoading) return <h1>Loading</h1>
  return (
    <main className="min-h-screen bg-slate-50">
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
