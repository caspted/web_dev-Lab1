import * as readLineSync from 'readline-sync'

while(true) {
  const input = readLineSync.question('Who owes you and how much?');

  console.log('The input is', input);

  if(input == 'walang utang') {
    break;
  }
}

