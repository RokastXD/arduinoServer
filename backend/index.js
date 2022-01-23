const express = require('express')
const app = express()
const port = 3000

let hum
let tem

app.use(express.json())
app.use(express.static('public'))

app.post('/', (req, res) => {
    if (req.body.parol == 'dferv5tgh6yjju7mik,80p;-[=-0o9i8u7y6t56y7yui89iol0p;-0.[0oedrftgyjhuol98iu76yert54ftghyjuikoi9u8u7jrf4e5ttty67uuuik8uj7yrh6tg5r54ery67ujjjolkedwsfrgtttyjhujiop') {
        res.sendStatus(200)
        hum = req.body.hum
        tem = req.body.tem
    } else {
        res.sendStatus(401)
    }
})

//`Hum - ${hum} | Temperature - ${tem}`

app.get('/sensors/', function (req, res) {
    res.send( {hum, tem} )
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
