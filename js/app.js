
const number=document.querySelectorAll(".numbers");
const operator=document.querySelectorAll(".operators");
const previousValue=document.querySelector("#previous-value");
const currentValue=document.querySelector("#current-value");
const allClear=document.querySelector("#allClear");


let num1=[],num2=[];
var isFirstNumber=true;
let firstNumber=0,secondNumber=0,whichOp='',ans=0;
let isOperator=true,isAns=false;

//for get the number from user store
number.forEach(num => {
  num.addEventListener('click',()=>{
    if(isOperator){
        //it's can't set two . like this(1.1.1)
        if(num1.includes('.')){

            if(num.dataset.d==='.'){
                return;
            }
            else{
            num1.push(num.dataset.d);
            previousValue.textContent=num1.join('');
            
            }
        } 
        else{
        num1.push(num.dataset.d);
        previousValue.textContent=num1.join("");
        }  
    
    }
    else{
        if(num2.includes('.')){

            if(num.dataset.d==='.'){
                return
            }
            else{
               
                num2.push(num.dataset.d);
                previousValue.textContent=num2.join('');
               
            }
        }
    else{
        num2.push(num.dataset.d);
    }
    display(num2.join(''));
    }
  
  }); 
});


//it's display the value in the screen
function display(n){
    if(n==='='){
        return;
    }
    previousValue.textContent=n;
    saveNumber();
}

//it's store the value num1 and num2
function saveNumber(){
    if(isFirstNumber){
        firstNumber=parseFloat(num1.join(''));
        }
        secondNumber=parseFloat(num2.join(''));
}

//it's get the operator from user 
operator.forEach(op =>{
    op.addEventListener('click',()=>{
        if(op.dataset.operation==='='){
            if(firstNumber===0 && secondNumber===0){
                currentValue.textContent=0;
                return;
            }
                operate(firstNumber,whichOp,secondNumber);
                isFirstNumber=false;
                num2=[];
                whichOp='';
                previousValue.textContent='Ans';
                return; 
        }
        //it can't set two operator
        if(whichOp==='+'||whichOp==='*'||whichOp==='-'||whichOp==='/'||whichOp==='%'){
            operate(firstNumber,whichOp,secondNumber);
            isFirstNumber=false;
            num2=[];
            whichOp='';
            previousValue.textContent='Ans';
            return;
        }
       whichOp=op.dataset.operation;
       display(op.dataset.operation);
        isOperator=false;
        isFirstNumber=true;
    });
});



function operate(firstNumber,whichOp,secondNumber){
        if(isAns){
            firstNumber=ans; //it's store ans into firstValue after clicking equal
            
        }
        if(whichOp==='+'){
            ans=firstNumber+secondNumber;
            currentValue.textContent=Math.round(ans * 1000) / 1000;
            isAns=true;  
        }
         if(whichOp==='-'){
            ans=firstNumber-secondNumber;
            currentValue.textContent=Math.round(ans * 1000) / 1000;
            isAns=true;
           
        }
         if(whichOp==='*'){
            ans=firstNumber*secondNumber;
            currentValue.textContent=Math.round(ans * 1000) / 1000;
            isAns=true;
        }
         if(whichOp==='/'){
            if(secondNumber==0){
                alert("don’t let it crash your calculator!");
                num1=[];
                num2=[];
                whichOp='';
                isOperator=true;
                isAns=false;
                value=[];
                currentValue.textContent="0";
                previousValue.textContent='';
            }
            else{

                ans=firstNumber/secondNumber;
                currentValue.textContent=Math.round(ans * 1000) / 1000;
                isAns=true;
                
            } 
            
        }
        if(whichOp==='%') {
            ans=firstNumber%secondNumber;
            currentValue.textContent=Math.round(ans * 1000) / 1000;
            isAns=true;
        }

        if(whichOp==='^'){
            ans=Math.pow(firstNumber,secondNumber);
            currentValue.textContent=Math.round(ans*1000)/1000;
            isAns=true;
        }

 }
    
allClear.onclick =()=>{
    num1=[];
    num2=[];
    whichOp='';
    isOperator=true;
    isAns=false;
    value=[];
    currentValue.textContent="0";
    previousValue.textContent='';
};

