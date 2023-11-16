/**
 * 주어진 배열이 null 또는 undefined가 아니고, 최소한 하나 이상의 요소를 가지고 있는 경우 true를 반환합니다.
 *
 * @template T 배열에 포함된 요소의 타입입니다.
 * @param {(T[] | null | undefined)} arr 확인할 배열입니다.
 * @returns {boolean} 배열이 null 또는 undefined가 아니고, 최소한 하나 이상의 요소를 가지고 있는 경우 true를 반환합니다. 그 외의 경우 false를 반환합니다.
 */
export function hasItems<T>(arr: T[] | null | undefined): boolean {
  return Array.isArray(arr) && arr.length > 0;
}
