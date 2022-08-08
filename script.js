const btn = document.getElementById("button");
let input = document.querySelectorAll(".input");
console.log(input)

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

input[1].addEventListener("keypress",  checkEqual ());

function checkEqual(){
    if(input[0].value === input[1].value){
        console.log("✅")
} else {console.log("❌")}
}

