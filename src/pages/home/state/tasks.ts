import type { TaskType } from "../types";
import { listTasks } from "../services/tasksStorage/getSavedTasks";
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
  if (!id) throw new Error("ID not found...");
  const task = tasks.find((task) => task.id === id);
  if (task) task.completed = completed;
}

export function getTaskById(id: string) {
  if (!id) throw new Error("ID not found...");
  return tasks.find((task) => task.id === id);
}

export function removeTaskById(id: string) {
  if (!id) throw new Error("ID not found...");
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
