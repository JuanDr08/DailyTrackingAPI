import { body, query, param } from "express-validator"

export class ActivityValidator {
    
    validationExample = () => {
        return [
            body('name').isString().isLength({ min: 1 }),
            query('limit').isNumeric().toInt(),
            param('id').isString().isLength({ min: 1 })
        ]
    }

}