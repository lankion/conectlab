const User = require("../model/UserModel.js");
exports.get = function (req, res){
    User.get(function (err, User){
        if(err){
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Listado todos os usuários",
            data: User
        })
    })
};
exports.add = function(req, res){
    let user = new User();
    user.completeName = req.body.completeName;
    user.email = req.body.email;
    user.aceppt= req.body.aceppt;
    user.photo= false;
    user.save(function (err){
        if (err)
        res.json(err);
        res.json({
            message: "Novo usuário craido",
            data: user,
        })
    });
};
exports.update = function(req, res){
    res.send("Eu atualizao um usuario");
};
exports.delete = function(req, res){
    res.send("Eu deleto um usuario");
};



