import { Telegraf, Telegram } from "telegraf";
import express from "express";
const app = express()
const port = 3000
const token = "5204200238:AAGCRi5Holx3pszEruYDxVdNCMj2iM0gyvw"
const bot = new Telegraf(token)
const telegram = new Telegram(token)

let hum; let tem; let mq7; let currentPeople
let chatId
let flag = true
let interval

app.use(express.json())
app.use(express.static('public'))

app.post('/', (req, res) => {
    if (req.body.parol == 'dferv5tgh6yjju7mik,80p;-[=-0o9i8u7y6t56y7yui89iol0p;-0.[0oedrftgyjhuol98iu76yert54ftghyjuikoi9u8u7jrf4e5ttty67uuuik8uj7yrh6tg5r54ery67ujjjolkedwsfrgtttyjhujiop') {
        res.sendStatus(200)
        hum = req.body.hum
        tem = req.body.tem
        mq7 = req.body.mq7
        currentPeople = req.body.persons        
        console.log(mq7, flag);
        if (chatId && mq7 > 800 && flag) {
            telegram.sendMessage(chatId, 'Fire safety threat!')
            flag = false
        }
        if (mq7 > 800 && !interval) {
            interval = setInterval(() => { flag = true }, 50000)
        }
        if (mq7 < 800 && interval) {
            clearInterval(interval)
        }
    } else {
        res.sendStatus(401)
    }
})


app.get('/sensors/', (req, res) => {
    res.send( {hum, tem, currentPeople, mq7} )
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

// Telegram bot
bot.start((ctx) => ctx.reply('Welcome, write /status or /gas for information'))
bot.command('status', (ctx) => ctx.reply(`Condition of this room - Humidity: ${hum}, Temperature: ${tem} \n Peoples in room: ${currentPeople}`))
bot.command('gas', (ctx) => ctx.reply(`CO2 is in the room: ${mq7}`))
bot.on('text', (ctx) => {
    chatId = ctx.message.chat.id
    ctx.telegram.sendMessage(ctx.message.chat.id, 'Yes?')
})

bot.launch()