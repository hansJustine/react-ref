const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const itemRoutes = require('./routes/api/items');

const port = process.env.PORT || 5000;
const uri = process.env.DATABASE || 'mongodb://localhost/mern-practice'
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(cors());

mongoose
    .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

app.use('/api/items', itemRoutes);  

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});   