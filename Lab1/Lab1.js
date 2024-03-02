const express = require('express')
const app = express()
const port = 3000
const portTwo = 3001

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(portTwo, () => {
    console.log(`Example app listening at http://localhost:${portTwo}`)
})

//Struggled here until I installed nodemon in this directory. I keep forgetting to do that!