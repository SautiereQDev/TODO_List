import express from 'express';
import Task from "../models/taskModel.js";
import "mongoose";

export const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const task1 = new Task(req.body)
        await task1.save()
        res.json({message: 'Tâche ajoutée avec succès !', data: task1}).status(200)
    } catch (e) {
        res.send(e).status(500)
    }
})

router.get('/', async (req, res) => {
    try {
        const result = await Task.find({})
        res.json({result}).status(200)
    } catch (e) {
        res.status(500).send(e)
    }
})
router.get('/:id', async (req, res) => {
    try {
        if (!req.params.id) return res.status(404).send('id not found')
        const id = req.params.id
        const result = await Task.findById(id)
        res.json({result}).status(200)
    } catch (e) {
        res.send(e).status(500)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!id) return res.send('id not found').status(404)

        const update = await Task.findByIdAndUpdate(id, req.body)
        res.status(200).send(update)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!id) return res.status(404).send('id not found')

        await Task.findByIdAndDelete(id)
        res.status(200).send('deleted')
    } catch (e) {
        res.status(500).send(e)
    }
})

router.delete('/', async (req, res) => {
    try {
        await Task.deleteMany({})
        res.status(200).send('all database deleted');
    } catch (e) {
        res.status(500).send(e);
    }
})

export default router;