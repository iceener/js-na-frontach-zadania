import {User} from "./types";

export function hasAddress(user: User): boolean {
	return Boolean(user.address)
}

export function hasGivenAge(requiredAge: number): (user: User) => boolean {
	return (user) => user.age >= requiredAge
}