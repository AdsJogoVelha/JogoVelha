module.exports = function(){
    this.inserirUsuario = function(Usuario, connection, callback){
        
    }

    this.inserirPlacar = function(Usuario, connection, callback){
        connection.query('SELECT * FROM placar where login = ?',Usuario.usuario, callback);
        console.log("Model callback -> " + callback);
        
    }


    return this;
}