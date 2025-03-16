/* 
HTML element Variables Section
*/
const textInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const result = document.getElementById("result");

/*
Function Section
*/

/*
  Name: Function palindrome
  Args: None
  OverView: this function intially fetchs user input value and check if there is a value that
  is not Empty. 
  Special case. If the user enter single alphanumeric value. We can to a quick comparsion
  instead of having to clean input and checking if it a palindrome.
*/
function palindrome() {
  let isPalindrome = true;
  let inputString = textInput.value;
  if (!inputString) {
    alert("Please input a value");
  } else if (inputString.length === 1 && inputString.match(/[A-Za-z0-9]/g)) {
    result.innerText = `${textInput.value} is a palindrome.`;
  } else {
    let regex = /[^A-Za-z0-9]/g;
    let cleanInputString = inputString.replace(regex, "");
    let loweredCleanString = cleanInputString.toLowerCase();
    console.log(loweredCleanString.length);
    for (let i = 0, j = loweredCleanString.length - 1; i < j; i++, j--) {
      if (loweredCleanString[i] !== loweredCleanString[j]) {
        isPalindrome = false;
      }
    }
    if (isPalindrome) {
      result.innerText = `${textInput.value} is a palindrome.`;
    } else {
      result.innerText = `${textInput.value} is not a palindrome.`;
    }
  }
}

/*
Binding Section
*/
submitButton.addEventListener("click", palindrome);
