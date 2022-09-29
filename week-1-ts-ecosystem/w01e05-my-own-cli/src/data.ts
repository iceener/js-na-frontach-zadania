import {ObjectData} from "./type";

export const questionName = {
    type: 'text',
    name: 'Name',
    message: `What's your name ?`
}

export const TypeQuestions = [
    {
        type: 'select',
        name: 'productType',
        message:"What product would you like to add ?",
        choices: [
            { title: 'Kup Teraz - buyNow', value: 'buyNow' },
            { title: 'Za darmo - forFree', value: 'forFree' },
            { title: 'Aukcja - auction', value: 'auction' },
            { title: 'I want come back to home', value: 'leave' },
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

export const  amountFakeDataQuestion = [
    {
        type: "number",
        name: 'amountRecords',
        message: `How many Fake records do you need ?`,
        min: 1,
        max: 8
    },
]

export const choiceQuestion = [
    {
        type: "select",
        name: 'choice',
        message: ` Do you want continue generate data / createJsonFile / Leave CLI ?`,
         choices: [
             { title: 'Create JSON File', value: 'json',selected: true },
             { title: 'Continue Generate Product', value: 'generate'},
             { title: 'Leave', value: 'leave', }
         ]
    },
]

export const jsonDataQuestion = [
    {
        type: "select",
        name: 'jsonDataChoice',
        message: ` Do you want add this products to your Shop Card or Delete Data ?`,
        choices: [
            { title: 'Add to my ShopCard', value: 'add',selected: true },
            { title: 'Delete my Json Data', value: 'delete'},
        ]
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
        type:  "multiselect",
        name: 'loopAnswer',
        message: `${Name}, What do you want to Do?`,
         choices: [
             { title: 'Add data to my shopCard', value: 'add',selected: true },
             { title: 'Continue Generate Product', value: 'generate'},
             { title: 'Leave', value: 'leave', }
         ],
    }
    return {questionsII, loopQuestion}
}

export const initializeData: ObjectData = {
   buyNow : [], auction: [], forFree: [],
}
export const LOOP_LENGTH = 8