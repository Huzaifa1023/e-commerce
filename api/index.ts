import { authType, Iproduct, Isproduct } from "../model/responseType";

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

export const login = async (email: string, password: string): Promise<authType> => {
  const formData = new FormData()
  formData.append("email", email);
  formData.append("password", password)
  return fetch("https://apingweb.com/api/login", {
    method: "POST",
    body: formData
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err)=> err)
}
