module.exports.login = function(app,req, res){
    res.render("index",{ validacao : {} });
}

module.exports.home = function(app,req, res){
    res.render("home/home",{ validacao : {} });
}