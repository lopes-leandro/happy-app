const express = require('express');
const server = express();
const path = require('path')
const pages = require('./pages')
const port = process.env.PORT || 3000;
server
// utilizando os arquivos estáticos
.use(express.static('public'))

// utilizar body da request
.use(express.urlencoded({extended: true}))

// configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// criar a rota
.get('/', pages.index)
.get('/orphanages', pages.orphanages)
.get('/orphanage', pages.orphanage)
.get('/create-orphanage', pages.create_orphanages)
.post('/save-orphanage', pages.save_orphanage)

server.listen(port, console.log(`servidor executando na porta ${port}`));