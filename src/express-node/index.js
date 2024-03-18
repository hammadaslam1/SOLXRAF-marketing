const express = require('express')
const mongoose = require('mongoose')

export const app = express()


app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API is running.' })
})
mongoose.connect("mongodb://localhost/solxraf", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const port = process.env.PORT || 5500;

app.listen(port, () => console.log('Listening on port: ', port))


