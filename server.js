const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve('pages'))

app.get("/", (request, response) => {
    response.render('home')
})

app.listen(8989, () => {
    console.log('http://localhost:8989')
})