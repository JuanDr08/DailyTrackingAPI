import { body } from "express-validator"

export class UserValidator {
    
    registerUserValidator = () => {
        return [
            body('email').isEmail().withMessage('Formato de email invalido'),
            body('password').isNumeric().withMessage('Password format invalido'),
        ]
    }

}