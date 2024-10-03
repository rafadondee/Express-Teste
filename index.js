const express = require('express') //criamos a constante express e chamamos ela
const app = express()
const port = 5000 //variável ambiente - porta padrão 

const path = require('path')
const users = require('./users')

const basepath = path.join(__dirname)

app.use('/users', users)

app.get('/', (req, res) => {
 res.sendFile(`${basepath}/index.html`)

}) 


app.listen (port, () => {
 console.log(`App está rodando na porta ${port}`)

} )