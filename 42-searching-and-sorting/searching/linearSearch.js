function indexOf(array, isMatch) {
    for (let i = 0; i < array.length; i++) {
        if (isMatch(array[i], i, array)) {
            return i;
        }  
    }
    return -1;
}

function findHobby(element, index, arr) {
    return element.hobby === "writing";
}

let x = [
    {name: "Jessica", hobby: "writing"},
    {name: "Cannon", hobby: "reading"},
    {name: "Chad", hobby: "not sleeping and thinking about 12 finger universe"},
]


console.log(indexOf(x, (element, index, arr) => element.name === "Chad" ));
console.log(indexOf(x, findHobby ));