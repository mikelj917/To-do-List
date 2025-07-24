export function getElement<T extends Element = Element>(selector: string):T | null {
  return document.querySelector(`${selector}`);
}
