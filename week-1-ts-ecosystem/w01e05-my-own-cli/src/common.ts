import {createShopCard} from "./shopCardFactory";

const prompts = require(("prompts"))
import { faker } from '@faker-js/faker';
import {Key, ObjectData, ProductType} from "./type";
import {writeFileSync,readFileSync, unlinkSync} from  "fs"
import {join} from "path"
import chalk from "chalk";
import figlet, { Options} from "figlet";
import {
    amountFakeDataQuestion, choiceQuestion,
    generateQuestion,
    initializeData,
    jsonDataQuestion,
    LOOP_LENGTH,
    TypeQuestions,
} from "./data";
const file = "cart-items.json"
const path =`./persistent-data/${file}`

export const createJSONFile  = async (data:ObjectData) => {
    const JSONResponse = JSON.stringify(data)
        try {
            await writeFileSync(path, JSONResponse)
             textMessage(`Data written successfully to ${file}`, "blue")
            return "SUCCESS"

        } catch (err) {
             textMessage('An error has occurred ')
            return "ERROR"
        }
}

export const readJSONFile = async () => {
    const filePath = join(__dirname,"../persistent-data/cart-items.json")
    const jsonData =  readFileSync(filePath).toString()
        return JSON.parse(jsonData)
}


export const deleteDataFromFile = async () => {
    try {
        await unlinkSync(path)
        textMessage(`Your data has been deleted`)
    }catch (err) {
        textMessage(`Cant Delete your Data`)
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

export  const pinoMessage = (mesage: string) => {
    const pino = require('pino')
    const logger = pino({
        transport: {
            target: 'pino-pretty'
        },
        options: {
            colorize: true
        }
    })
    logger.info(mesage)
}

export const onSubmit = (prompt: any ,answer: string) => {
    if (answer === "leave") return null
    if (prompt.type === 'text') textMessage(`Nice to meet you ${answer}`, "blue")
}

const createRandomUser = (Type: Key): ProductType => {
    return {
        id:  faker.datatype.uuid(),
        type: Type,
        name: faker.commerce.productName(),
        amount: Number(faker.random.numeric()),
        price: Type ===  Key.GIVE_FOR_FREE ? 0 : Number(faker.commerce.price()),

    };
}

const generateMyRecord = async (Type: Key,userName: string) => {
    let prepareCartData: ObjectData = initializeData
    const {questionsII} = generateQuestion(userName)
    const { productName, productAmount, productPrice} =  await prompts(questionsII)
    const newProduct: ProductType = {
        id: faker.datatype.uuid(),
        type: Type,
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
    console.log("shopCartData",shopCartData)
    return shopCartData
}


export  const generateMyData = async (userName:string)=> {
    for (let i = 0; i <= LOOP_LENGTH; i++) {
        const {productType} = await prompts(TypeQuestions[0])
        if(productType === "leave") return null
        const {generateFakeData} = await prompts(TypeQuestions[1])
        if( generateFakeData) {
            const {amountRecords} = await prompts(amountFakeDataQuestion)
            const shopCartData = giveMeFakeData(productType,amountRecords)
            return {shopCartData,productType}
        }
        const shopCartData = await generateMyRecord(productType, userName)
        if(shopCartData[productType as Key].length) {
            textMessage(`You have been created your Record !`, "blue")
            return {shopCartData,productType}
        }
    }
        textMessage((`See you Soon ${userName}`),"blue")
        return null
}

export const beforeJsonFile = async (shopCartData : ObjectData) => {
    const {choice} = await prompts(choiceQuestion)
    if(choice === "leave") return null
    if(choice === "json")  {
      return  await createJSONFile(shopCartData)
    }
}

export const afterJsonFIle = async (shopCartData : ObjectData,Type: Key, Name:string) => {
    const {jsonDataChoice} = await prompts(jsonDataQuestion)
        if(jsonDataChoice === "delete") await deleteDataFromFile()
        if(jsonDataChoice === "add")  {
        const cartItemFromJsonFile: ObjectData = await readJSONFile()
        await createShopCard(cartItemFromJsonFile,Type, Name)
    }
}
export const Avada_Kedavra = async (Name: string) => {
    const response = await generateMyData(Name)
    if(!response)  return null
    const {shopCartData, productType} = response
    await beforeJsonFile(shopCartData) && await afterJsonFIle(shopCartData,productType,Name)
    await Avada_Kedavra(Name)
}
