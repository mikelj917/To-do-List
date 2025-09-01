let activeEffect: (() => void) | null = null;
const effectQueue = new Set<() => void>();
let isFlushing: boolean = false;

function scheduleRun(fn: () => void) {
  effectQueue.add(fn);
  if (!isFlushing) {
    isFlushing = true;
    Promise.resolve().then(() => {
      try {
        Array.from(effectQueue).forEach(effect => effect())
      } finally {
        effectQueue.clear();
        isFlushing = false;
      }
    });
  }
}

export function signal<T>(initialValue: T) {
  let value: T = initialValue;
  const subscribers = new Set<() => void>();

  return {
    get() {
      if (activeEffect) subscribers.add(activeEffect);
      return value;
    },
    set(newValue: T) {
      value = newValue
      Array.from(subscribers).forEach(sub => scheduleRun(sub))
    }
  };
}

export function effect(fn: () => void) {
  const wrapped = () => {
    activeEffect = wrapped
    fn()
    activeEffect = null;
  }
  wrapped()
}
