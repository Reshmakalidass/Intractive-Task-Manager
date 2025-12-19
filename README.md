# Intractive-Task-Manager
A fully functional task management system built using HTML, CSS, and JavaScript. Features include task creation, deletion, completion tracking, filters, statistics, and persistent storage using localStorage. The application follows modular design and best practices for DOM manipulation and event handling.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Task Manager</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">
  <h1>Task Manager</h1>

  <!-- Add Task -->
  <form id="taskForm">
    <input type="text" id="taskInput" placeholder="Enter task..." required>
    <button>Add</button>
  </form>

  <!-- Filters -->
  <div class="filters">
    <button data-filter="all" class="active">All</button>
    <button data-filter="active">Active</button>
    <button data-filter="completed">Completed</button>
  </div>

  <!-- Stats -->
  <div class="stats">
    <span id="total">Total: 0</span>
    <span id="completed">Completed: 0</span>
  </div>

  <!-- Task List -->
  <ul id="taskList"></ul>

  <button id="clearCompleted">Clear Completed</button>
</div>

<script src="script.js"></script>
</body>
</html>
