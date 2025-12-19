let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

const taskList = document.getElementById("taskList");
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");

form.addEventListener("submit", e => {
  e.preventDefault();
  tasks.push({ text: input.value, completed: false });
  input.value = "";
  saveAndRender();
});

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
  updateStats();
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks
    .filter(t => filter === "all" || (filter === "completed" && t.completed) || (filter === "active" && !t.completed))
    .forEach((task, index) => {
      const li = document.createElement("li");
      if (task.completed) li.classList.add("completed");

      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button onclick="toggleTask(${index})">✔</button>
          <button onclick="deleteTask(${index})">✖</button>
        </div>
      `;
      taskList.appendChild(li);
    });
}

function toggleTask(i) {
  tasks[i].completed = !tasks[i].completed;
  saveAndRender();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  saveAndRender();
}

function updateStats() {
  document.getElementById("total").textContent = `Total: ${tasks.length}`;
  document.getElementById("completed").textContent =
    `Completed: ${tasks.filter(t => t.completed).length}`;
}

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderTasks();
  });
});

document.getElementById("clearCompleted").onclick = () => {
  tasks = tasks.filter(t => !t.completed);
  saveAndRender();
};

// Keyboard shortcut (Enter already works)
saveAndRender();
