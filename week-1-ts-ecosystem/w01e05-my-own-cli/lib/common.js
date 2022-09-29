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
exports.Avada_Kedavra = exports.afterJsonFIle = exports.beforeJsonFile = exports.generateMyData = exports.giveMeFakeData = exports.onSubmit = exports.pinoMessage = exports.textMessage = exports.deleteDataFromFile = exports.readJSONFile = exports.createJSONFile = void 0;
const shopCardFactory_1 = require("./shopCardFactory");
const prompts = require(("prompts"));
const faker_1 = require("@faker-js/faker");
const type_1 = require("./type");
const fs_1 = require("fs");
const path_1 = require("path");
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const data_1 = require("./data");
const file = "cart-items.json";
const path = `./persistent-data/${file}`;
const createJSONFile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const JSONResponse = JSON.stringify(data);
    try {
        yield (0, fs_1.writeFileSync)(path, JSONResponse);
        (0, exports.textMessage)(`Data written successfully to ${file}`, "blue");
        return "SUCCESS";
    }
    catch (err) {
        (0, exports.textMessage)('An error has occurred ');
        return "ERROR";
    }
});
exports.createJSONFile = createJSONFile;
const readJSONFile = () => __awaiter(void 0, void 0, void 0, function* () {
    const filePath = (0, path_1.join)(__dirname, "../persistent-data/cart-items.json");
    const jsonData = (0, fs_1.readFileSync)(filePath).toString();
    return JSON.parse(jsonData);
});
exports.readJSONFile = readJSONFile;
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
const pinoMessage = (mesage) => {
    const pino = require('pino');
    const logger = pino({
        transport: {
            target: 'pino-pretty'
        },
        options: {
            colorize: true
        }
    });
    logger.info(mesage);
};
exports.pinoMessage = pinoMessage;
const onSubmit = (prompt, answer) => {
    if (answer === "leave")
        return null;
    if (prompt.type === 'text')
        (0, exports.textMessage)(`Nice to meet you ${answer}`, "blue");
};
exports.onSubmit = onSubmit;
const createRandomUser = (Type) => {
    return {
        id: faker_1.faker.datatype.uuid(),
        type: Type,
        name: faker_1.faker.commerce.productName(),
        amount: Number(faker_1.faker.random.numeric()),
        price: Type === type_1.Key.GIVE_FOR_FREE ? 0 : Number(faker_1.faker.commerce.price()),
    };
};
const generateMyRecord = (Type, userName) => __awaiter(void 0, void 0, void 0, function* () {
    let prepareCartData = data_1.initializeData;
    const { questionsII } = (0, data_1.generateQuestion)(userName);
    const { productName, productAmount, productPrice } = yield prompts(questionsII);
    const newProduct = {
        id: faker_1.faker.datatype.uuid(),
        type: Type,
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
    console.log("shopCartData", shopCartData);
    return shopCartData;
};
exports.giveMeFakeData = giveMeFakeData;
const generateMyData = (userName) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i <= data_1.LOOP_LENGTH; i++) {
        const { productType } = yield prompts(data_1.TypeQuestions[0]);
        if (productType === "leave")
            return null;
        const { generateFakeData } = yield prompts(data_1.TypeQuestions[1]);
        if (generateFakeData) {
            const { amountRecords } = yield prompts(data_1.amountFakeDataQuestion);
            const shopCartData = (0, exports.giveMeFakeData)(productType, amountRecords);
            return { shopCartData, productType };
        }
        const shopCartData = yield generateMyRecord(productType, userName);
        if (shopCartData[productType].length) {
            (0, exports.textMessage)(`You have been created your Record !`, "blue");
            return { shopCartData, productType };
        }
    }
    (0, exports.textMessage)((`See you Soon ${userName}`), "blue");
    return null;
});
exports.generateMyData = generateMyData;
const beforeJsonFile = (shopCartData) => __awaiter(void 0, void 0, void 0, function* () {
    const { choice } = yield prompts(data_1.choiceQuestion);
    if (choice === "leave")
        return null;
    if (choice === "json") {
        return yield (0, exports.createJSONFile)(shopCartData);
    }
});
exports.beforeJsonFile = beforeJsonFile;
const afterJsonFIle = (shopCartData, Type, Name) => __awaiter(void 0, void 0, void 0, function* () {
    const { jsonDataChoice } = yield prompts(data_1.jsonDataQuestion);
    if (jsonDataChoice === "delete")
        yield (0, exports.deleteDataFromFile)();
    if (jsonDataChoice === "add") {
        const cartItemFromJsonFile = yield (0, exports.readJSONFile)();
        yield (0, shopCardFactory_1.createShopCard)(cartItemFromJsonFile, Type, Name);
    }
});
exports.afterJsonFIle = afterJsonFIle;
const Avada_Kedavra = (Name) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, exports.generateMyData)(Name);
    if (!response)
        return null;
    const { shopCartData, productType } = response;
    (yield (0, exports.beforeJsonFile)(shopCartData)) && (yield (0, exports.afterJsonFIle)(shopCartData, productType, Name));
    yield (0, exports.Avada_Kedavra)(Name);
});
exports.Avada_Kedavra = Avada_Kedavra;
