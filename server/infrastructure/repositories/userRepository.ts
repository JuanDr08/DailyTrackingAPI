// Entidades 
import { User } from "../../domain/entities/user";

// Interfaces o Repositorios
import { UserRepository } from "../../domain/repositories/userRepository";

// Modelos
import { UserModel } from "../models/userModel";

// Types
import { EmailFormat, InsertionResult } from "../../shared/types";

// Base de datos
import { ConnectToDatabase } from "../database";

export class UserRepositoryImpl implements UserRepository {

    async findUserByEmail(email: string): Promise<User | undefined> {
        
        const query = await UserModel.findUserByEmail(email)
        if(!query) return undefined
        return new User({ id: query._id, email: query.email })

    }
    async findUserById(id: string): Promise<User | undefined> {
        
        const query = await UserModel.findUserById(id)
        if(!query) return undefined
        return new User({ id: query._id, email: query.email })

    }

    async createUser(email: EmailFormat, password: string): Promise<InsertionResult | undefined> {
        const session = ConnectToDatabase.instanceConnect.session
        try {
            session?.startTransaction()
            const query = await UserModel.createUser(email, password)
            if (!query?.acknowledged) return undefined
            session?.commitTransaction()
            return query
        } catch (error) {
            session?.abortTransaction()
            return undefined
        } finally {
            session?.endSession()
        }
        
    }
}