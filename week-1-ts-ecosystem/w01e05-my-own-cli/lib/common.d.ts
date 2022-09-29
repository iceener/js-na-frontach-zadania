import { Key, ObjectData } from "./type";
export declare const createJSONFile: (data: ObjectData) => Promise<"SUCCESS" | "ERROR">;
export declare const readJSONFile: () => Promise<any>;
export declare const deleteDataFromFile: () => Promise<void>;
export declare const textMessage: (text: string, blue?: string) => void;
export declare const pinoMessage: (mesage: string) => void;
export declare const onSubmit: (prompt: any, answer: string) => null | undefined;
export declare const giveMeFakeData: (Type: Key, amount: number) => ObjectData;
export declare const generateMyData: (userName: string) => Promise<{
    shopCartData: ObjectData;
    productType: any;
} | null>;
export declare const beforeJsonFile: (shopCartData: ObjectData) => Promise<"SUCCESS" | "ERROR" | null | undefined>;
export declare const afterJsonFIle: (shopCartData: ObjectData, Type: Key, Name: string) => Promise<void>;
export declare const Avada_Kedavra: (Name: string) => Promise<null | undefined>;
