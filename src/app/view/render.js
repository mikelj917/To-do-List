import { getActualFilter, filterTasks, countTasks } from "../tasks/index.js";
import { taskElementStates } from "../state/index.js";
import { saveTasks } from "../services/saveTasks.js";

export function renderTasks() {
  const filteredTasks = filterTasks(getActualFilter());

  const taskList = document.getElementById("tasksList");
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  })

  countTasks();
  saveTasks();

  function createTaskElement(task) {
    const taskElement = document.createElement("li");
    taskElement.className = `${task.completed ? taskElementStates.completed : taskElementStates.pending}`
    taskElement.innerHTML = `
      <input
        type="checkbox"
        class="complete-checkbox mr-3 cursor-pointer"
        data-id="${task.id}"
        ${task.completed ? "checked" : ""}
      />
      <span class="grow-1">${task.task}</span>
      <div class="flex justify-end gap-2">
        <button class="confirm-btn cursor-pointer rounded-sm bg-green-500 px-2 py-1 hidden hover:bg-green-400" data-id="${task.id}">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="white"
            class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </button>
        <button class="cancel-btn cursor-pointer rounded-sm bg-red-500 px-2 py-1 hidden hover:bg-red-400" data-id="${task.id}">
          <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="white"
            class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

        </button>
        <button class="edit-btn cursor-pointer rounded-sm bg-blue-500 px-2 py-1 hover:bg-blue-400" data-id="${task.id}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            class="size-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0
                0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
          </svg>
        </button>
        <button class="delete-btn cursor-pointer rounded-sm bg-red-500 px-2 py-1 hover:bg-red-400" data-id="${task.id}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772
              5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964
              0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>`

    return taskElement;
  }
}