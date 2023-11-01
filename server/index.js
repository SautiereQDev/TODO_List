import express from 'express'
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import taskRouter from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use('/tasks', taskRouter);
mongoose.connect(process.env.MONGODB_URI).then(() => console.log('connected to db')).catch(e => console.log(e));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})