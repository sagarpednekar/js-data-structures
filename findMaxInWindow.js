/***
 * Problme Statement
 *  Given an array of integers, find the maximum value in a window.
 * 
 */




/**
 * 
 * function to find max element from the given array 
 * @param {*} arr 
 * @param {*} currentMax 
 */

let max = (arr, currentMax) => {
  arr.forEach((element) => {
    if (element > currentMax)
      currentMax = element
  })
  return currentMax
}

/**
 * 
 * 
 * 
 * @param {*} arr 
 * @param {*} window_size 
 */

let findMaxSlidingWindow = function (arr, window_size) {
  let result = [];
  let currentMax = arr[0]
  let n = arr.length;
  // To sift window-  o(n-w)
  for (let i = 0; i <= (n - window_size); i++) {
    let subArray = arr.slice(i, (window_size + i));  
    result.push(max(subArray, currentMax)) // O(w)
  }

  return result;
};


/**
 * 
 * Complexity - O(n-w) w-> window size
 * 
 * Test Results :
 * findMaxSlidingWindow([1,2,3,4,3,2,1,2,5],4) - output - 4,4,4,4,3,5	
 * findMaxSlidingWindow([1,2,3,4,3,2,1,2,5],3) - output - 3,4,4,4,3,2,5	
 * 
 */