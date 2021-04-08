// 7º importar o express e o router
const express = require('express');
// vai criar os caminhos
const routes = express.Router();

//caminho absoluto
// const basePath = __dirname + '/views';

// 14º Passo criar variáveis no html e enviar pela rota, como segundo parâmetro
const profile = {
  name: 'Dário',
  avatar: 'https://github.com/DarioJunior.png',
  'monthly-budget': 3000,
  'days-per-week': 5,
  'hours-per-day': 5,
  'vacation-per-year': 4
}

//17º Criando um array de jobs para guardar e mostrar na pagina inicial na rota /job
const jobs = [];

const views = __dirname + '/views/';
// 8º Criar as rotas
////13º Não vai mais enviar html pronto, vai passar pelo render -> template engine substituindo o sendFile por render
//// O EJS por padrão já procura a pasta views não precisa de __dirname
routes.get('/', (req, res) => res.render(views + 'index', { jobs }));
routes.get('/job', (req, res) => res.render(views + 'job'));
// 15º Criando mais rotas
routes.post('/job', (req, res) => {

  const lastId = jobs[jobs.length - 1]?.id || 1

  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    'dayly-hours': req.body['dayly-hours'],
    'total-hours': req.body['total-hours'],
    created_at: Date.now()
  })
  console.log(jobs)
  return res.redirect('/')
});
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile: profile }));


// 9º exportar as rotas
module.exports = routes;

