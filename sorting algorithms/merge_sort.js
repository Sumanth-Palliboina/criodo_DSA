/**
 * Merge sort is a popular sorting algorithm known for its efficiency and stability. 
 * It follows the Divide and Conquer approach. 
 * It works by recursively dividing the input array into two halves, 
 * recursively sorting the two halves and finally merging them back together to obtain the sorted array.
 */

function mergeSort(n, arr) {
    //implement this function
    mergeSortRecursive(arr, 0, n-1)
    return arr
}

function mergeSortRecursive(arr, left, right){
    if(left>=right){
        return
    }
    let mid = Math.floor((left+right)/2)
    mergeSortRecursive(arr, left, mid)
    mergeSortRecursive(arr, mid+1, right)
    //backtracking starts here
    //left...mid is one sorted array
    //mid+1...right is one sorted array
    //left...right is one sorted array
    merge(arr, left, mid, right)
}

function merge(arr, left, mid, right){
    let arr1 = [], arr2=[]
    for(let i=left;i<=mid;i++){
        arr1.push(arr[i])
    }
    for(let i=mid+1;i<=right;i++){
        arr2.push(arr[i])
    }
    let n1=arr1.length, n2=arr2.length
    let idx1=0, idx2=0, k=left
    while(idx1<n1 && idx2<n2){
        if(arr1[idx1]<=arr2[idx2]){
            arr[k] = arr1[idx1]
            idx1++
        } else {
            arr[k] = arr2[idx2]
            idx2++
        }
        k++
    }

    while(idx1<n1){
        arr[k] = arr1[idx1]
        idx1++
        k++
    }
    while(idx2<n2){
        arr[k] = arr2[idx2]
        idx2++
        k++
    }
}


console.log(mergeSort(5, [12,8,3,0,7]))  //[0,3,7,8,12]