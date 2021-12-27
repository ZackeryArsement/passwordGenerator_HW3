// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  //Empty password 
  var passwordText = "";

  //List of desired password content
  var passwordContent = [];

function generatePassword(){

  //Arrays for password content

  var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","<",">","?",":",";",",",".","/","-","+","="];
  var lowercase = "qwertyuiopasdfghjklzxcvbnm";
  var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";

  //Array booleans to decide password content
  var useUpper=true;
  var useLower=true;
  var useChar=true;

  //Length of password
  var passwordLength=10;
  
  //Create passwordContent array
  if(useUpper){
    passwordContent.push(uppercase);
  }
  if(useLower){
    passwordContent.push(lowercase);
  }
  if(useChar){
    passwordContent.push(specialCharacters);
  }
  //Create password

  for(i=0; i<passwordLength; i++)
  {
    //Pick a random array to add a content value to the password
    var currentPasswordContentArray = passwordContent[Math.floor(Math.random()*passwordContent.length)];

    //Pick a random character from the randomly picked array to add to password value
    var currentPasswordContentChar = currentPasswordContentArray[Math.floor(Math.random()*currentPasswordContentArray.length)];

    passwordText += (currentPasswordContentChar);
  }
  alert("Your new password is: "+passwordText);
}

//Make sure the password contains each desired type of character and if it doesn't then add the missing char
function checkPasswordComponents(){

  //Count the amount of times each content array was used
  var upperCount;
  var lowerCount;
  var charCount;

  for(var currentContent in passwordContent){
    if(currentContent = uppercase){
      upperCount++;
    }
    else if(currentContent = lowercase){
      lowerCount++;
    }
    else{
      charCount++;
    }
  }

  console.log(upperCount);
  console.log(lowerCount);
  console.log(charCount);
  //Check to see if each desired content was used
}
generatePassword();
console.log(passwordText);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
