const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./ConnectDB');
const mongoose = require('mongoose');
require('dotenv').config();

const TaskRouter = require('./Routes/TaskRoutes');
// connect DB 
connectDB();



app.use(cors());
app.use(express.json());



app.use('/api/tasks', TaskRouter);


app.listen(process.env.port, () => {
    console.log(`server is running on port ${process.env.port}`);
})