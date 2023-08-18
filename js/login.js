// step -1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
// steep -2: get the email address inside the email input field
// always remember to use .value to get text from an input field
const emailField = document.getElementById('user-email');
const email = emailField.value ;
console.log(email);
// step -3: get password
//3.a: set id on the html element 
// 3.b: get the element
const passwordField = document.getElementById('user-password');
const password = passwordField.value;
console.log(email, password)

// DANGER: DO NOT VERIFY email password on the client side
// step-4: verify email and password and check weather valid or not
if(email === 'sontaan@baap.com' && password == 'secret'){
window.location.href = 'bank.html';
}else{
    alert('Invalid user');
}




})