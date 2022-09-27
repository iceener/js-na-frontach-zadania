#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const prompts = require('prompts');
const path = require('path');
(() => __awaiter(void 0, void 0, void 0, function* () {
    const questions = [
        {
            type: 'text',
            name: 'Name',
            message: `What's your name ?`
        },
        {
            type: 'multiselect',
            name: 'Type',
            message: "What product would you like to add ?",
            choices: [
                { title: 'Kup Teraz - buyNow', value: 'BUY' },
                { title: 'Za darmo - forFree', value: 'FREE' },
                { title: 'Aukcja - auction', value: 'AUCTION' }
            ],
        }
    ];
    const onSubmit = (prompt, answer) => console.log(` ${chalk.red(figlet.textSync(`Nice to meet you ${answer} :)`, { horizontalLayout: "full" }))} `);
    clear();
    console.log(chalk.red(figlet.textSync("Welcome in Drago CLI", { horizontalLayout: "full" })));
    const response = yield prompts(questions, { onSubmit });
    console.log("response", response);
}))();
