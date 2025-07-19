MERN To-Do Application

A simple To-Do application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create, read, update, and delete tasks with an optional due time. The frontend uses plain CSS for styling, and tasks are stored in a MongoDB database.

Features





Add tasks with a description and optional due time (HH:mm format).



View a list of tasks with completion status and due time.



Edit task descriptions and due times.



Mark tasks as completed.



Delete tasks.



Responsive design with plain CSS.

Project Structure

mern-todo-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   └── TodoList.js
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   └── package.json
├── server/                 # Express backend
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   ├── index.js
│   └── package.json
└── README.md

Prerequisites





Node.js: v16 or later



MongoDB: Local installation or MongoDB Atlas account



npm: Included with Node.js



Browser: Modern browser supporting HTML5 time input (e.g., Chrome, Firefox)

Setup Instructions

1. Clone the Repository

git clone <repository-url>
cd mern-todo-app

2. Set Up the Backend





Navigate to the server directory:

cd server



Install dependencies:

npm install



Create a .env file in the server directory with your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Replace your_mongodb_connection_string with your MongoDB URI (e.g., mongodb://localhost:27017/tododb for local or a MongoDB Atlas URI).



Ensure package.json includes the start script:

"scripts": {
  "start": "node index.js"
}



Start the backend:

npm start

The server should run on http://localhost:5000.

3. Set Up the Frontend





Navigate to the client directory:

cd ../client



Install dependencies:

npm install



Ensure no Tailwind or PostCSS configurations remain:





Delete postcss.config.js and tailwind.config.js if they exist:

rm postcss.config.js tailwind.config.js



If you encounter issues with cached dependencies, clear them:

rm -rf node_modules package-lock.json
npm install



Start the frontend:

npm start

The app should open at http://localhost:3000.

4. Verify Setup





Open http://localhost:3000 in your browser.



Add a task with a description and optional time (e.g., "Buy groceries" at "14:30").



Test editing, completing, and deleting tasks.
