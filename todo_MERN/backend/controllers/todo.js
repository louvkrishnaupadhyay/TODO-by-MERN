const todo = require('../models/todo');

const createTodo = async (req, res)=>{
    try{
        const Todo = new todo(req.body);
        const result = await Todo.save();
        res.send({Status:"success", message:"Todo created successfully", result})
    }
    catch(error){
        res.send({Status:"error", message:"Todo creation failed", error})
    }
};
const getTodo = async (req, res)=>{
    try{
        const todos = await todo.find({});
        res.send({Status:"success", message:"Todo get successfully", todos})
    }
    catch(error){
        res.send({Status:"error", message:"Todo get failed", error})
    }
};
const updateTodo = async (req, res)=>{
    try{
        const id = req.body._id;
        //record find
        const Todo  = await todo.findById(id);
        //change set
        Todo.userName = req.body.userName;
        Todo.mobile = req.body.mobile;
        //save
        await Todo.save();

        res.send({Status:"success", message:"Todo update successfully"})
    }
    catch(error){
        res.send({Status:"error", message:"Todo update failed", error})
    }
};
const deleteTodo = async (req, res)=>{
    try{
        const id = req.body._id;
        //find record and DELETE
        const Todo = await todo.findByIdAndDelete(id);
        
        res.send({Status:"success", message:"Todo delete successfully"})
    }
    catch(error){
        res.send({Status:"error", message:"Todo delete failed", error})
    }
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };