import { getElement, getInputValue, clearInput } from "shared/utils";
import { addTaskToState, isEditing } from "pages/home/state";
import { renderTasks } from "../render/renderTasks";

export function handleAddTask() {
  if (isEditing()) return;

  const taskInput = getElement<HTMLInputElement>("#task-input");
  if (!taskInput) throw new Error("Input element not found...");

  const taskText = getInputValue(taskInput);
  if (taskText === "") {
    alert("Digite uma tarefa...");
    return;
  }

  addTaskToState(taskText);
  clearInput(taskInput);
  renderTasks();
}
