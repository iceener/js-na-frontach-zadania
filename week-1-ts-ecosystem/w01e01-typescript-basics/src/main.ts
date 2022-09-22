import User from './user/user';

const user = new User({
    name: 'Andy',
    age: 30,
    email: 'andy@mail-me-tommorow.com',
    address: {
        street: 'Strange Alley',
        no: 23,
    },
});

console.log(`User ${user.name} is ${user.isAdult ? 'adult' : 'minor'}`)
console.log(`and has${user.hasAddress ? '' : ' no'} address`)
