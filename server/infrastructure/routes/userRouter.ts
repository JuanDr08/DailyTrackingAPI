// Dependencies
import express, { Request, Response } from "express"

// Middlewares
import { postLimiter, loginLimiter, getLimiter, putLimiter, deleteLimiter } from "../middlewares/rateLimit"

// Validators
import { UserValidator } from "../validators/userValidator"

// Dependencias
import { userInterceptor } from "../dependencies"

// Constants
const userValidator = new UserValidator()
const router = express.Router()

router.post('/',
    express.json(), 
    postLimiter, 
    userValidator.registerUserValidator(),
    async (req : Request, res : Response) => {
        const loadUserInterceptor = await userInterceptor()
        loadUserInterceptor.registerUserInterceptor(req, res)
    }

)

router.post('/iniciarSesion',
    express.json(),
    loginLimiter,
    userValidator.registerUserValidator(),
    async (req: Request, res: Response) => {
        const loadUserInterceptor = await userInterceptor()
        loadUserInterceptor.loginInterceptor(req, res)
    }
)

router.get('/validarSesion',
    express.json(),
    getLimiter,
    userValidator.tokenHeaderValidator(),
    async (req: Request, res: Response) => {
        const loadUserInterceptor = await userInterceptor()
        loadUserInterceptor.verifyTokenInterceptor(req, res)
    }
    // delegar responsabilidad a los interceptores
)

// Rutas protegidas, tener middleware que verifique el token del header de la peticion
router.get('/usuarios',
    getLimiter
    // auth
)

router.get('/usuarios/:id',
    getLimiter
    // auth
)

router.put('/usuarios/:id',
    putLimiter
    // auth
)

router.delete('/usuarios/:id',
    deleteLimiter
    // auth
)

export default router