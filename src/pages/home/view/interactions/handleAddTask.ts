import { getElement, getInputValue, clearInput } from "shared/utils";
import { tasks, getEditing } from "pages/home/state";
import { createTask } from "pages/home/tasks/";
import { renderTasks } from "../render/renderTasks";

export function handleAddTask() {
  if (getEditing()) return;

  const input = getElement<HTMLInputElement>("#task-input");
  if (!input) throw new Error("Input element not found...");

  const taskText = getInputValue(input);
  if (taskText === "") {
    alert("Digite uma tarefa...");
    return;
  }

  tasks.push(createTask(taskText));
  renderTasks();
  clearInput(input);
}
