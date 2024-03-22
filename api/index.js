import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// dotenv.config()

// mongoose.connect(process.env.MONGO_COMPASS)

mongoose.connect('mongodb://localhost:27017/solXraf', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connected')).catch(() => console.log('failed to connect')).finally(() => console.log('start'));


const app = express()

app.listen(3001, () => {
    console.log('server is running on the port 3001!');
}) 