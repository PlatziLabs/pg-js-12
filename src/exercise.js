export function runCode(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}
