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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const data_1 = require("./data");
const clear = require('clear');
const prompts = require('prompts');
const Recurection = (Name) => __awaiter(void 0, void 0, void 0, function* () {
    const prepareCartData = yield (0, common_1.generateMyData)(Name);
    if (!prepareCartData)
        return (0, common_1.textMessage)((`See you Soon ${Name}`), "blue");
    yield (0, common_1.createJSONFile)(prepareCartData);
    const { loopQuestion } = (0, data_1.generateQuestion)(Name);
    const { loopAnswer } = yield prompts(loopQuestion);
    if (!loopAnswer)
        return (0, common_1.textMessage)((`See you Soon ${Name}`), "blue");
    yield Recurection(Name);
});
const lets_play_the_game = () => __awaiter(void 0, void 0, void 0, function* () {
    clear();
    (0, common_1.textMessage)(`Welcome in Drago CLI `);
    const { Name } = yield prompts(data_1.questionName, { onSubmit: common_1.onSubmit });
    yield Recurection(Name);
});
lets_play_the_game().then((res) => {
    if (res)
        console.log(res);
}).catch((err) => console.log(err));
