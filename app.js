const express = require('express')
require('./db/mongoose')

const port = process.env.PORT

const app = express()

app.use(express.json())

app.listen(port, () => {
    console.log('server listening on port ' + port)
})