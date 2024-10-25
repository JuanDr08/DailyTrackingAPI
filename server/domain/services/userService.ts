import { User } from "../entities/user"
import { EmailFormat } from "../../shared/types"
import { UserRepository } from "../repositories/userRepository"


export class UserService {

    constructor(private readonly userRepository : UserRepository) {}

    async registerUserService(email: EmailFormat, password: string) : Promise<User> {
    
        const userExists = await this.userRepository.findUserByEmail(email)
        if(userExists) throw new Error('El usuario ya existe')

        const insertionQuery = await this.userRepository.createUser(email, password)
        if (!insertionQuery) throw new Error('Error al insertar usuario')
        const newUser = new User({id: insertionQuery?.insertedId, email})
        return newUser
    
    }

}