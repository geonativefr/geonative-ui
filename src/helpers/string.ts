export function startsWithHttp(value: string) {
  return !value || /^https?:\/\//.test(value);
}
