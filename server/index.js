import express from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.json({data: req.body});
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
