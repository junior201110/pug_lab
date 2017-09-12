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
    res.send(JSON.stringify(process.env, null, 4))
  }catch(e){
    res.set("content-type", "application/json")
    res.status(500).send(e.toString())
  }
  });

app.listen( process.env.PORT || 8080, function () {
  console.log('Example app listening on port 3000!');
});
