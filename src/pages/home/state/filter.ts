import type { TaskType } from "../types";
import { signal } from "shared";

export const filter = signal<"all" | "completed" | "pending">("all");

export function filterTasks(
  tasks: TaskType[],
  filter: "all" | "pending" | "completed"
) {
  return tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
  });
}
