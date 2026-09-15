/**
 * sorts by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element.
 * 
 * Selection Sort selects the minimum element and places it in the correct position with fewer swaps, while Bubble Sort repeatedly swaps adjacent elements to sort the array.
 */

function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){ //selection before n-1 because to find min from rest array
        let minIdx = i  //current
        for(let j=i+1;j<n;j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        //[current, min] = [min, current]
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
    }
    return arr
}

console.log(selectionSort([64, 25, 12, 22, 11]))