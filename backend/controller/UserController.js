const user = require("../model/UserModel.js");
exports.get = function (req, res){
    res.send("Eu mostro o usuario");
};
exports.add = function(req, res){
    res.send("Eu crio um novo usuario");
};
exports.update = function(req, res){
    res.send("Eu atualizao um usuario");
};
exports.delete = function(req, res){
    res.send("Eu deleto um usuario");
};



