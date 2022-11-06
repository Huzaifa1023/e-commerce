import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import CartProvider from "../Context/CartContext"
import ThemeProvider from "../Context/ThemeContext"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
