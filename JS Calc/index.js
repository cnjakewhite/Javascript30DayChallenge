let arr1 = []
let str1 = ""
let num1 = 0
let num2 = 0
let firstNum = false
let op;
let ans;


const addNum = (arr, str, num) => {
    arr.push(num)
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        str += arr[i]
        console.log(`str is ${str}`)
    }
    if(firstNum === false) {
        num1 = parseFloat(str)
        console.log(`num1: ${num1}`)
    } else {
        num2 = parseFloat(str)
        console.log(`num1: ${num1} num2: ${num2}`)
    }
    document.querySelector('.cell1').innerHTML = `${str}`
}

const newNum = (o) => {
    arr1.length = 0
    firstNum = true
    op = o;
}

const answer = () => {
    if(op == '+' && num2 != 0){
        ans = num1 + num2
    } else if(op =='-' && num2 != 0){
        ans = num1 - num2
    } else if(op == '/' && num2 != 0){
        ans = num1 / num2
    } else if(op == '*' && num2 != 0){
        ans = num1 * num2
    } else {
        ans = num1
    }
    console.log(ans)
    num1 = 0;
    num2 = 0;
    arr1.length = 0;
    firstNum = false;
    document.querySelector('.cell1').innerHTML = `${ans}`
}

const clearAll = () => {
    str1 = ""
    num1 = 0;
    num2 = 0;
    arr1.length = 0;
    firstNum = false;
    console.log(`${num1}, ${num2}, ${arr1}, ${firstNum}`)

    document.querySelector('.cell1').innerHTML = `${str1}`
}

const clear2 = () => {
    num2 = 0;
    arr1.length = 0;

    console.log(`${num1}, ${num2}, ${arr1}, ${firstNum}`)
}