import { JwtPayload } from "jsonwebtoken";
import { InsertManyResult, InsertOneResult, ObjectId } from "mongodb";

export type EmailFormat = `${string}@${string}.${string}`;

export type MongoId = ObjectId;
export type InsertionResult = InsertOneResult<Document>
export interface jwtDecode {
    id: string
    iat: number
    exp: number
}

export interface User {
    readonly id: MongoId;
    readonly email: EmailFormat;
    readonly password: string
}

export interface UserCompleteInfo extends User {
    readonly fecha_y_hora_de_inicio_de_sesion: Date
    readonly fecha_de_creacion: Date
}

export type ShowUserInfo = Omit<UserCompleteInfo, 'fecha_de_creacion' | 'password'>


export interface StatusResponses {
    readonly status: number
    readonly message?: string | unknown
    readonly data?: Array
    readonly authenticated?: boolean
}
