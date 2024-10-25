import { InsertManyResult, InsertOneResult, ObjectId } from "mongodb";

export type EmailFormat = `${string}@${string}.${string}`;

export type MongoId = ObjectId;
export type InsertionResult = InsertOneResult<Document>

export interface User {
    readonly id: MongoId;
    readonly email: EmailFormat;
    readonly password?: string
}

export interface StatusResponses {
    readonly status: number
    readonly message?: string | unknown
    readonly data?: Array
}
