import { EmailFormat, StatusResponses } from "../../shared/types";
import { UserService } from "../../domain/services/userService";
import { TokenService } from "../../domain/interfaces/tokenInterface";

export class UserController {

    constructor (
        private readonly userService : UserService,
        private readonly tokenService : TokenService
    ) {}

    async registerUseCase(email: EmailFormat, password: string) : Promise<StatusResponses> {

        try {
            let query = await this.userService.registerUserService(email, password)
            return {status: 200, data: query, message: 'Usuario registrado'}
        } catch (error: any) {
            return {status: 400, message: error.message}
        }
        
    
    }

    async loginUseCase(email: EmailFormat, password: string) : Promise<StatusResponses> {

        try {
            let query = await this.userService.loginUserService(email, password)

            const fechaDeInicioDeSession = new Date()

            await this.userService.updateLastSession(query.id, fechaDeInicioDeSession)

            let generateToken = await this.tokenService.generateToken(query.id)

            let data = {
                id: query.id,
                email: query.email,
                fecha_y_hora_de_inicio_de_sesion: fechaDeInicioDeSession,
                token: generateToken
            }

            return {status: 200, data: data, message: 'Usuario logueado'}
        } catch (error: any) {
            return {status: 400, message: error.message}
        }
        
    
    }

}