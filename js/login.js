/* Global Variables */

/* Sign Up variables */
let userName=document.getElementById("name");
let userEmail=document.getElementById("email");
let userPassword=document.getElementById("password");
let signup=document.getElementById("signup-btn");

/* Login page variables */
let emailLogin=document.getElementById("emailLogin");
let passwordLogin=document.getElementById("passwordLogin");

let usersList=[];
let currentUsers=[];
currentUsers=JSON.parse(localStorage.getItem("user"));

let username;
/* End of Global Variables */



/* Create a new user */
function CreateUser(){
        let user={
            name:userName.value,
            email:userEmail.value,
            password:userPassword.value
        }
    
        usersList.push(user);
        console.log(usersList)
        localStorage.setItem("user",JSON.stringify(usersList));
        Reset();
}

/* End of create function */


/* Reset Function */
function Reset(){
    userName.value="";
    userEmail.value="";
    userPassword.value="";
}
/* End of Reset Function */


/* Login Function */
function login(){
    if(emailLogin.value =='' || passwordLogin.value =='')
    {
        document.getElementById("ErrorMessage").innerHTML="All inputs must be filled";
    }
    else{
        document.getElementById("ErrorMessage").innerHTML=" ";
        loginUser();


    }
}


function loginUser(){
    for(let i=0;i<currentUsers.length;i++)
    {
        if(emailLogin.value == currentUsers[i].email && passwordLogin.value == currentUsers[i].password){
            m=currentUsers[i].name;
            localStorage.setItem("namee",m)
            window.location.href="Welcome.html";

        }
        else{
            document.getElementById("ErrorMessage").innerHTML=" The email or password may be wrong ";
        }
    }
}


/* End of  Login Function */
