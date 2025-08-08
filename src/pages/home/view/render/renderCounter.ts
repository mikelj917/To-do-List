export function renderCounter(count: number, element: HTMLElement) {
  if (element) element.innerHTML = count.toString();
}
