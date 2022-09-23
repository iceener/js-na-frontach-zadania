import { User } from '../model/user.model'

export function hasAddress(user: User): boolean {
    return Boolean(user.address)
  }
  
export  function hasGivenAge(requiredAge: number, user: User): boolean {
    return user.age >= requiredAge
}