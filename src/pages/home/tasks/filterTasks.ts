import { TaskType } from "../types";

export function filterTasks(tasks: TaskType[], filter: "all" | "pending" | "completed") {
  return tasks.filter(task => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  })
}