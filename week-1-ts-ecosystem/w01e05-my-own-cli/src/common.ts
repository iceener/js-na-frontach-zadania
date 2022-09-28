const prompts = require(("prompts"))
import { faker } from '@faker-js/faker';
import {Key, ObjectData, ProductType} from "./type";
import {writeFileSync} from  "fs"
import chalk from "chalk";
import figlet, { Options} from "figlet";
import {amoutFakeDataQuestion, generateQuestion, initializeData, LOOP_LENGTH, TypeQuestions,} from "./data";

export const createJSONFile  = async (data:ObjectData) => {
    const file = "cart-items.json"
  const path =`./persistent-data/${file}`
    const JSONResponse = JSON.stringify(data)
        try {
            await writeFileSync(path, JSONResponse)
            return textMessage(`Data written successfully to ${file}`, "blue")
        } catch (err) {
            return textMessage('An error has occurred ')
        }
}
export const textMessage = (text:string, blue?:string) => {
    const fontOptions: Options = {
        font: "Mini",
        horizontalLayout: "full",
        verticalLayout: 'full',
    }
   const textColor: "blue" | "red" = blue ?  "blue" : "red"
    console.log(
        chalk[textColor](
            figlet.textSync(text,fontOptions)
        )
    )
}

export const onSubmit = (prompt: any ,answer: string) => {
    if (prompt.type === 'text') textMessage(`Nice to meet you ${answer}`, "blue")
}

const createRandomUser = (Type: Key): ProductType => {
    return {
        id:  faker.datatype.uuid(),
        name: faker.commerce.productName(),
        amount: Number(faker.random.numeric()),
        price: Type === "forFree" ? null : faker.commerce.price(),

    };
}

const generateMyRecord = async (Type: Key,userName: string) => {
    let prepareCartData: ObjectData = initializeData
    const {questionsII} = generateQuestion(userName)
    const { productName, productAmount, productPrice} =  await prompts(questionsII)
    const newProduct = {
        id: faker.datatype.uuid(),
        name: productName,
        amount: productAmount,
        price: productPrice,
    }
    prepareCartData[Type as Key].push(newProduct)
    return prepareCartData
}

export const giveMeFakeData = (Type: Key, amount: number) => {
    const shopCartData: ObjectData = initializeData
    Array.from({ length: amount }).forEach(() => {
        shopCartData[Type].push(createRandomUser(Type));
    });
    return shopCartData
}

export  const generateMyData = async (userName:string)=> {
    for (let i = 0; i <= LOOP_LENGTH; i++) {
        const {generateFakeData,Type} = await prompts(TypeQuestions)
        if( generateFakeData) {
            const {amountRecords} = await prompts(amoutFakeDataQuestion)
            if(!amountRecords) return
            return  giveMeFakeData(Type,amountRecords)
        }
        const response = await generateMyRecord(Type, userName)
        if(response[Type as Key].length) {
            textMessage(`You have been created your Record !`, "blue")
        }
    }
}

export const Avada_Kedavra = async (Name: string) => {
    const {loopQuestion} = generateQuestion(Name)
    const prepareCartData = await generateMyData(Name)
    if(!prepareCartData) return textMessage((`See you Soon ${Name}`),"blue")

    await createJSONFile(prepareCartData)

    const {loopAnswer} = await prompts(loopQuestion)
    if(!loopAnswer) return textMessage((`See you Soon ${Name}`),"blue")

    //Rekurencja, rekursja (z łac. recurrere, przybiec z powrotem)
    await Avada_Kedavra(Name)
}
