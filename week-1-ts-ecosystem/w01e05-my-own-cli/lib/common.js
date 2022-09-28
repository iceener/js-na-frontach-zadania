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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMyData = exports.generateFakeData = exports.onSubmit = exports.textMessage = exports.createJSONFile = void 0;
const prompts = require(("prompts"));
const faker_1 = require("@faker-js/faker");
const fs_1 = require("fs");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const data_1 = require("./data");
const createJSONFile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const file = "cart-items.json";
    const path = `./persistent-data/${file}`;
    const JSONResponse = JSON.stringify(data);
    try {
        yield (0, fs_1.writeFileSync)(path, JSONResponse);
        return (0, exports.textMessage)(`Data written successfully to ${file}`, "blue");
    }
    catch (err) {
        return (0, exports.textMessage)('An error has occurred ');
    }
});
exports.createJSONFile = createJSONFile;
const textMessage = (text, blue) => {
    const fontOptions = {
        font: "Mini",
        horizontalLayout: "full",
        verticalLayout: 'full',
    };
    const textColor = blue ? "blue" : "red";
    console.log(chalk_1.default[textColor](figlet_1.default.textSync(text, fontOptions)));
};
exports.textMessage = textMessage;
const onSubmit = (prompt, answer) => {
    if (prompt.type === 'text')
        (0, exports.textMessage)(`Nice to meet you ${answer}`, "blue");
};
exports.onSubmit = onSubmit;
const createRandomUser = () => {
    return {
        id: faker_1.faker.datatype.uuid(),
        name: faker_1.faker.commerce.productName(),
        amount: Number(faker_1.faker.random.numeric()),
        price: faker_1.faker.commerce.price(),
    };
};
const generateFakeData = (Type, amount) => {
    const shopCartData = data_1.initializeData;
    Array.from({ length: amount }).forEach(() => {
        shopCartData[Type].push(createRandomUser());
    });
    return shopCartData;
};
exports.generateFakeData = generateFakeData;
const generateMyData = (Name) => __awaiter(void 0, void 0, void 0, function* () {
    let prepareCartData = data_1.initializeData;
    const { questionsII, loopQuestion } = (0, data_1.generateQuestion)(Name);
    for (let i = 0; i <= data_1.LOOP_LENGTH; i++) {
        const { ShouldGenerateData, Type } = yield prompts(data_1.TypeQuestions);
        if (ShouldGenerateData) {
            return (0, exports.generateFakeData)(Type, 3);
        }
        const { productName, productAmount, productPrice } = yield prompts(questionsII);
        const newProduct = {
            id: faker_1.faker.datatype.uuid(),
            name: productName,
            amount: productAmount,
            price: productPrice,
        };
        prepareCartData[Type].push(newProduct);
        return prepareCartData;
        // const {loopAnswer} = await prompts(loopQuestion)
        // if(!loopAnswer) return prepareCartData
        // console.log("ELEGANCKO MORDO !")
    }
});
exports.generateMyData = generateMyData;
