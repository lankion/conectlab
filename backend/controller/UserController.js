const Users = require("../model/UserModel.js");
const jwt = require('jsonwebtoken');
const secret = 'conectlabPassword';

exports.get = function (req, res, next){
    Users.find({},function (err, User){
        if(err){
            return next(err);;
        }
        res.json({
            status: "success",
            message: "Listados todos os usuários!",
            data: Users
        })
    })
};
exports.add = function(req, res, next){
    let user = new Users();
    console.log(req.body.completeName);
    user.completeName = req.body.completeName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.aceppt= req.body.aceppt;
    user.photo= false;
    user.save(function (err){
    if (err) {
        return next(err);
    }
    res.send("Usuário criado com sucesso!")
    })
};
exports.update = function(req, res){
    res.send("Eu atualizo um usuário.");
};
exports.delete = function(req, res){
    res.send("Eu deleto um usuário.");
};
exports.login = function(req, res) {
    const { email, password } = req.body;
    Users.findOne({ email }, function(err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Internal error please try again'
        });
      } else if (!user) {
        res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      } else {
        user.isCorrectPassword(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            const payload = { email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            res.localStorage('token', token, { httpOnly: true })
              .sendStatus(200);
          }
        });
      }
    });
}

exports.logout = function( req, res){
    res.send("Eu deslogo o usuário");
}