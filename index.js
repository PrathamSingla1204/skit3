const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 8000;
const db = require('./config/mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else
        console.log("SUccessfully running on Port No:",port);
    
});
