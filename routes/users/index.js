const express = require('express');

const userRouter = express.Router();


// GET all users route
userRouter.get('/users', (req, res) => {
    res.status(200).send("Hello! from this side of the world...");
});


// GET users by id
userRouter.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: `User with id ${id} was found`,
    });
});

// POST - to create new users
userRouter.post('/users', (req, res) => {
    const {name, email, password} = req.body;

    res.status(201).json({
        message: 'User created successfully',
        user: {
            name,
            email,
            password
        }
    });
});

module.exports = userRouter;
