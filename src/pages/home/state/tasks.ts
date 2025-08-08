import type { TaskType } from "../types";
import { listTasks } from "../services/localstorage/getSavedTasks";
import { generateID } from "shared/utils";
import { filterTasks, getFilter } from "./filter";

export const tasks: TaskType[] = listTasks();

export function getFilteredTasks() {
  return filterTasks(tasks, getFilter());
}

export function countPendingTasks(): number {
  return tasks.filter((task) => !task.completed).length;
}

export function toggleTaskCompletion(id: string, completed: boolean) {
  const task = tasks.find((task) => task.id === id);
  if (task) task.completed = completed;
}

export function removeTaskById(id: string) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index > -1) {
    tasks.splice(index, 1);
  }
}

export function addTaskToState(taskText: string) {
  tasks.push(createTask(taskText));
}

function createTask(taskText: string) {
  return {
    id: generateID(),
    task: taskText,
    completed: false,
  };
}
