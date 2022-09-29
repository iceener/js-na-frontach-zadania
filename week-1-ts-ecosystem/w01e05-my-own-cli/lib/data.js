"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOOP_LENGTH = exports.initializeData = exports.generateQuestion = exports.jsonDataQuestion = exports.choiceQuestion = exports.amountFakeDataQuestion = exports.TypeQuestions = exports.questionName = void 0;
exports.questionName = {
    type: 'text',
    name: 'Name',
    message: `What's your name ?`
};
exports.TypeQuestions = [
    {
        type: 'select',
        name: 'productType',
        message: "What product would you like to add ?",
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
];
exports.amountFakeDataQuestion = [
    {
        type: "number",
        name: 'amountRecords',
        message: `How many Fake records do you need ?`,
        min: 1,
        max: 8
    },
];
exports.choiceQuestion = [
    {
        type: "select",
        name: 'choice',
        message: ` Do you want continue generate data / createJsonFile / Leave CLI ?`,
        choices: [
            { title: 'Create JSON File', value: 'json', selected: true },
            { title: 'Continue Generate Product', value: 'generate' },
            { title: 'Leave', value: 'leave', }
        ]
    },
];
exports.jsonDataQuestion = [
    {
        type: "select",
        name: 'jsonDataChoice',
        message: ` Do you want add this products to your Shop Card or Delete Data ?`,
        choices: [
            { title: 'Add to my ShopCard', value: 'add', selected: true },
            { title: 'Delete my Json Data', value: 'delete' },
        ]
    },
];
const generateQuestion = (Name) => {
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
    ];
    const loopQuestion = {
        type: "multiselect",
        name: 'loopAnswer',
        message: `${Name}, What do you want to Do?`,
        choices: [
            { title: 'Add data to my shopCard', value: 'add', selected: true },
            { title: 'Continue Generate Product', value: 'generate' },
            { title: 'Leave', value: 'leave', }
        ],
    };
    return { questionsII, loopQuestion };
};
exports.generateQuestion = generateQuestion;
exports.initializeData = {
    buyNow: [], auction: [], forFree: [],
};
exports.LOOP_LENGTH = 8;
