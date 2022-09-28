const prompts = require(("prompts"))
import {Key, ObjectData} from "./type";
import {writeFileSync} from  "fs"
import chalk from "chalk";
import figlet, { Options} from "figlet";
import {generateQuestion, initializeData, LOOP_LENGTH, questionName, TypeQuestions} from "./data";

export const   createJSONFile  = async (data:ObjectData) => {
    const file = "cart-items.json"
  const path =`./persistent-data/${file}`
    const JSONResponse = JSON.stringify(data)
    try {
        console.log("JSON response",data)
  await  writeFileSync(path,JSONResponse)
        textMessage(`Data written successfully to ${file}`,"blue")
    } catch (err) {
        textMessage('An error has occurred ')
        console.log("Error",err);
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
    if(prompt.type === 'text') textMessage(`Nice to meet you ${answer}`,"blue")
}

export  const generateMyData = async (Name:string)=> {
     let prepareCartData: ObjectData = initializeData
    const {questionsII, loopQuestion} = generateQuestion(Name)

    for (let i = 0; i <= LOOP_LENGTH; i++) {
        const {ShouldGenerateData,Type} = await prompts(TypeQuestions)
        if( ShouldGenerateData) {
            textMessage((`See you Soon ${Name}`))
            return null
        }
        const { productName, productAmount, productPrice} = await prompts(questionsII)
        const newProduct = {
            id: Number(String(Math.random() + i).split('.')[1]),
            name: productName,
            amount: productAmount,
            price: productPrice,
        }
        prepareCartData[Type as Key].push(newProduct)
        const {loopAnswer} = await prompts(loopQuestion)
        if(!loopAnswer) return prepareCartData


    }
}
