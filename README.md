
# To-Do List Application

This is a simple **To-Do List Application** built with React and Node.js. The application allows users to create, view, update, and delete tasks. The backend uses a MongoDB database to store task information.

## Features

- **Create a Task**: Users can add new tasks to their to-do list.
- **View Tasks**: Displays a list of tasks stored in the database, with visual indicators for task completion.
- **Update Task Status**: Users can mark a task as completed or pending by clicking the respective icons.
- **Delete Task**: Users can remove tasks from the list.

## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Material UI Icons**: For UI elements like checkboxes, delete icons, and status indicators.

### Backend:
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing task data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js**
- **MongoDB**
  
### Steps to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AminNeji/todolist.git
   cd todolist
   ```

2. **Install dependencies for the backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Set up MongoDB:**
   Ensure MongoDB is running on your machine. You can use MongoDB Compass or any other MongoDB tool to view and manage your database.

4. **Set up environment variables:**
   Create a `.env` file in the backend folder and add the following:
   ```bash
   MONGO_URI=your-mongo-db-uri
   PORT=4000
   ```

5. **Start the backend server:**
   ```bash
   npm run start
   ```
   The backend server will run at `http://localhost:4000`.

6. **Install dependencies for the frontend:**
   Navigate back to the root folder and install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

7. **Start the frontend server:**
   ```bash
   npm start
   ```
   The frontend server will run at `http://localhost:3000`.

## API Endpoints

### Task Routes:

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/api/tasks`               | Get all tasks             |
| POST   | `/api/tasks/add`           | Add a new task            |
| PUT    | `/api/tasks/update/:id`    | Update task status        |
| DELETE | `/api/tasks/delete/:id`    | Delete a task             |

## Frontend Usage

1. **Add Task**: Type a task in the input field and click "Add" to create a new task.
2. **Mark Task as Completed**: Click the circle icon next to the task to toggle its completion status.
3. **Delete Task**: Click the delete icon to remove a task from the list.

## Project Structure

```
todolist/
│
├── backend/                # Backend folder
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes for tasks
│   ├── .env                # Environment variables
│   └── index.js           # Main backend server
│
├── frontend/               # Frontend folder
│   ├── src/                
│   │   ├── components/     # React components
│   │   ├── App.js          # Main React file
│   │   └── index.js        # Entry point for React
│   └── package.json        # Frontend dependencies
│
└── README.md               # Project readme
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

- **Mohamed Amin Neji**
