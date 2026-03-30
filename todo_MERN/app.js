const express = require('express');

const app = express();

app.listen(3000, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("server started");
});