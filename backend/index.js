const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const connectDB = require('./ConnectDB');
require('dotenv').config();

const TaskRouter = require('./Routes/TaskRoutes');

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', TaskRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
  });
}

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});