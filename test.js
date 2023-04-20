function add(num1, num2){
  // console.log("hi")
  return num1 + num2
}


const addArrow = (num1,num2, operation)=> {
  console.log('hi');
  if(operation === 'add'){
    return num1 + num2
  }else if(operation === "substract"){
    return num1-num2
  }
}


console.log(addArrow(4,7, 'add'))


const array = [3,6,9]
let total = 0;
array.forEach(element=>{
  console.log("element", element)
  // console.log("index", idx)
  total+= element
})

console.log(total)