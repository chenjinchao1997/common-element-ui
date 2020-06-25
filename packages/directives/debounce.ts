export default function<T extends unknown[]>(
  func: (...args: T) => unknown,
  wait = 0
) {
  let timeout: number | null;
  return function(this: unknown, ...args: T) {
    if (timeout) window.clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
