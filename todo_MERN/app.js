const express = require('express');

const app = express();

//POST
app.post('/', (req, res) => {
    res.send("post method called");
});
//GET
app.get('/',(req,res)=>{
    res.send("get method called");
});
//PUT
app.put('/',(req,res)=>{
    res.send("update method called");
});
//DELETE
app.delete('/',(req,res)=>{
    res.send("delete method called");
});

app.listen(3000, (err) =>{
    if(err){
        console.log(err);
    }
    console.log("server started");
});