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
exports.Avada_Kedavra = exports.generateMyData = exports.giveMeFakeData = exports.onSubmit = exports.textMessage = exports.deleteDataFromFile = exports.createJSONFile = void 0;
const prompts = require(("prompts"));
const faker_1 = require("@faker-js/faker");
const fs_1 = require("fs");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const data_1 = require("./data");
const file = "cart-items.json";
const path = `./persistent-data/${file}`;
const createJSONFile = (data) => __awaiter(void 0, void 0, void 0, function* () {
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
const deleteDataFromFile = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, fs_1.unlinkSync)(path);
        (0, exports.textMessage)(`Your data has been deleted`);
    }
    catch (err) {
        (0, exports.textMessage)(`Cant Delete your Data`);
    }
});
exports.deleteDataFromFile = deleteDataFromFile;
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
const createRandomUser = (Type) => {
    return {
        id: faker_1.faker.datatype.uuid(),
        name: faker_1.faker.commerce.productName(),
        amount: Number(faker_1.faker.random.numeric()),
        price: Type === "forFree" ? null : faker_1.faker.commerce.price(),
    };
};
const generateMyRecord = (Type, userName) => __awaiter(void 0, void 0, void 0, function* () {
    let prepareCartData = data_1.initializeData;
    const { questionsII } = (0, data_1.generateQuestion)(userName);
    const { productName, productAmount, productPrice } = yield prompts(questionsII);
    const newProduct = {
        id: faker_1.faker.datatype.uuid(),
        name: productName,
        amount: productAmount,
        price: productPrice,
    };
    prepareCartData[Type].push(newProduct);
    return prepareCartData;
});
const giveMeFakeData = (Type, amount) => {
    const shopCartData = data_1.initializeData;
    Array.from({ length: amount }).forEach(() => {
        shopCartData[Type].push(createRandomUser(Type));
    });
    return shopCartData;
};
exports.giveMeFakeData = giveMeFakeData;
const generateMyData = (userName) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i <= data_1.LOOP_LENGTH; i++) {
        const { generateFakeData, Type } = yield prompts(data_1.TypeQuestions);
        if (generateFakeData) {
            const { amountRecords } = yield prompts(data_1.amountFakeDataQuestion);
            if (!amountRecords)
                return;
            return (0, exports.giveMeFakeData)(Type, amountRecords);
        }
        const response = yield generateMyRecord(Type, userName);
        if (response[Type].length) {
            (0, exports.textMessage)(`You have been created your Record !`, "blue");
        }
    }
});
exports.generateMyData = generateMyData;
const Avada_Kedavra = (Name) => __awaiter(void 0, void 0, void 0, function* () {
    const { loopQuestion } = (0, data_1.generateQuestion)(Name);
    const prepareCartData = yield (0, exports.generateMyData)(Name);
    if (!prepareCartData)
        return (0, exports.textMessage)((`See you Soon ${Name}`), "blue");
    yield (0, exports.createJSONFile)(prepareCartData);
    const { loopAnswer } = yield prompts(loopQuestion);
    if (!loopAnswer)
        return (0, exports.textMessage)((`See you Soon ${Name}`), "blue");
    const { deleteData } = yield prompts(data_1.deleteQuestion);
    if (deleteData) {
        yield (0, exports.deleteDataFromFile)();
    }
    yield (0, exports.Avada_Kedavra)(Name);
});
exports.Avada_Kedavra = Avada_Kedavra;
