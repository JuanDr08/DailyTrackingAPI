import { Document, InsertOneResult, ObjectId, UpdateResult, WithId } from "mongodb";
import { ConnectToDatabase } from "../database";
import { MongoId, UserCompleteInfo } from "../../shared/types";

export class UserModel {

    static async findUserByEmail(value: string): Promise<WithId<Document> | null | undefined> {
        const db = ConnectToDatabase.instanceConnect
        const collection = db.db?.collection('usuario')
        const result = await collection?.findOne({email: value})
        return result
    }

    static async findUserById(value: string): Promise<UserCompleteInfo | null | undefined> {
        const db = ConnectToDatabase.instanceConnect
        const collection = db.db?.collection('usuario')
        const result = await collection?.findOne({_id: ObjectId.createFromHexString(value)})
        return result as UserCompleteInfo | null | undefined
    }

    static async createUser(email: string, password: string): Promise<InsertOneResult<Document> | undefined> {
        const db = ConnectToDatabase.instanceConnect
        const collection = db.db?.collection('usuario')
        const result = await collection?.insertOne({email, password, fehca_de_creacion: new Date()})
        return result
    }

    static async updateLastSession(id: MongoId, date: Date): Promise<UpdateResult<Document> | undefined> {
        const db = ConnectToDatabase.instanceConnect
        const collection = db.db?.collection('usuario')
        const result = await collection?.updateOne({_id: id}, {$set: {fecha_y_hora_de_inicio_de_sesion: date}})
        return result
    }

}