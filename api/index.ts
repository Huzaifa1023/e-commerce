import { Iproduct, Isproduct } from "../model/responseType";

export const getAllProducts = async (): Promise<Array<Iproduct>> => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const getSinlgeProduct = async (id: any): Promise<Isproduct> => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const login = async (username: string, password: string): Promise<{token:string}> => {
  return fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username, 
      password
    }),
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err)=> err)
}
