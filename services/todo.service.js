
const Todo = require('../models/todo.model');


exports.getAllTodos = async () => {
    return await Todo.find();
};


exports.getTodoById = async (id) => {
    return await Todo.findById(id);
};


exports.createTodo = async (todoData) => {
    const todo = new Todo(todoData);
    return await todo.save();
};


exports.updateTodo = async (id, updateData) => {

    return await Todo.findByIdAndUpdate(id, updateData, { new: true });
};


exports.deleteTodo = async (id) => {
    return await Todo.findByIdAndDelete(id);
};