#!/usr/bin/env node
import {createJSONFile, generateMyData, onSubmit, textMessage} from "./common";
import {questionName} from "./data";
const clear = require('clear');
const prompts = require('prompts')

const lets_play_the_game = async () => {
    clear()
    textMessage(`Welcome in Drago CLI `)
    const {Name} = await prompts(questionName,{onSubmit})
    const prepareCartData = await generateMyData(Name)
    if(!prepareCartData) return textMessage((`See you Soon ${Name}`),"blue")
       await createJSONFile(prepareCartData)
}
lets_play_the_game().then((res) =>console.log(res)).catch((err) => console.log(err))



