// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// const usersController = require('../controllers/users_controller');

// router.get('/profile', usersController.profile);

// router.get('/sign-up', usersController.signUp);
// router.get('/sign-in', usersController.signIn);


// router.post('/create', usersController.create);

// // use passport as a middleware to authenticate
// router.post('/create-session', passport.authenticate(
//     'local',
//     {failureRedirect: '/users/sign-in'},
// ), usersController.createSession);

// module.exports = router;
 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;