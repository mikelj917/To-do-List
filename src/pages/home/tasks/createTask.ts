import { generateID } from "shared/utils";

export function createTask(taskText: string) {
  return {
    id: generateID(),
    task: taskText,
    completed: false,
  }
}