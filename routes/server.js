const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const expresslayout = require('express-ejs-layouts')
const PORT = process.env.PORT || 3020

app.get('/', (req, res) => {
    res.render('home')
})

//set Template engine
app.use(expresslayout)
app.set('views',path.join(_dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`)
}) 