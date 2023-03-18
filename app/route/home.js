module.exports = function(app){
app.post('/home',function(req,res){
    app.app.controllers.index.home(app,req,res);
});
}