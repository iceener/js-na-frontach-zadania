export interface User {
    name: string,
    age: number,
    email: string,
    address?: UserAddress
}

export interface UserAddress {
    street: string,
    no: number
}