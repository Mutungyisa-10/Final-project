const ffocus = () =>{
    let userid = document.signup.fullName;
    return true;
}
  
  /* Defining a method called allLetter with parameter(fullName) and declaring a variable called leters which sets
  a condition of values entered to be alphabets ony and not numbers*/
  function allLetter(userid) {
      var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
      if (userid.value.match(letters)) {
        userid.style.border = '2px solid green'
          return true;
      }
      else {
          // alert('Name must have alphabet characters only');
          document.getElementById('p1').innerText = "Full Name must have alphabet characters only";
          fullName.style.border = '2px solid red'
          fullName.focus();
          return false;
      }
  }

  /* Defining a method called allLetterRefName with parameter(refreesname) and declaring a variable called leters which sets
  a condition of values entered to be alphabets ony and not numbers*/
  function allLetterlastName(lastName) {
      var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
      if (lastName.value.match(letters)) {
          lastName.style.border = '2px solid green'
          return true;
      }
      else {
          // alert('Name must have alphabet characters only');
          document.getElementById('p5').innerText = "Refrees Name must have alphabet characters only";
          lastName.style.border = '2px solid red'
          lastName.focus();
          return false;//
      }
  }
  // function validateForm() {
  
  //   var email = document.signup.email;
  //   const valEmail =
  //     /^[-!#$%&'+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'+\/0-9=?A-Z^_a-z`{|}~])@[a-zA-Z0-9](-\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  //   if (email.value.match(valEmail)) {
     
  //     document.getElementById("input-text").style.border = "2px solid green";
  //     return true;
  //   } else {
  //     document.getElementById("vm").innerText =
  //       "Email must be a valid email address";
  //     return false;
   
  //   }
  
 // }
  // he length if the customer nin is empty or is between a given range and if the condition is met return 
   //true otherwise false*/
 
   function uid(min, max) {
    if (nin.value.length == 0 || nin.value.length < min || nin.value.length > max) {
        // alert('Nin should be between 3 to 14 characters')
        document.getElementById('p3').innerText = "Nin should be 14 characters";
        nin.style.border = '2px solid red'
        return false
    } else {
        nin.style.border = '2px solid green'
        return true
    }
}
   function uid() {
    if (nin.value.length == 0) {
        // alert('Nin should be 14 characters')
        document.getElementById('p3').innerText = "Nin should be 14 characters";
        nin.style.border = '2px solid red'
        return false
    } else {
        nin.style.border = '2px solid green'
        return true
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


   //
  
  if (allLetter(userid)) {

  }
  if (allLetterlastName(lastName)) {
  
  }
  if (validateForm()) {
  
  }

  if (uid(3,14)) {
  }
