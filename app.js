const express = require('express');

const app = express();

const BASE_ROUTES = '/api/v1/';

const { userRouter } = require('./routes');
const { productRouter } = require('./routes');



const PORT = 5000;

// MIDDLEWARES
// express middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// middlewares based on routes created
app.use(BASE_ROUTES, userRouter);
app.use(BASE_ROUTES, productRouter);



app.get(BASE_ROUTES, (req, res) => {
    res.send("Una weldone oooo");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});