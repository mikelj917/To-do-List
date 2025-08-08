import { getElement } from "./getElement";

export function clearElement(el: HTMLElement | string): void {
  const element = typeof el === "string" ? getElement<HTMLElement>(el) : el;
  if (!element) throw new Error("HTML element not found...");
  element.innerHTML = "";
}