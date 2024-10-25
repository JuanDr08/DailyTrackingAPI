import { EmailFormat, StatusResponses } from "../../shared/types";
import { UserService } from "../../domain/services/userService";

export class UserController {

    constructor (private readonly userService : UserService) {}

    async registerUseCase(email: EmailFormat, password: string) : Promise<StatusResponses> {

        try {
            let query = await this.userService.registerUserService(email, password)
            return {status: 200, data: query, message: 'Usuario registrado'}
        } catch (error: any) {
            return {status: 401, message: error.message}
        }
        
    
    }

}