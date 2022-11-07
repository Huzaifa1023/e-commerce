import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from 'next-themes';
import CartProvider from "../Context/CartContext"
import ContextThemeProvider from "../Context/ThemeContext";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider enableSystem={true} attribute="class">
        <ContextThemeProvider>
          <CartProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartProvider>
        </ContextThemeProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
