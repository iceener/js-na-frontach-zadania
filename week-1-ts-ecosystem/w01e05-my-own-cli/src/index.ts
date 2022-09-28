#!/usr/bin/env node
import { Avada_Kedavra, onSubmit, textMessage} from "./common";
import { questionName} from "./data";
const clear = require('clear');
const prompts = require('prompts')


export const lets_play_the_game = async () => {
    clear()
    textMessage(`Welcome in Drago CLI `)
    const {Name} = await prompts(questionName,{onSubmit})
    await Avada_Kedavra(Name)
}

lets_play_the_game().then((res:any) => {
    if(res) console.log(res)
}).catch((err) => console.log(err))



