'use strict'
const db = require('./mongo')
const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000

const domain = 'http://localhost:3000/'

app.get('/add/68ac2009-8bb1-4cb8-9ffe-4dca3d6dee51', (req, res) => {
    db.addUrl(req.query.url)
        .then(data => res.json({ url: domain + data }))
        .catch(err => console.log(err))
})

app.get('/:url', (req, res) => {
    db.getUrl(req.params.url)
        .then(result => res.json(result))
        .catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`running on port => ${PORT}`))