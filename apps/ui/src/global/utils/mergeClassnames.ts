export default (...args: (string | undefined)[]): string =>
  args.filter(Boolean).join(' ');
