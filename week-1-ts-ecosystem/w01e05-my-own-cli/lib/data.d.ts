import { ObjectData } from "./type";
export declare const questionName: {
    type: string;
    name: string;
    message: string;
};
export declare const TypeQuestions: ({
    type: string;
    name: string;
    message: string;
    choices: {
        title: string;
        value: string;
    }[];
    initial?: undefined;
    active?: undefined;
    inactive?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    initial: boolean;
    active: string;
    inactive: string;
    choices?: undefined;
})[];
export declare const amoutFakeDataQuestion: {
    type: string;
    name: string;
    message: string;
}[];
export declare const generateQuestion: (Name: string) => {
    questionsII: {
        type: string;
        name: string;
        message: string;
    }[];
    loopQuestion: {
        type: string;
        name: string;
        message: string;
        initial: boolean;
        active: string;
        inactive: string;
    };
};
export declare const initializeData: ObjectData;
export declare const LOOP_LENGTH = 8;
