const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else
        console.log("SUccessfully running on Port No:",port);
    
});