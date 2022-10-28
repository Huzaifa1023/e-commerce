import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CartProvider from "../components/Cart/CartContext"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default MyApp
