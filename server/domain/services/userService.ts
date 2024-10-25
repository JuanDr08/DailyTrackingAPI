import { User } from "../entities/user"
import { EmailFormat, MongoId, UserCompleteInfo } from "../../shared/types"
import { UserRepository } from "../interfaces/userInterface"
import { UserService as UserServiceInterface } from "../interfaces/userInterface"


export class UserService {

    constructor(
        private readonly userRepository : UserRepository,
        private readonly userService : UserServiceInterface
    ) {}

    async registerUserService(email: EmailFormat, password: string) : Promise<User> {
    
        const userExists = await this.userRepository.findUserByEmail(email)
        if(userExists) throw new Error('El usuario ya existe')

        const insertionQuery = await this.userRepository.createUser(email, password)
        if (!insertionQuery) throw new Error('Error al insertar usuario')
        const newUser = new User({id: insertionQuery?.insertedId, email, password})
        return newUser
    
    }

    async loginUserService(email: EmailFormat, password: string) : Promise<User> {

        const user = await this.userRepository.findUserByEmail(email)
        if(!user) throw new Error('Usuario no encontrado')

        const passwordVerification = await this.userService.verifyPassword(password, user.password)

        if (!passwordVerification) throw new Error('Credenciales incorrectas')
        
        return new User({id: user.id, email, password})

    }

    async updateLastSession(id: MongoId, date: Date) : Promise<void> {
        const updateQuery = await this.userRepository.updateLastSession(id, date)
        if (!updateQuery) throw new Error('Error al actualizar usuario')
    }

    async getUserInfoSession(id: string) : Promise<UserCompleteInfo> {

        const user = await this.userRepository.findUserById(id)
        if(!user) throw new Error('Usuario no encontrado')

        let data = {
            id: user.id,
            email: user.email,
            fecha_y_hora_de_inicio_de_sesion: user.fecha_y_hora_de_inicio_de_sesion,
            fecha_de_creacion: user.fecha_de_creacion,
            password: user.password
        }

        return data
    }

}