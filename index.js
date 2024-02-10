// the text input
const inputBox = document.querySelector('input');

// the translate button
const translateButton = document.querySelector('button');

// when the button is clicked, we want to run the translation
translateButton.onclick = translate;

// the output display
const outputBox = document.querySelector('#output')


// Takes the value of the input as text, and returns a string
function translate() {
  // turn the input into all lowercase to match the vowels below
  let input = inputBox.value.toLowerCase();

  // if the user did not enter anything, we have nothing to translate
  if(input === '') {
    // let the user know, and return so the rest of the function does not run
    return window.alert('Please enter some text to translate.')
  }

  const vowels = ['a','e','i','o','u']

  let resultArray = [];

  for (let i = 0; i < input.length; i++){
    currentCharacter = input[i];

    if(currentCharacter === 'e' || currentCharacter === 'u'){
      resultArray.push(currentCharacter);
    }

    for(let j = 0; j < vowels.length; j++){
      currentVowel = vowels[j];

      if(currentCharacter === currentVowel){
        resultArray.push(currentCharacter);
      }
    }
  }

  // turn the array into one capitalized string
  let resultString = resultArray.join('').toUpperCase();

  // clear the input box
  inputBox.value = '';

  // change the text inside the output display to the result
  outputBox.innerHTML = resultString;
}
