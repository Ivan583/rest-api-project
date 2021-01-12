const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [{
    id: 1,
    name: "User",
    value: "8-921-100-20-30",
    marked: false
}]

// Эти методы должны завершать файл
app.use(express.static(path.resolve(__dirname, 'client')))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started on port 3000...'))
