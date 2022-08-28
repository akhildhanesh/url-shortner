'use strict'
const db = require('./mongo')
const express = require('express')
const app = express()


const PORT = process.env.PORT || 3000

app.get('/add', (req, res) => {
    db.addUrl(req.query.url)
        .then(shortLink => res.json({url: shortLink}))
        .catch(err => console.log(err))
})

app.get('/:url', (req, res) => {
    db.getUrl(req.params.url)
        .then(result => res.redirect(result))
        .catch(err => console.log(err))
})


app.listen(PORT, () => console.log(`running on port => ${PORT}`))