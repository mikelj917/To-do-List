const filterBtnStates = {
  idle: "cursor-pointer rounded-md bg-zinc-200 px-4 py-1 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-300",
  active: "cursor-pointer rounded-md bg-green-500 px-4 py-1 text-sm font-medium text-white transition-colors",
}
const taskElementStates = {
  pending: "flex items-center rounded-lg bg-zinc-200/30 p-3",
  completed: "flex items-center rounded-lg bg-green-100/80 p-3 line-through opacity-70",
}
let tasks = [];

document.addEventListener("DOMContentLoaded", initializeApp());

function initializeApp() {
  setupFilter();
  setupAddTask();
}

function setupAddTask() {
  document.getElementById("addTask-btn").addEventListener("click", () => {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      return alert("Digite uma tarefa...")
    }

    addTask(taskText);
    renderTasks();
    taskInput.value = "";
  });
}

function addTask(taskText) {
  tasks.push({
    task: taskText,
    completed: false
  })
}

function setupFilter() {
  const filterBtns = document.querySelectorAll("#filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((btn) => {
        btn.dataset.active = false;
        btn.className = filterBtnStates.idle;
      });

      btn.dataset.active = true;
      btn.className = filterBtnStates.active;

      const filter = btn.dataset.filter;
      renderTasks(filter);
    });
  })
}

function filterTasks(filter = "all") {
  return tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  })
}

function renderTasks(filter) {
  const taskList = document.getElementById("tasksList");
  const filteredTasks = filterTasks(filter);
  taskList.innerHTML = "";

  filteredTasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    taskElement.className = `${task.completed ? taskElementStates.completed : taskElementStates.pending}`
    taskElement.innerHTML = `
      <input
        type="checkbox"
        class="complete-checkbox mr-3 cursor-pointer"
        data-index="${index}"
        ${task.completed ? "checked" : ""}
      />
      <span>${task.task}</span>
      <div class="flex grow-1 justify-end gap-2">
        <button class="cursor-pointer rounded-sm bg-blue-400 px-2 py-1" data-index="${index}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button class="cursor-pointer rounded-sm bg-red-500 px-2 py-1" data-index="${index}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>`

      taskList.appendChild(taskElement);
      setupToggleCheckbox();
      countTasks();
  })
}

function setupToggleCheckbox() {
  const checkboxes = document.querySelectorAll(".complete-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const index = event.target.dataset.index;
      tasks[index].completed = event.target.checked;

      renderTasks();
    })
  })
}

function countTasks() {
  const pendingTasks = tasks.filter(task => !task.completed).length;
  document.getElementById("counter").innerHTML = pendingTasks;
}