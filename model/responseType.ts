export type Iproduct = {
    id:number,
    title:string,
    price:string | number,
    category:string,
    description:string,
    image:string
}

export type Isproduct = Iproduct & {
    rating: {
        count: number,
        rate:3.9   
    }
}