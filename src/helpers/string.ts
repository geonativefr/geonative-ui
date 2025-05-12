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


/**
 * Generate a random key.
 * @param length
 * @return string
 */
export function generateRandomKey(length = 10) {
  return Math.random().toString(36).substring(2, 2 + length);
}