function add (a,b) {
	return (a+b);
};

function subtract(a,b) {
  return a-b;
};

function divide(a,b){
    return a/b;
}

const sum = (nums)=> nums.reduce((total, num)=> total+= num);

const multiply = (...args) => args.reduce((total,arg)=> total *= arg);

const power = (a,b)=> {
	let total=1;
  for(let i = 0; i<b; i++){
    total *= a;
  }
  return total; 
};

const factorial = function(a) {
  let multplyNums =[];
  for(i=a; i>0; i--){
    multplyNums.push(i);
  }
  return(
  multplyNums.reduce((result,num)=> result *= num,1));
};

function operate(ops, a, b){
    // const stringOperator = String(operator);
    // console.log("operator:"+ops);

    switch (ops) {
        case '+':
            console.log("entered");
            return add(a,b);
        case '-':
            console.log(subtract(a,b));
            return subtract(a,b);
        case 'x':
            console.log(multiply(a,b));
            return multiply(a,b);
        case '⁒':
            console.log(divide(a,b));
            return divide(a,b);
        case '!':
            console.log(factorial(a,b));
            return factorial(a);
        case '^':
            console.log(power(a,b));
            return power(a,b);    
        default:
            return 'Invalid operator';

    }
}

let addOperator = '+';
let subtOperator = '-';
let multOperator = 'x';
let divOperator = '⁒';
let factOperator = '!';
let powOperator = '^';

let lcd = document.getElementById("lcd");
let firstNum, secondNum, myOp;

// lcd.textContent = 'Hello';

let buttons = document.querySelectorAll(".digit");
buttons.forEach((button)=> {
    button.addEventListener('click', function (e) {
        lcd.textContent += e.target.textContent;
    });
});

let operators = document.querySelectorAll(".operator");
operators.forEach((operator)=> {
    operator.addEventListener('click', function (e) {
        firstNum = lcd.textContent; 
        myOp = e.target.textContent;
        // console.log("operator1: " + myOp);
        lcd.textContent = "";
    });
});

let eval = document.querySelector(".eval");
eval.addEventListener('click', function (e) {
    console.log("operator3: " + myOp);

        secondNum = lcd.textContent; 
        lcd.textContent = operate(myOp,Number(firstNum),Number(secondNum));
        setTimeout(function(){
            lcd.textContent = "";
        }, 3000);
        
        // console.log(myOp);
        // console.log(firstNum);
        // console.log(secondNum);
});


let clear = document.querySelector(".clear");
clear.addEventListener('click', function (e) {
    lcd.textContent = "";
    
});