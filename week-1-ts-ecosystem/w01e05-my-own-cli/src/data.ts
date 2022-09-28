import {ObjectData} from "./type";

export const questionName = {
    type: 'text',
    name: 'Name',
    message: `What's your name ?`
}

export const TypeQuestions = [
    {
        type: 'select',
        name: 'Type',
        message:"What product would you like to add ?",
        choices: [
            { title: 'Kup Teraz - buyNow', value: 'buyNow' },
            { title: 'Za darmo - forFree', value: 'forFree' },
            { title: 'Aukcja - auction', value: 'auctions' }
        ],
    },
    {
        type: "toggle",
        name: 'generateFakeData',
        message: `Should I Generate a product with fictitious data?`,
        initial: true,
        active: 'yes',
        inactive: 'no'
    },
]

export const  amoutFakeDataQuestion = [
    {
        type: "number",
        name: 'amountRecords',
        message: `How many Fake records do you need ?`,
    },
]

export const generateQuestion = (Name: string) => {
    const questionsII = [
        {
            type: 'text',
            name: 'productName',
            message: `Please ${Name}, Give me product Name :`
        },
        {
            type: 'number',
            name: 'productAmount',
            message: `Please, Give me Amount of Product :`
        },
        {
            type: 'number',
            name: 'productPrice',
            message: `Please, give me price of Product :`
        },
    ]
     const loopQuestion = {
        type: 'toggle',
        name: 'loopAnswer',
        message: `${Name}, do you want Continue or Left ?`,
        initial: true,
        active: 'Continue',
        inactive: 'Left'
    }
    return {questionsII, loopQuestion}
}

export const initializeData: ObjectData = {
    buyNow: [], auctions: [], forFree: [],
}
export const LOOP_LENGTH = 8