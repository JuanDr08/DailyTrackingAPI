import { UpdateResult } from "mongodb";
import { EmailFormat, InsertionResult, MongoId, UserCompleteInfo } from "../../shared/types";
import { User } from "../entities/user";

export interface UserRepository {
    findUserByEmail(email: string): Promise<User | undefined>;
    findUserById(id: string): Promise<UserCompleteInfo | undefined>;
    createUser(email: EmailFormat, password: string): Promise<InsertionResult | undefined>;
    updateLastSession(id: MongoId, date: Date) : Promise<UpdateResult<Document> | undefined>
}

export interface UserService {
    verifyPassword(password: string, passwordToCompare: string) : Promise<boolean>
}