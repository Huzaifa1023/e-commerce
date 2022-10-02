import { Iproduct } from "../model/responseType"
export const getAllProducts = async (): Promise<Array<Iproduct>> => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json
    })
}
