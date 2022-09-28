"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOOP_LENGTH = exports.initializeData = exports.generateQuestion = exports.deleteQuestion = exports.amountFakeDataQuestion = exports.TypeQuestions = exports.questionName = void 0;
exports.questionName = {
    type: 'text',
    name: 'Name',
    message: `What's your name ?`
};
exports.TypeQuestions = [
    {
        type: 'select',
        name: 'Type',
        message: "What product would you like to add ?",
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
exports.deleteQuestion = [
    {
        type: "toggle",
        name: 'deleteData',
        message: ` Do you want continue or delete your data ?`,
        initial: true,
        active: 'delete',
        inactive: 'continue'
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
        type: 'toggle',
        name: 'loopAnswer',
        message: `${Name}, do you want Continue or Left ?`,
        initial: true,
        active: 'Continue',
        inactive: 'Left'
    };
    return { questionsII, loopQuestion };
};
exports.generateQuestion = generateQuestion;
exports.initializeData = {
    buyNow: [], auctions: [], forFree: [],
};
exports.LOOP_LENGTH = 8;
