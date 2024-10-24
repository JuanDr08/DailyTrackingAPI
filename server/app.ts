import express from "express"
import cors from "cors"
import userRouter from "./infrastructure/routes/userRouter"
import activityRouter from "./infrastructure/routes/activityRouter"
import { ConnectToDatabase } from "./infrastructure/database"

new ConnectToDatabase();

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/user', userRouter)
app.use('/activities', activityRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
