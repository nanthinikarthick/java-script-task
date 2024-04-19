//  var signin = document.getElementById("form_container2")
 var login = document.getElementById("form_container1")

// signin.style.display = "none"

// function fun1() {
//     login.style.display = "none"
//     signin.style.display = "block"
// }
// function fun2() {
//     login.style.display = "block"
//     signin.style.display = "none"
// }

// var input1 = document.getElementById("username1")
// var para1 = document.getElementById("para1")
// var lineBreak = document.getElementById("break")

// input1.addEventListener("input", () => {
//     var value = input1.value
//     var size = value + ""
    
//     if((size.includes("@"))){
//         para1.style.display = "none"
//         lineBreak.style.display = "block"
//     }
//     else{
//         para1.style.display = "block"
//         lineBreak.style.display = "none"
//     }
// }) 
// <--nb bn b--->

function validateForm(){
    var returnval=true;
    clearErrors();
    var name=document.forms['myform']["Username"].value;
    if(name.length<5){
        seterror("name","Length of name is too short");
        returnval=false;
    
    }

    if(name.length==0){
        seterror("name","Enter your name");
        returnval=false;
    }
    var email=document.forms['myform']["email"].value;
    if(email.length>20){
    seterror("email","enter valid email");
    returnval=false;
    }
    var mobile=document.forms['myform']["mobile"].value;
    if(mobile.length!=10){
    seterror("mobile","enter valid phone number");
    returnval=false;
    }
    var pass=document.forms['myform']["pass"].value;
    if(pass.length<6){
    
    seterror("pass","Password must be atleast 6 charecters");
    returnval=false;
    }
   

return returnval;
}
var para2 = document.getElementById("para2")
var lineBreak1 = document.getElementById("break1")

input2.addEventListener("input", () => {
    var value = input2.value
    var size = value + ""
    
    for(i='0'; i<='9'; i++){
        if(!(size.includes(i))){
            para2.style.display = "none"
            lineBreak1.style.display = "block"
        }
        else{
            para2.style.display = "block"
            lineBreak1.style.display = "none"
            break
        }
    }

})















var input2 = document.getElementById("name")
var para2 = document.getElementById("para2")
var lineBreak1 = document.getElementById("break1")

input2.addEventListener("input", () => {
    var value = input2.value
    var size = value + ""
    
    for(i='0'; i<='9'; i++){
        if(!(size.includes(i))){
            para2.style.display = "none"
            lineBreak1.style.display = "block"
        }
        else{
            para2.style.display = "block"
            lineBreak1.style.display = "none"
            break
        }
    }

})

var input3 = document.getElementById("username2")
var para3 = document.getElementById("para3")
var lineBreak2 = document.getElementById("break2")

input3.addEventListener("input", () => {
    var value = input3.value
    var size = value + ""
    
    if((size.includes("@"))){
        para3.style.display = "none"
        lineBreak2.style.display = "block"
    }
    else{
        para3.style.display = "block"
        lineBreak2.style.display = "none"
    }
})

