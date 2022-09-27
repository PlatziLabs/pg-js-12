export function runCode(callback) {
  window.setTimeout(() => {
    callback();
  }, 2000);
}
