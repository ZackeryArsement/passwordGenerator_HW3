// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays for password content
var specialCharacters = ["~","!","@","#","$","%","^","&","*","(",")","<",">","?",":",";",",",".","/","-","+","="];
var lowercase = Array.from("qwertyuiopasdfghjklzxcvbnm");
var uppercase = Array.from("QWERTYUIOPASDFGHJKLZXCVBNM");

var password;

var useUpper;
var useLower;
var useChar;

//Number of characters from each character type
var upperCount = 0;
var lowerCount  = 0;
var charCount = 0;

// Write password to the #password input
function writePassword() {
  createLength();
  InitializeVariables();
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Empty password 
var passwordText = "";

//List of desired password content
var passwordContent = [];

//Establish the length of the password... between 8 and 128
function createLength(){
  //Length of password
  passwordLength = prompt("Please select a password length between 8 and 128");

  if(passwordLength < 8 || passwordLength > 128){
    createLength();  
  }
}

//Establish character types used in the password
function InitializeVariables(){
  //Reset all key variables and arrays
  passwordContent = [];
  useUpper = false;
  useLower = false;
  useChar = false;

  //Array booleans to decide password content
  useUpper = confirm("Would you like uppercase letters in your password?");
  useLower = confirm("Would you like lowercase letters in your password?");

  if(!useUpper && !useLower){
    useChar = true;
  }
  else{
    useChar = confirm("Would you like special characters in your password?");
  }
}

//Create the password using the established length and characters types
function generatePassword(){
  //clear out old password
  password = [];
  passwordContent = [];

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

    password += currentPasswordContentChar;
  }

  //Count the amount of times each content array was used
  for(i=0; i<password.length; i++){
    if(uppercase.includes(password[i])){
      upperCount++;
    }
    else if(lowercase.includes(password[i])){
      lowerCount++;
    }
    else{
      charCount++;
    }
  }

  //If the password is missing any desired components then re-generate the password
  if(upperCount = 0 && useUpper){
    generatePassword();
    console.log('failed');
  }
  else if(lowerCount = 0 && useLower){
    generatePassword();
    console.log('failed');
  }
  else if(charCount = 0 && useChar){
    generatePassword();
    console.log('failed');
  }

  return password;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
