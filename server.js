import express from 'express'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', function (req, res) {
    res.json({message: 'Hello world!', type: 'post'})
})

app.listen(3333, function() {
    console.log('Server started')
})