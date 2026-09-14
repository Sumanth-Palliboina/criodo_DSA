Array.prototype.myReduce = function(callback, initialValue){
    let acc;
    let startIndex;

    if(initialValue !== undefined){
        acc = initialValue
        startIndex = 0
    } else {
        acc = this[0]
        startIndex = 1
    }

    for(let i=startIndex;i<this.length;i++){
        acc = callback(acc, this[i], i, this)
    }

    return acc
}

let nums =[1,2,3,4]
const total = nums.myReduce((acc, each)=> acc+each, 0)
console.log(total)

let todos = [
    {userId:1, todo: "Learn DSA", status: false},
    {userId:2, todo: "Learn React", status: false},
    {userId:1, todo: "Learn JS", status: false},
    {userId:3, todo: "Learn HTML", status: false},
    {userId:3, todo: "Learn CSS", status: false},
    {userId:4, todo: "Learn Angular", status: false}
]

const groups = todos.myReduce((acc, each) => {
    if(acc[each.userId] === undefined){
        acc[each.userId] = [each]
    } else {
        acc[each.userId].push(each)
    }
    return acc
}, {})

console.log(groups)