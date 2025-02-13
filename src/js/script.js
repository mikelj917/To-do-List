let tasks = [];
// Filtragem de tarefas pelos botão
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", (event) => {
        const filterType = event.target.dataset.filter;
        document.querySelectorAll(".filter-btn").forEach(button => button.classList.remove("active"));
        event.target.classList.add("active");
        renderTasks(filterType)
    });
});
// Espera carregar a página para pegar as tasks do localStorage
document.addEventListener("DOMContentLoaded", () => {
    const savedTasks = localStorage.getItem("tasks");
    tasks = savedTasks ? JSON.parse(savedTasks) : [];
    renderTasks("all");
    countTasks();
});
// Salva as tasks do array no localStorage
function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
// Atualiza o display das tasks, filtra elas e cria um elemento li para cada uma
function renderTasks(filter = "all") {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(task => {
        if(filter === "all") return true;
        if(filter === "pending") return !task.completed;
        if(filter === "completed") return task.completed;

    });

    filteredTasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <input 
                type="checkbox" 
                class="complete-checkbox" 
                ${task.completed ? 'checked' : ''}
                data-index="${index}"
            >
            <span class="task-text">${task.task}</span>
            <div class="actions">
                <button class="edit-btn" data-index="${index}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}
// Adiciona uma nova tarefa
document.getElementById("addTaskBtn").addEventListener("click", () =>{
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if(taskText === "") {
        return alert("Digite uma tarefa...")
    }

    tasks.push({
        task: taskText,
        completed: false
    });

    saveTask();
    activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
    renderTasks(activeFilter);
    countTasks();

    taskInput.value = "";
});



// Muda o completed da task para false ou true dependendo se a checkbox foi clicada
taskList.addEventListener("change", (event) =>{
    if(event.target.classList.contains("complete-checkbox")) {
        const index = event.target.dataset.index;
        tasks[index].completed = !tasks[index].completed;

        saveTask();
        activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
        renderTasks(activeFilter);
        countTasks();
    }
});
// Botão de editar o texto
let isEditing = false;
taskList.addEventListener("click", (event) => {
    const editBtn = event.target.closest(".edit-btn");

    if (editBtn && !isEditing) {
        const index = editBtn.dataset.index;
        const taskSpan = editBtn.closest(".task-item").querySelector(".task-text");

        const input = document.createElement("input");
        input.type = "text";
        input.value = taskSpan.innerText;

        taskSpan.replaceWith(input);
        input.focus();

        isEditing = true;

        input.addEventListener("blur", () => {
            taskSpan.innerText = input.value;
            input.replaceWith(taskSpan);

            tasks[index].task = input.value;
            saveTask();

            isEditing = false;
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                input.blur();
            }
        });
    }
});
//botão que remove o elemento da tela
taskList.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".delete-btn");
    if(deleteBtn) {
        const index = event.target.dataset.index;
        tasks.splice(index, 1);

        saveTask();
        activeFilter = document.querySelector(".filter-btn.active").dataset.filter;
        renderTasks(activeFilter);
        countTasks();
    }
});
// Função que conta as tasks que não foram concluídas
function countTasks() {
    const pendingTasks = tasks.filter(task => !task.completed).length;
    document.getElementById("counter").innerHTML = `${pendingTasks} tarefas restantes`;
}