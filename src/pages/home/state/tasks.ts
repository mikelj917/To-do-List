import { TaskType } from "../types";
import { getTasksFromStorage } from "../services/localstorage/getSavedTasks";

export const tasks: TaskType[] = getTasksFromStorage();

export function countPendingTasks(): number {
  return tasks.filter((task) => !task.completed).length;
}
