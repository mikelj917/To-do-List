export function getElement<T extends Element = Element>(selector: string):T {
  const element = document.querySelector(selector)
  if(!element) throw new Error(`Element not found for selector: "${selector}"`)
  return element as T;
}

export function getElementList<T extends Element = Element>(selector: string):NodeListOf<T> {
  return document.querySelectorAll(selector);
}
