import { getElement, getInputValue, clearInput } from "shared/utils";
import { addTaskToState, isEditing } from "pages/home/state";
import { updateUI } from "../render/updateUI";

export function handleAddTask() {
  if (isEditing()) return;

  const taskInput = getElement<HTMLInputElement>("#task-input");
  const taskText = getInputValue(taskInput);
  if (taskText === "") {
    alert("Digite uma tarefa...");
    return;
  }

  addTaskToState(taskText);
  clearInput(taskInput);
  updateUI();
}
