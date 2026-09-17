/**
 * Problem Description
You are given an array arr. You need to sort the array arr using quick sort.
Note :- You should sort the array arr using quick sort only.

Input format
First line will contain a single integer N.
Second line will contain N space separated integers representing array elements.

Output format
Output the array space separated in a single line or simply return a sorted array.

Sample Input 1
5 4 3 1 2 5

Sample Output 1
1 2 3 4 5

Explanation
Taking an array like [5, 4, 3, 1, 2], Quick Sort begins by choosing a pivot, often the last element, and partitions the array by rearranging elements on either side of the pivot.
Recursive calls are then applied to the subarrays. For instance, in the given array, the pivot 2 is chosen, leading to the partitioned array [1, 2, 3, 5, 4].
Further recursive calls and pivot selections result in a sorted array [1, 2, 3, 4, 5].

Constraints
1 <= N <= 100000
1 <= arr[i] <= 10000000
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.replace(/\s+/g, " ").trim();
    });
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function readIntArr() {
    let str = readLine().split(" ");
    return str.map(x => parseInt(x, 10));
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

function quickSortRecursive(arr, left, right) {
    if (left >= right) return;
    let partition_index = partition(arr, left, right);
    quickSortRecursive(arr, left, partition_index - 1);
    quickSortRecursive(arr, partition_index + 1, right);
}

function quickSort(n, arr) {
    quickSortRecursive(arr, 0, n - 1);
    return arr;
}

function main() {
    let n = parseInt(readLine(), 10);
    let arr = readIntArr();
    let result = quickSort(n, arr);
    console.log(...result);
}
