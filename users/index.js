const express = require('express')
const router = express.Router()
const path = require('path')
const basePath = path.join(__dirname)

router.use(
    express.urlencoded({
        extended: true,
    }),
)
router.use(express.json())


var checkAuth = function (req, res, next){
    req.authStatus = true

    if (req.authStatus){
        console.log('Está Logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faça login')
    }
    }
router.use(checkAuth)

router.get('/add', (req, res) => {
    const add = req.params.add
    res.sendFile(`${basePath}/form.html`)
    console.log(`Estamos buscando usuário ${add}`)
})

router.post('/save', (req, res) =>{
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(name)
    console.log(age)
})

router.get('/:id', (req, res) => {
    console.log(`Estamos buscando o usuário: ${req.params.id}`)
    res.sendFile(`${basePath}/form.html`)
})

 module.exports = router