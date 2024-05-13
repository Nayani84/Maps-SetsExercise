// Quick Question #1
// What does the following code return?
new Set([1, 1, 2, 2, 3, 4])  //Set(4) {1, 2, 3, 4}



// Quick Question #2
// What does the following code return?
[...new Set("referee")].join("") //'ref'



// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);   // Map(1) {Array(3) => true}
m.set([1, 2, 3], false);   //Map(1) {Array(3) => false}
// Map(2) {Array(3) => true, Array(3) => false}



// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = array => new Set(array).size !== array.length;



// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelMap = new Map();
    for (let letter of str) {
        let lowerLetter = letter.toLowerCase();
        if (vowels.includes(lowerLetter)) {
            if (vowelMap.has(lowerLetter)) {
                vowelMap.set(lowerLetter, vowelMap.get(lowerLetter) + 1);
            } else {
                vowelMap.set(lowerLetter, 1);
            }
        }
    }
    return vowelMap;
}
// vowelCount('awesome');   // Map(3) {'a' => 1, 'e' => 2, 'o' => 1}
// vowelCount('Colt');   // Map(1) {'o' => 1}


