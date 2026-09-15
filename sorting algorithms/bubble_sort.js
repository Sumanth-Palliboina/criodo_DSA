/**
 * repeatedly swaps adjacent elements if they are in the wrong order. 
 * It performs multiple passes through the array, and 
 * in each pass, the largest unsorted element moves to its correct position at the end
 * 
 */

function bubbleSort(arr){
    let n = arr.length
    for(let i=0;i<n;i++){
        console.log("iteration: ", i)
        for(let j=0;j<=n-2-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([24,34,25,12,22,11,90]))
console.log(bubbleSort([1,2,3,4,5]))
/**
 * $ node bubble_sort.js 
iteration:  0
iteration:  1
iteration:  2
iteration:  3
iteration:  4
iteration:  5
iteration:  6
[
  11, 12, 22, 24,
  25, 34, 90
]
iteration:  0
iteration:  1
iteration:  2
iteration:  3
iteration:  4
[ 1, 2, 3, 4, 5 ]
 */

/**
 * Optimized bubble sort using early exit if no swap happend
 */
function optimizedBubbleSort(arr){
    let n = arr.length
    let swapped;
    for(let i=0;i<n;i++){
        console.log("iteration: ", i)
        swapped = false
        for(let j=0;j<=n-2-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true
            }
        }
        //if no swap happend
        if(!swapped) break
    }
    return arr
}
console.log(optimizedBubbleSort([1,2,3,4,5]))
/**
 * iteration:  0
[ 1, 2, 3, 4, 5 ]
 */











