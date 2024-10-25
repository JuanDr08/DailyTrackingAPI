import { EmailFormat, InsertionResult, MongoId } from "../../shared/types";

export interface TokenService {
    generateToken(id: MongoId) : Promise<string>
}