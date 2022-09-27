#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompts = require('prompts')
const path  = require('path');
const fs = require('fs');

type Key =  "BUY" | "FREE" | "AUCTION"
type  ProductType  = {
        "id":  number,
        "name": string,
        "amount": number,
        "price":  string | null
}[]

type JsonDataType = {
    key: Key,
    data: ProductType
}


const  createJSONFile = ({key,data}:JsonDataType) => {
    const finish = JSON.stringify({
     [key]: [...data]
    })

    console.log("finish",finish)
}


(async () => {
    const questions = [
        {
            type: 'text',
            name: 'Name',
            message: `What's your name ?`
        },
        {
            type: 'select',
            name: 'Type',
            message:"What product would you like to add ?",
            choices: [
                { title: 'Kup Teraz - buyNow', value: 'BUY' },
                { title: 'Za darmo - forFree', value: 'FREE' },
                { title: 'Aukcja - auction', value: 'AUCTION' }
            ],
        },
        {
            type: "toggle",
            name: 'Answer',
            message: `Should I Generate a product with fictitious data?`,
            initial: true,
            active: 'yes',
            inactive: 'no'
        },
    ]


    const fontOptions = {
        font: "Standard",
        horizontalLayout: 'full',
        verticalLayout: 'full',
        whitespaceBreak: true
    }
  const onSubmit = (prompt: any ,answer: string) => {
        if(prompt.type === 'text') {
            console.log("{PROMPT",prompt)
            console.log(`
   ${chalk.red(figlet.textSync(`Nice to meet you ${answer}`, fontOptions))}
  `)
        }
  }

    clear()
    console.log(
        chalk.red(
            figlet.textSync("Welcome in Drago CLI ",fontOptions)
        )
    )
    const responseI = await prompts(questions,{onSubmit})
     const ShouldGenerate = responseI.Answer;
    const questionsII = [
        {
            type: 'text',
            name: 'productName',
            message: `Please ${responseI.Name}, Give me product Name :`
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
    if(ShouldGenerate) {
     const {productName,productAmount,productPrice} = await prompts(questionsII)
        console.log("response",productName)
        createJSONFile({
            key: responseI.Type,
            data: [{
                id: 1,
                name: productName,
                amount: productAmount,
                price: productPrice,
            }]
        })
    }
})()




