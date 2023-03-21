module.exports = function(app){
app.get('/',function(req,res){
    app.app.controllers.index.login(app,req,res);
});

app.post('/',function(req,res){
    app.app.controllers.index.validacao(app,req,res);
});


app.post('/home',function(req,res){
    app.app.controllers.index.home(app,req,res);
});

app.get('/playerOneWins',function(req,res){
    app.app.controllers.index.playerOneWins(app,req,res);
});

app.get('/playerTwoWins',function(req,res){
    app.app.controllers.index.home(app,req,res);
});


}