const express = require('express')
const path = require('path')
const port = 8091
// const view = './static/views'

const app = express()

// app.set('views', view)
// app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '../static')))

// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })

app.get('/ok', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log('node is listening at http://localhost:' + port)
})