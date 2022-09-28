import { Key, ObjectData } from "./type";
export declare const createJSONFile: (data: ObjectData) => Promise<void>;
export declare const textMessage: (text: string, blue?: string) => void;
export declare const onSubmit: (prompt: any, answer: string) => void;
export declare const generateFakeData: (Type: Key, amount: number) => ObjectData;
export declare const generateMyData: (Name: string) => Promise<ObjectData | undefined>;
