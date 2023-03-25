module.exports.login = function(app,req, res){
    res.render("index",{ erro : {} });
}

module.exports.validacao = function(app,req, res){
   
    var dadosForm = req.body;
    const today = new Date();

    req.assert('apelido','O apelido deve conter mais de 5 à 10 caracteres').len(5,10);
    var erro = req.validationErrors();

    if(erro){
        res.render('index', {
            erro: erro,
            dadosForm: dadosForm
        });
        return;
    }
    
    //Cadastrando usuario/apelido no banco de dados
    var connection = app.config.dbConnection();
    
    //verificando se o apelido do usuário já não está cadastrado
 connection.query('select * from usuarios where nome = ?', dadosForm.apelido, function(err, result) {
 

     
     if(result > 0) {
   
        res.render('index', {
            erro: {msg: "Er"}
        });
        return;
    }else{

    }
 
 });





var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;


 var apelido = app.app.models.index;
 var usuario = {
     nome: dadosForm.apelido,
     data: dataAtual
 }
    //Add o apelido do usuário em uma variavel de ambiente
    req.session.usuario = dadosForm.apelido;
    var resultado = '';


    console.log("tudo certo!");
    //Se não tiver, cadastra
   // connection.query('INSERT INTO usuarios SET ?', dadosForm.apelido);

    res.render("home/home",{ usuario :dadosForm});
 
}

module.exports.home = function(app,req, res){
    res.render("home/home",{ validacao : {} });
}


module.exports.playerOneWins = function(app,req, res){
     //Cadastrando usuario/apelido no banco de dados
     var connection = app.config.dbConnection();
     var RegistroPlacar = app.app.models.index;

     RegistroPlacar.inserirPlacar(usuario,connection, function(erro,result){
        res.render("home/home",{ usuario :dadosForm});
    })

    res.render("home/home",{ validacao : {} });
}


