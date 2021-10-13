const getRandomWord = () => {
  const words = ['Pfizer', 'Apple', 'Tesla', 'Bitcoin'];
  const index = Math.floor(Math.random() * words.length);
  return words[index].toLowerCase();
};

const getMaskedWord = (word, matches) => {
  let masked = '';
  for (let i = 0; i < word.length; i++) {
    if (matches.includes(word.charAt(i))) {
      masked = masked + word.charAt(i);
    } else {
      masked = masked + '*';
    }
  }
  return masked;
};

const checkInput = (input, word) => {
  const showAlert = () => alert('The input is invalid, try again!!!');

  if (typeof input !== 'string') {
    showAlert();
    return 'invalid';
  }

  input = input.toLowerCase();

  if (input === word) {
    return 'oneshot';
  }

  if (input.length !== 1) {
    showAlert();
    return 'invalid';
  }

  const charCode = input.charCodeAt();

  if (charCode < 97 || charCode > 122) {
    showAlert();
    return 'invalid';
  }

  if (word.includes(input)) {
    return 'match';
  }

  return 'mismatch';
};

const hangManGame = () => {
  let numOfGuesses = 10;
  let matches = [];

  console.log(`#    #   ##   #    #  ####  #    #   ##   #    #
#    #  #  #  ##   # #    # ##  ##  #  #  ##   #
###### #    # # #  # #      # ## # #    # # #  #
#    # ###### #  # # #  ### #    # ###### #  # # 
#    # #    # #   ## #    # #    # #    # #   ##
#    # #    # #    #  ####  #    # #    # #    # `);

  const word = getRandomWord();

  while (numOfGuesses > 0) {
    const maskedWord = getMaskedWord(word, matches);

    console.log('You have ' + numOfGuesses + ' guesses');
    console.log('The word is:');
    console.log(maskedWord);

    if (maskedWord === word) {
      break;
    }

    const input = prompt('What is your guess?');

    const validation = checkInput(input, word);

    if (validation === 'oneshot') {
      console.log('Wow You are good!!!');
      console.log('The word is:\n' + word);
      break;
    }

    if (validation === 'mismatch') {
      numOfGuesses = numOfGuesses - 1;
    }

    if (validation === 'match') {
      matches.push(input);
    }
  }
};
