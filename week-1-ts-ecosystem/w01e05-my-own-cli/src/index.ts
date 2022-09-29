#!/usr/bin/env node
import {Avada_Kedavra, onSubmit, textMessage} from "./common";
import { questionName} from "./data";
const clear = require('clear');
const prompts = require('prompts')

export const lets_play_the_game = async () => {
    clear()
    textMessage(`Welcome in Drago CLI `)
    const {Name} = await prompts(questionName,{onSubmit})
    const response = await Avada_Kedavra(Name)
    if(!response) return textMessage(`See you Soon!`)
}

lets_play_the_game().catch((error) => console.log("ERROR",error))



