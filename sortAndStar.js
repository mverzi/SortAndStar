/**
 * This function returns the first item of a sorted array of strings with '***' between each letter
 * @param {*} s The list of strings
 * @returns First item from the sorted list with '***' between each letter
 */
function twoSort(s) {
    return s.sort()[0].split('').join('***')
  }