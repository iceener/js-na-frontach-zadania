import {User} from "../models/User";

/**
 * Checker if user has address.
 * @param user
 * @return boolean
 */
export function hasAddress(user: User): boolean {
    return Boolean(user.address)
}

/**
 * Checker if given user has given age.
 * @param user
 * @param requiredAge
 */
export function hasGivenAge(user: User, requiredAge: number): boolean {
    return  user.age >= requiredAge
}

/**
 * Checker if given user is adult (in EU >= 18 years)
 * @param user
 */
export function isAdult(user:User) {
    return hasGivenAge(user,18)
}

