export function getElement<T extends Element = Element>(selector: string):T | null {
  return document.querySelector(selector);
}

export function getAllElements<T extends Element = Element>(selector: string):NodeListOf<T> {
  return document.querySelectorAll(selector);
}
