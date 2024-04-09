
//console.log("loging in here!");
//let button=document.querySelector(".button");
//let password= document.querySelector("#password");
//let email= document.querySelector(".email");
let loginForm= document.querySelector("#submit");
let pass= document.querySelector("#pass");
console.log(pass)
console.log(loginForm)
loginForm.addEventListener("submit", function (event){
    event.preventDefault();
    if(pass.value==""){
        alert("please Enter password");

    }
    else if(pass.value.length <= 6 ){
        //console.log(pass.value.name)
        window.alert("Please Password must not less 6 or greather 14 characters")
       //console.log(pass.value.length)
    }
    //else if(pass.value!==password.value){
    //    window.alert("Please Password must  be equal ")
   // }
    
    else {
        
        //window.history.back() 
        window.location.href='home.html'
    }
    
});
