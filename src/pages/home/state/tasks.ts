import type { TaskType } from "../types";
import { listTasks } from "../services/tasksStorage/getSavedTasks";
import { generateID, signals } from "shared";
import { filterTasks, getFilter } from "./filter";

export const tasks = signals<TaskType[]>(listTasks());

export function getFilteredTasks() {
  return filterTasks(tasks.get(), getFilter());
}

export function countPendingTasks(): number {
  return tasks.get().filter((task) => !task.completed).length;
}

export function toggleTaskCompletion(id: string, completed: boolean) {
  if (!id) throw new Error("ID not found...");
  tasks.set(
    tasks.get().map(task => {
      task.id === id ? { ...task, completed } : task
    })
  )
}

export function getTaskById(id: string) {
  if (!id) throw new Error("ID not found...");
  return tasks.get().find((task) => task.id === id);
}

export function removeTaskById(id: string) {
  if (!id) throw new Error("ID not found...");
  tasks.set(
    tasks.get().filter(task => task.id !== id)
  )
}

export function addTaskToState(taskText: string) {
  tasks.set([...tasks.get(), createTask(taskText)])
}

function createTask(taskText: string) {
  return {
    id: generateID(),
    task: taskText,
    completed: false,
  };
}
