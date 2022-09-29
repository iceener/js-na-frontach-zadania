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
export declare const amountFakeDataQuestion: {
    type: string;
    name: string;
    message: string;
    min: number;
    max: number;
}[];
export declare const choiceQuestion: {
    type: string;
    name: string;
    message: string;
    choices: ({
        title: string;
        value: string;
        selected: boolean;
    } | {
        title: string;
        value: string;
        selected?: undefined;
    })[];
}[];
export declare const jsonDataQuestion: {
    type: string;
    name: string;
    message: string;
    choices: ({
        title: string;
        value: string;
        selected: boolean;
    } | {
        title: string;
        value: string;
        selected?: undefined;
    })[];
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
        choices: ({
            title: string;
            value: string;
            selected: boolean;
        } | {
            title: string;
            value: string;
            selected?: undefined;
        })[];
    };
};
export declare const initializeData: ObjectData;
export declare const LOOP_LENGTH = 8;
