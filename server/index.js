import express from 'express'
import mongoose from "mongoose";
import taskRouter from './routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import fs from "fs";
dotenv.config()

const app = express()

const accessLogStream = fs.createWriteStream('./Logs/.log', { flags: 'a' })

app
    .use(morgan('combined', {stream: accessLogStream}))
    .use(cors())
    .use(express.json())
    .use('/tasks', taskRouter)

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('connected to db')).catch(e => console.log(e));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
