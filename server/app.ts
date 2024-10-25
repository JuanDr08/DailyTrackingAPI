import express from "express"
import cors from "cors"
import userRouter from "./infrastructure/routes/userRouter"
import activityRouter from "./infrastructure/routes/activityRouter"
import { ConnectToDatabase } from "./infrastructure/database"

const startApp = async () => {

    const db = new ConnectToDatabase()
    await db.connectOpen()
    const app = express()
    app.use(cors())

    const PORT = process.env.PORT || 3000

    app.use('/', (_req, _res, next) => {
        console.log('Hello World!')
        next()
    })
    app.use('/usuario', userRouter)
    app.use('/activities', activityRouter)

    app.use((_req, res, next) => {
        res.status(404).send('Page not found')
        next()
    })


    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

}

startApp()
