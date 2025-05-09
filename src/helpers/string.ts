/**
 * Check if string start with http:// or https://
 * @param str
 * @return boolean - string start with http:// or https://
 */
export function startsWithHttp(str: string) {
  return !str || /^https?:\/\//.test(str);
}

/**
 * First char upper case.
 * @param str
 * @return string
 */
export function ucfirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
