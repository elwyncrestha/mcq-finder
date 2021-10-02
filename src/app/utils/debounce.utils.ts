export function debounce(func: { apply: (arg0: any, arg1: any) => void; }, timeout = 300) {
  // @ts-ignore
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args); }, timeout);
  };
}
