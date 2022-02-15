const User = require("../model/UserModel.js");
exports.get = function (req, res, next){
    User.get(function (err, User){
        if(err){
            return next(err);;
        }
        res.json({
            status: "success",
            message: "Listado todos os usuários",
            data: User
        })
    })
};
exports.add = function(req, res, next){
    let user = new User();
    user.completeName = req.body.completeName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.aceppt= req.body.aceppt;
    user.photo= false;
    user.save(function (err){
    if (err) {
        return next(err);
    }
    res.send("Usuário criado com sucesso")
    })
};
exports.update = function(req, res){
    res.send("Eu atualizo um usuario");
};
exports.delete = function(req, res){
    res.send("Eu deleto um usuario");
};



