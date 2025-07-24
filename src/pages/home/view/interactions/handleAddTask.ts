import { getElement, getInputValue, clearInput } from "shared/utils";
import { states, isEditing } from "pages/home/state";
import { createTask } from "pages/home/tasks/";

export function handleAddTask() {
  if (isEditing()) return;

  const input = getElement<HTMLInputElement>("#task-input");
  if (!input) throw new Error("Input element not found...");

  const taskText = getInputValue(input);
  if (taskText === "") {
    alert("Digite uma tarefa...");
    return;
  }

  states.tasks.push(createTask(taskText));
  clearInput(input);
}
