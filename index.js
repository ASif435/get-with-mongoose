const express = require('express');
const mongoose = require('mongoose');
const app= express();

//express app initilization
app.use(express.json());

//get Router
const todoHandler = require("./routeHandler/todohandler")
//get blog router 
const blogHandler = require("./routeHandler/blog");





//database connet with mongoose 
const mongodbUrl = "mongodb+srv://mongo:mongo1234@cluster0.okztc.mongodb.net/mongoose?retryWrites=true&w=majority"
mongoose.connect(mongodbUrl,{
     useNewUrlParser: true ,useUnifiedTopology: true 
})
.then(()=>{
    console.log('database connet successfully')
})
.catch((err)=>{
    console.log(err)
})


//application router
app.use('/',todoHandler);

//blog items get
app.use('/blog',blogHandler)
//default error handler
function errorHanle(req,res,err,next){
    if(res.headerSent){
        return next(err);
    }
    res.send(500).json({erorr:err})
}

app.listen(3000,()=>{
    console.log("server runing by 3000 port")
})