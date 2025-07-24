import { getElement } from "./getElement";

export function clearInput(el: HTMLInputElement | string): void {
  const input = typeof el === "string" ? getElement<HTMLInputElement>(el) : el;
  if (!input) throw new Error("Input element not found...");
  input.value = "";
}
