export default function throttle<T extends unknown[]>(
  func: (...args: T) => unknown,
  wait = 0
) {
  let timeout: number | null;
  return function(this: unknown, ...args: T) {
    if (!timeout) {
      func.apply(this, args);
      timeout = window.setTimeout(() => {
        timeout = null;
      }, wait);
    }
  };
}
