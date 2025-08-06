import { TaskType } from "../types";
import { getTasksFromStorage } from "../services/localstorage/getSavedTasks";
import { generateID } from "shared/utils";

export const tasks: TaskType[] = getTasksFromStorage();

export function countPendingTasks(): number {
  return tasks.filter((task) => !task.completed).length;
}

export function toggleTaskCompletion(id: string, completed: boolean) {
  const task = tasks.find((task) => task.id === id);
  if (task) task.completed = completed;
}

export function addTaskToState(taskText: string) {
    tasks.push(createTask(taskText))
}

function createTask(taskText: string) {
  return {
    id: generateID(),
    task: taskText,
    completed: false,
  };
}