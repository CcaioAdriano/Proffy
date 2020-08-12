//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//configurar nunjucks
const nunkucks = require('nunjucks')
nunkucks.configure('src/views', {
    express: server,
    noCache: true
})

//inicio da configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({extended: true}))
//configurar arquivos estáticos (css, scripts, imagens, etc...)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
 //start server
.listen(5500)