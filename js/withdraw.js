/**
 * 1.add event handler with the withdraw button
 * 2. get the withdraw amount from the withdraw input field
 * 2.5 also make sure to convert the input into a number by using parseFloat
 * 3.Get previous withdraw total
 * 4. calculate total withdraw amount
 * 4.5.set total withdraw amount
 * 5. get the previous balance total
 * 6.calculate new balance total
 * 6.5 set the new balance total
 * 
 * 7. clear the withdraw input field 
 * 
 */

//step 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
//step 2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//step 3
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
console.log(previousWithdrawTotal)


//step 5
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
console.log(previousBalanceTotal)

//step 7
withdrawField.value = '';

//validation karar jonno step 4 k ai conditional ar niche nie jete hobe and
// withdraw jodi balance ar besi hoi tahole alert die code return karbe r step 4 jodi upore thkae tahole
// retunr karar agei oi codetuku run karbe 
// withdrawField clear ta function ar upore nie aste hobe
if(newWithdrawAmount > previousBalanceTotal){
    alert("You don't have enough balance");
    return;
  
}

//step 4
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;

//step 6
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

})