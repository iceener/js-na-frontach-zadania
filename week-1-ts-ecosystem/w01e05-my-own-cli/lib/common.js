"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOOP_LENGTH = exports.onSubmit = exports.textMessage = exports.createJSONFile = void 0;
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const createJSONFile = ({ key, data }) => {
    const finish = JSON.stringify({
        [key]: [...data]
    });
    const dataArray = [...finish];
    console.log("dataArray", dataArray);
};
exports.createJSONFile = createJSONFile;
const textMessage = (text) => {
    const fontOptions = {
        font: "Standard",
        horizontalLayout: "full",
        verticalLayout: 'full',
        whitespaceBreak: true
    };
    console.log(chalk_1.default.red(figlet_1.default.textSync(text, fontOptions)));
};
exports.textMessage = textMessage;
const onSubmit = (prompt, answer) => {
    if (prompt.type === 'text')
        (0, exports.textMessage)(`Nice to meet you ${answer}`);
};
exports.onSubmit = onSubmit;
exports.LOOP_LENGTH = 3;
