let coding = ['javascript', 'python', 'ruby', 'swift']

let value = coding.forEach( (item) => {
    console.log(item)
})

console.log(value)
// Undefined

// ++++++++++++++++++++ Filter +++++++++++++++++++++

let arr = [1,2,3,4,5,6,7,8,9,10]

let nums = arr.filter( (num) => num > 4 )
console.log(nums)
// Filter is used to filter out the elements from the array based on the condition

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let nums = arr.filter( (num) => {
//     return num > 4 // here return is used as we start a scope { } so return is used to return the value
// } )
// console.log(nums)

const books = [
    {
        name: "To Kill a Mockingbird",
        genre: "Fiction",
        publish: 1960
    },
    {
        name: "1984",
        genre: "Classic",
        publish: 1949
    },
    {
        name: "The Great Gatsby",
        genre: "Classic",
        publish: 2004
    },
    {
        name: "The Catcher in the Rye",
        genre: "Classic",
        publish: 2001
    },
    {
        name: "Moby-Dick",
        genre: "Classic",
        publish: 1999
    }
];

let filter = books.filter( (bk) => {
    return bk.genre == 'Classic' && bk.publish >=2000
}) 
console.log(filter)

// +++++++++++++++++++++++ Map ++++++++++++++++++++++++++++++++++
// map cre


let array = [1,2,3,4,5,6,7,8,9,10]

let numbers = array.map((num) => num + 10)
console.log(numbers)