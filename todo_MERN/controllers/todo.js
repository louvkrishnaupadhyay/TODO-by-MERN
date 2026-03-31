const todo = require('../models/todo');

const createTodo = async (req, res)=>{
    res.send("User created")
};
const getTodo = async (req, res)=>{
    res.send("get created")
};
const updateTodo = async (req, res)=>{
    res.send("update created")
};
const deleteTodo = async (req, res)=>{
    res.send("delete created")
};

module.exports = { createUser, getTodo, updateTodo, deleteTodo };