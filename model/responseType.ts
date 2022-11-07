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

export type authType = {
    errors: string[] | []
    message: string
    result: {
        id: number,
        name: string,
        email: string,
        phone: string,
        created_at: string
        updated_at: string
    }
    status: number
    success: boolean
    token: string
}