const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routers/todo');


const app = express();

app.use("/", todoRouter);

const uri = "mongodb://myuser:rqpx7XtdlBHH9IQD@ac-f7znhvp-shard-00-01.v3bamgn.mongodb.net:27017,ac-f7znhvp-shard-00-02.v3bamgn.mongodb.net:27017/TODO_workshop?ssl=true&authSource=admin&retryWrites=true&w=majority"

async function startserver(){
    try{
        await mongoose.connect(uri);
        console.log("mongodb connected");

        app.listen(3000, (err) =>{
        if(err){
            console.log(err);
        }
        console.log("server started");
    })
    }
    catch(err){
        console.log(err);
    }
}

startserver();