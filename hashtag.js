const textarea = document.getElementById('hashtagInput');
const btn = document.getElementById('generate');
const generatedHashtag = document.getElementById('genHashtag');
const hashtagField = document.getElementById('hashtags');
const clearAllBtn = document.getElementById('clearAll');

btn.addEventListener('click', () => {
  let value = textarea.value;
  let valueArray = value.split(' ');
  let newArray = [];
  for (let i = 0; i < valueArray.length; i++) {
    let letters = new String(valueArray[i]);
    let firstLetter;
    if (letters != '') firstLetter = letters[0].toUpperCase();
    let restOfLetters = letters.slice(1)
    newArray.push(`${firstLetter}${restOfLetters}`)
  }
  let hashtag = newArray.join('');
  
  (value.length >= 140 || value === '') ? hashtagField.innerHTML += `${false} \n` :
    hashtagField.innerHTML += `#${hashtag} \n`;
  
  //textarea.value = '';
})