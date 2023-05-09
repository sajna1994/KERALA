
function validation(){
var fullname = document.getElementById('fullname').value;
var username = document.getElementById('username').value;
var email = document.getElementById('exampleInputEmail1').value;
var phone = document.getElementById('phone').value;
var password = document.getElementById('password').value;
var cpassword = document.getElementById('cpassword').value;

var namecheck = /^[A-Za-z. ]{3,30}$/ ;
var usercheck = /^[A-Za-z][A-Za-z0-9_]{4,29}$/ ;
var emailcheck = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9-])+.([a-z]+)(.[a-z]+)?$/ ;
var phonecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var passwordcheck = /^ (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/ ;



if(namecheck.test(fullname)){
    document.getElementById('nameerror').innerHTML = " ";
}else{
    document.getElementById('nameerror').innerHTML = "** Name is Invalid";
    return false;
}

if(usercheck.test(username)){
    document.getElementById('usererror').innerHTML = " ";
}else{
    document.getElementById('usererror').innerHTML = "** UserName is Invalid";
    return false;
}
if(emailcheck.test(email)){
    document.getElementById('emailerror').innerHTML = " ";
}else{
    document.getElementById('emailerror').innerHTML = "**Email is Invalid";
    return false;
}
if(phonecheck.test(phone)){
    document.getElementById('phoneerror').innerHTML = " ";
}else{
    document.getElementById('phoneerror').innerHTML = "** Phone Number is Invalid";
    return false;
}

// if(passwordcheck.test(password)){
//     document.getElementById('passworderror').innerHTML = " ";
// }else{
//     document.getElementById('passworderror').innerHTML = "**Password is Invalid";
//     return false;
// }


 

}
var is_visible = false;

function see()
{
    var input = document.getElementById("password");
    var see = document.getElementById("see");
    
    if(is_visible)
    {
        input.type = 'password';
        is_visible = false; 
        see.style.color='gray';
    }
    else
    {
        input.type = 'text';
        is_visible = true; 
        see.style.color='#262626';
    }
    
}

function check()
{
    var input = document.getElementById("password").value;
    
    input=input.trim();
    document.getElementById("password").value=input;
    document.getElementById("count").innerText="Length : " + input.length;
    if(input.length>=8)
    {
        document.getElementById("check0").style.color="green";
    }
    else
    {
       document.getElementById("check0").style.color="red"; 
    }
    
    if(input.match(/[a-z]/i))
    {
        document.getElementById("check1").style.color="green";
    }
    else
    {
       document.getElementById("check1").style.color="red"; 
    }
    
    if(input.match(/[0-9]/i))
    {
        document.getElementById("check2").style.color="green";
    }
    else
    {
       document.getElementById("check2").style.color="red"; 
    }
    
    if(input.match(/[A-Z]/i))
    {
        document.getElementById("check3").style.color="green";
    }
    else
    {
       document.getElementById("check3").style.color="red"; 
    }
    
    if(input.match(' '))
    {
        document.getElementById("check4").style.color="red";
    }
    else
    {
       document.getElementById("check4").style.color="green"; 
    }
    if(input.match(cpassword)){
        document.getElementById('cpassworderror').innerHTML = " ";
    }else{
         document.getElementById('cpassworderror').innerHTML = "**Password is not matching";
         return false;
     }
}
