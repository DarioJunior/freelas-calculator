// 7º importar o express e o router
const express = require('express');
// vai criar os caminhos
const routes = express.Router();

//caminho absoluto
// const basePath = __dirname + '/views';

// 14º Passo criar variáveis no html e enviar pela rota, como segundo parâmetro
const profile = {
  name: 'Dário',
  avatar: 'https://avatars.githubusercontent.com/u/53787626?v=4',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4
}


const views = __dirname + '/views/';
// 8º Criar as rotas
////13º Não vai mais enviar html pronto, vai passar pelo render -> template engine substituindo o sendFile por render
//// O EJS por padrão já procura a pasta views não precisa de __dirname
routes.get('/', (req, res) => res.render(views + 'index'));
routes.get('/job', (req, res) => res.render(views + 'job'));
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile: profile }));


// 9º exportar as rotas
module.exports = routes;

