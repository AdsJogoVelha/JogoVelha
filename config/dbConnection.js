var mysql = require('mysql2');
var env = require('env');

var connMySQL = function(){
	console.log('Conexao com bd foi estabelecida');
	try{
		return mysql.createConnection({
			host : env.MYSQL_HOST,
			user : env.MYSQL_USER,
			password : env.MYSQL_PASSWORD,
			database : env.MYSQL_DB_NAME
		});
	}catch(s){
	console.log("erro ao se comunicar com o banco: <br><br>" + s);
	}
	

}

module.exports = function () {
	return connMySQL;
}
