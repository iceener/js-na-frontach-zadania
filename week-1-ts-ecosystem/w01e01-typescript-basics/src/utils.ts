import { User } from "./types/user"

export function hasAddress(user: User): boolean {
    return Boolean(user.address)
}

export function hasGivenAge(requiredAge: number): any {
    return (user: User): boolean => user.age >= requiredAge
}