const express = require('express')
const app = express()
const path = require('path')
const PORT = 5000

//подключаем движок ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//static folder этой командой мы подключили наш шаблон из папки public со всеми его ресурсами
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (rec, res) => {
    res.render('index', {
        title: 'Hello',
        date: new Date().getFullYear(),
        arr: ['123', '456']
    })
})

//
app.get('/*', (rec, res) => {
    res.render('404')
})

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT)
})