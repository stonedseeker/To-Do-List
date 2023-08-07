import express from "express";
import bodyParser from "body-parser";
import fs from 'fs'

const app = express()
const port = 3000

const listItem = []
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index.ejs', {
        todo : listItem.pop()
    })
    console.log(listItem)
})

app.post('/addNew', (req, res) => {
    console.log(req.body)
    var Task = req.body['taskDescription']
    listItem.push(Task)
    res.render('index.ejs', {
        todo: listItem
    })
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
} )