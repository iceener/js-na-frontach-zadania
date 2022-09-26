import user from "./store/Users.store";
import {hasAddress, hasGivenAge, isAdult} from "./utils/users";

console.log(`User ${user.name} is ${isAdult(user) ? 'adult' : 'minor'}`)
console.log(`and has${hasAddress(user) ? '' : ' no'} address`)
