const express = require('express'); //a web framework for routing
const passport = require('passport');
const User = require('../models/userModel');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
    res.render('login');
});

authRouter.get('/register', (req, res) => {
    res.render('register');
})

authRouter.post('/register', (req, res) => {
    let newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user)=> {
        if(err) {
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, () => {
            res.redirect('/admin');
        })
    })
});

authRouter.post('/', passport.authenticate("local", 
{ 
    successRedirect: "/admin",
    failureRedirect: "/"
}), (req, res) => {});

authRouter.get('/logout', (req, res) => {
    req.logout();
    req.session.user = '';
    res.redirect('/');
})


module.exports = authRouter;