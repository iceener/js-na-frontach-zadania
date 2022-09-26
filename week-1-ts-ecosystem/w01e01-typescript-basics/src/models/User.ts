import {Address} from "./Address";

/**
 * User interface.
 */
export interface User  {
    name : string,
    age: number,
    email: string,
    address?: Address
}

