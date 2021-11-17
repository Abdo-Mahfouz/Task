const express = require("express")

const app = express()

const PORT = 3000

app.get('/', (req, res) => {

    res.send( body= 'Welcome to NodeJS Express Server!')
})

app.listen(PORT, hostname= ()  => {
    console.log( 'Example app listening at http://localhost:${PORT}')
})