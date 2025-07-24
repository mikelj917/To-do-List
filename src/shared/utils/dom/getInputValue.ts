import { getElement } from "./getElement";

export function getInputValue(el: HTMLInputElement | string): string {
  const input = typeof el === "string" ? getElement<HTMLInputElement>(el) : el;
  if (!input) throw new Error("Input element not found...");
  return input.value.trim();
}
