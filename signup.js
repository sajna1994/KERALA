   
            // if(passwordcheck.test(password)){
            //     document.getElementById('passworderror').innerHTML = " ";
            // }else{
            //     document.getElementById('passworderror').innerHTML = "**Password is Invalid";
            //     return false;
             
           
         
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

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
function validate(){
    var email = document.getElementById("exampleInputEmail1");
    // var email = document.getElementById('exampleInputEmail1').value;
    var char = document.getElementById("emailerror");
    var phone = document.getElementById('phone').value;
    var error = document.getElementById("phoneerror");
  var regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  var phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(email.value.length ==""){
    char.innerHTML = "fields cannot be empty";
    char.style.color ="red";
    return false;
  }
  
  if(regex.test(email)){
   char.innerHTML = " ";
   char.style.color ="red";
   return false;
  }
//  if(phone.value.length ==""){
//     error.innerHTML = "fields cannot be empty";
//     error.style.color ="red";
//     return false;
//   }
  
  if(phonereg.test(phone)){
   error.innerHTML = " ";
   error.style.color ="red";
   return false;
  }else{
   
   return true;
  }
  }
// function validate(){
// var fullname = document.getElementById('fullname').value;
// var username = document.getElementById('username').value;
// var email = document.getElementById('exampleInputEmail1').value;
// var phone = document.getElementById('phone').value;
// var password = document.getElementById('password').value;
// var cpassword = document.getElementById('cpassword').value;

// var namecheck = /^[A-Za-z. ]{3,30}$/ ;
// var usercheck = /^[A-Za-z][A-Za-z0-9_]{4,29}$/ ;
// var emailcheck = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9-])+.([a-z]+)(.[a-z]+)?$/ ;
// var phonecheck = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// var passwordcheck = /^ (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})$/ ;



// if(namecheck.test(fullname)){
//   document.getElementById('nameerror').innerHTML = " ";
// }else{
//   document.getElementById('nameerror').innerHTML = "** Name is Invalid";
//   return false;
// }

// if(usercheck.test(username)){
//   document.getElementById('usererror').innerHTML = " ";
// }else{
//   document.getElementById('usererror').innerHTML = "** UserName is Invalid";
//   return false;
// }
// if(emailcheck.test(email)){
//   document.getElementById('emailerror').innerHTML = " ";
// }else{
//   document.getElementById('emailerror').innerHTML = "**Email is Invalid";
//   return false;
// }
// if(phonecheck.test(phone)){
//   document.getElementById('phoneerror').innerHTML = " ";
// }else{
//   document.getElementById('phoneerror').innerHTML = "** Phone Number is Invalid";
//   return false;
// }
// }
   