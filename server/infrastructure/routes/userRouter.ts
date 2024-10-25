// Dependencies
import express, { Request, Response } from "express"

// Middlewares
import { postLimiter } from "../middlewares/rateLimit"

// Validators
import { ActivityValidator } from "../validators/userValidator"

// Dependencias
import { userInterceptor } from "../dependencies"

// Constants
const activityValidator = new ActivityValidator()
const router = express.Router()

router.post('/',
    express.json(), 
    postLimiter, 
    activityValidator.registerUserValidator(),
    async (req : Request, res : Response) => {
        const loadUserInterceptor = await userInterceptor()
        loadUserInterceptor.registerUserInterceptor(req, res)
    }

)

export default router