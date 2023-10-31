import express from 'express'
import bodyParser from 'body-parser'
import mongoose from "mongoose";
import Task from "./models/taskModel.js";
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI).then(() => console.log('connected to db')).catch(e => console.log(e));

app.post('/tasks', async (req, res) => {
    try {
        const task1 = new Task(req.body)
        await task1.save()
        res.json({message: 'Tâche ajoutée avec succès !', data: task1}).status(200)
    } catch (e) {
        res.send(e).status(500)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const result = await Task.find({})
        res.json({message: 'Recherche effectué avec succès !', data: result}).status(200)
    } catch (e) {
        res.status(500).send(e)
    }
})
app.get('/tasks/:id', async (req, res) => {
    try {
        if (!req.params.id) return res.status(404).send('id not found')
        const id = req.params.id
        const result = await Task.findById(id)
        res.json({message: 'Recherche effectué avec succès !', data: result}).status(200)
    } catch (e) {
        res.send(e).status(500)
    }
})

app.patch('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!id) return res.send('id not found').status(404)

        const update = await Task.findByIdAndUpdate(id, req.body)
        res.status(200).send(update)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!id) return res.status(404).send('id not found')

        await Task.findByIdAndDelete(id)
        res.status(200).send('deleted')
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})