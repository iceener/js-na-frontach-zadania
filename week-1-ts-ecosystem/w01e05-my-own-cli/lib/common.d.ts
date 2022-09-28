import { Key, ObjectData } from "./type";
export declare const createJSONFile: (data: ObjectData) => Promise<void>;
export declare const deleteDataFromFile: () => Promise<void>;
export declare const textMessage: (text: string, blue?: string) => void;
export declare const onSubmit: (prompt: any, answer: string) => void;
export declare const giveMeFakeData: (Type: Key, amount: number) => ObjectData;
export declare const generateMyData: (userName: string) => Promise<ObjectData | undefined>;
export declare const Avada_Kedavra: (Name: string) => Promise<void>;
