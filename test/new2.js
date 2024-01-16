// controller 

const { User } = require("../models/userModel");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a User
    const newUser = new User({
        username: req.body.username,
        password_hash: req.body.password_hash,
        email: req.body.email
    });

    // Save User in the database
    newUser.create((err, result) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        else
            res.send(result);
    });
};
