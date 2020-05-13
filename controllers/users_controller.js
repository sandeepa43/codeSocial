module.exports.profile = function(req,res){
return res.render('user_profile', {
    title:'User Profile'
})
}

//render the sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"codeSocial | SignUp"
    });
}
//render the sign in page
module.exports.signIn = function(req,res){
    return res.render('user_sing_in',{
        title:"codeSocial | signIn"
    });
}