import {UserInterface} from "./interfaces/user.interface";

export default class User {
    ADULT_AGE = 18;
    user: UserInterface;

    constructor(user: UserInterface) {
        this.user = user;
    }

    hasGivenAge(requiredAge: number): boolean {
        return this.user.age >= requiredAge;
    }

    get hasAddress(): boolean {
        // @ts-ignore
        return Boolean(this.user.address)
    }

    get name(): string {
        return this.user.name;
    }

    get isAdult(): boolean {
        return this.hasGivenAge(this.ADULT_AGE);
    }
}
