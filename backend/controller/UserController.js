const User = require("../model/UserModel");
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
    let user = new User({
    completeName : req.body.completeName,
    email : req.body.email,
    password : req.body.password,
    aceppt : req.body.aceppt,
    photo  : false,
    });
    console.log("Tou no back" + user);
    user.save(function (err){
    if (err) {
        return next(err);
    }
    res.send({
        menssage: "Usuário criado com sucesso", 
        data: user})
    })
};
exports.update = function(req, res){
    res.send("Eu atualizo um usuario");
};
exports.delete = function(req, res){
    res.send("Eu deleto um usuario");
};



