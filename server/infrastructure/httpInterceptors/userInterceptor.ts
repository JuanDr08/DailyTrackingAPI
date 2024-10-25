import { Request, Response } from "express"
import { validationResult } from "express-validator"
import bcrypt from "bcryptjs"

import { UserController} from "../../application/controller/userController";

export class UserInterceptor {

    constructor(private readonly userController : UserController) {
    }

    async registerUserInterceptor(req : Request, res : Response) : Promise<void> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) res.status(400).json({ errors: errors.array() });
        const { email, password } = req.body

        const hashPassword = await bcrypt.hash(password, 10)

        let query = await this.userController.registerUseCase(email, hashPassword)
        res.status(query.status).json(query)
    
    }

}