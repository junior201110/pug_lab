var express = require('express');
var app = module.exports = express();
var expressLess = require('express-less');
var pug = require('pug');


app.set('views', './src/views')
app.set('view engine', 'pug')

app.use('/assets/css', expressLess(__dirname + '/src/assets/less', { compress: true }));
app.use('/assets/img', express.static(__dirname + '/src/assets/img'));
app.use('/assets/fonts', express.static(__dirname + '/src/assets/fonts'));

app.get('/', function(req, res) {
  try{
    res.render('index', { title: 'Pug - Hands ON', message:{title: 'Olá Mundo!', message: 'Esse é um template BEM SIMPLES, só para servir de base para o nosso laboratório de Pug. Se você está lendo essa mensagem é porque todas as dependencias estão rodando. Parabéns!'}})
  }catch(e){
    res.status(500).send(e.toString() + JSON.stringify(process.env, null,4))
  }
  });

app.listen( process.env.PORT || 8080, function () {
  console.log('Example app listening on port 3000!');
});
