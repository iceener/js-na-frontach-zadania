import type { User } from "./types";

export const hasAddress = (user: User) => !!user.address;

export const hasGivenAge = (requiredAge: number) => (user: User) =>
  user.age >= requiredAge;
