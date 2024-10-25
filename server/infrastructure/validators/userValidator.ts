import { body } from "express-validator"

export class ActivityValidator {
    
    registerUserValidator = () => {
        return [
            body('email').isEmail().withMessage('Formato de email invalido'),
            body('password').isNumeric().withMessage('Password format invalido'),
        ]
    }

}