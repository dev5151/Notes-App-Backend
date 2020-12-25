const user=require('../models/user.model');

//Create a new user
exports.create=(req,res)=>{
    if(!req.body.username) {
        return res.status(400).send({
            message: "User details can not be empty"
        });
    }

    
        const user=new user({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        });

        user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};

//Check if a username already exists or not 
exports.checkIfUserExists=(req,res)=>{
    if(!req.)
}