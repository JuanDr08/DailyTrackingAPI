import { jwtDecode, MongoId } from "../../shared/types";

export interface TokenService {
    generateToken(id: MongoId) : Promise<string>
    verifyToken(token: string) : jwtDecode
}