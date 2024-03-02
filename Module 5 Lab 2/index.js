const testRoutes =
require('./routes/myTestRoutes');

const express = require('express')
const app = express()
const port = 3000
const portTwo = 3001

app.use('/mytest', testRoutes);

app.use('/', express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(portTwo, () => {
    console.log(`Example app listening at http://localhost:${portTwo}`)
})

const calculatorRoutes =
require('./routes/calculatorRoutes');

app.use('/calculator', calculatorRoutes)


//I receive an error here saying "router is not defined" in  router.get('/add', (req, res) => , which must be in calculatorRoutes.js