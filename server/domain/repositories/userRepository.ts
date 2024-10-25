import { EmailFormat, InsertionResult } from "../../shared/types";
import { User } from "../entities/user";

export interface UserRepository {
    findUserByEmail(email: string): Promise<User | undefined>;
    findUserById(id: string): Promise<User | undefined>;
    createUser(email: EmailFormat, password: string): Promise<InsertionResult | undefined>;
}