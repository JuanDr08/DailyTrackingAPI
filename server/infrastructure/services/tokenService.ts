import jwt from "jsonwebtoken"
import { TokenService } from "../../domain/interfaces/tokenInterface"
import { MongoId } from "../../shared/types"

export class TokenServiceImpl implements TokenService {

    async generateToken(id: MongoId): Promise<string> {
        
        const secret = process.env.KEY_SECRET || 'Defecto'
        return jwt.sign({id}, secret, {expiresIn: '30m'})

    }

}