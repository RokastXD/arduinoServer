const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
    res.send("It's me, your site")
    console.log(res);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

