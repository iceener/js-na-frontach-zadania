import {AddressInterface} from "./address.interface";

export interface UserInterface {
    name: string,
    age: number,
    email: string;
    address: AddressInterface
}
