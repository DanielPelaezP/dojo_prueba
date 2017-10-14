var express = require('express');
var CodeBreaker = require('./main')

var app = express();
app.set('port',(process.env.PORT || 3000))

app.get('/setNumber/:secret', function (req,res){
  number = req.params.secret;
  CodeBreaker.setNumber(number);
  res.send({
    message: 'ok, let the game begin'
  });
});

app.get('/guess/:number', function(req,res){
  number = req.params.number;
  res.send({
    result: CodeBreaker.guess(number)
  });
});

app.listen(app.get('port'),function(){
  console.log('listening on port', app.get('port'))
});
