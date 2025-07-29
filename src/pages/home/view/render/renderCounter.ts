import { getElement } from "shared/utils";

export function renderCounter(count: number) {
  const element = getElement<HTMLElement>("#counter")
  if(element) element.innerHTML = count.toString();
}