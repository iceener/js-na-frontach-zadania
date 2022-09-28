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
exports.lets_play_the_game = void 0;
const common_1 = require("./common");
const data_1 = require("./data");
const clear = require('clear');
const prompts = require('prompts');
const lets_play_the_game = () => __awaiter(void 0, void 0, void 0, function* () {
    clear();
    (0, common_1.textMessage)(`Welcome in Drago CLI `);
    const { Name } = yield prompts(data_1.questionName, { onSubmit: common_1.onSubmit });
    yield (0, common_1.Avada_Kedavra)(Name);
});
exports.lets_play_the_game = lets_play_the_game;
(0, exports.lets_play_the_game)().then((res) => {
    if (res)
        console.log(res);
}).catch((err) => console.log(err));
