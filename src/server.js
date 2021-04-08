//1º Passo
const express = require('express');

//10º Passo importar as Rotas
const routes = require('./routes');

//2º Passo
const server = express();

// 12 Passo configurando uso de Template Engine e renomear os arquivos html para .ejs
server.set('view engine', 'ejs');

// 5º Passo - Habilita os arquivos estáticos // middleware
server.use(express.static('public'));

// 4º Criando Rotas && Request/Response  
//// 6º Criando Rotas em um arquivo externo router.js
// server.get('/', (req, res) => {
//   return res.sendFile(__dirname + '/views/index.html');
// })

// 16º Habilitar o Body da Requisição  >>>
server.use(express.urlencoded({ extended: true }))



//11º Passo usar as Rotas
server.use(routes);

// 3º Passo - Abrindo a porta
server.listen(3000, () => console.log('Server is running...'))
