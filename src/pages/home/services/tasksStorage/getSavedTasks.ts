function getTasksFromStorage() {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks;
}

export function listTasks() {
  const savedTasks = getTasksFromStorage();
  return savedTasks ? JSON.parse(savedTasks) : [];
}
