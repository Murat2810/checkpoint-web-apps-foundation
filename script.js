const btn = document.getElementById("button");
let input = document.querySelectorAll(".input");
console.log(input)

let chckNmbr = document.querySelector("#chckNmbr");


btn.addEventListener("click",  function (){
    
    //Show-Hide Password
    if (btn.textContent === "Show Password"){
    btn.textContent="Hide Password";
    for (let i=0; i<2;i++){
        input[i].type="text";
    }
    } else {
        btn.textContent = "Show Password";
      for (let i=0; i<2;i++){
        input[i].type="password";
    }
    }
});

input[1].addEventListener("keyup",  validatedPassword);
input[0].addEventListener("keyup",  validatedPassword);

function checkEqual(){
    console.log(input[0].value, input[1].value);
    if(input[0].value === input[1].value){
        queryEqual.innerText="✅";
    } else {queryEqual.innerText="❌";}
}

function validatedPassword (){
    checkEqual();
    checkLowerCase();
    checkUpperCase();
    checkNumber();
    checkCharacter();
}

function checkLowerCase(){
    let regexp = /[a-z]/;
    let lowerCase = regexp.test(input[0].value);
    if (lowerCase){
        checkLower.innerText="✅";
    } else {checkLower.innerText="❌";}
}
function checkUpperCase(){
    let regexp = /[A-Z]/;
    let upperCase = input[0].value.match(regexp);
    if (upperCase){
        checkUpper.innerText="✅";
    } else {checkUpper.innerText="❌";}
}
function checkNumber(){
    let regexp = /[0-9]/;
    let numbers = regexp.test(input[0].value);
    if (numbers){
        chckNmbr.innerText="✅";
    } else {chckNmbr.innerText="❌";}
}
function checkCharacter(){
    let character = input[0].value.length;
    if (character >= 10) {
        checkLength.innerText="✅";
    } else {checkLength.innerText="❌";}
}

