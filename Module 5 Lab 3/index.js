const express = require('express')
const calculatorRoutes = require('./routes/calculatorRoutes');
const testRoutes = require('./routes/myTestRoutes');
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.use('/calculator', calculatorRoutes)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


//I receive an error here saying "router is not defined" in  router.get('/add', (req, res) => , which must be in calculatorRoutes.js

