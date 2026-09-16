/**
 * Problem Description
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Input format
A 32 bit integer N

Output format
A single integer

Sample Input 1
12

Sample Output 1
21

Explanation
There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

Constraints
0<= N <= 10^9



input: 12

Digits: [1, 2]

Pivot: 1 (since 1 < 2)

Successor: 2

Swap → [2, 1]

Reverse suffix (only one digit) → [2, 1]  
Output: 21

Input: 21

Digits: [2, 1]

No pivot found → return -1.
 * 
 */

function nextGreaterPermutation(n){
    let digits = n.toString().split("")
    let i=digits.length-2
    while(i>=0 && digits[i] >= digits[i+1]){
        i--
    }
    if(i<0) return -1  //descending order of array, otherwise pivot

    //find successor
    let j = digits.length - 1
    while(digits[j]<=digits[i]){
        j--
    }

    //swap pivot and successor
    [digits[j], digits[i]] = [digits[i], digits[j]]

    let left = i+1, right=digits.length - 1
    while(left<right){
        [digits[left], digits[right]] = [digits[right], digits[left]]
        left++
        right--
    }

    let result = parseInt(digits.join("", 16))
    return result > 1e9 ? -1 : result  //constraint

}

console.log(nextGreaterPermutation(12)); // 21
console.log(nextGreaterPermutation(21)); // -1