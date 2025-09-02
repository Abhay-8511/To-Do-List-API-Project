// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();


const todoRoutes = require('./routes/todo.routes');
const app = express();


app.use(cors());
app.use(express.json()); 


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch(err => {
        console.error('Connection error', err);
        process.exit();
    });


app.use('/api/todos', todoRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List API!');
});


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});